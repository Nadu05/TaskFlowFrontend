"use client";

import TaskCard from "@/components/Dashboard/TaskCard";
import { useState } from "react";
import TaskForm from "@/components/Dashboard/TaskForm";

type Tasks = {
    id: number;
    title: string;
    description: string;
    date: string;
    status: string;
    allocatedTime?: string;
}

type Task = {
    id?: number;
    title: string;
    description: string;
    allocatedTime: string;
    date: string;
    status?: string;
}

export default function DashboardSection({ tasks }: { tasks: Tasks[] }) {
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);

    async function addTaskAction(formData: FormData) {
        const taskTitle = formData.get('taskTitle') as string;
        const taskDescription = formData.get('taskDescription') as string;
        const dueDate = formData.get('dueDate') as string;
        const allocatedTime = formData.get('allocatedTime') as string;
        const priority = formData.get('priority') as string;

        const newTask: Task = {
            title: taskTitle,
            description: taskDescription,
            date: dueDate,
            allocatedTime: allocatedTime,
            status: priority,
        };

        console.log("New task data:", newTask);
        // TODO: Send this data to your Spring Boot backend API
        console.log("New task data received on server:", newTask);
        handleClose();
    }

    const handleClose = () => {
        setIsPopoverVisible(false);
    };

    const handleOpen = () => {
        setIsPopoverVisible(true);
    };

    return (
        <div>
            <div className="dashboard-header">
                <h2>Dashboard</h2>
                <div>
                    <button onClick={handleOpen}>
                        <span>Add</span> Add Task
                    </button>
                    {isPopoverVisible && (
                        <div className="popover-overlay" onClick={handleClose}>
                            <div className="popover-content" onClick={(e) => e.stopPropagation()}>
                                <div className="add-task-form">
                                    <TaskForm
                                        formAction={addTaskAction}
                                        onClose={handleClose}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="tasks-container">
                {tasks.length === 0 ? (
                    <div className="no-tasks-message">
                        <p>No tasks yet. Add your first task!</p>
                    </div>
                ) : (
                    tasks.map(task => (
                        <TaskCard key={task.id} task={task} />
                    ))
                )}
            </div>
        </div>
    );
}