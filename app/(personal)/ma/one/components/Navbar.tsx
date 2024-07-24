import Image from "next/image";
import Logo from "./../../../../../public/ma/assets/Logo.svg";
import User from "./../../../../../public/ma/assets/User.svg";
import Menu from "./../../../../../public/ma/assets/Menu.svg";

export function Navbar() {
  const navLinks = [
    { name: "Features" },
    { name: "Pricing" },
    { name: "Enterprise" },
    { name: "Career" },
  ];
  return (
    <nav className=" flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" />

        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <p className="text-[#36485C]" key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>

      <div className="flex gap-x-5">
        <p className="hidden font-medium text-[#36485C] lg:block pr-[56px]">
          Open an Account
        </p>
        <div className="flex gap-x-2">
          <Image src={User} alt="User Profile" />
          <span className="hidden font-medium text-[#36485C] lg:block">
            Sign in
          </span>
        </div>
        <Image src={Menu} alt="Menu Button" className="lg:hidden" />
      </div>
    </nav>
  );
}
