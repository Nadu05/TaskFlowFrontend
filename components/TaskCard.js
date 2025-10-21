'use client';
import { useState } from 'react';

export default function TaskCard({ task, onStatusChange, onDelete, onEdit, userColor, isLoading }) {
    const [showReward, setShowReward] = useState(false);
    const [rewardAnimation, setRewardAnimation] = useState(false);

    const handleStatusChange = (e) => {
        const newStatus = e.target.value;
        onStatusChange(task.id, newStatus);

        if (newStatus === "Completed") {
            setTimeout(() => setShowReward(true), 300);
        } else {
            setShowReward(false);
        }
    };

    const handleSendReward = () => {
        setRewardAnimation(true);
        setTimeout(() => {
            setRewardAnimation(false);
            setShowReward(false);
            alert('🎉 Reward sent successfully! ⭐');
        }, 2000);
    };

    const isCompleted = task.status === "Completed";

    return (
        <div className={`task-card ${userColor} ${isCompleted ? 'completed' : ''}`}>
            {rewardAnimation && (
                <div className="reward-animation">
                    <div>⭐🎉⭐</div>
                </div>
            )}

            <div className="task-card-header">
                <div className="task-card-content">
                    <p className={`task-title ${isCompleted ? 'completed' : ''}`}>
                        {task.title}
                    </p>
                    <p className="task-description">{task.description}</p>
                </div>
                <div className="task-actions">
                    <button
                        onClick={() => onEdit(task)}
                        disabled={isLoading}
                        className="task-action-btn edit"
                    >
            <span className="material-symbols-outlined" style={{ color: '#9ca3af', fontSize: '20px' }}>
              edit
            </span>
                    </button>
                    <button
                        onClick={() => onDelete(task.id)}
                        disabled={isLoading}
                        className="task-action-btn delete"
                    >
            <span className="material-symbols-outlined" style={{ color: '#9ca3af', fontSize: '20px' }}>
              delete
            </span>
                    </button>
                </div>
            </div>

            <div className="task-card-footer">
                <select
                    value={task.status}
                    onChange={handleStatusChange}
                    disabled={isLoading}
                    className="task-status-select"
                >
                    <option>Not Started</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                </select>

                {isLoading && (
                    <div className="task-loading">Updating...</div>
                )}

                <div className="task-date">
          <span className="material-symbols-outlined">
            calendar_today
          </span>
                    <span>{task.date}</span>
                </div>
            </div>

            {showReward && (
                <div className="reward-section">
                    <button
                        onClick={handleSendReward}
                        className="reward-button"
                    >
                        <span>⭐</span>
                        Send Reward
                        <span>⭐</span>
                    </button>
                </div>
            )}
        </div>
    );
}