import { Brain, Cloud, Wifi, ShieldCheck, Leaf, Network, FileText, Trophy, Building2, GraduationCap, ArrowRight,
  Download, BookOpen, Quote, Award, CheckCircle, Medal, Mic, Globe,} from "lucide-react";
import { useEffect, useState } from "react";
import home from "../assets/bghome.png";
import faq from "../assets/FaqH.png";
import mriLogo from "../assets/mriLogo.png";
import rcLogo from "../assets/rc.png";
import siareLogo from "../assets/Slogo.png";
import { Link } from "react-router-dom";

export default function Home() {
  const [showHeroBg, setShowHeroBg] = useState(window.innerWidth > 690);

  useEffect(() => {
    const handleResize = () => {
      setShowHeroBg(window.innerWidth > 690);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const stats = [
    ["300+", "Research Papers"],
    ["Top 2%", "Scientist Worldwide"],
    ["3", "Companies Founded"],
    ["Professor", "University Faculty"],
  ];
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };
  const areas = [
    [Brain, "Artificial Intelligence", "& Machine Learning"],
    [Cloud, "Cloud Computing", "& Big Data"],
    [Wifi, "IoT & Cyber", "Physical Systems"],
    [ShieldCheck, "Cybersecurity", "& Privacy"],
    [Leaf, "Sustainable", "Technologies"],
    [Network, "Blockchain &", "Data Analytics"],
  ];

  const highlights = [
    [
      FileText,
      "300+",
      "Research Papers",
      "Published in top-tier journals & conferences",
    ],
    [
      Trophy,
      "Top 2%",
      "Scientist Worldwide",
      "Stanford University Global Ranking",
    ],
    [
      Building2,
      "3",
      "Companies Founded",
      "Building innovative solutions for impact",
    ],
    [
      GraduationCap,
      "Professor",
      "University Faculty",
      "Teaching & guiding future researchers",
    ],
  ];

  const items = [
    [Award, "Top 2% Scientist", "Worldwide", "Stanford University Study"],
    [Medal, "High Impact Researcher", "Award", "For Outstanding Contributions"],
    [Trophy, "Best Paper Awards", "Multiple International Conferences"],
    [BookOpen, "Editorial Board Member", "Reputed Journals"],
    [Mic, "Keynote Speaker", "International Conferences"],
  ];

  const organizations = [
    {
      logo: mriLogo,
      fullName: "Multidisciplinary Institute of India",
      desc: "A research organization dedicated to advancing mathematical research and its real-world applications.",
      url: "mri-india.org",
      link: "https://journals.mriindia.com",
    },
    {
      logo: rcLogo,
      fullName: "Researcher Connect Innovation and Impact Private Limited",
      desc: "An innovation-driven company fostering researcher collaboration and delivering impactful solutions.",
      url: "researcherconnect.com",
      link: "https://www.researcherconnect.com",
    },
    {
      logo: siareLogo,
      fullName: "Society of Integrated Academic Research and Education",
      desc: "A society working for social impact through education, research and community development initiatives.",
      url: "siaresociety.org",
      link: "https://siaresociety.org",
    },
  ];
  return (
    <main className="bg-[#fbfaf8] text-[#1f1f1f] overflow-hidden">
      {/* HERO */}
      <section
        className="
    relative xl:h-[510px] md:h-[440px] sm:h-[480px] h-auto overflow-hidden flex items-center bg-[#fbfaf8] bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{
          backgroundImage: showHeroBg ? `url(${home})` : "none",
        }}
      >
        <div className="relative z-20 max-w-[1180px] mx-auto w-full px-[46px] max-lg:px-6">
          <div className="w-[455px] max-w-full xl:pt-[10px] md:pt-[2px]">
            <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#b87518] mb-[12px]">
              Researcher. Educator. Entrepreneur.
            </p>
            <h1 className="font-serif text-[#161616] xl:text-[42px] lg:text-[40px] md:text-[32px] sm:text-[30px] text-[24px] leading-[1.08] font-medium tracking-[-0.4px]">
              Advancing Knowledge.
              <br />
              Creating Impact.
              <br />
              Inspiring Future.
            </h1>
            <div className="w-[38px] h-[3px] bg-[#b87518] mt-[17px] mb-[17px]" />
            <p className="text-[13px] leading-[1.65] text-[#4f4f4f] max-w-[390px]">
              Ranked in the Top 2% of Scientists Worldwide for scientific impact
              and innovation with 300+ research papers in reputed journals and
              conferences.
            </p>
            <div className="grid grid-cols-4 mt-[30px] w-[470px] max-w-full mx-[-24px]">
              {stats.map(([num, label], index) => (
                <div
                  key={label}
                  className={`text-center px-[13px] ${
                    index !== 0 ? "border-l border-[#ddcdbb]" : ""
                  }`}
                >
                  <div className="flex justify-center text-[#b87518] mb-[8px]">
                    {index === 0 && <BookOpen size={21} strokeWidth={1.6} />}
                    {index === 1 && <Trophy size={21} strokeWidth={1.6} />}
                    {index === 2 && <Building2 size={21} strokeWidth={1.6} />}
                    {index === 3 && (
                      <GraduationCap size={21} strokeWidth={1.6} />
                    )}
                  </div>

                  <p className="text-[14px] leading-none font-bold text-[#111]">
                    {num}
                  </p>

                  <p className="text-[9px] leading-[1.25] text-[#555] mt-[5px]">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-[14px] mt-[29px]">
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

                <span className="relative z-10">Explore My Work</span>

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

              <button
                className="
  group
  relative
  overflow-hidden

  h-[42px]
  px-[20px]

  bg-white
  border
  border-[#d8d0c7]

  text-[#222]
  text-[13px]
  font-semibold

  rounded-[6px]

  flex
  items-center
  gap-[8px]

  transition-all
  duration-500
  ease-out

  hover:border-[#b87518]
  hover:text-[#b87518]

  hover:-translate-y-[3px]
  hover:scale-[1.01]

  hover:bg-[#fffaf2]

  hover:shadow-[0_12px_28px_rgba(184,117,24,0.14)]

  active:scale-[0.98]
  "
              >
                {/* subtle slide glow */}
                <span
                  className="
    absolute
    inset-0

    opacity-0
    group-hover:opacity-100

    bg-[linear-gradient(120deg,transparent,rgba(184,117,24,.08),transparent)]

    translate-x-[-100%]
    group-hover:translate-x-[120%]

    transition-all
    duration-[1100ms]
    "
                />

                <span className="relative z-10">Download CV</span>

                <Download
                  size={14}
                  className="
    relative
    z-10

    transition-all
    duration-500

    group-hover:translate-y-[2px]
    group-hover:scale-110
    group-hover:text-[#b87518]
    "
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-[54px]">
        <div className="max-w-[1120px] mx-auto px-5">
          <p className="text-center text-[12px] uppercase tracking-[1.8px] text-[#b87518] font-bold mb-2">
            About Me
          </p>

          <h2 className="text-center font-serif text-[22px] md:text-[26px] font-bold text-[#171717]">
            Passionate About Research and Real-World Impact
          </h2>

          <div className="grid lg:grid-cols-[42%_58%] gap-10 lg:gap-12 mt-9 items-start">
            {/* LEFT CONTENT */}
            <div>
              <p className="text-[14px] leading-[1.85] text-[#3f3e3e] max-w-[430px]">
                I am a researcher, educator, and entrepreneur dedicated to
                solving real-world challenges through innovative research and
                emerging technologies. My work spans multiple domains with a
                mission to create sustainable and scalable impact for society.
              </p>

              <ul className="mt-6 space-y-[13px] text-[14px] text-[#333]">
                {[
                  "Top 2% Scientist in the World identified by Stanford University",
                  "Expert in Emerging Technologies & Innovation",
                  "Mentor, Professor & Editorial Board Member",
                  "Strong Industry-Academia Collaboration",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={15}
                      className="text-[#b87518] mt-[3px] shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className="group relative overflow-hidden mt-7 h-[42px] px-[22px] bg-[linear-gradient(135deg,#d69a22_0%,#b87518_45%,#8e5b0d_100%)] text-white text-[13px] font-semibold rounded-[4px] flex items-center gap-[9px] shadow-[0_8px_22px_rgba(184,117,24,0.28)] transition-all duration-500 hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_18px_35px_rgba(184,117,24,0.42)] active:scale-[0.98]">
                <span className="absolute inset-0 -translate-x-[120%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.35),transparent)] group-hover:translate-x-[220%] transition-transform duration-[1200ms]" />
                <span className="relative z-10">Read More About Me</span>
                <ArrowRight
                  size={14}
                  className="relative z-10 transition-all duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* RIGHT CARDS */}
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                [
                  Award,
                  "Top 2%",
                  "Scientist Worldwide",
                  "Stanford University Study",
                ],
                [
                  FileText,
                  "300+",
                  "Research Papers",
                  "Published in reputed journals & conferences",
                ],
                [
                  Building2,
                  "3",
                  "Companies Founded",
                  "Focused on innovation and real-world solutions",
                ],
                [
                  GraduationCap,
                  "Professor",
                  "University Faculty",
                  "Teaching & guiding future researchers",
                ],
              ].map(([Icon, title, sub, desc]) => (
                <div
                  key={sub}
                  className="
              min-h-[128px]
              bg-white
              border
              border-[#e9e2da]
              rounded-[7px]
              px-8
              py-6
              flex
              items-center
              gap-7
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_14px_35px_rgba(0,0,0,0.08)]
            "
                >
                  <Icon
                    size={48}
                    strokeWidth={1.9}
                    className="text-[#b87518] shrink-0"
                  />

                  <div>
                    <h3 className="text-[19px] font-semibold text-[#222] leading-none">
                      {title}
                    </h3>

                    <p className="text-[13px] font-bold text-[#222] mt-2">
                      {sub}
                    </p>

                    <p className="text-[12px] text-[#2b2b2b] leading-[1.6] mt-3 max-w-[210px]">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section className="py-[48px] bg-[#fbfaf8]">
        <div className="max-w-[1120px] mx-auto px-5">
          <p className="text-center text-[12px] uppercase tracking-[1.8px] text-[#b87518] font-bold mb-[8px]">
            Research Areas
          </p>

          <h2 className="text-center font-serif text-[22px] md:text-[26px] font-bold text-[#171717] leading-tight">
            Exploring. Innovating. Impacting.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[18px] mt-[34px]">
            {areas.map(([Icon, title, sub]) => (
              <div
                key={title}
                className="
            bg-white
            border
            border-[#e9e2da]
            rounded-[7px]
            h-[150px]
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-4
            transition-all
            duration-300
            group
            hover:-translate-y-2
            hover:shadow-[0_14px_35px_rgba(0,0,0,0.08)]
          "
              >
                <Icon
                  size={48}
                  strokeWidth={1.5}
                  className="text-[#b87518] mb-[18px] transition-all duration-300 group-hover:scale-110"
                />

                <p className="text-[13px] font-bold text-[#222] leading-[1.35]">
                  {title}
                </p>

                <p className="text-[13px] font-bold text-[#222] leading-[1.35]">
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-[50px] bg-white">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-[34px]">
            <div>
              <p className="text-[12px] uppercase tracking-[2px] text-[#b87518] font-bold mb-[8px]">
                Research Highlights
              </p>

              <h2 className="font-serif text-[22px] md:text-[26px] leading-tight text-[#171717] font-semibold">
                Selected Highlights
              </h2>
            </div>
            <Link to="/achievements">
              <button
                className="
          group
          relative
          overflow-hidden
          h-[42px]
          px-[22px]
          border
          border-[#d6a45a]
          text-[#b87518]
          text-[13px]
          font-semibold
          rounded-[4px]
          flex
          items-center
          gap-[9px]
          transition-all
          duration-500
          hover:text-white
          hover:-translate-y-[2px]
          hover:shadow-[0_12px_28px_rgba(184,117,24,0.22)]
        "
              >
                <span className="absolute inset-0 bg-[linear-gradient(135deg,#d69a22_0%,#b87518_45%,#8e5b0d_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">View All Achievements</span>
                <ArrowRight
                  size={15}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            {highlights.map(([Icon, title, sub, desc]) => (
              <div
                key={sub}
                className="
            bg-white
            border
            border-[#e9e2da]
            rounded-[7px]
            h-[150px]
            px-[22px]
            py-[22px]
            flex
            items-center
            gap-[22px]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_14px_35px_rgba(0,0,0,0.08)]
          "
              >
                <div className="w-[66px] h-[66px] rounded-full bg-[#f5eee6] flex items-center justify-center shrink-0">
                  <Icon
                    size={34}
                    strokeWidth={1.5}
                    className="text-[#b87518]"
                  />
                </div>

                <div>
                  <h3 className="text-[19px] font-semibold text-[#222] leading-none">
                    {title}
                  </h3>

                  <p className="text-[14px] font-semibold text-[#222] mt-[8px] leading-[1.3]">
                    {sub}
                  </p>

                  <p className="text-[13px] text-[#555] leading-[1.55] mt-[12px]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="py-[50px] bg-[#fbfaf8]">
        <div className="max-w-[1120px] mx-auto px-5">
          <p className="text-center text-[12px] uppercase tracking-[2px] text-[#b87518] font-bold mb-[8px]">
            Companies Founded
          </p>
          <h2 className="text-center font-serif text-[22px] md:text-[26px] font-bold text-[#171717] leading-tight">
            Building Innovation. Creating Impact.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {organizations.map((o, i) => (
              <div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                variants={fadeUp}
                className="bg-white border border-[#ede8de] rounded-xl p-6 hover:shadow-[0_4px_24px_rgba(200,146,42,0.13)] transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src={o.logo}
                      alt={`${o.name} Logo`}
                      className="w-14 h-14 object-contain"
                    />
                  </div>

                  <div className="pt-1">
                    {o.fullName && (
                      <p className="text-[15px] font-semibold text-[#1A1A1A] mt-0.5 leading-snug">
                        {o.fullName}
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-[13.5px] text-[#1A1A1A] leading-[1.75] mb-5">
                  {o.desc}
                </p>
                <a
                  href={o.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-[#6B7280] flex items-center gap-1.5 hover:text-[#C8922A] transition-colors"
                >
                  <Globe size={13} />
                  {o.url}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="py-[48px] bg-white">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-[26px]">
            <div>
              <p className="text-[12px] uppercase tracking-[2px] text-[#b87518] font-bold mb-[8px]">
                Recent Publications
              </p>

              <h2 className="font-serif text-[22px] md:text-[26px] leading-tight text-[#171717] font-semibold">
                Latest Research Contributions
              </h2>
            </div>

            <button className="group relative overflow-hidden h-[42px] px-[22px] border border-[#d6a45a] text-[#b87518] text-[13px] font-semibold rounded-[4px] flex items-center gap-[9px] transition-all duration-500 hover:text-white hover:-translate-y-[2px] hover:shadow-[0_12px_28px_rgba(184,117,24,0.22)]">
              <span className="absolute inset-0 bg-[linear-gradient(135deg,#d69a22_0%,#b87518_45%,#8e5b0d_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">View All Publications</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            {[
              [
                "A Hybrid Deep Learning Model for Intelligent Decision-Making in IoT Environments",
                "IEEE Internet of Things Journal",
                "2024",
              ],
              [
                "Secure and Efficient Framework for Edge Computing in Smart Cities",
                "Future Generation Computer Systems",
                "2024",
              ],
              [
                "Blockchain-Based Secure Data Sharing Framework for IoT Applications",
                "Computers & Security",
                "2023",
              ],
              [
                "An Energy-Efficient Routing Protocol for IoT Networks Using Machine Learning",
                "IEEE Sensors Journal",
                "2023",
              ],
            ].map(([title, journal, year]) => (
              <div
                key={title}
                className="
            bg-white
            border
            border-[#e9e2da]
            rounded-[7px]
            min-h-[172px]
            px-[22px]
            py-[22px]
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-[0_14px_35px_rgba(0,0,0,0.08)]
          "
              >
                <h3 className="text-[15px] font-[600] text-[#171717] leading-[1.45] min-h-[68px]">
                  {title}
                </h3>

                <p className="text-[12px] text-[#333] mt-[14px] leading-[1.4]">
                  {journal}
                </p>

                <p className="text-[13px] text-[#333] mt-[4px]">{year}</p>

                <button className="group/read text-[#b87518] text-[13px] font-bold mt-[12px] flex items-center gap-[10px]">
                  Read More
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover/read:translate-x-1"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-[26px]">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {items.map(([Icon, title, sub, desc]) => (
              <div
                key={title}
                className="flex items-center gap-3 hover:-translate-y-1 transition-all duration-300"
              >
                <Icon
                  size={34}
                  strokeWidth={1.6}
                  className="text-[#b87518] shrink-0"
                />

                <div>
                  <h4 className="text-[12px] font-bold text-[#222] leading-[1.2]">
                    {title}
                  </h4>

                  {sub && (
                    <p className="text-[11px] font-semibold text-[#333] leading-[1.2]">
                      {sub}
                    </p>
                  )}

                  <p className="text-[10px] text-[#555] mt-[2px] leading-[1.2]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* QUOTE */}
      <section
        className="
    relative
    min-h-[200px]
    bg-[#efe2d1]
    bg-cover
    bg-center
    bg-no-repeat
    overflow-hidden
    flex
    items-center
  "
        style={{
          backgroundImage: `url(${faq})`,
        }}
      >
        <div className="absolute inset-0 bg-white/0 max-md:bg-white/55" />

        <div className="relative z-10 max-w-[1120px] mx-auto w-full px-5">
          <div className="flex items-start gap-[18px] max-w-[620px]">
            <Quote
              size={38}
              className="text-[#b87518] shrink-0 mt-[2px]"
              fill="#b87518"
              strokeWidth={0}
            />

            <div>
              <p className="font-sans text-[20px] md:text-[22px] leading-[1.7] font-semibold text-[#333]">
                Research is not just about discovering new knowledge,
                <br className="hidden md:block" />
                but about creating a better future for humanity.
              </p>

              <p className="text-[#b87518] font-bold text-[15px] mt-[12px]">
                — Dr. Dharmesh Dhabliya
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
