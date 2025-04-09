import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-[#2E3A46] text-gray-200 p-4">
      {/* Logo Centralizado */}
      <div className="flex flex-col items-center text-center">
        <Image
          src="/lynk-logo.png" // Caminho para o logo principal
          alt="Lynk Human Capital Logo"
          width={300} // Ajuste a largura conforme necessário
          height={100} // Ajuste a altura conforme necessário
          priority // Carregar a imagem principal com prioridade
        />
      </div>

      {/* Texto "COMING SOON" no Bottom */}
      <p className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm tracking-widest">
        COMING SOON
      </p>

      {/* Ícone no canto inferior direito */}
      <div className="absolute bottom-8 right-8">
        <Image
          src="/icon.png" // Caminho para o ícone
          alt="Lynk Icon"
          width={50} // Ajuste a largura conforme necessário
          height={50} // Ajuste a altura conforme necessário
        />
      </div>
    </main>
  );
}
