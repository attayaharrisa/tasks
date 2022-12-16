import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [incrementAmount, updateIncrement] = useState<string>("");
    const [numTries, updateTries] = useState<number>(3);
    function inChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        updateIncrement(event.target.value);
    }
    function gainButtonHandler() {
        console.log("gain was clicked!");
        if (Number(incrementAmount)) {
            console.log("Its a number!");
            updateTries(numTries + Number(incrementAmount));
        }
    }
    function useButtonHandler() {
        console.log("use button was clicked");
        if (numTries !== 0) {
            updateTries(numTries - 1);
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>{numTries}</div>
            <Form.Control
                value={incrementAmount}
                onChange={inChangeHandler}
                placeholder={"Increment Amount"}
            ></Form.Control>

            <button disabled={numTries <= 0} onClick={useButtonHandler}>
                use
            </button>
            <button onClick={gainButtonHandler}>gain</button>
        </div>
    );
}
