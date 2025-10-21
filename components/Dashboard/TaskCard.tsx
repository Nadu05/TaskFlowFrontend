"use client";

import { useState } from "react";
import TaskForm from "@/components/Dashboard/TaskForm";
import "./main.css";

type TaskD = {
    id?: number;
    taskTitle: string;
    taskDescription: string;
    dueDate: string;
    taskStatus?: string;
    allocatedTime?: string;
}

export default function TaskCard({ task }: { task: TaskD }) {

   // console.log(task );


    const [isPopoverVisible, setIsPopoverVisible] = useState(false);

    function editTask(formData: FormData) {
        const taskTitle = formData.get('taskTitle') as string;
        const taskDescription = formData.get('taskDescription') as string;
        const dueDate = formData.get('dueDate') as string;
        const allocatedTime = formData.get('allocatedTime') as string;
        const priority = formData.get('priority') as string;

        const updateTask: TaskD = {
            id: task.id,
            taskTitle: task.taskTitle,
            taskDescription: taskDescription,
            dueDate: dueDate,
            allocatedTime: allocatedTime,
            taskStatus: priority,
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
            {/*<div className="task-card-content">*/}
            {/*    <p className="task-title">{task.taskTitle}</p>*/}
            {/*    <p className="task-description">{task.taskDescription}</p>*/}
            {/*    <p className="task-date">{task.dueDate}</p>*/}
            {/*    <p className="task-status">{task.taskStatus}</p>*/}
            {/*</div>*/}

            {/*<div className="task-actions">*/}
            {/*    <div className="edit-task">*/}
            {/*        <button onClick={handleOpen}>*/}
            {/*            <span>Edit</span>*/}
            {/*        </button>*/}
            {/*        {isPopoverVisible && (*/}
            {/*            <div className="popover-overlay" onClick={handleClose}>*/}
            {/*                <div className="popover-content" onClick={(e) => e.stopPropagation()}>*/}
            {/*                    <div className="add-task-form">*/}
            {/*                        <TaskForm*/}
            {/*                            formAction={editTask}*/}
            {/*                            onClose={handleClose}*/}
            {/*                            initialData={task}*/}
            {/*                            submitButtonText="Save Changes"*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        )}*/}
            {/*    </div>*/}

            {/*    <div className="delete-task">*/}
            {/*        <button onClick={deleteTask}>*/}
            {/*            <span>Delete</span>*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="taskCard">
                <div className="taskHeader">
                    <h3 className="taskName">{task.taskTitle}</h3>
                    <div className="taskActions">
                        <button className="editBtn" onClick={handleOpen} aria-label="Edit Task">✏️</button>
                        <button className="deleteBtn" onClick={deleteTask} aria-label="Delete Task">🗑️</button>
                    </div>
                </div>

                <p className="taskDesc">{task.taskDescription}</p>

                <div className="taskFooter">
                    <div className="taskDatetime">
                        <span className="material-symbols-outlined" style={{fontSize: '1rem'}}>calendar_today</span>
                        <span>{task.dueDate}</span>
                    </div>
                    <select className="statusSelect" defaultValue={task.taskStatus}>
                        <option>Not Started</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                    </select>
                </div>

                {isPopoverVisible && (
                    <div className="popoverOverlay" onClick={handleClose}>
                        <div className="popoverContent" onClick={(e) => e.stopPropagation()}>
                            <TaskForm
                                formAction={editTask}
                                onClose={handleClose}
                                initialData={task}
                                submitButtonText="Edit Task"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}