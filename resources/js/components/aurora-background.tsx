import { useEffect, useRef } from 'react';

export default function AuroraBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('mousemove', handleMouseMove);

        let time = 0;
        const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; color: string }> = [];

        // Initialize aurora particles
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 200 + 100,
                color: `hsla(${Math.random() * 60 + 180}, 70%, 50%, 0.3)`,
            });
        }

        const animate = () => {
            time += 0.01;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Create gradient background
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, 'rgba(15, 23, 42, 0.1)');
            gradient.addColorStop(1, 'rgba(30, 41, 59, 0.1)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw aurora particles
            particles.forEach((particle, index) => {
                // Update position with mouse influence
                const dx = mouseRef.current.x - particle.x;
                const dy = mouseRef.current.y - particle.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 300) {
                    particle.vx += dx * 0.0001;
                    particle.vy += dy * 0.0001;
                }

                particle.x += particle.vx + Math.sin(time + index) * 0.5;
                particle.y += particle.vy + Math.cos(time + index) * 0.5;

                // Boundary check
                if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
                if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
                if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
                if (particle.y > canvas.height + particle.size) particle.y = -particle.size;

                // Draw particle
                const particleGradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.size
                );
                particleGradient.addColorStop(0, particle.color);
                particleGradient.addColorStop(1, 'transparent');
                
                ctx.fillStyle = particleGradient;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.6 }}
        />
    );
}
