import { GreeterClient } from "@/generated/GreeterServiceClientPb";
import { EchoRequest } from "@/generated/greeter_pb";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Index() {

    const [text, setText] = useState("");

    const echoRequest = async () => {

        const client = new GreeterClient("http://192.168.0.21:3030", null, null);
        let request = new EchoRequest();
        request.setMessage("testing!!!!");

        try {
            let response = await client.echo(request);
            setText(response.getMessage());
        } catch (e) {
            alert(e)
            return
        }

    }
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Server Response: {text}</Text>

            <Pressable onPress={echoRequest}>
                <Text>
                    test
                </Text>
            </Pressable>
            <Link href="/test" className="text-blue-200 text-3xl">To test page</Link>
        </View>
    );
}
