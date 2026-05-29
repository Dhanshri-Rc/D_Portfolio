import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Dlogo from "../assets/Dlogo.png";
import { ArrowRight } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Research", path: "/research" },
    { label: "Publications", path: "/publications" },
    { label: "Companies", path: "/companies" },
    { label: "Media", path: "/media" },
    { label: "Achievements", path: "/achievements" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1160px] mx-auto h-[76px] px-3 flex items-center justify-between">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={Dlogo} alt="Logo" className="w-[46px] h-[44px]" />

          <div>
            <h1 className="font-serif text-[15px] font-semibold text-[#1d1d1d] leading-[26px]">
              Dr. Dharmesh Dhabliya
            </h1>
            <p className="text-[10px] text-[#626060]  font-medium">
              Researcher&nbsp; • &nbsp;Professor&nbsp; • &nbsp;Entrepreneur
            </p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-[25px] ml-28">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative text-[13px] font-medium transition-colors duration-300 hover:text-[#c27a12]
                ${
                  isActive
                    ? "text-[#c27a12] after:absolute after:left-0 after:-bottom-[13px] after:w-full after:h-[2px] after:bg-[#c27a12]"
                    : "text-[#111]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => navigate("/contact")}
          className="hidden lg:block bg-[#b86f08] hover:bg-[#9f5f06] text-white text-[13px] font-semibold px-[20px] h-[38px] rounded-[4px] transition-all duration-300 hover:shadow-md hover:-translate-y-[1px]"
        >
          Get In Touch
        </button>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-[#111]">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-5 py-4 shadow-md">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-[14px] font-medium hover:text-[#c27a12] ${
                    isActive ? "text-[#c27a12]" : "text-[#111]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

           
             <button
  className="
  group
  relative
  overflow-hidden

  h-[42px]
  px-[22px]

  bg-[linear-gradient(135deg,#d69a22_0%,#b87518_45%,#8e5b0d_100%)]

  text-white
  text-[13px]
  font-semibold
  rounded-[6px]

  flex
  items-center
  gap-[8px]

  shadow-[0_8px_22px_rgba(184,117,24,0.28)]

  transition-all
  duration-500

  hover:-translate-y-[3px]
  hover:scale-[1.02]

  hover:shadow-[0_18px_35px_rgba(184,117,24,0.42)]

  active:scale-[0.98]
  "
>
  {/* Shine */}
  <span
    className="
    absolute
    inset-0
    -translate-x-[120%]
    bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.35),transparent)]

    group-hover:translate-x-[220%]
    transition-transform
    duration-[1200ms]
    "
  />

  <span className="relative z-10">
  Get in Touch 
  </span>

  <ArrowRight
    size={14}
    className="
    relative
    z-10
    transition-all
    duration-300
    group-hover:translate-x-1
    group-hover:-rotate-6
    "
  />
</button>

          </nav>
        </div>
      )}
    </header>
  );
}