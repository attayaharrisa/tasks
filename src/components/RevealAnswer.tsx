import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const value = "42";
    const [visible, setVisible] = useState<boolean>(false);
    function flipVisibility(): void {
        setVisible(!visible);
    }
    return (
        <span>
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {visible && <div>{value}</div>}
        </span>
    );
}

//You will need a state to handle whether the text is visible.
//There is a button labelled Reveal Answer that inverts the state.
//The text 42 is not initially visible.
//When the button is clicked, the text 42 should be visible.
