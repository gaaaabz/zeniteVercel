"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CadastroEndereco() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const [endereco, setEndereco] = useState({
    salvarRota: "",
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEndereco(prev => ({ ...prev, [name]: value }));
    setError(''); 
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/endereco", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(endereco)
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar endereço.");
      }

      alert("Endereço cadastrado com sucesso!");
      router.push("/");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      setError('Erro ao cadastrar endereço. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-400">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-10 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold mb-2 text-center tracking-wide text-black">Cadastro de Endereço</h1>
        <p className="text-xs text-black font-semibold mb-6 text-center">
          Cadastre seu endereço para receber alertas
        </p>
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="salvarRota" className="block text-sm font-bold text-black mb-1">Nome da rota</label>
              <input type="text" id="salvarRota" name="salvarRota" value={endereco.salvarRota} onChange={handleChange} required className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="cep" className="block text-sm font-bold text-black mb-1">CEP</label>
              <input type="text" id="cep" name="cep" value={endereco.cep} onChange={handleChange} required className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="logradouro" className="block text-sm font-bold text-black mb-1">Logradouro</label>
              <input type="text" id="logradouro" name="logradouro" value={endereco.logradouro} onChange={handleChange} className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="numero" className="block text-sm font-bold text-black mb-1">Número</label>
              <input type="text" id="numero" name="numero" value={endereco.numero} onChange={handleChange} required className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="complemento" className="block text-sm font-bold text-black mb-1">Complemento</label>
              <input type="text" id="complemento" name="complemento" value={endereco.complemento} onChange={handleChange} className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="bairro" className="block text-sm font-bold text-black mb-1">Bairro</label>
              <input type="text" id="bairro" name="bairro" value={endereco.bairro} onChange={handleChange} required className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="cidade" className="block text-sm font-bold text-black mb-1">Cidade</label>
              <input type="text" id="cidade" name="cidade" value={endereco.cidade} onChange={handleChange} required className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2" />
            </div>
            <div>
              <label htmlFor="estado" className="block text-sm font-bold text-black mb-1">Estado</label>
              <input type="text" id="estado" name="estado" value={endereco.estado} onChange={handleChange} required className="w-full bg-[#E9E9E9] border-none rounded px-3 py-2" />
            </div>
          </div>
          
          <div className="flex justify-center mt-2">
            <button 
              type="submit" 
              className="w-60 bg-[#64748B] hover:bg-[#475569] text-white font-semibold px-4 py-2 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Cadastrando...' : 'Cadastrar Endereço'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}