import {
  Mail,
  Phone,
  MapPin,
  Globe,

  Send,
  Users,
  Presentation,
  BookOpen,
  Handshake,
  GraduationCap,
  Briefcase,
  ArrowRight,
} from "lucide-react";

import contactBg from "../assets/contactbg.png";

export default function Contact() {
  const help = [
    [Users, "Research Collaboration", "Joint research projects and academic partnerships."],
    [Presentation, "Speaking Engagements", "Keynotes, talks, workshops, and panel discussions."],
    [BookOpen, "Consulting", "Strategic advice on research, innovation, and education."],
    [Handshake, "Partnerships", "Building impactful partnerships and alliances."],
    [GraduationCap, "Mentorship", "Guiding students and researchers in their journey."],
    [Briefcase, "Entrepreneurial Opportunities", "Collaborating on innovative ventures and solutions."],
  ];

  return (
    <section className="bg-[#fbfaf8] text-[#171717]">
      {/* HERO */}
      <div
        className="h-[350px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="max-w-[1160px] mx-auto px-6 w-full">
          <div className="max-w-[430px]">
         
              <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#b87518] mb-[12px]">
          Contact us
      </p>

      <h1 className="font-serif text-[#161616] xl:text-[42px] lg:text-[40px] md:text-[32px] sm:text-[30px] text-[24px] leading-[1.08] font-medium tracking-[-0.4px]">
       Let’s Connect
      </h1>

      <div className="w-[38px] h-[3px] bg-[#b87518] mt-[17px] mb-[17px]" />

      <p className="text-[14px] leading-[1.65] text-[#4f4f4f] max-w-[390px]">
          I’m always open to collaborations, speaking opportunities,
              partnerships, and discussions that create meaningful impact.
              Feel free to reach out.
      </p>
          </div>
        </div>
      </div>

      {/* CONTACT AREA */}
   <div className="max-w-[1160px] mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-[58%_42%] gap-16">
          <div>
            <h2 className="font-serif text-[26px] mb-2">Send a Message</h2>
            <div className="w-[39px] h-[2px] bg-[#b87518] mb-7" />

            <form className="space-y-5">
              <Field label="Full Name *" placeholder="Enter your full name" />
              <Field label="Email Address *" placeholder="Enter your email address" />
              <Field label="Subject *" placeholder="Enter subject" />

              <div>
                <label className="block text-[14px] font-semibold mb-2">
                  Your Message *
                </label>
                <textarea
                  placeholder="Type your message here..."
                  className="w-full h-[165px] border border-[#ddd] rounded-[6px] bg-white px-4 py-3 text-[13px] outline-none resize-none focus:border-[#b87518]"
                />
              </div>

             
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
   Send Message 
  </span>

  <Send
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

              <p className="text-[12px] text-[#555]">
                🔒 Your information is safe with us. We respect your privacy.
              </p>
            </form>
          </div>

          <div>
            <h2 className="font-serif text-[26px] mb-2">Contact Information</h2>
            <div className="w-[32px] h-[2px] bg-[#b87518] mb-3" />

            <Info icon={Mail} title="Email" value="dharmesh.dhabliya@example.com" />
            <Info icon={Phone} title="Phone" value="+91 98765 43210" />
            <Info icon={MapPin} title="Location" value="India" />

            <div className="flex gap-4 py-5 border-b border-[#eadfd3]">
              <div className="w-[52px] h-[52px] bg-[#f7f2ec] rounded-[5px] flex items-center justify-center text-[#b87518]">
                <Globe size={24} />
              </div>

              <div>
                <h3 className="text-[15px] font-semibold mb-2">Connect</h3>
                <div className="flex gap-2">
                  {["in", "G", "RG", "✉"].map((s) => (
                    <span
                      key={s}
                      className="w-[28px] h-[28px] rounded-full border border-[#ddd] flex items-center justify-center text-[11px] font-semibold hover:bg-[#b87518] hover:text-white transition"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[#f7f2ec] rounded-[5px] p-6 mt-4 flex gap-5">
              <div className="w-[60px] h-[60px] rounded-full bg-[#f8e9d7] text-[#b87518] flex items-center justify-center shrink-0">
                <Handshake size={25} />
              </div>

              <div>
                <h3 className="font-serif text-[20px]">Let’s Collaborate</h3>
                <p className="text-[13px] text-[#555] leading-[1.8] mt-1">
                  I welcome opportunities for research collaboration, consulting,
                  mentoring, speaking engagements, and entrepreneurial partnerships.
                </p>

                <button className="mt-2 h-[35px] px-4 border border-[#b87518] text-[#b87518] text-[11px] font-semibold rounded-[3px] flex items-center gap-2 hover:bg-[#b87518] hover:text-white transition">
                  Explore Collaboration Opportunities <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-y border-[#eadfd3]">
        <div className="max-w-[1160px] mx-auto px-6 py-8">
          <h2 className="font-serif text-[26px] text-center">
            Areas I Can Help With
          </h2>
          <div className="w-[32px] h-[2px] bg-[#b87518] mx-auto my-4" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-8">
            {help.map(([Icon, title, desc], index) => (
              <div
                key={title}
                className={`text-center px-5 py-5 hover:bg-[#fbfaf8] transition ${
                  index !== 0 ? "lg:border-l border-[#eadfd3]" : ""
                }`}
              >
                <Icon size={34} className="mx-auto text-[#b87518] mb-4" />
                <h3 className="text-[13px] font-semibold leading-[1.3]">{title}</h3>
                <p className="text-[11px] text-[#292828] leading-[1.55] mt-1">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#f7f2ec]">
        <div className="max-w-[1160px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-[68px] h-[68px] rounded-full bg-[#f8eadc] text-[#b87518] flex items-center justify-center shrink-0">
              <Send size={28} />
            </div>

            <div>
              <h3 className="font-serif text-[22px] font-medium">
                Have an Idea or Project in Mind?
              </h3>
              <p className="text-[13px] text-[#2a2929] leading-[1.8] mt-1 w-[400px]">
                I’d love to hear about it. Let’s start a conversation and explore
                how we can work together to make a difference.
              </p>
            </div>
          </div>

         
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

        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder }) {
  return (
    <div>
      <label className="block text-[14px] font-semibold mb-2">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full h-[40px] border border-[#ddd] rounded-[6px] bg-white px-4 text-[13px] outline-none focus:border-[#b87518]"
      />
    </div>
  );
}

function Info({ icon: Icon, title, value }) {
  return (
    <div className="flex gap-5 py-5 border-b border-[#eadfd3]">
      <div className="w-[52px] h-[52px] bg-[#f7f2ec] rounded-[5px] flex items-center justify-center text-[#b87518]">
        <Icon size={24} />
      </div>

      <div>
        <h3 className="text-[15px] font-semibold">{title}</h3>
        <p className="text-[13px] text-[#555] mt-1">{value}</p>
      </div>
    </div>
  );
}