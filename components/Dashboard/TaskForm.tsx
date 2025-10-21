"use client";
import React, {useState} from "react";

export enum Priority {
    Low = "Low",
    Medium = "Medium",
    High = "High",
}

type Task = {
    id?: number;
    title: string;
    description: string;
    allocatedTime: string;
    date: string;
    status?: string;
}

type TaskFormProps = {
    formAction: (formData: FormData) => void;
    onClose?: () => void;
    initialData?: Partial<Task>;
    submitButtonText?: string;
};

export default function TaskForm({
                                     formAction,
                                     onClose,
                                     initialData = {},
                                     submitButtonText = "Save"
                                 }: TaskFormProps) {
    const [taskTitle, setTaskTitle] = useState(initialData.title || "");
    const [taskDescription, setTaskDescription] = useState(initialData.description || "");
    const [dueDate, setDueDate] = useState(initialData.date || "");
    const [allocatedTime, setAllocatedTime] = useState(initialData.allocatedTime || "");
    const [priority, setPriority] = useState(initialData.status || Priority.Low);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formAction(formData);
    };

    return (
        <form className="add-task" onSubmit={handleSubmit}>
            <div className="taskTitle">
                <label htmlFor="taskTitle">Task Title:</label>
                <input
                    id="taskTitle"
                    name="taskTitle"
                    type="text"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    placeholder="Enter task title"
                    className="input"

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
                    name="priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as Priority)}
                >
                    <option value={Priority.Low}>Low</option>
                    <option value={Priority.Medium}>Medium</option>
                    <option value={Priority.High}>High</option>
                </select>
            </div>

            <div className="form-actions">
                <button type="submit">{submitButtonText}</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </div>
        </form>
    );
}
//
// <div className="tasks-list" id="opponent-tasks">
//     <!-- Example Task Card -->
//     <div className="task-card">
//         <div className="task-header">
//             <h3 className="task-name">Fix login API bug</h3>
//             <div className="task-actions">
//                 <button className="edit-btn">✏️</button>
//                 <button className="delete-btn">🗑️</button>
//             </div>
//
//         </div>
//         <p className="task-desc">Resolve issue causing invalid token errors.</p>
//         <div className="task-footer">
//             <div className="task-datetime">
//                 <span className="material-symbols-outlined">calendar_today</span>
//                 <span>Oct 25, 2025 - 03:30 PM</span>
//             </div>
//             <select className="status-select">
//                 <option>Not Started</option>
//                 <option>In Progress</option>
//                 <option>Completed</option>
//             </select>
//         </div>
//     </div>