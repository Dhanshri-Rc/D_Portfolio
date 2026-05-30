import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mic,
  Headphones,
  Newspaper,
  Radio,
  Play,
  Image,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import bg7 from "../assets/images/bg 7.png";
import image from "../assets/images/media1.png";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.07 },
  }),
};

const tabs = [
  { label: "All Media", icon: <span className="text-[11px]">⊙</span> },
  { label: "Interviews", icon: <Mic size={14} /> },
  { label: "Talks & Podcasts", icon: <Headphones size={14} /> },
  { label: "News & Features", icon: <Newspaper size={14} /> },
  { label: "Press Releases", icon: <Radio size={14} /> },
  { label: "Videos", icon: <Play size={14} /> },
  { label: "Gallery", icon: <Image size={14} /> },
];

const featured = [
  {
    image,
    type: "Interview",
    bg: "from-blue-900 to-blue-700",
    date: "May 15, 2024",
    title: "Interview on AI & the Future of Smart Cities",
    source: "elets TV",
    sourceColor: "#E74C3C",
  },
  {
    image,
    type: "Podcast",
    bg: "from-gray-900 to-gray-700",
    date: "Apr 22, 2024",
    title: "Podcast: Research, Innovation & Real-World Impact",
    source: "The Research Matters",
    sourceColor: "#C8922A",
  },
  {
    image,
    type: "Talk",
    bg: "from-indigo-900 to-indigo-700",
    date: "Mar 10, 2024",
    title: "Keynote Talk at International Conference on Data Engineering",
    source: "ICDE 2024",
    sourceColor: "#3498DB",
  },
  {
    image,
    type: "Feature",
    bg: "from-amber-800 to-amber-600",
    date: "Feb 5, 2024",
    title: "Top 2% Scientist in the World: Elsevier Stanford List 2024",
    source: "Times of India (Education Times)",
    sourceColor: "#E67E22",
  },
];

const latest = [
  {
    image,
    title: "Expert Talk on Cybersecurity & Privacy in the Digital Era",
    desc: "Discussion on emerging trends in cybersecurity, data privacy, and building resilient digital systems.",
    type: "Talk",
    date: "Jan 28, 2024",
  },
  {
    image,
    title: "Research Collaboration is the Key to Solving Global Challenges",
    desc: "Featured in SiliconIndia Magazine discussing the importance of interdisciplinary research and global collaboration.",
    type: "Feature",
    date: "Jan 15, 2024",
  },
  {
    image,
    title: "Podcast: The Journey of a Researcher & Entrepreneur",
    desc: "A candid conversation about research journey, entrepreneurship, and future aspirations.",
    type: "Podcast",
    date: "Dec 30, 2023",
  },
  {
    image,
    title: "Interview: Innovation, Impact & the Road Ahead",
    desc: "Sharing perspectives on innovation ecosystems and the role of research in societal transformation.",
    type: "Interview",
    date: "Dec 12, 2023",
  },
  {
    image,
    title: "Invited Talk on Machine Learning Applications",
    desc: "Delivered an invited talk on advanced machine learning techniques and their real-world applications.",
    type: "Talk",
    date: "Nov 25, 2023",
  },
];

const typeColors = {
  Talk: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
  Feature: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-200",
  },
  Podcast: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "border-purple-200",
  },
  Interview: {
    bg: "bg-[#FDF8F0]",
    text: "text-[#C8922A]",
    border: "border-[#C8922A]/30",
  },
};

const gallery = [
  { image, alt: "Conference Speech" },
  { image, alt: "Interview Session" },
  { image, alt: "Conference Hall" },
  { image, alt: "Camera Recording" },
  { image, alt: "Keynote Talk" },
];

