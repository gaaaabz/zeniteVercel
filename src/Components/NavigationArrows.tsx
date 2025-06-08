'use client';

import { useRouter } from 'next/navigation';

interface NavigationArrowsProps {
  previousPath: string;
  nextPath: string;
}

export default function NavigationArrows({ previousPath, nextPath }: NavigationArrowsProps) {
  const router = useRouter();

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => router.push(previousPath)}
        className="flex items-center justify-center w-8 h-8 text-white hover:opacity-80 transition-opacity text-2xl font-bold"
        aria-label="Página anterior"
      >
        &lt;
      </button>
      
      <button
        onClick={() => router.push(nextPath)}
        className="flex items-center justify-center w-8 h-8 text-white hover:opacity-80 transition-opacity text-2xl font-bold"
        aria-label="Próxima página"
      >
        &gt;
      </button>
    </div>
  );
} 