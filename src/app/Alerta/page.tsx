'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const Alerta = dynamic(() => import('@/Components/Alerta/Alerta'), {
  ssr: false
});

export default function AlertaPage() {
  return (
    <div className="min-h-screen bg-gray-400">
      <Alerta  />
    </div>
  );
} 
