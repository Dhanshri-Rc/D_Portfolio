import {
  Search,
  FileText,
  ExternalLink,
  Quote,
  BookOpen,
  BarChart3,
  Trophy,
} from "lucide-react";
import pubbg from "../assets/pubbg.png";

export default function Publications() {
  const papers = [
    "Intelligent Decision Support System for Sustainable Smart Cities Using Machine Learning Approaches",
    "A Secure and Lightweight Framework for IoT Communication in Healthcare Systems",
    "Deep Learning Based Cyber Threat Detection in Cloud Environment",
    "Blockchain-Based Data Integrity Framework for IoT Applications",
    "An Ensemble Learning Approach for Predictive Analytics in Big Data Environment",
    "Privacy-Preserving Data Sharing Scheme Using Blockchain Technology",
  ];

  return (
    <section className="bg-[#fbfaf8] text-[#171717] min-h-screen">
      <div
        className="h-[210px] sm:h-[230px] md:h-[245px] lg:h-[300px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${pubbg})` }}
      />

      <div className="max-w-[1080px] mx-auto px-5 sm:px-6 py-7">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-7">
          <div>
            <h1 className="font-serif text-[30px] leading-none mb-3">
              Publications
            </h1>
            <p className="text-[11px] text-[#4b5563]">
              Explore my research contributions published in reputed journals and conferences.
            </p>
          </div>

          <div className="flex gap-8 sm:gap-10">
            {[
              [BookOpen, "300+", "Publications"],
              [BarChart3, "28", "h-index"],
              [Trophy, "2500+", "Citations"],
            ].map(([Icon, num, label]) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={22} strokeWidth={1.8} className="text-[#c77a12]" />
                <div>
                  <p className="text-[13px] font-bold leading-none">{num}</p>
                  <p className="text-[9px] text-[#333] mt-1">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-5 mb-6">
          <div className="relative w-full md:w-[665px]">
            <input
              placeholder="Search publications by title, keyword, journal..."
              className="w-full h-[38px] bg-white border border-[#d8d8d8] rounded-[4px] px-4 pr-10 text-[10px] outline-none focus:border-[#b87518]"
            />
            <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#777]" />
          </div>

          <div className="flex items-center gap-3 md:ml-auto">
            <span className="text-[10px] font-bold">Sort by:</span>
            <select className="h-[38px] w-[135px] bg-white border border-[#d8d8d8] rounded-[4px] px-4 text-[10px] outline-none">
              <option>Most Recent</option>
              <option>Oldest First</option>
              <option>Most Cited</option>
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-[245px_1fr] gap-6">
          <aside className="bg-white border border-[#eadfd3] rounded-[5px] p-4 h-fit">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-serif text-[16px]">Filters</h3>
              <button className="text-[#b87518] text-[9px] font-semibold">
                Clear All
              </button>
            </div>

            <FilterBlock title="Publication Type">
              <CheckItem label="All Types" checked />
              <CheckItem label="Journal Articles" count="265" />
              <CheckItem label="Conference Papers" count="38" />
              <CheckItem label="Book Chapters" count="10" />
              <CheckItem label="Review Articles" count="08" />
            </FilterBlock>

            <FilterBlock title="Year">
              <div className="grid grid-cols-2 gap-3">
                <input placeholder="From" className="filter-input" />
                <input placeholder="To" className="filter-input" />
              </div>
            </FilterBlock>

            <FilterBlock title="Subject Area">
              <CheckItem label="All Subject Areas" />
              <CheckItem label="Computer Science" count="120" />
              <CheckItem label="Engineering" count="85" />
              <CheckItem label="Mathematics" count="60" />
              <CheckItem label="Decision Sciences" count="25" />
              <CheckItem label="Environmental Science" count="15" />
              <CheckItem label="Others" count="10" />
              <button className="text-[#b87518] text-[9px] mt-1 font-semibold">
                Show More +
              </button>
            </FilterBlock>

            <FilterBlock title="Source Title / Journal">
              <input
                placeholder="Search Journal / Source"
                className="w-full h-[32px] border border-[#ddd] rounded-[3px] px-3 text-[9px] outline-none"
              />
            </FilterBlock>

            <FilterBlock title="Publisher">
              {["Elsevier (120)", "Springer (85)", "IEEE (40)", "Taylor & Francis (25)", "MDPI (15)"].map((item) => (
                <CheckItem key={item} label={item} />
              ))}
              <button className="text-[#b87518] text-[9px] mt-1 font-semibold">
                Show More +
              </button>
            </FilterBlock>

            <button className="w-full h-[32px] bg-[#b87518] text-white rounded-[3px] text-[10px] font-semibold">
              Apply Filters
            </button>

            <button className="w-full h-[32px] bg-white border border-[#b87518] text-[#b87518] rounded-[3px] text-[10px] font-semibold mt-3">
              Reset
            </button>
          </aside>

          <div>
            <p className="text-[10px] text-[#555] mb-3">
              Showing 1 to 10 of 300+ publications
            </p>

            <div className="bg-white border border-[#eadfd3] rounded-[6px] overflow-hidden">
              {papers.map((title, index) => (
                <article
                  key={title}
                  className="grid md:grid-cols-[50px_1fr_110px] gap-4 px-5 py-[18px] border-b border-[#eadfd3] last:border-b-0 hover:bg-[#fffaf4] transition"
                >
                  <div className="w-[40px] h-[50px] border border-[#ddd] rounded-[4px] bg-[#fbfaf8] flex items-center justify-center">
                    <FileText size={20} strokeWidth={1.4} className="text-[#777]" />
                  </div>

                  <div>
                    <span
                      className={`text-[8px] px-1.5 py-[2px] rounded-[2px] font-semibold ${
                        index % 3 === 2
                          ? "bg-[#eef3ff] text-[#315fb0]"
                          : "bg-[#eefaf3] text-[#1d9a55]"
                      }`}
                    >
                      {index % 3 === 2 ? "Conference Paper" : "Journal Article"}
                    </span>

                    <h2 className="font-serif text-[15px] leading-[1.35] mt-2">
                      {title}
                    </h2>

                    <p className="text-[10px] text-[#555] italic mt-1">
                      {index % 2 === 0
                        ? "Expert Systems with Applications, Elsevier"
                        : "Journal of Network and Computer Applications, Elsevier"}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-2 text-[9px] text-[#555]">
                      <span>2024</span>
                      <span>Vol. {238 - index}</span>
                      <span>{121678 + index * 852}</span>
                    </div>

                    <div className="flex flex-wrap gap-5 mt-2 text-[9px] text-[#555]">
                      <span className="flex items-center gap-1">
                        <Quote size={11} /> Citations: {45 - index * 4}
                      </span>
                      <span className="flex items-center gap-1">
                        <ExternalLink size={10} /> DOI: 10.1016/j.eswa.2023.{121678 + index}
                      </span>
                    </div>
                  </div>

                  <div className="flex md:items-center md:justify-end">
                    <button className="h-[30px] px-3 border border-[#b87518] text-[#b87518] rounded-[3px] text-[9px] font-semibold flex items-center gap-2">
                      View Details <ExternalLink size={10} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex justify-center items-center gap-2 mt-6">
              {["1", "2", "3", "4", "5", "...", "30"].map((p) => (
                <button
                  key={p}
                  className={`w-[26px] h-[26px] rounded-[4px] border text-[9px] ${
                    p === "1"
                      ? "bg-[#b87518] text-white border-[#b87518]"
                      : "bg-white border-[#ddd] text-[#555]"
                  }`}
                >
                  {p}
                </button>
              ))}

              <button className="h-[26px] px-4 rounded-[4px] bg-white border border-[#ddd] text-[9px]">
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .filter-input {
          height: 32px;
          border: 1px solid #ddd;
          border-radius: 3px;
          padding: 0 10px;
          font-size: 9px;
          outline: none;
          background: white;
        }
      `}</style>
    </section>
  );
}

function FilterBlock({ title, children }) {
  return (
    <div className="border-t border-[#eadfd3] pt-4 mb-4">
      <h4 className="text-[10px] font-bold mb-3 flex justify-between text-[#222]">
        {title}
        <span className="text-[10px]">⌃</span>
      </h4>
      {children}
    </div>
  );
}

function CheckItem({ label, count, checked }) {
  return (
    <label className="flex items-center gap-2 text-[9.5px] text-[#333] mb-2.5 cursor-pointer">
      <input
        type="checkbox"
        defaultChecked={checked}
        className="accent-[#b87518] w-[11px] h-[11px]"
      />
      <span>
        {label}
        {count && <span className="text-[#777]"> ({count})</span>}
      </span>
    </label>
  );
}