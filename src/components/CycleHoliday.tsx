import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const holidaysByDate = ["🎆", "☘️", "🥚", "🦃", "🎄"];
    const holidaysByAlpha = ["🎄", "🥚", "🎆", "☘️", "🦃"];
    const [currentHoliday, setHoliday] = useState<string>(holidaysByDate[0]);
    const [nextHoliday, setNextHoliday] = useState<string>(holidaysByDate[1]);
    function cycleAlpha(): void {
        setHoliday(nextHoliday);
        let nextIndex = holidaysByAlpha.findIndex(
            (i: string): boolean => nextHoliday === i
        );
        nextIndex += 1;
        if (nextIndex === 5) {
            nextIndex = 0;
        }
        setNextHoliday(holidaysByAlpha[nextIndex]);
    }
    function cycleYear(): void {
        setHoliday(nextHoliday);
        let nextIndex = holidaysByDate.findIndex(
            (i: string): boolean => nextHoliday === i
        );
        nextIndex += 1;
        if (nextIndex === 5) {
            nextIndex = 0;
        }
        setNextHoliday(holidaysByDate[nextIndex]);
    }
    return (
        <span>
            <div>
                <Button onClick={cycleAlpha}>Advance by Alphabet</Button>
                <Button onClick={cycleYear}>Advance by Year</Button>
            </div>
            <div>
                {"Holiday:"} {currentHoliday} {"->"}
                {nextHoliday}
            </div>
        </span>
    );
}

//Favorite Holidays:
//New Years 🎆
//Easter 🥚
//St Patricks Day ☘️
//Thanksgiving 🦃
//Christmas 🎄
