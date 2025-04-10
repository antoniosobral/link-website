import Image from "next/image";

export default function Home() {
  return (
    <main
      className="relative flex flex-col items-center justify-center min-h-screen bg-[#2E3A46] text-gray-200 p-4"
      style={{
        backgroundImage: 'url("/background.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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
      <p className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-sm tracking-widest sm:bottom-8">
        COMING SOON
      </p>

      {/* Email de contato no canto inferior esquerdo no desktop e centralizado no mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-300 sm:left-8 sm:transform-none">
        <p>contato@lynkhc.com.br</p>
      </div>

      {/* Ícone no canto inferior direito */}
    </main>
  );
}
