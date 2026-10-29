import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

const socials = [
  {
    name: "Instagram",
    icon: FaInstagram,
    color: "hover:bg-[#E1306C]",
    url: "https://instagram.com/kidealsofas",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    color: "hover:bg-[#1877F2]",
    url: "https://facebook.com/kisumuidealsofas",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    color: "hover:bg-[#010101]",
    url: "https://tiktok.com/@idealsofas",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    color: "hover:bg-[#0A66C2]",
    url: "https://linkedin.com/company/idealsofas",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    color: "hover:bg-[#FF0033]",
    url: "https://youtube.com/@idealsofaskisumu",
  },
  {
    name: "X",
    icon: FaXTwitter,
    color: "hover:bg-[#000000]",
    url: "https://x.com/simonowitiideal",
  },
  // {
  //   name: "Email",
  //   icon: FaGmail,
  //   color: "hover:bg-[#000000]",
  //   url: "https://gmail.com/kisumuidealsofas@gmail.com",
  // },
];

export default function SocialDeck() {
  return (
    <div className="flex items-center gap-2">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            title={social.name}
            className={`
              group flex h-11 w-11 items-center
              justify-center rounded-xl
              border border-white/10
              bg-neutral-900 text-neutral-400
              transition-all duration-300 ease-out
              hover:scale-110 hover:border-transparent
              hover:text-white hover:shadow-lg
              ${social.color}
            `}
          >
            <Icon
              size={19}
              className="transition-transform duration-300
              group-hover:rotate-6 group-hover:scale-110"
            />
          </a>
        );
      })}
    </div>
  );
}
