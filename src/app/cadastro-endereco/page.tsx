'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const CadastroEnderecoComponent = dynamic(() => import('@/Components/CadastroEndereco/CadastroEndereco'), {
  ssr: false
});

export default function CadastroEndereco() {
  return (
    <div className="min-h-screen bg-gray-400">
      <CadastroEnderecoComponent />
    </div>
  );
} 
