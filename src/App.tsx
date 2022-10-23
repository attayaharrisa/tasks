import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import computer from "./computer.png";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
<<<<<<< HEAD
                <h1>This is a header for HTML and CSS Task</h1>
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                <img src={computer} alt="This is where a picture should be" />
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Anthony Attaya-Harris Hello World.
            </p>
            <ol>
                <li>This is the first element</li>
                <li>This is the seconds element</li>
                <li>This is the third element</li>
                <li>This is the fourth element</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First Column
                        <div
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "red"
                            }}
                        >
                            This is a red box
                        </div>
                    </Col>
                    <Col>
                        Second Column. With more stuff
                        <div
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "red"
                            }}
                        >
                            This is a red box
                        </div>
                    </Col>
                </Row>
            </Container>
=======
                UM COS420 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
