
export enum Priority {
    Low = "Low",
    Medium = "Medium",
    High = "High",
}

export type TaskFormData = {
    taskTitle: string;
    taskDescription: string;
    dueDate: string;
    allocatedTime: string;
    priority: Priority;
};

export type Task = TaskFormData & {
    id: number;
    status: string;
};

type taskD = {
    id?: number;
    title: string;
    description: string;
    date: string;
    status?: string;
}