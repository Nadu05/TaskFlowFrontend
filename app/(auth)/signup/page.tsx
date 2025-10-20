'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signup } from "@/lib/api";


export default function Signup() {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');


    const handleSignup = async (e:any) => {
        e.preventDefault();


        try {
            const response = await signup({
                username:username,
                password:password,
                email:email,
                firstName:firstname,
                lastName:lastname
            });

            console.log("Signup success:", response);
            setMessage('Signup successful!');

        } catch (error) {
            console.error("Signup failed:", error);
            setError('Signup failed. Please try again.');

        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter">Create your account</h1>
                        <p className="text-muted-foreground">Start organizing your tasks today.</p>
                    </div>

                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">User Name</Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="naduka"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="StrongPassword123"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="naduka.doe@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="firstname">First Name</Label>
                            <Input
                                id="firstname"
                                type="text"
                                placeholder="John"
                                value={firstname}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="lastname">Last Name</Label>
                            <Input
                                id="lastname"
                                type="text"
                                placeholder="Doe"
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full" onClick={handleSignup}>
                            Sign Up
                        </Button>
                    </form>

                    <div className="text-center text-sm">
                        Already have an account?{" "}
                        <a href="/login" className="text-primary-500 hover:text-primary-600 font-medium">
                            Login
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}