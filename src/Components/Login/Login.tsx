"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { useEffect} from 'react';

export default function Login() {
  const navigate = useRouter();
  useEffect(() => {
      const user = localStorage.getItem("usuarioLogado");
      if (user) {
        navigate.push("/");
      }});
  const [loginData, setLoginData] = useState({
    email: "",
    senha: "",
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setError('');


  if (!loginData.email || !loginData.senha) {
    setError('Por favor, preencha todos os campos');
    return;
  }

  if (!loginData.email.includes('@')) {
    setError('Por favor, insira um email válido');
    return;
  }

  try {
    const response = await fetch("https://zenite-gs-production.up.railway.app/usuario/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: loginData.email,
        senha: loginData.senha
      })
    });

    if (!response.ok) {
      console.log(loginData)
      throw new Error("Login inválido");
      
    }

    const usuarioLogado = await response.json();
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
    alert("Login realizado com sucesso!");
    window.location.reload();
  } catch (error) {
    alert("Usuário ou senha inválidos.");
    console.error("Erro no login:", error);
  }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-400">
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
              value={loginData.email}
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
              value={loginData.senha}
              className="w-full bg-[#F3F3F3] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#64748B] hover:bg-[#475569] text-white font-semibold px-4 py-2 rounded transition-colors mt-2"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-xs text-center flex flex-row items-center justify-center gap-1">
          <span className="text-gray-600">Caso não tenha cadastro</span>
          <Link 
            href="/Cadastrar" 
            className="text-[#00386B] font-semibold hover:underline text-xs transition-colors"
          >
            Criar conta
          </Link>
        </div>
      </div>
    </section>
  );
}