import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <Image
            src="/images/Logo_White_Trans.png"
            alt="Raindex Logo"
            width={120}
            height={120}
            className="mx-auto"
            priority
          />
        </div>
        <h1 className="text-8xl md:text-9xl font-bold text-white tracking-tight mb-8 animate-pulse flex items-baseline justify-center">
          <span className="drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]">
            R
          </span>
          <span className="rainbow-glow">
            a
          </span>
          <span className="rainbow-glow">
            i
          </span>
          <span className="drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]">
            ndex
          </span>
          <span className="text-3xl md:text-4xl font-normal ml-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
            ™
          </span>
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl font-light tracking-wide">
          Coming Soon
        </p>
      </div>
    </div>
  );
}
