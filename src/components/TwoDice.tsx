import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dieLeft, setDieLeft] = useState<number>(1);
    const [dieRight, setDieRight] = useState<number>(4);
    function rollRightDie(): void {
        setDieRight(d6);
    }
    function rollLeftDie(): void {
        setDieLeft(d6);
    }

    return (
        <span>
            <div>
                <Button onClick={rollLeftDie}>Roll Left</Button>
                <Button onClick={rollRightDie}>Roll Right</Button>
            </div>
            <span data-testid="left-die">Die Left: {dieLeft}</span>
            <span data-testid="right-die">Die Right: {dieRight}</span>
            {dieLeft == dieRight && dieLeft == 1 && <div>{"Lose"}</div>}
            {dieLeft == dieRight && dieLeft != 1 && <div>{"Win"}</div>}
        </span>
    );
}