use std::error::Error;
use std::{env, path::PathBuf};

fn main() -> Result<(), Box<dyn Error>> {
    let out_dir = PathBuf::from(env::var("OUT_DIR").unwrap());

    tonic_build::configure()
        .file_descriptor_set_path(out_dir.join("greeter_descriptor.bin"))
        .compile(&["../protos/greeter.proto"], &["../protos"])?;

    tonic_build::compile_protos("../protos/greeter.proto")?;

    Ok(())
}