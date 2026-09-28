import { Link } from '@inertiajs/react';
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AppHeader() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check for saved preference or system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-white/20 dark:border-white/10 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo/Name */}
                <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                    johnreal.dev
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-8">
                    <Link
                        href="#work"
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
                    >
                        Work
                    </Link>
                    <Link
                        href="#about"
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
                    >
                        About
                    </Link>
                    <Link
                        href="#services"
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
                    >
                        Services
                    </Link>
                    <Link
                        href="#contact"
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
                    >
                        Contact
                    </Link>
                    
                    {/* Vertical Separator */}
                    <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2" />
                    
                    {/* Dark Mode Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? (
                            <Sun className="w-5 h-5 text-gray-900 dark:text-white" />
                        ) : (
                            <Moon className="w-5 h-5 text-gray-900 dark:text-white" />
                        )}
                    </button>
                </nav>
            </div>
        </header>
    );
}
