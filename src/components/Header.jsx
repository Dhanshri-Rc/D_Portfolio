import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Dlogo from "../assets/Dlogo.png";

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
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[1240px] mx-auto h-[72px] sm:h-[76px] px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2 cursor-pointer shrink-0"
          >
            <img
              src={Dlogo}
              alt="Logo"
              className="w-[42px] h-[40px] sm:w-[46px] sm:h-[44px]"
            />

            <div className="leading-none">
              <h1 className="font-serif text-[14px] sm:text-[15px] font-semibold text-[#1d1d1d] leading-[22px]">
                Dr. Dharmesh Dhabliya
              </h1>

              <p className="text-[9px] sm:text-[10px] text-[#626060] font-medium">
                Researcher • Professor • Entrepreneur
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {({ isActive }) => (
                  <div
                    className={`group relative text-[13px] font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-[#c27a12]"
                        : "text-[#111] hover:text-[#c27a12]"
                    }`}
                  >
                    {item.label}

                    <span
                      className={`
                      absolute
                      left-1/2
                      -bottom-[2px]
                      h-[2px]
                      bg-[#c27a12]
                      rounded-full
                      transition-all
                      duration-500
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${
                        isActive
                          ? "w-full -translate-x-1/2 opacity-100"
                          : "w-0 -translate-x-1/2 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }
                    `}
                    />
                  </div>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Button */}
          <button
            onClick={() => navigate("/contact")}
            className="hidden xl:block bg-[#b86f08] hover:bg-[#9f5f06] text-white text-[13px] font-semibold px-5 h-[40px] rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-[2px]"
          >
            Get In Touch
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="xl:hidden w-10 h-10 flex items-center justify-center rounded-md hover:bg-[#f7f2eb]"
          >
            <Menu size={25} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[60] xl:hidden transition-all duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-dvh w-[82vw] max-w-[340px] min-w-[280px]
        bg-white z-[70] xl:hidden
        shadow-[-12px_0_35px_rgba(0,0,0,0.18)]
        transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="h-[72px] px-4 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center gap-2 min-w-0">
            <img
              src={Dlogo}
              alt="Logo"
              className="w-[38px] h-[36px] shrink-0"
            />

            <div className="min-w-0">
              <h2 className="font-serif text-[13px] font-semibold text-[#1d1d1d] truncate">
                Dr. Dharmesh Dhabliya
              </h2>

              <p className="text-[9px] text-[#626060] font-medium truncate">
                Researcher • Professor
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-[#f7f2eb]"
          >
            <X size={23} />
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="h-[calc(100dvh-72px)] overflow-y-auto px-4 py-5 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open
                  ? `${index * 40}ms`
                  : "0ms",
              }}
              className={({ isActive }) =>
                `px-4 py-[13px] rounded-xl text-[14px] font-medium
                transition-all duration-500
                ${
                  open
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }
                ${
                  isActive
                    ? "bg-[#f7efe4] text-[#c27a12] shadow-sm"
                    : "text-[#111] hover:bg-[#f7f2eb] hover:text-[#c27a12]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Mobile CTA */}
          <button
            onClick={() => {
              setOpen(false);
              navigate("/contact");
            }}
            className="group relative overflow-hidden mt-4 h-[46px] bg-[linear-gradient(135deg,#d69a22_0%,#b87518_45%,#8e5b0d_100%)] text-white text-[13px] font-semibold rounded-lg flex items-center justify-center gap-2 shadow-[0_8px_22px_rgba(184,117,24,0.28)] transition-all duration-500"
          >
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
              Get In Touch
            </span>

            <ArrowRight
              size={14}
              className="relative z-10 transition-all duration-300 group-hover:translate-x-1"
            />
          </button>
        </nav>
      </aside>
    </>
  );
}