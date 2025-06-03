'use client'
import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <section className="w-full py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Seja bem-vindo ao Zenite!
          </h1>
          <p className="text-xl mb-4 text-white">
            Sua segurança é nossa prioridade
          </p>
          <p className="text-lg mb-8 text-gray-300">
            Sistema de alerta e prevenção contra desastres naturais. Mantenha-se informado sobre riscos de enchentes, 
            chuvas intensas e desabamentos em sua região. Cadastre-se para receber alertas em tempo real.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/alertas" 
              className="custom-button custom-button-primary"
            >
              Ver Alertas
            </Link>
            <Link 
              href="/prevencao" 
              className="custom-button custom-button-secondary"
            >
              Medidas de Prevenção
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}