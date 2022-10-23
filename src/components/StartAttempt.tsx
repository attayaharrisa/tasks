import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setAttempts] = useState<number>(4);
    const [progressState, setProgress] = useState<string>("not_in_progress");
    function startQuiz(): void {
        setAttempts(numAttempts - 1);
        setProgress("in_progress");
    }
    function stopQuiz(): void {
        setProgress("not_in_progress");
    }
    function mulligan(): void {
        setAttempts(numAttempts + 1);
    }

    return (
        <span>
            <Button
                onClick={startQuiz}
                disabled={progressState == "in_progress" || numAttempts == 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={stopQuiz}
                disabled={progressState == "not_in_progress"}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={mulligan}
                disabled={progressState == "in_progress"}
            >
                mulligan
            </Button>
            <div>{numAttempts}</div>
        </span>
    );
}
