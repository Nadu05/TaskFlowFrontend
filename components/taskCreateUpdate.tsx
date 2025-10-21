"use client"
import React, { useState } from "react";

//add task and edit task form

enum Priority {
    Low = "Low",
    Medium = "Medium",
    High = "High",
}

export default function AddTask({
                                    onClose,
                                }:
                                    {onClose: () => void})
{
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [allocatedTime, setAllocatedTime] = useState("");
    const [priority, setPriority] = useState(Priority.Low);




    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const taskData = {
            taskTitle : taskTitle,
            taskDescription: taskDescription,
            dueDate: dueDate,
            allocatedTime: allocatedTime,

        };
        //priority: priority didn't work
        //define the api call here
        console.log("Submitting Task:", taskData);

    };


    return (
        <form className="add-task" onSubmit={handleSubmit}>
            <div className="taskTitle">

                <label htmlFor="taskTitle">Task Title:</label>
                <input
                    id="taskTitle"
                    type="text"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    placeholder="Enter task title"
                    className="input"
                    required
                />
            </div>

            <div className="taskDescription">
                <label htmlFor="taskDescription">Task Description:</label>
                <textarea
                    id="taskDescription"
                    name="taskDescription"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    placeholder="Enter task description"
                    className="input"
                />
            </div>

            <div className="dueDate">
                <label htmlFor="dueDate">Due Date:</label>
                <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="input"
                />
            </div>

            <div className="allocatedTime">
                <label htmlFor="allocatedTime">Allocated Time:</label>
                <input
                    type="time"
                    id="allocatedTime"
                    name="allocatedTime"
                    value={allocatedTime}
                    onChange={(e) => setAllocatedTime(e.target.value)}
                    className="input"
                />
            </div>

            <div className="priority">
                <label htmlFor="priority">Priority</label>
                <select
                    id="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as Priority)}
                >
                    <option value={Priority.Low}>Low</option>
                    <option value={Priority.Medium}>Medium</option>
                    <option value={Priority.High}>High</option>
                </select>
            </div>


            <button type="submit" onClick={
                onClose
            } >Add Task</button>
        </form>
    );
}