export default function Media() {
  const [activeTab, setActiveTab] = useState("All Media");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[300px] sm:min-h-[320px] lg:min-h-[330px] bg-[#FAF8F4] overflow-hidden">
        <div className="absolute inset-0 md:left-auto md:right-0 md:top-0 md:h-full md:w-[58%]">
          <img
            src={bg7}
            alt=""
            className="h-full w-full object-cover object-right opacity-25 md:opacity-100"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #FAF8F4 0%, #FAF8F4 16%, rgba(250,248,244,0.95) 30%, rgba(250,248,244,0.7) 48%, transparent 76%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-10 sm:py-12 lg:py-[48px]">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[#C8922A] text-[10px] sm:text-[11px] font-extrabold tracking-[0.18em] uppercase mb-4 sm:mb-5"
          >
            In The Media
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="font-serif text-[#161616] text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] xl:text-[42px] font-medium leading-[1.08] tracking-[-0.5px] mb-4"
          >
            Sharing Ideas.
            <br />
            Inspiring Change.
          </motion.h1>
          <div className="w-12 h-0.5 bg-[#C8922A] mb-5" />
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-[#374151] text-[13.5px] sm:text-[14px] leading-[1.8] sm:leading-[1.9] font-medium max-w-[430px]"
          >
            Explore my interviews, talks, features, and press coverage across
            various platforms where I share insights on research, innovation,
            and impact.
          </motion.p>
        </div>
      </section>

      {/* Tabs */}
      <section className="hidden md:block bg-white border-b border-[#e8e4dd] sticky top-16 z-30">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex items-stretch justify-between overflow-x-auto no-scrollbar scroll-smooth">
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(tab.label)}
                  className={`relative flex-1 shrink-0 min-w-[105px] sm:min-w-[135px] h-[62px] sm:h-[74px] px-3 sm:px-4 pt-2 pb-2 flex flex-col items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-[12px] font-semibold whitespace-nowrap transition-all duration-300 hover:bg-[#FAF8F4] ${
                    activeTab === tab.label
                      ? "text-[#C8922A]"
                      : "text-[#374151] hover:text-[#C8922A]"
                  }`}
                >
                  <span
                    className={`flex items-center justify-center transition-all duration-300 ${
                      activeTab === tab.label
                        ? "text-[#C8922A] scale-110"
                        : "text-[#4B5563]"
                    } [&_svg]:w-[18px] [&_svg]:h-[18px] sm:[&_svg]:w-[24px] sm:[&_svg]:h-[24px] [&_svg]:stroke-[1.7]`}
                  >
                    {tab.icon}
                  </span>

                  <span>{tab.label}</span>

                  {activeTab === tab.label && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70px] sm:w-[105px] h-[2px] bg-[#C8922A]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
          {/* Featured Media */}
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <h2 className="font-serif text-[21px] font-medium text-[#1A1A1A]">
                Featured Media
              </h2>
              <a
                href="#"
                className="text-[#C8922A] text-[12px] font-semibold flex items-center gap-1 hover:gap-2 transition-all shrink-0"
              >
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featured.map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.08}
                  variants={fadeUp}
                  className="bg-white rounded-[6px] overflow-hidden border border-[#e8e3dc] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_22px_rgba(200,146,42,0.14)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative h-[160px] sm:h-[145px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 bottom-3 bg-white/85 text-[#374151] text-[10px] font-semibold px-2 py-[3px] rounded-[2px]">
                      {item.type}
                    </span>
                  </div>
                  <div className="px-4 pt-3 pb-4">
                    <p className="text-[11px] text-[#8a8f98] mb-2">
                      {item.date}
                    </p>
                    <h4 className="text-[14px] font-serif font-medium text-[#1A1A1A] leading-[1.35] sm:min-h-[58px] mb-3 group-hover:text-[#C8922A] transition-colors">
                      {item.title}
                    </h4>
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className="text-[11px] font-semibold"
                        style={{ color: item.sourceColor }}
                      >
                        {item.source}
                      </span>
                      <ExternalLink
                        size={13}
                        className="text-[#6B7280] group-hover:text-[#C8922A] transition-colors shrink-0"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Latest Media */}
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <h2 className="font-serif text-[22px] font-medium text-[#1A1A1A]">
                Latest Media
              </h2>
              <a
                href="#"
                className="text-[#C8922A] text-[12px] font-semibold flex items-center gap-1 hover:gap-2 transition-all shrink-0"
              >
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="space-y-3 lg:space-y-0">
              {latest.map((item, i) => {
                const color = typeColors[item.type] || typeColors.Talk;
                return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i * 0.07}
                    variants={fadeUp}
                    className="group grid grid-cols-1 sm:grid-cols-[145px_1fr] lg:grid-cols-[170px_1fr_90px_120px_24px] gap-3 sm:gap-5 lg:items-center p-3 sm:px-0 sm:py-3 rounded-[6px] sm:rounded-none border border-[#e8e4dd] sm:border-x-0 sm:border-t-0 bg-white hover:bg-[#FAF8F4]/60 transition-all duration-300"
                  >
                    <div className="w-full sm:w-[145px] lg:w-[150px] h-[150px] sm:h-[70px] rounded-[5px] overflow-hidden bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-serif text-[15px] font-medium text-[#1A1A1A] leading-[1.35] mb-1 group-hover:text-[#C8922A] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[12.5px] text-[#374151] leading-[1.55] max-w-[560px]">
                        {item.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-3 sm:col-span-2 lg:col-span-1 lg:block">
                      <span
                        className={`inline-flex items-center justify-center text-[11px] font-medium px-4 py-[4px] rounded-[5px] text-center ${color.bg} ${color.text}`}
                      >
                        {item.type}
                      </span>
                      <span className="text-[12px] text-[#374151] lg:hidden">
                        {item.date}
                      </span>
                    </div>

                    <span className="hidden lg:block text-[12px] text-[#374151]">
                      {item.date}
                    </span>

                    <ExternalLink
                      size={14}
                      className="hidden lg:block text-[#4B5563] group-hover:text-[#C8922A] cursor-pointer transition-colors"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Media Gallery */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-serif text-[24px] font-medium text-[#1A1A1A]">
                Media Gallery
              </h2>

              <a
                href="#"
                className="text-[#C8922A] text-[12px] font-semibold flex items-center gap-1 hover:gap-2 transition-all"
              >
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="relative">
              {/* Prev */}
              <button
                onClick={scrollPrev}
                className="
      absolute left-0 top-1/2 -translate-y-1/2 z-20
      w-10 h-10 rounded-full
      bg-white shadow-lg
      flex items-center justify-center
      hover:bg-[#FAF8F4]
      transition-all
    "
              >
                <ChevronLeft size={18} />
              </button>

              {/* Carousel */}
              <div className="overflow-hidden mx-12" ref={emblaRef}>
                <div className="flex">
                  {gallery.map((item, i) => (
                    <div
                      key={i}
                      className="
            flex-[0_0_100%]
            sm:flex-[0_0_50%]
            lg:flex-[0_0_25%]
            px-2
          "
                    >
                      <div
                        className="
              h-[150px]
              rounded-lg
              overflow-hidden
              shadow-[0_3px_10px_rgba(0,0,0,0.08)]
              cursor-pointer
              group
            "
                      >
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="
                w-full h-full object-cover
                transition-transform duration-500
                group-hover:scale-105
              "
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next */}
              <button
                onClick={scrollNext}
                className="
      absolute right-0 top-1/2 -translate-y-1/2 z-20
      w-10 h-10 rounded-full
      bg-white shadow-lg
      flex items-center justify-center
      hover:bg-[#FAF8F4]
      transition-all
    "
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}