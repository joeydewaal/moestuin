/**
 * @fileoverview gRPC-Web generated client stub for greeter
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.21.12
// source: greeter.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as greeter_pb from './greeter_pb'; // proto import: "greeter.proto"


export class GreeterClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorGreet = new grpcWeb.MethodDescriptor(
    '/greeter.Greeter/Greet',
    grpcWeb.MethodType.UNARY,
    greeter_pb.GreetRequest,
    greeter_pb.GreetResponse,
    (request: greeter_pb.GreetRequest) => {
      return request.serializeBinary();
    },
    greeter_pb.GreetResponse.deserializeBinary
  );

  greet(
    request: greeter_pb.GreetRequest,
    metadata?: grpcWeb.Metadata | null): Promise<greeter_pb.GreetResponse>;

  greet(
    request: greeter_pb.GreetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: greeter_pb.GreetResponse) => void): grpcWeb.ClientReadableStream<greeter_pb.GreetResponse>;

  greet(
    request: greeter_pb.GreetRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: greeter_pb.GreetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/greeter.Greeter/Greet',
        request,
        metadata || {},
        this.methodDescriptorGreet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/greeter.Greeter/Greet',
    request,
    metadata || {},
    this.methodDescriptorGreet);
  }

  methodDescriptorEcho = new grpcWeb.MethodDescriptor(
    '/greeter.Greeter/Echo',
    grpcWeb.MethodType.UNARY,
    greeter_pb.EchoRequest,
    greeter_pb.EchoResponse,
    (request: greeter_pb.EchoRequest) => {
      return request.serializeBinary();
    },
    greeter_pb.EchoResponse.deserializeBinary
  );

  echo(
    request: greeter_pb.EchoRequest,
    metadata?: grpcWeb.Metadata | null): Promise<greeter_pb.EchoResponse>;

  echo(
    request: greeter_pb.EchoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: greeter_pb.EchoResponse) => void): grpcWeb.ClientReadableStream<greeter_pb.EchoResponse>;

  echo(
    request: greeter_pb.EchoRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: greeter_pb.EchoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/greeter.Greeter/Echo',
        request,
        metadata || {},
        this.methodDescriptorEcho,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/greeter.Greeter/Echo',
    request,
    metadata || {},
    this.methodDescriptorEcho);
  }

}

