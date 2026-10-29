import Logo from "../assets/logo.png";
import SocialDropdown from "../components/SocialDropdown";
export default function Nav() {
  return (
    <div className="flex bg-black p-2 w-full  ">
      <div className="flex  ">
        <img src={Logo} className="pl-2 " />

        <div className="flex   p-4 ml-230">
          <SocialDropdown />
        </div>
      </div>
    </div>
  );
}
