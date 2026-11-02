import hero from "../assets/image.png";

export default function Hero() {
  return (
    <div className="flex justify-center relative w-full min-h-[600px] h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={hero}
        alt="Premium interior furniture"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div
        className="relative z-10 flex min-h-full w-full flex-col
        items-center justify-center text-center text-white
        px-4 sm:px-6 md:px-10 py-16"
      >
        <p
          className="text-red-500 uppercase tracking-[0.2em] sm:tracking-[0.3em]
        text-xs sm:text-sm mb-4"
        >
          Premium Interiors
        </p>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl
        font-bold leading-tight max-w-5xl"
        >
          Redefine Luxury Living
        </h1>

        <p
          className="mt-5 max-w-xl text-sm sm:text-base md:text-lg
        text-gray-200 leading-relaxed px-2"
        >
          Discover exceptional furniture designed to transform your space into
          something extraordinary.
        </p>

        <a
          href="/collections"
          className="mt-8 bg-red-600 hover:bg-red-700
          px-6 sm:px-8 py-3 text-sm sm:text-base
          font-semibold transition duration-300"
        >
          Explore Collection
        </a>
      </div>
    </div>
  );
}
