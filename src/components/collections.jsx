import { useState } from "react";
import sofa from "../assets/sofa.jpg";
import bed from "../assets/beds.jpg";
import coffee from "../assets/coffee.jpg";
import decor from "../assets/decor.jpg";
import tv from "../assets/tv.jpg";
import dining from "../assets/dining.jpg";
import SocialDeck from "../components/SocialDeck";

const categories = [
  "All Collections",
  "Living Room",
  "Bedroom",
  "Dining",
  "Office",
  "Lighting",
];

const collections = [
  {
    id: 1,
    name: "Sofas",
    category: "Living Room",
    subtitle: "Comfort, composed.",
    count: "08 PIECES",
    image: sofa,
    number: "01",
  },
  {
    id: 2,
    name: "Beds",
    category: "Bedroom",
    subtitle: "Rest in refined simplicity.",
    count: "06 PIECES",
    image: bed,
    number: "02",
  },
  {
    id: 3,
    name: "Dining",
    category: "Dining",
    subtitle: "Made for meaningful moments.",
    count: "05 PIECES",
    image: dining,
    number: "03",
  },
  {
    id: 4,
    name: "Coffee",
    category: "Office",
    subtitle: "A more considered workspace.",
    count: "07 PIECES",
    image: coffee,
    number: "04",
  },
  {
    id: 5,
    name: "Decor",
    category: "Lighting",
    subtitle: "Atmosphere in every corner.",
    count: "04 PIECES",
    image: decor,
    number: "05",
  },
  {
    id: 6,
    name: "TV set",
    category: "Living Room",
    subtitle: "Distinctive by design.",
    count: "06 PIECES",
    image: tv,
    number: "06",
  },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {diagonal ? (
        <path d="M7 17 17 7M7 7h10v10" />
      ) : (
        <path d="M5 12h14m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

function CollectionCard({ item }) {
  return (
    <article className="group">
      <a
        href={`/collections/${item.id}`}
        className="block"
        aria-label={`Explore ${item.name}`}
      >
        <div className="relative aspect-[4/4.7] overflow-hidden bg-[#242220]">
          {/* Replace each image path in the collections array above. */}
          <img
            src={item.image}
            alt={`${item.name} furniture collection`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
          />

          <span className="absolute left-4 top-4 bg-black/55 px-3 py-2 text-[10px] tracking-[0.2em] text-white backdrop-blur-sm">
            EDIT {item.number}
          </span>

          <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-[#F3EFE8] text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowIcon diagonal />
          </span>
        </div>

        <div className="flex items-start justify-between gap-4 border-b border-white/15 py-5">
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#B7B0A7]">
              {item.category}
            </p>
            <h3 className="text-xl tracking-tight text-[#F3EFE8] sm:text-2xl">
              {item.name}
            </h3>
            <p className="mt-2 text-sm text-[#AAA49D]">{item.subtitle}</p>
          </div>

          <span className="mt-1 whitespace-nowrap text-[10px] tracking-[0.12em] text-[#AAA49D]">
            {item.count}
          </span>
        </div>
      </a>
    </article>
  );
}

export default function Collections() {
  const [activeCategory, setActiveCategory] = useState("All Collections");

  const [search, setSearch] = useState("");

  const filteredCollections = collections.filter((item) => {
    const matchesCategory =
      activeCategory === "All Collections" || item.category === activeCategory;

    const matchesSearch = `${item.name} ${item.category} ${item.subtitle}`
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#111110] text-[#F3EFE8]">
      {/* Announcement bar */}
      <div className="bg-[#A91D29] px-4 py-2.5 text-center text-[9px] tracking-[0.22em] sm:text-[10px]">
        THOUGHTFULLY DESIGNED. MADE TO LAST.
      </div>

      {/* Navigation */}
      <header className="border-b border-white/10">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 py-6 sm:px-10 lg:px-16">
          <a
            href="/"
            className="text-lg font-semibold tracking-[0.18em] sm:text-xl"
          >
            IDEAL<span className="text-[#C72A36]">SOFAS</span>
          </a>

          <div className="hidden items-center gap-8 text-[10px] uppercase tracking-[0.16em] text-[#C5C0B9] md:flex">
            <a href="/" className="transition hover:text-white">
              Home
            </a>
          </div>
          <SocialDeck />
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 pb-16 pt-16 sm:px-10 sm:pb-24 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:px-16 lg:pt-28">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-9 bg-[#C72A36]" />
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#C5C0B9]">
              The art of considered living
            </p>
          </div>

          <h1 className="max-w-4xl text-5xl font-light leading-[1.04] tracking-[-0.055em] sm:text-7xl lg:text-[88px]">
            Spaces that
            <br />
            speak <span className="italic text-[#C72A36]">for</span>
            <br />
            themselves.
          </h1>

          <p className="mt-8 max-w-md text-sm leading-7 text-[#AAA49D] sm:text-base">
            Discover thoughtfully curated furniture collections where timeless
            craftsmanship meets modern living. Designed to make every room feel
            like it belongs to you.
          </p>

          <a
            href="#collection-grid"
            className="mt-9 inline-flex items-center gap-4 bg-[#B92330] px-6 py-4 text-[10px] uppercase tracking-[0.16em] transition hover:bg-[#D02D3B]"
          >
            Explore the collections <ArrowIcon />
          </a>
        </div>

        <div className="relative min-h-[290px] overflow-hidden bg-[#242220] sm:min-h-[400px]">
          {/* Replace with your own wide editorial furniture image. */}
          <img
            src="/images/hero-interior.jpg"
            alt="Curated contemporary furniture in a refined interior"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
            <div>
              <p className="mb-2 text-[9px] uppercase tracking-[0.22em] text-white/70">
                A new perspective
              </p>
              <p className="max-w-xs text-2xl font-light leading-tight sm:text-3xl">
                Good design changes how you feel.
              </p>
            </div>
            <span className="text-xs tracking-[0.15em] text-white/70">
              01 / 06
            </span>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collection-grid" className="border-t border-white/10">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-10 sm:py-24 lg:px-16">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.23em] text-[#C72A36]">
                Find your aesthetic
              </p>
              <h2 className="text-4xl font-light tracking-[-0.04em] sm:text-6xl">
                The collections<span className="text-[#C72A36]">.</span>
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-[#AAA49D]">
                From statement pieces to the finishing touches, find furniture
                that brings your vision to life.
              </p>
            </div>

            <div className="w-full lg:max-w-xs">
              <label htmlFor="collection-search" className="sr-only">
                Search collections
              </label>
              <div className="flex items-center border-b border-white/30 py-3 focus-within:border-[#C72A36]">
                <input
                  id="collection-search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search collections..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-[#77736D]"
                />
                <span className="text-[#AAA49D]">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m16 16 4 4" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Filter controls */}
          <div className="mt-10 flex gap-2 overflow-x-auto pb-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`shrink-0 border px-4 py-3 text-[9px] uppercase tracking-[0.12em] transition sm:px-5 ${
                  activeCategory === category
                    ? "border-[#B92330] bg-[#B92330] text-white"
                    : "border-white/15 text-[#BEB8B0] hover:border-white/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mb-6 mt-8 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#AAA49D]">
              Showing {filteredCollections.length.toString().padStart(2, "0")}{" "}
              collections
            </p>
            <span className="text-[10px] tracking-[0.15em] text-[#AAA49D]">
              CURATED LIVING
            </span>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {filteredCollections.map((item) => (
              <CollectionCard key={item.id} item={item} />
            ))}
          </div>

          {filteredCollections.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-xl font-light">Nothing found just yet.</p>
              <p className="mt-3 text-sm text-[#AAA49D]">
                Try another search or category.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All Collections");
                }}
                className="mt-6 text-sm text-[#D0444F] underline underline-offset-4"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-7 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-16">
          <a href="/" className="text-sm font-semibold tracking-[0.18em]">
            IDEAL<span className="text-[#C72A36]">SOFAS</span>
          </a>
          <p className="text-xs text-[#858079]">
            Thoughtful spaces. Timeless pieces.
          </p>
          <p className="text-[10px] tracking-[0.12em] text-[#858079]">
            © {new Date().getFullYear()} Ideal Sofasn. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </main>
  );
}
