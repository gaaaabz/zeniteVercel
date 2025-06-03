'use client'
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <header className="bg-zenite w-full py-4">
      <div className="container-custom flex items-center justify-between">
        <button onClick={() => router.push('/')} className="text-2xl font-bold text-white hover:opacity-90 transition-opacity">
          Zenite
        </button>
        <nav className="flex gap-4 items-center">
          {pathname !== '/login' && (
            <button onClick={handleLogin} className="custom-button custom-button-secondary">
              Login
            </button>
          )}
        </nav>
      </div>
    </header>
  )
} 