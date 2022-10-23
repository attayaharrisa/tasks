import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setType] = useState<QuestionType>(
        "short_answer_question"
    );
    function flipType(): void {
        setType(
            questionType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    }
    return (
        <span>
            <Button onClick={flipType}>Change Type</Button>
            {questionType == "short_answer_question" && (
                <div>{"Short Answer"}</div>
            )}
            {questionType == "multiple_choice_question" && (
                <div>{"Multiple Choice"}</div>
            )}
        </span>
    );
}
