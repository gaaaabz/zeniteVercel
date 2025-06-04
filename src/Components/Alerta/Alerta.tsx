import React from "react";

const cidades = [
  {
    nome: "São Paulo",
    uf: "SP",
    temperatura: 22,
    descricao: "Nublado",
    umidade: 88,
    vento: 14,
    pressao: 1012,
    visibilidade: 6000,
    nascer: "06:12",
    por: "17:45",
    icone: "03d",
    alertas: [
      {
        titulo: "Risco de deslizamento",
        descricao: "Risco de deslizamento no bairro Jardim São Luís. Evite áreas de encosta.",
      },
      {
        titulo: "Alerta de enchente",
        descricao: "Previsão de chuva intensa nas próximas horas. Evite áreas alagáveis.",
      },
    ],
    dica: "Mantenha-se informado pelas autoridades locais. Tenha um kit de emergência preparado."
  },
  {
    nome: "Rio de Janeiro",
    uf: "RJ",
    temperatura: 28,
    descricao: "Parcialmente nublado",
    umidade: 80,
    vento: 10,
    pressao: 1010,
    visibilidade: 7000,
    nascer: "06:20",
    por: "17:30",
    icone: "02d",
    alertas: [
      {
        titulo: "Risco de deslizamento",
        descricao: "Risco de deslizamento em áreas de encosta. Fique atento aos avisos oficiais.",
      },
    ],
    dica: "Evite áreas de risco e acompanhe os alertas da Defesa Civil."
  },
  {
    nome: "Bahia",
    uf: "BA",
    temperatura: 30,
    descricao: "Ensolarado",
    umidade: 70,
    vento: 12,
    pressao: 1015,
    visibilidade: 8000,
    nascer: "05:50",
    por: "17:55",
    icone: "01d",
    alertas: [],
    dica: "Hidrate-se e evite exposição ao sol nos horários mais quentes."
  },
  {
    nome: "Distrito Federal",
    uf: "DF",
    temperatura: 20,
    descricao: "Chuva leve",
    umidade: 90,
    vento: 8,
    pressao: 1013,
    visibilidade: 5000,
    nascer: "06:10",
    por: "17:40",
    icone: "10d",
    alertas: [
      {
        titulo: "Alerta de enchente",
        descricao: "Possibilidade de alagamentos em áreas baixas."
      }
    ],
    dica: "Evite transitar em áreas alagadas e siga orientações das autoridades."
  },
];

export default function ClimaAlertasPage() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-400 p-6">
      <section className="w-full max-w-7xl bg-gray-200 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold text-[#000000] text-center mb-8">Clima e Alertas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
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
                  {cidade.alertas.map((alerta, i) => (
                    <div key={i} className="bg-red-300 border-l-8 border-red-600 text-red-900 p-4 rounded font-bold text-base">
                      <p className="font-bold text-lg mb-1">⚠️ {alerta.titulo}</p>
                      <p>{alerta.descricao}</p>
                    </div>
                  ))}
                </div>
              )}
              <div className="bg-yellow-200 border-l-4 border-yellow-500 text-yellow-900 p-3 rounded font-bold">
                <p className="font-bold">🔒 Dica de segurança:</p>
                <p className="font-normal text-yellow-900">{cidade.dica}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}