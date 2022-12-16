import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function changeNameHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateStudentType(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check type="switch" onChange={updateMode}></Form.Check>
            {editMode === true && (
                <div>
                    <Form.Control
                        value={name}
                        onChange={changeNameHandler}
                    ></Form.Control>
                    <Form.Check
                        type="checkbox"
                        checked={isStudent}
                        onChange={updateStudentType}
                    ></Form.Check>
                </div>
            )}
            {editMode === false && (
                <div>
                    {name + (isStudent ? " is a student" : " is not a student")}
                </div>
            )}
        </div>
    );
}
