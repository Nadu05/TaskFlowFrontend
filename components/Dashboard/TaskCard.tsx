"use client";

import { useState } from "react";
import TaskForm from "@/components/Dashboard/TaskForm";

type TaskD = {
    id?: number;
    title: string;
    description: string;
    date: string;
    status?: string;
    allocatedTime?: string;
}

export default function TaskCard({ task }: { task: TaskD }) {
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);

    function editTask(formData: FormData) {
        const taskTitle = formData.get('taskTitle') as string;
        const taskDescription = formData.get('taskDescription') as string;
        const dueDate = formData.get('dueDate') as string;
        const allocatedTime = formData.get('allocatedTime') as string;
        const priority = formData.get('priority') as string;

        const updateTask: TaskD = {
            id: task.id,
            title: taskTitle,
            description: taskDescription,
            date: dueDate,
            allocatedTime: allocatedTime,
            status: priority,
        };

        console.log("Updated task data:", updateTask);
        // TODO: Send this data to your Spring Boot backend API
        handleClose();
    }

    function deleteTask() {
        console.log("Deleting task:", task.id);
        // TODO: Send delete request to your Spring Boot backend API
    }

    const handleClose = () => {
        setIsPopoverVisible(false);
    };

    const handleOpen = () => {
        setIsPopoverVisible(true);
    };

    return (
        <div className="task-card">
            <div className="task-card-content">
                <p className="task-title">{task.title}</p>
                <p className="task-description">{task.description}</p>
                <p className="task-date">{task.date}</p>
                <p className="task-status">{task.status}</p>
            </div>

            <div className="task-actions">
                <div className="edit-task">
                    <button onClick={handleOpen}>
                        <span>Edit</span>
                    </button>
                    {isPopoverVisible && (
                        <div className="popover-overlay" onClick={handleClose}>
                            <div className="popover-content" onClick={(e) => e.stopPropagation()}>
                                <div className="add-task-form">
                                    <TaskForm
                                        formAction={editTask}
                                        onClose={handleClose}
                                        initialData={task}
                                        submitButtonText="Save Changes"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="delete-task">
                    <button onClick={deleteTask}>
                        <span>Delete</span>
                    </button>
                </div>
            </div>
        </div>
    );
}