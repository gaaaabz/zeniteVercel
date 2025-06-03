"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    // Validação básica
    if (!formData.email || !formData.senha) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Por favor, insira um email válido');
      return;
    }

    try {
      // Aqui você pode adicionar a lógica de autenticação
      console.log('Dados do formulário:', formData);
      // Se o login for bem-sucedido, redireciona para a página inicial
      router.push('/');
    } catch (err) {
      setError('Erro ao fazer login. Por favor, tente novamente.');
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-[#ECECEC]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-2 text-center tracking-wide text-black" style={{fontFamily: 'inherit', letterSpacing: 1}}>LOGIN</h1>
        <p className="text-xs text-black font-semibold mb-6 text-center">
          Entre em sua conta para utilização
        </p>
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-black mb-1">E-mail</label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              name="email"
              value={formData.email}
              className="w-full bg-[#F3F3F3] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />
          </div>
          <div>
            <label htmlFor="senha" className="block text-sm font-bold text-black mb-1">Senha:</label>
            <input
              onChange={handleChange}
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              className="w-full bg-[#F3F3F3] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#00386B] text-white font-semibold py-2 rounded hover:bg-blue-800 transition-colors mt-2"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-xs text-center flex flex-row items-center justify-center gap-1">
          <span className="text-gray-600">Caso não tenha cadastro</span>
          <a href="/cadastro" className="text-black font-semibold hover:underline text-xs">Criar conta</a>
        </div>
      </div>
    </section>
  );
}