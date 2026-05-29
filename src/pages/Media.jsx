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
import bg7 from "../assets/bg 7.png";
import image from "../assets/media1.png";

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

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[300px] lg:min-h-[330px] bg-[#FAF8F4] overflow-hidden">
        <div className="absolute right-0 top-0 h-full" style={{ width: "58%" }}>
          <img
            src={bg7}
            alt=""
            className="h-full w-full object-cover object-right"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `
      linear-gradient(
        90deg,
        #FAF8F4 0%,
        #FAF8F4 12%,
        rgba(250,248,244,0.95) 24%,
        rgba(250,248,244,0.65) 38%,
        rgba(250,248,244,0.25) 52%,
        transparent 68%
      )
    `,
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-[36px] lg:py-[48px]">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="
text-[#C8922A]
text-[11px]
font-extrabold
tracking-[0.18em]
uppercase
mb-5
"
          >
            In The Media
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="font-serif text-[#161616] xl:text-[42px] lg:text-[40px] md:text-[32px] sm:text-[30px] text-[24px] font-medium leading-[1.08] tracking-[-0.5px] mb-4"
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
            className="
text-[#374151]
text-[14px]
leading-[1.9]
font-medium
max-w-[430px]
"
          >
            Explore my interviews, talks, features, and press coverage across
            various platforms where I share insights on research, innovation,
            and impact.
          </motion.p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-[#e8e4dd] sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`
            relative
            min-w-[135px]
            h-[74px]
            px-4
            pt-3
            pb-2

            flex
            flex-col
            items-center
            justify-center
            gap-2

            text-[12px]
            font-semibold
            whitespace-nowrap

            transition-all duration-300

            ${
              activeTab === tab.label
                ? ""
                : "text-[#374151] hover:text-[#C8922A] "
            }
          `}
              >
                <span
                  className={`
              flex items-center justify-center
              transition-all duration-300

              ${
                activeTab === tab.label
                  ? "text-[#C8922A] scale-110"
                  : "text-[#4B5563]"
              }

              [&_svg]:w-[24px]
              [&_svg]:h-[24px]
              [&_svg]:stroke-[1.7]
            `}
                >
                  {tab.icon}
                </span>

                <span>{tab.label}</span>

                {/* {activeTab === tab.label && (
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[105px] h-[2px] bg-[#C8922A]" />
          )} */}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Featured Media */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-[21px] font-medium text-[#1A1A1A]">
                Featured Media
              </h2>

              <a
                href="#"
                className="text-[#C8922A] text-[12px] font-semibold flex items-center gap-1 hover:gap-2 transition-all"
              >
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featured.map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.08}
                  variants={fadeUp}
                  className="
          bg-white
          rounded-[6px]
          overflow-hidden
          border border-[#e8e3dc]
          shadow-[0_2px_8px_rgba(0,0,0,0.04)]
          hover:shadow-[0_8px_22px_rgba(200,146,42,0.14)]
          transition-all duration-300
          cursor-pointer
          group
        "
                >
                  <div className="relative h-[145px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
              w-full
              h-full
              object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
                    />

                    <span
                      className="
              absolute
              left-3
              bottom-3
              bg-white/85
              text-[#374151]
              text-[10px]
              font-semibold
              px-2
              py-[3px]
              rounded-[2px]
            "
                    >
                      {item.type}
                    </span>
                  </div>

                  <div className="px-4 pt-3 pb-4">
                    <p className="text-[11px] text-[#8a8f98] mb-2">
                      {item.date}
                    </p>

                    <h4
                      className="
              text-[14px]
              font-serif
              font-medium
              text-[#1A1A1A]
              leading-[1.35]
              min-h-[58px]
              mb-3
              group-hover:text-[#C8922A]
              transition-colors
            "
                    >
                      {item.title}
                    </h4>

                    <div className="flex items-center justify-between">
                      <span
                        className="text-[11px] font-semibold"
                        style={{ color: item.sourceColor }}
                      >
                        {item.source}
                      </span>

                      <ExternalLink
                        size={13}
                        className="text-[#6B7280] group-hover:text-[#C8922A] transition-colors"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Latest Media */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-[22px] font-medium text-[#1A1A1A]">
                Latest Media
              </h2>

              <a
                href="#"
                className="text-[#C8922A] text-[12px] font-semibold flex items-center gap-1 hover:gap-2 transition-all"
              >
                View All <ArrowRight size={12} />
              </a>
            </div>

            <div className="space-y-0">
              {latest.map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.07}
                  variants={fadeUp}
                  className="
          grid
          grid-cols-[170px_1fr_90px_120px_24px]
          gap-5
          items-center
          py-3
          border-b border-[#e8e4dd]
        "
                >
                  <div className="w-[150px] h-[70px] rounded-[5px] overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-serif text-[15px] font-medium text-[#1A1A1A] leading-[1.35] mb-1">
                      {item.title}
                    </h4>

                    <p className="text-[12.5px] text-[#374151] leading-[1.55] max-w-[560px]">
                      {item.desc}
                    </p>
                  </div>

                  <span
                    className={`
            text-[11px]
            font-medium
            px-4
            py-[4px]
            rounded-[5px]
            text-center
            ${(typeColors[item.type] || typeColors.Talk).bg}
            ${(typeColors[item.type] || typeColors.Talk).text}
          `}
                  >
                    {item.type}
                  </span>

                  <span className="text-[12px] text-[#374151]">
                    {item.date}
                  </span>

                  <ExternalLink
                    size={14}
                    className="text-[#4B5563] hover:text-[#C8922A] cursor-pointer"
                  />
                </motion.div>
              ))}
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
    {/* Left Arrow */}
    <button
      type="button"
      className="
        absolute
        left-[-24px]
        top-1/2
        -translate-y-1/2
        z-10

        w-[42px]
        h-[42px]
        rounded-full

        bg-white
        shadow-[0_4px_16px_rgba(0,0,0,0.14)]

        flex
        items-center
        justify-center

        text-[#6B7280]
        hover:text-[#C8922A]
        transition-all
      "
    >
      ‹
    </button>

    <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
      {gallery.map((item, i) => (
        <div
          key={i}
          className="
            w-[220px]
            h-[130px]
            rounded-[6px]
            flex-shrink-0
            overflow-hidden
            bg-gray-100
            cursor-pointer
            shadow-[0_3px_10px_rgba(0,0,0,0.08)]
            hover:scale-[1.02]
            transition-transform
          "
        >
          <img
            src={item.image}
            alt={item.alt || `Gallery ${i + 1}`}
            className="
              w-full
              h-full
              object-cover
            "
          />
        </div>
      ))}
    </div>

    {/* Right Arrow */}
    <button
      type="button"
      className="
        absolute
        right-[-24px]
        top-1/2
        -translate-y-1/2
        z-10

        w-[42px]
        h-[42px]
        rounded-full

        bg-white
        shadow-[0_4px_16px_rgba(0,0,0,0.14)]

        flex
        items-center
        justify-center

        text-[#6B7280]
        hover:text-[#C8922A]
        transition-all
      "
    >
      ›
    </button>
  </div>
</div>
        </div>
      </section>
    </>
  );
}