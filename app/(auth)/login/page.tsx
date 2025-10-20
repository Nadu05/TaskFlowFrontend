'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock } from "lucide-react"
import { loginUser } from "@/lib/api";
import {useRouter} from "next/navigation";

export default function Home() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowpassword] = useState(false)

    const router=useRouter()

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            const response = await loginUser(
             {
                username: username,
                password: password,
            }
            );

            console.log(response);
            // Store the JWT
            localStorage.setItem('token', response.data.token);
            await router.push('/signup');
        } catch (err) {

            console.error(err);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-ptimary-50 to-ptimary-100 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{ duration: 0.5}}
                className="w-full max-w-md"
            >
                <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl front-bold tracking-tighter">Welcome Back</h1>
                        <p className="text-muted-foreground">Sign in to continue your collabaration.</p>
                    </div>

                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">User Name</Label>
                            <Input
                                id="username"
                                type="username"
                                placeholder="naduka"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="StrongPassword123"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowpassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform-translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                        <div className="flex item-center justify-between">
                            <div className="flex item-center space-x-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember">Remember me</Label>
                            </div>
                            <a href="#" className="text-primary-500 hover:text-primary-600">
                                Forgot password?
                            </a>
                        </div>
                        <Button type="submit" className="w-full" onClick={handleSubmit}>
                            Login
                        </Button>
                    </form>
                    <div className="text-center text-sm">
                        Don't have an account?{" "}
                        <a
                            href="/signup"
                            className="text-primary-500 hover:text-primary-600 font-medium"
                        >
                            Sign up
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}