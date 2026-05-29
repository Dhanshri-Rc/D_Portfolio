import {

  Mic,
  FileText,
  Megaphone,
  PlaySquare,
  Image,
  ExternalLink,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// import mediaBg from "../assets/media-bg.png";
// import media1 from "../assets/media-1.png";
// import media2 from "../assets/media-2.png";
// import media3 from "../assets/media-3.png";
// import media4 from "../assets/media-4.png";
// import media5 from "../assets/media-5.png";

export default function Media() {
  const tabs = [
    [ "All Media"],
    [Mic, "Interviews"],
    [Mic, "Talks & Podcasts"],
    [FileText, "News & Features"],
    [Megaphone, "Press Releases"],
    [PlaySquare, "Videos"],
    [Image, "Gallery"],
  ];

  const featured = [
    // [media1, "Interview", "May 15, 2024", "Interview on AI & the Future of Smart Cities", "elets TV"],
    // [media2, "Podcast", "Apr 22, 2024", "Podcast: Research, Innovation & Real-World Impact", "The Research Matters"],
    // [media3, "Talk", "Mar 10, 2024", "Keynote Talk at International Conference on Data Engineering", "ICDE 2024"],
    // [media4, "Feature", "Feb 5, 2024", "Top 2% Scientist in the World: Elsevier Stanford List 2024", "Times of India"],
  ];

  const latest = [
    [ "Expert Talk on Cybersecurity & Privacy in the Digital Era", "Discussion on emerging trends in cybersecurity, data privacy, and building resilient digital systems.", "Talk", "Jan 28, 2024"],
    [ "Research Collaboration is the Key to Solving Global Challenges", "Featured in SiliconIndia Magazine discussing the importance of interdisciplinary research and global collaboration.", "Feature", "Jan 15, 2024"],
    [ "Podcast: The Journey of a Researcher & Entrepreneur", "A candid conversation about research journey, entrepreneurship, and future aspirations.", "Podcast", "Dec 30, 2023"],
    [ "Interview: Innovation, Impact & the Road Ahead", "Sharing perspectives on innovation ecosystems and the role of research in societal transformation.", "Interview", "Dec 12, 2023"],
    [ "Invited Talk on Machine Learning Applications", "Delivered an invited talk on advanced machine learning techniques and their real-world applications.", "Talk", "Nov 25, 2023"],
  ];

//   const gallery = [media3, media1, media5, media2, media3];

  return (
    <section className="bg-[#fbfaf8] text-[#171717]">
      {/* HERO */}
      <div
        className="h-[305px] bg-cover bg-center flex items-center"
        // style={{ backgroundImage: `url(${mediaBg})` }}
      >
        <div className="max-w-[1160px] mx-auto px-6 w-full">
          <div className="max-w-[430px]">
            <p className="text-[11px] uppercase tracking-[1.7px] font-bold text-[#b87518] mb-4">
              In The Media
            </p>

            <h1 className="font-serif text-[42px] md:text-[50px] leading-[1.08] font-medium">
              Sharing Ideas. <br />
              Inspiring Change.
            </h1>

            <div className="w-[32px] h-[2px] bg-[#b87518] my-5" />

            <p className="text-[13px] leading-[1.85] text-[#444]">
              Explore my interviews, talks, features, and press coverage across
              various platforms where I share insights on research, innovation,
              and impact.
            </p>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="bg-white border-b border-[#eadfd3]">
        <div className="max-w-[1160px] mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
          {tabs.map(([Icon, label], index) => (
            <button
              key={label}
              className={`h-[72px] flex flex-col items-center justify-center gap-2 text-[11px] font-semibold border-b-2 transition ${
                index === 0
                  ? "text-[#b87518] border-[#b87518]"
                  : "text-[#333] border-transparent hover:text-[#b87518]"
              }`}
            >
              <Icon size={17} />
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1160px] mx-auto px-6 py-7">
        {/* FEATURED */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-serif text-[24px]">Featured Media</h2>
          <button className="text-[#b87518] text-[12px] font-bold flex items-center gap-2">
            View All <ArrowRight size={13} />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {featured.map(([img, tag, date, title, source]) => (
            <div
              key={title}
              className="bg-white border border-[#eadfd3] rounded-[6px] overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-[150px] overflow-hidden">
                <img src={img} alt={title} className="w-full h-full object-cover" />
                <span className="absolute left-3 bottom-3 bg-white/90 text-[#555] text-[10px] px-2 py-1 rounded">
                  {tag}
                </span>
              </div>

              <div className="p-4">
                <p className="text-[11px] text-[#777] mb-2">{date}</p>
                <h3 className="font-serif text-[16px] leading-[1.35] min-h-[64px]">
                  {title}
                </h3>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-[#b87518] text-[11px] font-bold">{source}</p>
                  <ExternalLink size={13} className="text-[#555]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LATEST */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-serif text-[24px]">Latest Media</h2>
          <button className="text-[#b87518] text-[12px] font-bold flex items-center gap-2">
            View All <ArrowRight size={13} />
          </button>
        </div>

        <div className="bg-white border border-[#eadfd3] rounded-[6px] overflow-hidden mb-10">
          {latest.map(([img, title, desc, tag, date]) => (
            <div
              key={title}
              className="grid grid-cols-[95px_1fr_auto_auto] max-md:grid-cols-[75px_1fr] gap-4 items-center p-4 border-b border-[#eadfd3] last:border-b-0 hover:bg-[#fffaf4] transition"
            >
              <img
                src={img}
                alt={title}
                className="w-[95px] h-[58px] max-md:w-[75px] max-md:h-[52px] object-cover rounded-[4px]"
              />

              <div>
                <h3 className="text-[14px] font-bold leading-[1.35]">{title}</h3>
                <p className="text-[11px] text-[#555] leading-[1.5] mt-1 max-w-[620px]">
                  {desc}
                </p>
              </div>

              <span className="max-md:hidden bg-[#eef5ff] text-[#3973b7] text-[10px] px-3 py-1 rounded">
                {tag}
              </span>

              <div className="max-md:hidden flex items-center gap-5">
                <span className="text-[11px] text-[#555]">{date}</span>
                <ExternalLink size={13} className="text-[#555]" />
              </div>
            </div>
          ))}
        </div>

        {/* GALLERY */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-serif text-[24px]">Media Gallery</h2>
          <button className="text-[#b87518] text-[12px] font-bold flex items-center gap-2">
            View All <ArrowRight size={13} />
          </button>
        </div>

        <div className="relative">
          <button className="absolute left-[-18px] top-1/2 -translate-y-1/2 z-10 w-[36px] h-[36px] bg-white shadow rounded-full flex items-center justify-center">
            <ChevronLeft size={18} />
          </button>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Gallery"
                className="w-full h-[135px] object-cover rounded-[6px] hover:scale-[1.03] transition"
              />
            ))}
          </div>

          <button className="absolute right-[-18px] top-1/2 -translate-y-1/2 z-10 w-[36px] h-[36px] bg-white shadow rounded-full flex items-center justify-center">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}