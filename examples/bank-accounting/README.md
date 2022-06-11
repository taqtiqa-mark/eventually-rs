# Example: Bank Accounting application

In this folder you can find an example Event-sourced application for a generic (and simple) Bank Accounting bounded context, implemented using the `eventually` crate.

This example application should be useful for people interested in:
1. Having a possible reference as to model a Domain Layer using the crate,
2. Starting out from a reference package and code structure,
3. Modeling Business Processes using Projections/Event Subscriptions.

## Setup a client UI

1. Go to 'examples/bank-accounting'
2. Execute `cargo run`
3. Start another shell, execute `podman run -it --rm --network="host" -v $(pwd)/proto:/protos fullstorydev/grpcui -plaintext localhost:10437`
4. See the gRPCui web page at `http://0.0.0.0:8080/`
5. Test the functionality via this client....
