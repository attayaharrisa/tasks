import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const [dhValue, setDhValue] = useState<number>(10);

export function Doubler(): JSX.Element {
    return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
}

export function Halver(): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}
