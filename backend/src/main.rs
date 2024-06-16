use proto::{
    greeter_server::{Greeter, GreeterServer},
    GreetResponse,
};
use tonic::{transport::Server, Response};
use tonic_web::GrpcWebLayer;

mod proto {
    tonic::include_proto!("greeter");

    pub(crate) const FILE_DISCRIPTOR_SET: &[u8] =
        tonic::include_file_descriptor_set!("greeter_descriptor");
}

#[derive(Debug, Default)]
struct GreeterService {}

#[tonic::async_trait]
impl Greeter for GreeterService {
    async fn greet(
        &self,
        _request: tonic::Request<proto::GreetRequest>,
    ) -> std::result::Result<tonic::Response<proto::GreetResponse>, tonic::Status> {
        println!("Hello from rust");
        Ok(Response::new(GreetResponse {
            response: "Hello world".into(),
        }))
    }

    async fn echo(
        &self,
        request: tonic::Request<proto::EchoRequest>,
    ) -> std::result::Result<tonic::Response<proto::EchoResponse>, tonic::Status> {
        println!("Hello from rust");
        Ok(Response::new(proto::EchoResponse {
            message: request.into_inner().message,
        }))
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let addr = "0.0.0.0:3030".parse()?;

    let greeter = GreeterService::default();

    let reflection_service = tonic_reflection::server::Builder::configure()
        .register_encoded_file_descriptor_set(proto::FILE_DISCRIPTOR_SET)
        .build()?;

    Server::builder()
        .accept_http1(true)
        .layer(tower_http::cors::CorsLayer::permissive())
        .layer(GrpcWebLayer::new())
        .add_service(reflection_service)
        .add_service(GreeterServer::new(greeter))
        .serve(addr)
        .await?;

    Ok(())
}
