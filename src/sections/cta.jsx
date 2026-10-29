import cta from "../assets/cta.png";
export default function CTA() {
  return (
    <div className="relative isolate min-h-[680px] overflow-hidden bg-black text-white">
      <img
        src={cta}
        alt="Luxury contemporary living room"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r
              from-black via-black/90 to-black/10"
      ></div>

      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t
              from-black via-transparent to-black/20"
      ></div>

      <div
        className="mx-auto flex min-h-[680px] max-w-[1440px]
              flex-col justify-center px-6 py-20
              sm:px-10 lg:px-16"
      >
        <div className="max-w-2xl">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-red-600"></span>
            <p
              className="text-xs font-medium uppercase tracking-[0.3em]
                  text-neutral-300"
            >
              Your Space. Your Signature.
            </p>
          </div>

          <h2
            className="font-serif text-5xl leading-[1.05]
                 tracking-tight sm:text-6xl lg:text-8xl"
          >
            Your Space.
            <span className="mt-2 block text-red-600">Your Signature.</span>
          </h2>

          <p
            className="mt-7 max-w-lg text-base leading-7
                text-neutral-300 sm:text-lg"
          >
            Discover furniture that brings your vision to life. Thoughtfully
            designed. Beautifully crafted. Made for real life.
          </p>
          <div
            className="mt-9 flex flex-col items-start gap-5
                  sm:flex-row sm:items-center"
          >
            <a
              href="/collections"
              className="group inline-flex min-h-14 items-center justify-center
                 gap-5 bg-red-600 px-7 py-4 text-sm font-semibold
                 uppercase tracking-wider text-white
                 transition-all duration-300
                 hover:bg-white hover:text-black
                 focus-visible:outline focus-visible:outline-2
                 focus-visible:outline-offset-4 focus-visible:outline-red-500"
            >
              Explore Our Collection
              <span
                className="text-xl transition-transform duration-300
                       group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>

        <div
          className="mt-20 grid max-w-5xl grid-cols-1
                gap-6 border-t border-white/15 pt-8
                sm:grid-cols-3 sm:gap-8"
        >
          <div className="flex items-start gap-4">
            <span className="text-2xl text-red-500" aria-hidden="true">
              ↗
            </span>
            <div>
              <h3 className="text-sm font-semibold">Reliable Service</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Here to help you choose.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-2xl text-red-500" aria-hidden="true">
              ◇
            </span>
            <div>
              <h3 className="text-sm font-semibold">Thoughtful Design</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Form meets function.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-2xl text-red-500" aria-hidden="true">
              ○
            </span>
            <div>
              <h3 className="text-sm font-semibold">Personal Support</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Your needs come first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
