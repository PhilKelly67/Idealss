import { useState, useEffect, useRef } from "react";

import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Share2, ChevronDown, ArrowUpRight } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    username: "@kidealsofas",
    url: "https://instagram.com/kidealsofas",
    icon: FaInstagram,
    color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
  },
  {
    name: "Facebook",
    username: "Follow our page",
    url: "https://facebook.com/kisumuidealsofas",
    icon: FaFacebook,
    color: "bg-blue-600",
  },
  {
    name: "TikTok",
    username: "@idealsofas",
    url: "https://tiktok.com/@idealsofas",
    icon: FaTiktok,
    color: "bg-neutral-900",
  },
  {
    name: "LinkedIn",
    username: "Our company",
    url: "https://linkedin.com/company/idealsofas",
    icon: FaLinkedin,
    color: "bg-sky-700",
  },
  {
    name: "YouTube",
    username: "Watch our videos",
    url: "https://youtube.com/@idealsofaskisumu",
    icon: FaYoutube,
    color: "bg-red-600",
  },
  {
    name: "X",
    username: "Follow us on X",
    url: "https://x.com/simonowitiideal",
    icon: FaXTwitter,
    color: "bg-neutral-800",
  },
];

export default function SocialDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        className="group flex items-center gap-2 rounded-xl
        border border-neutral-700 bg-neutral-950 px-4 py-2.5
        text-sm font-medium text-white transition-all
        duration-300 hover:border-red-500 hover:bg-neutral-900"
      >
        <Share2
          size={17}
          className="transition-transform group-hover:rotate-12"
        />

        <span>Connect</span>

        <ChevronDown
          size={15}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute right-0 top-full z-50 mt-3 w-64
        origin-top-right rounded-2xl border border-neutral-800
        bg-neutral-950 p-3 shadow-2xl shadow-black/30
        transition-all duration-200 ${
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-2 scale-95 opacity-0"
        }`}
      >
        <p
          className="px-3 pb-2 pt-1 text-xs font-semibold
        uppercase tracking-[0.2em] text-neutral-500"
        >
          Connect with us
        </p>

        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3
              rounded-xl p-3 transition-all duration-200
              hover:bg-neutral-800"
            >
              <span
                className={`${social.color} flex h-10 w-10
                shrink-0 items-center justify-center rounded-xl
                text-white transition-transform duration-200
                group-hover:scale-105`}
              >
                <Icon size={19} />
              </span>

              <span className="min-w-0 flex-1">
                <span
                  className="block text-sm font-semibold
                text-white"
                >
                  {social.name}
                </span>

                <span
                  className="block truncate text-xs
                text-neutral-500"
                >
                  {social.username}
                </span>
              </span>

              <ArrowUpRight
                size={16}
                className="text-neutral-600 transition-colors
                group-hover:text-red-400"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
