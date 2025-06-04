'use client'
import { useRouter, usePathname } from 'next/navigation';
import { useEffect} from 'react';
import Link from 'next/link'
import { useState } from "react";
import { ContaType } from '@/types/conta';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [Logado, setLogado] = useState<ContaType | null>(null); 
  useEffect(() => {
    const usuario = localStorage.getItem("usuarioLogado");
    if (usuario) {
      setLogado(JSON.parse(usuario));
    }
  }, []);

   const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    setLogado(null);
    window.location.reload();
  };

  return (
    <header className="bg-black w-full py-4">
      <div className="container-custom flex items-center justify-between">
        <button onClick={() => router.push('/')} className="text-2xl font-bold text-white hover:opacity-90 transition-opacity">
          Zenite
        </button>
        {Logado ?(<nav className="flex gap-4 items-center">
            <button onClick={handleLogout} className="bg-[#64748B] hover:bg-[#475569] text-white font-semibold px-4 py-2 rounded transition-colors border-none cursor-pointer">Sair</button>
          </nav>
          ):(<nav className="flex gap-4">
            <Link href="/Cadastrar" className="bg-[#64748B] hover:bg-[#475569] text-white font-semibold px-4 py-2 rounded transition-colors border-none cursor-pointer text-decoration: none">Cadastro</Link>
            <Link href="/login" className="bg-[#64748B] hover:bg-[#475569] text-white font-semibold px-4 py-2 rounded transition-colors">Login</Link>
          </nav>) 
        }
      </div>
    </header>
  )
} 