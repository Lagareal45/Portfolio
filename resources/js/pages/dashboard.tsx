import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { ChevronDown, MessageCircle } from 'lucide-react';

export default function Dashboard() {
    return (
        <AppLayout>
            <Head title="John Real - Portfolio" />
            <div className="flex h-full flex-1 flex-col gap-16 px-6 py-12 max-w-7xl mx-auto relative">
                {/* Hero Section */}
                <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-45 relative">
                    <div className="flex-shrink-0">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30"></div>
                            <img
                                src="/ProfilePic.jpg"
                                alt="Profile"
                                className="relative w-64 h-64 rounded-full object-cover border-4 border-white/50 dark:border-white/30 backdrop-blur-sm shadow-2xl"
                            />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left space-y-6">
                        <div className="flex items-center gap-3 justify-center md:justify-start">
                            <h1 className="text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
                                John Real Lago Lagare
                            </h1>
                            <img src="/verified-badge.svg" alt="Verified" className="w-8 h-8 mt-3" />
                        </div>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                            Creative Developer & Designer crafting beautiful digital experiences
                        </p>
                        <div className="flex gap-4 mt-4 justify-center md:justify-start">
                            <a
                                href="#work"
                                className="px-8 py-3 bg-gray-900/80 dark:bg-white/80 backdrop-blur-md text-white dark:text-gray-900 rounded-xl hover:bg-gray-900/90 dark:hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/30 dark:border-white/10 text-gray-900 dark:text-white rounded-xl hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>

                    {/* Scroll Down Indicator */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                        <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">Scroll Down</span>
                        <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    </div>
                </section>

                {/* Work Section */}
                <section id="work" className="space-y-8">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                id: 1,
                                title: 'Smart Crop Monitoring',
                                image: '/Project1.jpg',
                                description: 'AI-Enhanced Image Processing for Corn Disease Detection is a mobile application developed using Flutter and Dart that uses AI-powered image processing to help detect common corn leaf diseases. The project allows users to capture or upload corn leaf images and receive disease detection results, supporting farmers and agricultural users in identifying potential crop diseases more efficiently.',
                                tech: ['Flutter', 'Dart']
                            },
                            {
                                id: 2,
                                title: 'DepEd Vehicle Monitoring System',
                                image: '/Project2.jpg',
                                description: 'DepEd Vehicle Monitoring System is a Laravel-based web system developed to help the DepEd Bukidnon office manage vehicle trips and fuel records digitally. The system allows drivers to complete Trip Ticket and Gas Slip forms and automatically generates monthly vehicle and fuel consumption reports, making record management more organized and efficient.',
                                tech: ['Laravel', 'React']
                            },
                            {
                                id: 3,
                                title: 'Project 3',
                                image: null,
                                description: 'A brief description of this project and its key features.',
                                tech: null
                            }
                        ].map((project) => (
                            <div
                                key={project.id}
                                className="cursor-pointer bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-xl mb-4 overflow-hidden">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 hover:scale-105 transition-transform duration-300" />
                                    )}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 line-clamp-3 hover:line-clamp-none transition-all duration-300">
                                    {project.description}
                                </p>
                                {project.tech && (
                                    <div className="flex gap-2 mt-3">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-white/50 dark:border-white/20 rounded-full text-sm font-medium text-gray-800 dark:text-white">
                                                {tech === 'Flutter' && <img src="/Flutter_logo.svg.webp" alt={tech} className="w-4 h-4" />}
                                                {tech === 'Dart' && <img src="/dart.png" alt={tech} className="w-4 h-4" />}
                                                {tech === 'Laravel' && <img src="/Laravel.svg.webp" alt={tech} className="w-4 h-4" />}
                                                {tech === 'React' && <img src="/React_Logo.svg" alt={tech} className="w-4 h-4" />}
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="space-y-8">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">About</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-8 shadow-lg">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                I am a passionate developer who loves creating beautiful and functional web applications.
                                With expertise in modern technologies, I bring ideas to life through clean code and intuitive design.
                            </p>
                        </div>
                        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-8 shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Laravel', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PHP', 'JavaScript', 'Git'].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-white/50 dark:border-white/20 text-gray-800 dark:text-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="space-y-8">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Web Development', desc: 'Building responsive and performant web applications' },
                            { title: 'UI/UX Design', desc: 'Creating intuitive and beautiful user interfaces' },
                            { title: 'Consulting', desc: 'Helping businesses with technical strategy' },
                        ].map((service, i) => (
                            <div key={i} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="space-y-8">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Contact</h2>
                    <div className="max-w-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl p-8 shadow-lg">
                        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                            Feel free to reach out for collaborations or just a friendly hello!
                        </p>
                        <a
                            href="mailto:john@example.com"
                            className="text-xl text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors font-medium"
                        >
                            lagarejohnreal@gmail.com
                        </a>
                    </div>
                </section>
            </div>

            {/* New Message Button Fixed in Lower Right */}
            <a
                href="#contact"
                className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-gray-900/90 dark:bg-white/90 backdrop-blur-xl text-white dark:text-gray-900 rounded-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 font-medium"
            >
                <MessageCircle className="w-5 h-5" />
                <span>Message Now</span>
            </a>
        </AppLayout>
    );
}
