'use client';
import { useState } from 'react';

export default function Header() {
    const [activeLink, setActiveLink] = useState('dashboard');

    return (
        <header className="navbar-container">
            <nav className="navbar">
                {/* Logo/Brand */}
                <div className="navbar-brand">
                    <svg className="navbar-logo" fill="none" viewBox="0 0 48 48">
                        <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                    </svg>
                    <h1 className="navbar-title">TaskFlow</h1>
                </div>

                {/* Left Navigation Links */}
                <div className="navbar-links">
                    <a
                        href="#home"
                        onClick={() => setActiveLink('home')}
                        className={`navbar-link ${activeLink === 'home' ? 'active' : ''}`}
                    >
                        Home
                    </a>
                    <a
                        href="#dashboard"
                        onClick={() => setActiveLink('dashboard')}
                        className={`navbar-link ${activeLink === 'dashboard' ? 'active' : ''}`}
                    >
                        Dashboard
                    </a>
                    <a
                        href="#about"
                        onClick={() => setActiveLink('about')}
                        className={`navbar-link ${activeLink === 'about' ? 'active' : ''}`}
                    >
                        About
                    </a>
                    <a
                        href="#services"
                        onClick={() => setActiveLink('services')}
                        className={`navbar-link ${activeLink === 'services' ? 'active' : ''}`}
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        onClick={() => setActiveLink('contact')}
                        className={`navbar-link ${activeLink === 'contact' ? 'active' : ''}`}
                    >
                        Contact
                    </a>
                </div>

                {/* Right Navigation Links */}
                <div className="navbar-links">
                    <a
                        href="#login"
                        onClick={() => setActiveLink('login')}
                        className={`navbar-link ${activeLink === 'login' ? 'active' : ''}`}
                    >
                        Login
                    </a>
                    <a
                        href="#signup"
                        onClick={() => setActiveLink('signup')}
                        className="navbar-link-signup"
                    >
                        Sign Up
                    </a>
                </div>
            </nav>
        </header>
    )
}