import {
  Trophy, FileBadge, Users, Globe, BookOpen, Medal, Star,
  ShieldCheck, Mic, Building2, Sprout, BarChart3, ArrowRight,
} from "lucide-react";

import achievementsBg from "../assets/achbg.png";

export default function Achievements() {
  const stats = [
    [Trophy, "25+", "Awards & Honors"],
    [FileBadge, "15+", "Research Grants"],
    [Users, "50+", "Invited Talks & Lectures"],
    [Globe, "30+", "International Collaborations"],
    [BookOpen, "10+", "Books & Book Chapters"],
  ];

  const awards = [
    [Medal, "2024", "Top 2% Scientist in the World", "Recognized by Stanford University for impactful research and citations in the field."],
    [Medal, "2023", "Excellence in Research Award", "Honored for outstanding contributions to research and innovation."],
    [Star, "2022", "Best Research Paper Award", "Awarded at International Conference on Data Engineering."],
    [ShieldCheck, "2021", "Young Researcher Award", "Recognized for innovative research and significant academic impact."],
    [Medal, "2020", "Outstanding Educator Award", "For excellence in teaching, mentorship, and student development."],
  ];

  const milestones = [
    ["2024", Globe, "Global Recognition", "Named among the Top 2% Scientists in the World by Stanford University."],
    ["2023", FileBadge, "Major Research Impact", "Research work surpassed 2500+ citations with an h-index of 28."],
    ["2022", Building2, "International Collaborations", "Established collaborations with leading universities and research institutions worldwide."],
    ["2021", Mic, "Invited Speaker", "Delivered 50+ keynote speeches, invited talks, and guest lectures at international platforms."],
    ["2020", Users, "Entrepreneurial Journey", "Founded Researcher Connection and SIARE Society to drive innovation and social impact."],
    ["2018", BookOpen, "Research Contributions", "Published impactful research papers in top-tier journals and conferences."],
  ];

  return (
    <section className="bg-[#fbfaf8] text-[#171717]">
      <div
        className="h-[350px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${achievementsBg})` }}
      >
        <div className="max-w-[1080px] mx-auto px-6 w-full">
          <div className="max-w-[360px]">
            <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#b87518] mb-[12px]">
          My   Achievements
      </p>
               <h1 className="font-serif text-[#161616] xl:text-[42px] lg:text-[40px] md:text-[32px] sm:text-[30px] text-[24px] leading-[1.08] font-medium tracking-[-0.4px]">
        Achievements
      </h1>

      <div className="w-[38px] h-[3px] bg-[#b87518] mt-[17px] mb-[17px]" />

      <p className="text-[14px] leading-[1.65] text-[#4f4f4f] max-w-[390px]">
          A journey of dedication, perseverance, and impact — recognized
              through awards, milestones, and contributions that drive innovation
              and create meaningful change.
      </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1080px] mx-auto px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-5 bg-white border border-[#eadfd3] rounded-[6px] mb-6">
          {stats.map(([Icon, num, label], index) => (
            <div
              key={label}
              className={`text-center py-5 px-3 ${index !== 0 ? "md:border-l border-[#eadfd3]" : ""}`}
            >
              <Icon size={28} strokeWidth={1.6} className="mx-auto text-[#b87518] mb-2" />
              <h3 className="text-[19px] font-bold leading-none">{num}</h3>
              <p className="text-[10px] font-semibold text-[#222] mt-2">{label}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="font-serif text-[22px]">Awards & Recognitions</h2>
          <button className="text-[#b87518] text-[11px] font-bold flex items-center gap-1">
            View All Awards <ArrowRight size={11} />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {awards.map(([Icon, year, title, desc]) => (
            <div
              key={title}
              className="bg-white border border-[#eadfd3] rounded-[6px] p-5 text-center min-h-[210px]"
            >
              <Icon size={42} strokeWidth={1.5} className="mx-auto text-[#b87518] mb-2" />
              <p className="text-[#b87518] text-[10px] font-bold">{year}</p>
              <h3 className="font-serif text-[13px] leading-[1.35] mt-3 min-h-[38px] font-semibold">
                {title}
              </h3>
              <p className="text-[11px] text-[#272626] leading-[1.55] mt-3">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="font-serif text-[22px]">Key Milestones</h2>
          <button className="text-[#b87518] text-[10px] font-bold flex items-center gap-1">
            View Timeline <ArrowRight size={11} />
          </button>
        </div>

        <div className="relative mb-8">
          <div className="absolute left-[95px] top-0 bottom-0 w-[1px] bg-[#d8c7b3] max-md:left-[64px]" />

          <div className="space-y-3">
            {milestones.map(([year, Icon, title, desc]) => (
              <div
                key={title}
                className="grid grid-cols-[60px_48px_1fr] max-md:grid-cols-[42px_44px_1fr] items-center gap-4"
              >
                <p className="text-[#b87518] text-[11px] font-bold text-right">
                  {year}
                </p>

                <div className="relative flex justify-center">
                  <span className="absolute top-1/2 -translate-y-1/2 w-[9px] h-[9px] bg-white border-2 border-[#b87518] rounded-full z-10" />
                  <div className="w-[40px] h-[40px] rounded-full bg-white border border-[#eadfd3] flex items-center justify-center text-[#777] ml-8 max-md:ml-5">
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="bg-white border border-[#eadfd3] rounded-[6px] px-4 py-3">
                  <h3 className="font-bold text-[13px]">{title}</h3>
                  <p className="text-[11px] text-[#555] leading-[1.5] mt-1">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="font-serif text-[22px] text-center mb-5">
          Impact & Contributions
        </h2>

        <div className="grid md:grid-cols-3 gap-5 pb-8">
          {[
            [Users, "1000+", "Students Mentored", "Guided and mentored graduate and undergraduate students in research and innovation."],
            [Sprout, "200+", "Research Projects", "Contributed to funded research projects addressing real-world challenges."],
            [BarChart3, "Societal Impact", "", "Driving meaningful change through research, education, and community initiatives."],
          ].map(([Icon, num, title, desc], index) => (
            <div
              key={title}
              className="bg-white border border-[#eadfd3] rounded-[6px] p-5 flex items-center gap-5"
            >
              <div
                className={`w-[86px] h-[86px] rounded-full flex items-center justify-center shrink-0 ${
                  index === 0
                    ? "bg-[#f4eadc] text-[#b87518]"
                    : index === 1
                    ? "bg-[#edf4e8] text-[#69934a]"
                    : "bg-[#edf2fb] text-[#376eb5]"
                }`}
              >
                <Icon size={40} strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="text-[17px] font-semibold leading-none">{num}</h3>
                <p className="font-semibold text-[16px] mt-1">{title}</p>
                <p className="text-[13px] text-[#343333] leading-[1.5] mt-2">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}