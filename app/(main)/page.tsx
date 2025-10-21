"use client";

import DashboardSection from "@/components/Dashboard/Section";
import { useEffect, useState } from "react";
import { getTasks } from "@/lib/api";

type Task = {
    id: number;
    title: string;
    description: string;
    date: string;
    status: string;
    allocatedTime?: string;
}

export default function Main() {
    const [tasks, setTasks] = useState<Task[]>([]);
   const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
               setLoading(true);
                const response = await getTasks();
                setTasks(response.data);
               setError(null);
            } catch (err) {
                console.error('Error fetching tasks:', err);
               setError('Failed to load tasks');
            } finally {
               setLoading(false);
               console.log(tasks);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div className="min-h-screen">
            <main>
                <section>
                     {loading ? (
                        <div className="loading">Loading tasks...</div>
                    ) : error ? (
                        <div className="error">{error}</div>
                    ) : (
                        <DashboardSection tasks={tasks} />
                    )}


                    {/*<DashboardSection tasks={tasks} />*/}
                </section>

                <section>
                    {/* User 2 section - Add your additional content here */}
                </section>
            </main>
        </div>
    );
}