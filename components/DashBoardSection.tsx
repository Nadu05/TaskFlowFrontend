'use client';
import TaskCard from './TaskCard';
import { useState } from 'react';

type Task = {
    id: number;
    title: string;
    description: string;
    date: string;
    status: string;
};

type DashboardSectionProps = {
    userName: string;
    tasks: Task[];
    onStatusChange: (taskId: number, newStatus: string) => Promise<void> | void;
    onDelete: (taskId: number) => void;
    onEdit: (task: Task) => void;
    onAddTask: () => void;
    userColor?: 'purple' | 'blue';
};

export default function DashboardSection({
                                             userName,
                                             tasks,
                                             onStatusChange,
                                             onDelete,
                                             onEdit,
                                             onAddTask,
                                             userColor,
                                         }: DashboardSectionProps) {
    const [loadingTaskId, setLoadingTaskId] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleStatusChange = async (taskId: number, newStatus: string) => {
        try {
            setLoadingTaskId(taskId);
            setError(null);
            await onStatusChange(taskId, newStatus);
        } catch (err) {
            setError('Failed to update task status.');
            console.error(err);
        } finally {
            setLoadingTaskId(null);
        }
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h2 className={`dashboard-title ${userColor === 'purple' ? 'user-purple' : 'user-blue'}`}>
                    {userName}'s Dashboard
                </h2>
                <button
                    onClick={onAddTask}
                    className={`add-task-btn ${userColor}`}
                >
                    <span className="material-symbols-outlined">add</span>
                    Add Task
                </button>
            </div>

            {error && (
                <div className="error-message">{error}</div>
            )}

            <div>
                {tasks.length === 0 ? (
                    <div className="no-tasks-message">
                        <p>No tasks yet. Add your first task!</p>
                    </div>
                ) : (
                    tasks.map(task => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onStatusChange={handleStatusChange}
                            onDelete={onDelete}
                            onEdit={onEdit}
                            userColor={userColor}
                            isLoading={loadingTaskId === task.id}
                        />
                    ))
                )}
            </div>
        </div>
    );
}