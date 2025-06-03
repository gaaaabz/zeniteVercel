'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const Cadastrar = dynamic(() => import('@/Components/Cadastrar/Cadastrar'), {
  ssr: false
});

export default function CadastroPage() {
  return (
    <div className="min-h-screen bg-gray-400">
      <Cadastrar />
    </div>
  );
} 
