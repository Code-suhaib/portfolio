import { motion } from "framer-motion";
import { Mail, Github, MessageCircle, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "AI Study Assistant",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    desc: "AI tool that summarizes notes and answers questions from study material.",
    tech: "React • Node • AI"
  },
  {
    title: "Smart Bus Tracking",
    img: "https://images.unsplash.com/photo-1509749837427-ac94a2553d0e",
    desc: "Live GPS bus tracking using Google Maps and real‑time updates.",
    tech: "MERN • Maps API"
  },
  {
    title: "Resume Analyzer",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    desc: "AI based resume scoring and job skill analysis platform.",
    tech: "React • NLP"
  }
];

export default function Portfolio() {

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  const magnetic = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const resetMagnetic = (e) => {
    e.currentTarget.style.transform = "translate(0px,0px)";
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">

      {/* cursor glow */}
      <div
        className="pointer-events-none fixed w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full z-0"
        style={{ left: pos.x - 140, top: pos.y - 140 }}
      />

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-white/10 backdrop-blur-xl sticky top-0 z-50">
        <h1 className="text-xl font-bold text-purple-400">Suhaib.dev</h1>

        <div className="space-x-6 text-sm hidden md:block">
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#skills" className="hover:text-purple-400">Skills</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">

  {/* glow background */}
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-600/30 blur-[180px] rounded-full" />

  {/* grid pattern */}
  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(90deg,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]" />

  <div className="max-w-7xl mx-auto px-8 py-28 grid md:grid-cols-2 gap-16 items-center relative z-10">

    {/* LEFT SIDE */}
    <div>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        Hi, I'm <span className="text-purple-400">Suhaib</span>
      </h1>

      <h2 className="mt-4 text-2xl text-gray-300">
        Final Year Computer Science Student • Software Developer
      </h2>

      <p className="mt-6 text-gray-400 text-lg max-w-lg">
        I build modern web applications using MERN stack, Java full stack
        and AI tools. I help students complete their final year projects
        and understand them properly for viva and presentations.
      </p>

      <div className="mt-10 flex gap-6">

        <button className="bg-purple-500 hover:bg-purple-600 transition px-8 py-3 rounded-xl font-medium shadow-lg shadow-purple-500/30" >
          View Projects
        </button>

        <button className="border border-purple-400 px-8 py-3 rounded-xl hover:bg-purple-500/20 transition">
          Hire Me
        </button>

      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="relative">

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl">

        <p className="text-purple-400 text-sm mb-3">
          developer.js
        </p>

        <pre className="text-sm text-gray-300 leading-relaxed">
{`const developer = {
  name: "Suhaib",
  role: "Full Stack Developer",
  stack: ["MERN", "Java", "AI"],
  passion: "Building real systems",
  location: "India"
}`}
        </pre>

      </div>

    </div>

  </div>
</section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-8 py-28">
        <h2 className="text-4xl font-bold mb-14 text-center">Projects</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden"
            >
              <img src={p.img} className="h-48 w-full object-cover" />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-400">{p.title}</h3>
                <p className="text-gray-300 mt-2 text-sm">{p.desc}</p>
                <p className="text-xs text-gray-400 mt-4">{p.tech}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-4xl mx-auto px-8 py-24">

        <h2 className="text-4xl font-bold text-center mb-14">Skills</h2>

        <Skill name="React / MERN" percent={85} />
        <Skill name="Java Full Stack" percent={75} />
        <Skill name="AI / APIs" percent={70} />
        <Skill name="JavaScript" percent={90} />

      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-3xl mx-auto px-8 py-28 text-center">

        <h2 className="text-4xl font-bold mb-12">Start Your Project</h2>

        <form
          action="mailto:suhaibjahagirdar3011@outlook.com"
          method="POST"
          encType="text/plain"
          className="space-y-4"
        >
          <input
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
            placeholder="Your Name"
            name="name"
          />

          <input
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
            placeholder="Email"
            name="email"
          />

          <textarea
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
            placeholder="Project Details"
            rows="4"
            name="message"
          />

          <button className="bg-purple-500 px-10 py-3 rounded-xl hover:bg-purple-600">
            Send Message
          </button>
        </form>

        <div className="flex justify-center gap-8 mt-10 text-gray-300">
          <Mail />
          <Phone />
          <Github />
        </div>

        <p className="mt-6 text-gray-400">
          Email: suhaibjahagirdar3011@outlook.com
        </p>

        <p className="text-gray-400">

        </p>

      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/918600252724"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 px-5 py-3 rounded-full"
      >
        WhatsApp
      </a>

      <footer className="text-center text-gray-500 pb-10">
        © {new Date().getFullYear()} Suhaib.dev
      </footer>

    </div>
  );
}

function Skill({ name, percent }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span>{name}</span>
        <span>{percent}%</span>
      </div>

      <div className="w-full h-3 bg-white/10 rounded-full">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 1 }}
          className="h-3 bg-purple-500 rounded-full"
        />
      </div>
    </div>
  );
}
