import AppHeader from '@/components/app-header';
import AuroraBackground from '@/components/aurora-background';

interface AppLayoutProps {
    children: React.ReactNode;
}

export default ({ children }: AppLayoutProps) => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative">
        <AuroraBackground />
        <AppHeader />
        <main className="pt-20 relative z-10">
            {children}
        </main>
    </div>
);
