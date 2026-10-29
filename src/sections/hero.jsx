import hero from "../assets/image.png";
export default function Hero() {
  return (
    <div className="flex justify-center relative w-full h-screen overflow-hidden ">
      <img
        src={hero}
        alt="idk"
        className="absolute inset-0 w-full h-full object-cover   "
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div
        className="relative z-10 flex h-full flex-col
              items-center justify-center text-center
              text-white px-6"
      >
        {" "}
        <p className="text-red-500 uppercase tracking-[0.3em] mb-4">
          Premium Interiors
        </p>
        <h1 className="text-4xl md:text-7xl font-bold">
          Redefine Luxury Living
        </h1>
        <p className="mt-5 max-w-xl text-gray-200">
          Discover exceptional furniture designed to transform your space into
          something extraordinary.
        </p>
        <a
          href="/collections"
          className="mt-8 bg-red-600 hover:bg-red-700
                   px-8 py-3 font-semibold transition"
        >
          Explore Collection
        </a>
      </div>
    </div>
  );
}
