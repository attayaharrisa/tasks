import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [currentColor, setCurrentColor] = useState<string>("red");
    const differentColors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "black",
        "purple",
        "white"
    ];
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setCurrentColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {differentColors.map((color: string) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    name="colorSelect"
                    checked={currentColor === color}
                    onChange={updateColor}
                    value={color}
                ></Form.Check>
            ))}
            <div>
                <span>You have chosen </span>
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: currentColor }}
                >
                    {currentColor}
                </span>
            </div>
        </div>
    );
}
