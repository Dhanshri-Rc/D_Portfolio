import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "../assets/Dlogo.png";

function CircleIcon({ children }) {
  return (
    <button className="w-[32px] h-[32px] rounded-full border border-[#8e6a3a] flex items-center justify-center text-[12px] font-semibold text-[#333] hover:bg-[#b87518] hover:text-white hover:border-[#b87518] transition-all duration-300">
      {children}
    </button>
  );
}

export default function Footer() {
  const links = [
    "About Me",
    "Research",
    "Publications",
    "Companies",
    "Media",
    "Achievements",
    
  ];

  return (
    <footer className="bg-[#fbfaf8] border-t border-[#eee2d4]">
      <div className="max-w-[1160px] mx-auto px-6 py-[34px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.7fr_1fr_1.25fr] gap-8 lg:gap-0">
          
          {/* Brand */}
          <div className="lg:pr-10">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-[44px] h-[44px] object-contain" />
              <div>
                <h3 className="font-serif text-[18px] font-semibold text-[#1d1d1d] leading-tight">
                  Dr. Dharmesh Dhabliya
                </h3>
                <p className="text-[10px] text-[#444] mt-1">
                  Researcher • Professor • Entrepreneur
                </p>
              </div>
            </div>

            <p className="text-[13px] text-[#444] leading-[1.75] mt-5 max-w-[300px]">
              Dedicated to advancing knowledge, fostering innovation, and
              inspiring the next generation of researchers and entrepreneurs.
            </p>

            <div className="flex gap-3 mt-5">
              <CircleIcon>in</CircleIcon>
              <CircleIcon>G</CircleIcon>
              <CircleIcon>RG</CircleIcon>
              <CircleIcon>▣</CircleIcon>
            </div>
          </div>

          {/* Links */}
          <div className="lg:border-l lg:border-[#e0d2bf] lg:px-10">
            <h4 className="text-[14px] font-bold text-[#222] mb-4">
              Quick Links
            </h4>

            <div className="space-y-[8px]">
              {links.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-[12px] text-[#444] hover:text-[#b87518] hover:translate-x-1 transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:border-l lg:border-[#e0d2bf] lg:px-10">
            <h4 className="text-[14px] font-bold text-[#222] mb-4">
              Contact Info
            </h4>

            <div className="space-y-4">
              <p className="flex items-center gap-3 text-[12px] text-[#444]">
                <Mail size={15} className="text-[#555]" />
                dharmesh.dhabliya@example.com
              </p>

              <p className="flex items-center gap-3 text-[12px] text-[#444]">
                <Phone size={15} className="text-[#555]" />
                +91 98765 43210
              </p>

              <p className="flex items-center gap-3 text-[12px] text-[#444]">
                <MapPin size={15} className="text-[#555]" />
                India
              </p>
            </div>

            <button className="mt-5 h-[40px] px-5 rounded-[4px] bg-[linear-gradient(135deg,#d69a22_0%,#b87518_45%,#8e5b0d_100%)] text-white text-[12px] font-semibold flex items-center gap-2 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(184,117,24,0.28)] transition-all duration-300">
              Let’s Connect
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Subscribe */}
          <div className="lg:border-l lg:border-[#e0d2bf] lg:pl-10">
            <h4 className="text-[14px] font-bold text-[#222] mb-4">
              Stay Updated
            </h4>

            <p className="text-[12px] text-[#444] leading-[1.75] max-w-[280px] mb-5">
              Subscribe to get the latest updates on my research and publications.
            </p>

            <input
              type="email"
              placeholder="Your email address"
              className="w-full max-w-[290px] h-[40px] bg-white border border-[#ddd] rounded-[4px] px-4 text-[12px] outline-none focus:border-[#b87518]"
            />

            <button className="mt-4 h-[40px] px-6 rounded-[4px] bg-[linear-gradient(135deg,#d69a22_0%,#b87518_45%,#8e5b0d_100%)] text-white text-[12px] font-semibold hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(184,117,24,0.28)] transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#252525]">
        <div className="max-w-[1160px] mx-auto px-6 h-[48px] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-gray-300">
            © 2024 Dr. Dharmesh Dhabliya. All Rights Reserved.
          </p>

          <div className="flex gap-8">
            <a href="#" className="text-[11px] text-gray-300 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="text-[11px] text-gray-300 hover:text-white transition">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}