"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ContaType } from "@/types/conta";

export default function Cadastrar() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const user = localStorage.getItem("usuarioLogado");
    if (user) {
      router.push("/");
    }
  }, [router]);

  const [conta, setConta] = useState<Omit<ContaType,"id">>({
    nome: "",
    email: "",
    senha: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConta(prev => ({ ...prev, [name]: value }));
    setError(''); 
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!conta.email.includes('@')) {
      setError('Por favor, insira um email válido');
      setLoading(false);
      return;
    }

    if (conta.senha.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      setLoading(false);
      return;
    }

    console.log(JSON.stringify(conta));

    try {
      const response = await fetch("http://localhost:8080/usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(conta)
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar conta.");
      }

      alert("Conta cadastrada com sucesso!");
      router.push("/login");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      setError('Erro ao cadastrar conta. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-[#ECECEC]">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-10 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-2 text-center tracking-wide text-black">Cadastro</h1>
        <p className="text-xs text-black font-semibold mb-6 text-center">
          Crie sua conta para acessar
        </p>
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-bold text-black mb-1">Nome completo</label>
              <input type="text" id="nome" name="nome" value={conta.nome} onChange={handleChange} required className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-black mb-1">E-mail</label>
              <input type="email" id="email" name="email" value={conta.email} onChange={handleChange} required className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="senha" className="block text-sm font-bold text-black mb-1">Senha</label>
              <input type="password" id="senha" name="senha" value={conta.senha} onChange={handleChange} minLength={6} required className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2" />
            </div>
          </div>
          
          <div className="flex justify-center mt-2">
            <button 
              type="submit" 
              className="w-60 bg-[#00386B] text-white font-semibold py-2 rounded hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}