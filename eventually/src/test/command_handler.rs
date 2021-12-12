//! Module exposing a test [Scenario] type to write Domain [Command]s
//! test cases using the [given-then-when canvas](https://www.agilealliance.org/glossary/gwt/).

use std::{fmt::Debug, hash::Hash};

use crate::{
    command, command::Command, event, event::Store, message, test, test::store::EventStoreExt,
};

/// A test scenario that can be used to test a [Command] [Handler][command::Handler]
/// using a [given-then-when canvas](https://www.agilealliance.org/glossary/gwt/) approach.
pub struct Scenario;

impl Scenario {
    /// Sets the precondition state of the system for the [Scenario], which
    /// is expressed by a list of Domain [Event]s in an Event-sourced system.
    #[must_use]
    pub fn given<Id, Evt>(events: Vec<event::Persisted<Id, Evt>>) -> ScenarioGiven<Id, Evt>
    where
        Evt: message::Payload,
    {
        ScenarioGiven { given: events }
    }

    /// Specifies the [Command] to test in the [Scenario], in the peculiar case
    /// of having a clean system.
    ///
    /// This is a shortcut for:
    /// ```text
    /// Scenario::given(vec![]).when(...)
    /// ```
    #[must_use]
    pub fn when<Id, Evt, Cmd>(command: Command<Cmd>) -> ScenarioWhen<Id, Evt, Cmd>
    where
        Evt: message::Payload,
        Cmd: message::Payload,
    {
        ScenarioWhen {
            given: Vec::default(),
            when: command,
        }
    }
}

#[doc(hidden)]
pub struct ScenarioGiven<Id, Evt>
where
    Evt: message::Payload,
{
    given: Vec<event::Persisted<Id, Evt>>,
}

impl<Id, Evt> ScenarioGiven<Id, Evt>
where
    Evt: message::Payload,
{
    /// Specifies the [Command] to test in the [Scenario].
    #[must_use]
    pub fn when<Cmd>(self, command: Command<Cmd>) -> ScenarioWhen<Id, Evt, Cmd>
    where
        Cmd: message::Payload,
    {
        ScenarioWhen {
            given: self.given,
            when: command,
        }
    }
}

#[doc(hidden)]
pub struct ScenarioWhen<Id, Evt, Cmd>
where
    Evt: message::Payload,
    Cmd: message::Payload,
{
    given: Vec<event::Persisted<Id, Evt>>,
    when: Command<Cmd>,
}

impl<Id, Evt, Cmd> ScenarioWhen<Id, Evt, Cmd>
where
    Evt: message::Payload,
    Cmd: message::Payload,
{
    /// Sets the expectation on the result of the [Scenario] to be positive
    /// and produce a specified list of Domain [Event]s.
    #[must_use]
    pub fn then(self, events: Vec<event::Persisted<Id, Evt>>) -> ScenarioThen<Id, Evt, Cmd> {
        ScenarioThen {
            given: self.given,
            when: self.when,
            case: ScenarioThenCase::Produces(events),
        }
    }

    /// Sets the expectation on the result of the [Scenario] to return an error.
    #[must_use]
    pub fn then_fails(self) -> ScenarioThen<Id, Evt, Cmd> {
        ScenarioThen {
            given: self.given,
            when: self.when,
            case: ScenarioThenCase::Fails,
        }
    }
}

enum ScenarioThenCase<Id, Evt>
where
    Evt: message::Payload,
{
    Produces(Vec<event::Persisted<Id, Evt>>),
    Fails,
}

#[doc(hidden)]
pub struct ScenarioThen<Id, Evt, Cmd>
where
    Evt: message::Payload,
    Cmd: message::Payload,
{
    given: Vec<event::Persisted<Id, Evt>>,
    when: Command<Cmd>,
    case: ScenarioThenCase<Id, Evt>,
}

impl<Id, Evt, Cmd> ScenarioThen<Id, Evt, Cmd>
where
    Id: Clone + Eq + Hash + Send + Sync + Debug,
    Evt: message::Payload + Clone + PartialEq + Send + Sync + Debug,
    Cmd: message::Payload + Send + Sync,
{
    /// Executes the whole [Scenario] by constructing a Command [Handler]
    /// with the provided closure function and running the specified assertions.
    ///
    /// # Panics
    ///
    /// The method panics if the assertion fails.
    pub async fn assert_on<F, H>(self, handler_factory: F)
    where
        F: Fn(test::store::Tracking<test::store::InMemory<Id, Evt>>) -> H,
        H: command::Handler<Cmd>,
    {
        let event_store = test::store::InMemory::<Id, Evt>::default();
        let tracking_event_store = event_store.clone().with_recorded_events_tracking();

        for event in self.given {
            event_store
                .append(
                    event.stream_id,
                    event::StreamVersionExpected::MustBe(event.version - 1),
                    vec![event.payload],
                )
                .await
                .expect("domain event in 'given' should be inserted in the event store");
        }

        let handler = handler_factory(tracking_event_store.clone());
        let result = handler.handle(self.when).await;

        match self.case {
            ScenarioThenCase::Produces(events) => {
                let recorded_events = tracking_event_store.recorded_events();
                assert_eq!(events, recorded_events);
            }
            ScenarioThenCase::Fails => assert!(result.is_err()),
        };
    }
}
