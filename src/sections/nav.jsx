import Logo from "../assets/logo.png";
import SocialDropdown from "../components/SocialDropdown";

export default function Nav() {
  return (
    <div className="flex items-center bg-black p-2 w-full">
      <div className="flex items-center justify-between w-full px-2 sm:px-4">
        <img
          src={Logo}
          alt="Logo"
          className="w-auto h-8 sm:h-9 md:h-10 lg:h-12 object-contain"
        />

        <div className="flex items-center p-2 sm:p-4">
          <SocialDropdown />
        </div>
      </div>
    </div>
  );
}
