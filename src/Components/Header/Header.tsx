'use client'
import { useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { useState } from "react";
import { usePathname } from 'next/navigation';

export default function Header() {
  return (
    <header className="bg-zenite w-full py-4">
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white hover:opacity-90 transition-opacity">
          Zenite
        </Link>
        <nav className="flex gap-4 items-center">
          <Link href="/alertas" className="nav-item">Alertas</Link>
          <Link href="/prevencao" className="nav-item">Prevenção</Link>
          <Link href="/cadastro" className="custom-button custom-button-primary">Cadastro</Link>
          <Link href="/login" className="custom-button custom-button-secondary">Login</Link>
        </nav>
      </div>
    </header>
  )
} 