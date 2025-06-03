import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-zenite text-white py-8 w-full mt-auto">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold mb-2">Zenite</h3>
            <p className="text-gray-200">
              Sistema de alerta e prevenção contra desastres naturais, focado em enchentes, chuvas intensas e desabamentos.
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col items-center md:items-end">
            <h3 className="text-xl font-bold mb-2 text-center md:text-right w-full">Contato</h3>
            <ul className="text-gray-200 text-center md:text-right w-full space-y-1">
              <li>E-mail: contato@zenite.com</li>
              <li>Telefone: (11)4002-8922</li>
              <li>Endereço: São Paulo, SP</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-white/20">
          <p className="text-sm text-gray-300 text-center">© 2025 Zenite. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
} 