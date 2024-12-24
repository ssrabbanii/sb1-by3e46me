import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Routes } from '@/components/routes';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-[#F7F9F7]">
        <Navbar />
        <main className="container mx-auto px-4 py-6">
          <Routes />
        </main>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;