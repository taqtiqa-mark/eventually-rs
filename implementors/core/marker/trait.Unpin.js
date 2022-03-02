(function() {var implementors = {};
implementors["eventually"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"eventually/aggregate/struct.Context.html\" title=\"struct eventually::aggregate::Context\">Context</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as <a class=\"trait\" href=\"eventually/aggregate/trait.Aggregate.html\" title=\"trait eventually::aggregate::Aggregate\">Aggregate</a>&gt;::<a class=\"associatedtype\" href=\"eventually/aggregate/trait.Aggregate.html#associatedtype.Event\" title=\"type eventually::aggregate::Aggregate::Event\">Event</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["eventually::aggregate::Context"]},{"text":"impl&lt;E, SE, AE&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"eventually/aggregate/enum.EventSourcedRepositoryError.html\" title=\"enum eventually::aggregate::EventSourcedRepositoryError\">EventSourcedRepositoryError</a>&lt;E, SE, AE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AE: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;SE: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["eventually::aggregate::EventSourcedRepositoryError"]},{"text":"impl&lt;T, R, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"eventually/aggregate/struct.EventSourcedRepository.html\" title=\"struct eventually::aggregate::EventSourcedRepository\">EventSourcedRepository</a>&lt;T, R, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["eventually::aggregate::EventSourcedRepository"]},{"text":"impl&lt;Id, Evt&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"eventually/event/struct.Persisted.html\" title=\"struct eventually::event::Persisted\">Persisted</a>&lt;Id, Evt&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Evt: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["eventually::event::Persisted"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"eventually/event/enum.VersionSelect.html\" title=\"enum eventually::event::VersionSelect\">VersionSelect</a>","synthetic":true,"types":["eventually::event::VersionSelect"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"eventually/event/enum.StreamVersionExpected.html\" title=\"enum eventually::event::StreamVersionExpected\">StreamVersionExpected</a>","synthetic":true,"types":["eventually::event::StreamVersionExpected"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"eventually/message/struct.Message.html\" title=\"struct eventually::message::Message\">Message</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["eventually::message::Message"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"eventually/metadata/enum.Value.html\" title=\"enum eventually::metadata::Value\">Value</a>","synthetic":true,"types":["eventually::metadata::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"eventually/metadata/struct.Metadata.html\" title=\"struct eventually::metadata::Metadata\">Metadata</a>","synthetic":true,"types":["eventually::metadata::Metadata"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"eventually/test/command_handler/struct.Scenario.html\" title=\"struct eventually::test::command_handler::Scenario\">Scenario</a>","synthetic":true,"types":["eventually::test::command_handler::Scenario"]},{"text":"impl&lt;Id, Evt&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"eventually/test/store/struct.InMemory.html\" title=\"struct eventually::test::store::InMemory\">InMemory</a>&lt;Id, Evt&gt;","synthetic":true,"types":["eventually::test::store::InMemory"]},{"text":"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"eventually/test/store/struct.Tracking.html\" title=\"struct eventually::test::store::Tracking\">Tracking</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["eventually::test::store::Tracking"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"eventually/version/struct.ConflictError.html\" title=\"struct eventually::version::ConflictError\">ConflictError</a>","synthetic":true,"types":["eventually::version::ConflictError"]}];
implementors["eventually_postgres"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"eventually_postgres/store/enum.Error.html\" title=\"enum eventually_postgres::store::Error\">Error</a>","synthetic":true,"types":["eventually_postgres::store::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"eventually_postgres/store/struct.EventStoreBuilder.html\" title=\"struct eventually_postgres::store::EventStoreBuilder\">EventStoreBuilder</a>","synthetic":true,"types":["eventually_postgres::store::EventStoreBuilder"]},{"text":"impl&lt;Tls&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"eventually_postgres/store/struct.EventStoreBuilderMigrated.html\" title=\"struct eventually_postgres::store::EventStoreBuilderMigrated\">EventStoreBuilderMigrated</a>&lt;Tls&gt;","synthetic":true,"types":["eventually_postgres::store::EventStoreBuilderMigrated"]},{"text":"impl&lt;Id, Event, Tls&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"eventually_postgres/store/struct.EventStore.html\" title=\"struct eventually_postgres::store::EventStore\">EventStore</a>&lt;Id, Event, Tls&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["eventually_postgres::store::EventStore"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"eventually_postgres/subscriber/enum.SubscriberError.html\" title=\"enum eventually_postgres::subscriber::SubscriberError\">SubscriberError</a>","synthetic":true,"types":["eventually_postgres::subscriber::SubscriberError"]},{"text":"impl&lt;Id, Event&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"eventually_postgres/subscriber/struct.EventSubscriber.html\" title=\"struct eventually_postgres::subscriber::EventSubscriber\">EventSubscriber</a>&lt;Id, Event&gt;","synthetic":true,"types":["eventually_postgres::subscriber::EventSubscriber"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"eventually_postgres/subscription/enum.Error.html\" title=\"enum eventually_postgres::subscription::Error\">Error</a>","synthetic":true,"types":["eventually_postgres::subscription::Error"]},{"text":"impl&lt;SourceId, Event, Tls&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"eventually_postgres/subscription/struct.PersistentBuilder.html\" title=\"struct eventually_postgres::subscription::PersistentBuilder\">PersistentBuilder</a>&lt;SourceId, Event, Tls&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["eventually_postgres::subscription::PersistentBuilder"]},{"text":"impl&lt;SourceId, Event, Tls&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"eventually_postgres/subscription/struct.Persistent.html\" title=\"struct eventually_postgres::subscription::Persistent\">Persistent</a>&lt;SourceId, Event, Tls&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["eventually_postgres::subscription::Persistent"]}];
implementors["eventually_redis"] = [{"text":"impl&lt;Id, Event&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"eventually_redis/struct.EventStore.html\" title=\"struct eventually_redis::EventStore\">EventStore</a>&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["eventually_redis::store::EventStore"]},{"text":"impl&lt;Id, Event&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"eventually_redis/struct.EventSubscriber.html\" title=\"struct eventually_redis::EventSubscriber\">EventSubscriber</a>&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["eventually_redis::subscriber::EventSubscriber"]},{"text":"impl&lt;Id, Event&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"eventually_redis/struct.PersistentSubscription.html\" title=\"struct eventually_redis::PersistentSubscription\">PersistentSubscription</a>&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,&nbsp;</span>","synthetic":true,"types":["eventually_redis::subscription::PersistentSubscription"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"eventually_redis/struct.Builder.html\" title=\"struct eventually_redis::Builder\">Builder</a>","synthetic":true,"types":["eventually_redis::Builder"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.59.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"eventually_redis/struct.BuilderWithSourceName.html\" title=\"struct eventually_redis::BuilderWithSourceName\">BuilderWithSourceName</a>","synthetic":true,"types":["eventually_redis::BuilderWithSourceName"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()