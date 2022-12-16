import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [response, setResponse] = useState<string>("❌");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
        if (event.target.value === expectedAnswer) {
            setResponse("✔️");
        } else {
            setResponse("❌");
        }
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Label></Form.Label>
            <Form.Control value={answer} onChange={updateAnswer}></Form.Control>
            <div>{response}</div>
        </div>
    );
}
