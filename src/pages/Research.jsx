import {
  ArrowRight,
  ExternalLink,
  Brain,
  Cloud,
  Wifi,
  ShieldCheck,
  Leaf,
  Boxes,
  CircleCheck,
} from "lucide-react";

import researchBg from "../assets/researchbg.png";

export default function Research() {
  const profiles = [
    ["Scopus", "300+", "Publications", "28", "h-index", "2400+", "Citations"],
    ["Web of Science™", "270+", "Publications", "26", "h-index", "2100+", "Citations"],
    ["Google Scholar", "350+", "Publications", "28", "h-index", "2500+", "Citations"],
  ];

  const areas = [
    [Brain, "Artificial Intelligence", "& Machine Learning"],
    [Cloud, "Cloud Computing", "& Big Data"],
    [Wifi, "IIoT & Cyber", "Physical Systems"],
    [ShieldCheck, "Cybersecurity &", "Privacy"],
    [Leaf, "Sustainable", "Technologies"],
    [Boxes, "Blockchain &", "Data Analytics"],
  ];

  const topics = [
    [Brain, "Intelligent Decision Support Systems Using AI & ML"],
    [Cloud, "Secure & Efficient Frameworks for IoT and Edge Computing"],
    [ShieldCheck, "Privacy-Preserving Techniques in Data Analytics"],
    [Leaf, "Sustainable & Green Technology Solutions"],
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <section
        className="
          relative h-[410px] overflow-hidden flex items-center
          bg-[#fbfaf8] bg-cover bg-center bg-no-repeat
        "
        style={{ backgroundImage: `url(${researchBg})` }}
      >
        <div className="relative z-20 max-w-[1180px] mx-auto w-full px-[46px] max-lg:px-6">
          <div className="max-w-[470px]">
           
  <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#b87518] mb-[12px]">
          My Research
      </p>

      <h1 className="font-serif text-[#161616] xl:text-[42px] lg:text-[40px] md:text-[32px] sm:text-[30px] text-[24px] leading-[1.08] font-medium tracking-[-0.4px]">
        Advancing Knowledge. <br />
              Solving Real-World Problems.
      </h1>

      <div className="w-[38px] h-[3px] bg-[#b87518] mt-[17px] mb-[17px]" />

      <p className="text-[13px] leading-[1.65] text-[#4f4f4f] max-w-[390px]">
         My research focuses on emerging technologies and intelligent
              systems with strong applications in solving real-world challenges.
              I aim to bridge theory and practice through innovative and
              impactful research contributions.
      </p>
            <button
              className="
                group relative overflow-hidden mt-5 h-[38px] px-[20px]
                bg-[linear-gradient(135deg,#d69a22_0%,#b87518_45%,#8e5b0d_100%)]
                text-white text-[12px] font-semibold rounded-[5px]
                flex items-center gap-[8px]
                shadow-[0_8px_22px_rgba(184,117,24,0.28)]
                transition-all duration-500 hover:-translate-y-[3px]
                hover:scale-[1.02] hover:shadow-[0_18px_35px_rgba(184,117,24,0.42)]
              "
            >
              <span className="relative z-10">View My Publications</span>
              <ArrowRight size={13} className="relative z-10" />
            </button>
          </div>
        </div>
      </section>

      {/* PROFILE */}
    {/* PROFILE */}
<section className="max-w-[1120px] mx-auto px-4 sm:px-6 pt-8 pb-4">
  <h2 className="text-center font-serif text-[22px] mb-7">
    Research Profile Overview
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
    {profiles.map((item) => (
      <div
        key={item[0]}
        className="bg-white border border-[#eadfd3] rounded-[6px] px-6 py-5 min-h-[155px] hover:-translate-y-1 hover:shadow-lg transition"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[18px] font-semibold text-[#d67b00]">
            {item[0]}
          </h3>
          <ExternalLink size={13} className="text-[#555]" />
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[1, 3, 5].map((i) => (
            <div key={i}>
              <h4 className="text-[18px] font-bold text-[#111]">{item[i]}</h4>
              <p className="text-[10px] font-semibold text-[#111] mt-1">
                {item[i + 1]}
              </p>
            </div>
          ))}
        </div>

        <button className="mt-5 text-[#b87518] text-[10px] font-bold flex items-center gap-1">
          View {item[0]} Profile <ArrowRight size={11} />
        </button>
      </div>
    ))}
  </div>

  <p className="text-center text-[10px] text-[#111] font-medium mt-5">
    *All numbers are updated as per latest available data.
  </p>
</section>

{/* AREAS */}
<section className="max-w-[1120px] mx-auto px-4 sm:px-6 py-3">
  <h2 className="text-center font-serif text-[21px] mb-1">
    Research Areas
  </h2>
  <div className="w-[28px] h-[2px] bg-[#b87518] mx-auto mb-7" />

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
    {areas.map(([Icon, title, sub]) => (
      <div
        key={title}
        className="bg-white border border-[#eadfd3] rounded-[6px] min-h-[118px] px-3 py-5 text-center hover:-translate-y-1 hover:shadow-lg transition"
      >
        <Icon size={34} strokeWidth={1.7} className="mx-auto text-[#c47a18] mb-4" />
        <h3 className="text-[10.5px] font-bold leading-[1.35] text-[#111]">
          {title}
        </h3>
        <p className="text-[10.5px] font-bold leading-[1.35] text-[#111]">
          {sub}
        </p>
      </div>
    ))}
  </div>
</section>

{/* HIGHLIGHTS */}
<section className="max-w-[1120px] mx-auto px-4 sm:px-6 py-7">
  <h2 className="font-serif text-[21px] mb-2">Research Highlights</h2>
  <div className="w-[28px] h-[2px] bg-[#b87518] mb-5" />

  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-3">
    {[
      "300+ research publications in reputed journals and conferences",
      "Citations in 2500+ research works globally",
      "h-index of 28 across Scopus, WoS and Google Scholar",
      "Top 2% Scientist in the World in 2024 (Elsevier Stanford List)",
      "Editor in Elsevier and Springer Journals",
      "Active collaborations with researchers and institutions worldwide",
      "Research with real-world impact and industry applications",
      "Mentoring researchers and guiding new innovators",
    ].map((text) => (
      <p key={text} className="flex items-center gap-2 text-[11px] font-medium text-[#222]">
        <CircleCheck size={13} className="text-[#b87518] shrink-0" />
        {text}
      </p>
    ))}
  </div>
</section>

{/* TOPICS */}
<section className="max-w-[1120px] mx-auto px-4 sm:px-6 pb-14">
  <h2 className="font-serif text-[21px] mb-2">Latest Research Topics</h2>
  <div className="w-[28px] h-[2px] bg-[#b87518] mb-7" />

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
    {topics.map(([Icon, title]) => (
      <div
        key={title}
        className="bg-white border border-[#eadfd3] rounded-[6px] min-h-[228px] px-6 py-6 text-center hover:-translate-y-1 hover:shadow-lg transition"
      >
        <div className="w-[52px] h-[52px] rounded-full bg-[#f8f1ea] flex items-center justify-center mx-auto mb-4">
          <Icon size={28} strokeWidth={1.7} className="text-[#c47a18]" />
        </div>

        <h3 className="text-[11px] font-bold leading-[1.45] text-[#111] max-w-[190px] mx-auto">
          {title}
        </h3>

        <p className="text-[10.5px] text-[#555] leading-[1.65] mt-3 max-w-[190px] mx-auto">
          Building adaptive systems for decision making in complex environments.
        </p>

        <button className="mt-4 text-[#b87518] text-[11px] font-bold flex items-center gap-1 mx-auto">
          Read More <ArrowRight size={11} />
        </button>
      </div>
    ))}
  </div>
</section>
    </main>
  );
}