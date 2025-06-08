'use client';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from "react";

export default function ClimaAlertasPage() {

  type WeatherApiAlert = {
    headline?: string;
    event?: string;
    desc?: string;
    msg?: string;
  };

  type Endereco = {
    id: number;
    nome: string;
    cidade: string;
    latitude: number;
    longitude: number;
  };

  type Alerta = {
    titulo: string;
    descricao: string;
  };

  type CidadeClimaAlertas = {
    id: number;
    nome: string;
    uf: string;
    temperatura: number;
    descricao: string;
    umidade: number;
    vento: number;
    pressao: number;
    visibilidade: number;
    nascer: string;
    por: string;
    icone: string;
    alertas: Alerta[];
  };


  const [cidades, setCidades] = useState<CidadeClimaAlertas[]>([]);
  const router = useRouter();
  const [error, setError] = useState('');
  useEffect(() => {

    const usuarioJSON = localStorage.getItem("usuarioLogado");
    

    if (!usuarioJSON) {
      router.push("/login");
      return;
    }

    const usuario = JSON.parse(usuarioJSON);
    const idUsuario = usuario.id;

    async function buscarDados() {
      try {
        const res = await fetch(`https://zenite-gs-production.up.railway.app/endereco/usuario/${idUsuario}`);
        if (!res.ok) throw new Error("Erro ao buscar endereços");
        const text = await res.text();
        if (!text) {
          setError("Nenhum endereço cadastrado");
          return;
        }
        const enderecos = JSON.parse(text); 
        const cidadesComClima = await Promise.all(
          (enderecos as Endereco[]).map(async (endereco) => {
            const resClima = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${endereco.latitude}&lon=${endereco.longitude}&appid=12c1487aa8317768af0265b6ca00854e&units=metric&lang=pt_br`
            );
            if (!resClima.ok) throw new Error("Erro ao buscar clima");
            const climaData = await resClima.json();

            const resAlertas = await fetch(
              `http://api.weatherapi.com/v1/alerts.json?key=91148a813cdb48c580605740252805&q=${encodeURIComponent(endereco.cidade)}`
            );

            let alertas: Alerta[] = [];
            if (resAlertas.ok) {
              const alertasData = await resAlertas.json();
              if (alertasData.alert && Array.isArray(alertasData.alert.alert)) {
                alertas = (alertasData.alert.alert as WeatherApiAlert[]).map((alerta) => ({
                  titulo: alerta.headline || alerta.event || "Alerta",
                  descricao: alerta.desc || alerta.msg || "Sem descrição",
                }));
              }
            }

            const temperatura = climaData.main.temp;

            if (temperatura < 15) {
              alertas.push({
                titulo: "Alerta de Frio",
                descricao: "As temperaturas estão baixas. Use roupas adequadas para se aquecer.",
              });
            } else if (temperatura > 30) {
              alertas.push({
                titulo: "Alerta de Calor",
                descricao: "As temperaturas estão elevadas. Hidrate-se, evite exposição prolongada ao sol, e passe protetor solar.",
              });
            }

            return {
              id: endereco.id,
              nome: endereco.nome,
              uf: endereco.cidade,
              temperatura: climaData.main.temp,
              descricao: climaData.weather[0].description,
              umidade: climaData.main.humidity,
              vento: climaData.wind.speed,
              pressao: climaData.main.pressure,
              visibilidade: climaData.visibility,
              nascer: new Date(climaData.sys.sunrise * 1000).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
              por: new Date(climaData.sys.sunset * 1000).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
              icone: climaData.weather[0].icon,
              alertas
            };
          })
          
        );

        setCidades(cidadesComClima);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    }

    buscarDados();
  }, []);

  async function handleDelete(id: number) {
      try{
        const response = await fetch((`https://zenite-gs-production.up.railway.app/endereco/deletar/${id}`), {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Erro ao deletar endereço');
    }
    setCidades((prevCidades) => prevCidades.filter(cidade => cidade.id !== id));
      } catch (error){
        console.error("Erro ao deletar dados:", error);
      }
    } 

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-400 p-6">
      <section className="w-full max-w-7xl bg-gray-200 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold text-[#000000] text-center mb-8">Clima e Alertas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
             {error && (
          <p className="text-black text-sm mb-4 text-center">{error}</p>
        )}
          {cidades.map((cidade, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={`http://openweathermap.org/img/wn/${cidade.icone}@2x.png`}
                  alt="Ícone do clima"
                  className="w-10 h-10"
                />
                <div>
                  <h2 className="text-xl font-bold text-[#64748B]">Clima e Alertas</h2>
                  <p className="text-black text-sm">Clima atual em {cidade.nome} - {cidade.uf}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-black">{cidade.temperatura}°C</p>
                  <p className="text-black text-base">{cidade.descricao}</p>
                </div>
                <div className="text-sm text-gray-700 space-y-1">
                  <div><span className="font-semibold">Umidade:</span> {cidade.umidade}%</div>
                  <div><span className="font-semibold">Vento:</span> {cidade.vento} km/h</div>
                  <div><span className="font-semibold">Pressão:</span> {cidade.pressao} hPa</div>
                  <div><span className="font-semibold">Visibilidade:</span> {cidade.visibilidade} m</div>
                  <div><span className="font-semibold">Nascer do sol:</span> {cidade.nascer}</div>
                  <div><span className="font-semibold">Pôr do sol:</span> {cidade.por}</div>
                </div>
              </div>
              {cidade.alertas.length > 0 && (
                <div className="space-y-2">
                  {cidade.alertas.map((alerta: { titulo: string; descricao: string }, i: number) => (
                    <div key={i} className="bg-red-300 border-l-8 border-red-600 text-red-900 p-4 rounded font-bold text-base">
                      <p className="font-bold text-lg mb-1">⚠️ {alerta.titulo}</p>
                      <p>{alerta.descricao}</p>
                    </div>
                  ))}
                </div>
              )}
              <div>
            <button
                type="button"
                className="w-60 bg-[#64748B] hover:bg-[#475569] text-white font-semibold px-4 py-2 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => handleDelete(cidade.id)}
              >
                Deletar endereço
              </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
