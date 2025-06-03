"use client";
import React from "react";

export default function PrevencaoPage() {
  return (
    <section className="w-full min-h-screen py-12 bg-gray-400 flex flex-col items-center">
      <div className="container-custom max-w-5xl bg-white rounded-lg shadow-md p-8 mt-8">
        <h1 className="text-3xl font-extrabold mb-4 text-center text-black">Medidas de Prevenção</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Dicas essenciais para proteger você, sua família e seu patrimônio contra enchentes e desabamentos.
        </p>
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-[#64748B] mb-2">Antes das Chuvas</h2>
            <ul className="list-disc pl-6 text-gray-800 space-y-1">
              <li>Mantenha calhas, telhados e ralos limpos e desobstruídos.</li>
              <li>Não jogue lixo ou entulho em ruas, córregos ou bueiros.</li>
              <li>Evite construir em áreas de risco, como encostas e margens de rios.</li>
              <li>Tenha sempre lanternas, pilhas e documentos importantes em local seguro e de fácil acesso.</li>
              <li>Fique atento aos alertas da Defesa Civil e órgãos oficiais.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#64748B] mb-2">Durante as Chuvas Fortes</h2>
            <ul className="list-disc pl-6 text-gray-800 space-y-1">
              <li>Desligue aparelhos elétricos e feche o registro de água e gás se notar risco de inundação.</li>
              <li>Evite contato com a água da enchente, pois pode estar contaminada.</li>
              <li>Não tente atravessar áreas alagadas, mesmo de carro.</li>
              <li>Procure abrigo em local seguro e elevado.</li>
              <li>Em caso de deslizamento, saia imediatamente da residência e acione a Defesa Civil (199).</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#64748B] mb-2">Após a Enchente ou Deslizamento</h2>
            <ul className="list-disc pl-6 text-gray-800 space-y-1">
              <li>Não utilize alimentos ou água que tiveram contato com a enchente.</li>
              <li>Limpe e desinfete a casa antes de retornar.</li>
              <li>Fique atento a rachaduras, inclinação de paredes e postes.</li>
              <li>Informe-se sobre os serviços de saúde e assistência social disponíveis.</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <span className="text-gray-700">Em caso de emergência, ligue para a Defesa Civil: <span className="font-bold text-[#64748B]">199</span></span>
        </div>
      </div>
    </section>
  );
} 