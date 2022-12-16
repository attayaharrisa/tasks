import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    const [response, setResponse] = useState<string>("❌");

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
        if (event.target.value === expectedAnswer) {
            setResponse("✔️");
        } else {
            setResponse("❌");
        }
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Select value={answer} onChange={updateAnswer}>
                {options.map((option: string) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Select>
            <div>{response}</div>
        </div>
    );
}
