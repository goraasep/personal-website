import Image from "next/image";
import Link from "next/link";
import {
  HexagonParticles,
  DigitalRain,
  DataStreams,
  StatusIndicator,
  CornerBrackets,
  CircuitLines,
} from "./components/CyberEffects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] cyber-grid text-cyan-100 px-6 py-12 scanlines relative overflow-hidden">
      {/* Cyberpunk Effects */}
      <HexagonParticles />
      <DigitalRain />
      <DataStreams />

      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl"></div>

      {/* Status Bar */}
      <div className="fixed top-4 right-4 z-50 bg-black/80 border border-cyan-400/30 rounded-lg p-3 backdrop-blur-sm">
        <div className="flex flex-col gap-2">
          <StatusIndicator label="SYSTEM" status="online" />
          <StatusIndicator label="NEURAL" status="active" />
          <StatusIndicator label="MATRIX" status="ready" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-xs text-cyan-400 animate-slide-in-left">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            Available for work
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-cyan-400 animate-slide-in-left stagger-1 relative">
            <span className="glitch-text">Hi, I&apos;m Gora</span>
            <span className="text-pink-400">.</span>
            <span className="terminal-cursor"></span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 animate-slide-in-left stagger-2">
            Software Engineer specializing in web and IoT solutions.
          </p>
          <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-2 text-sm text-gray-400 animate-slide-in-left stagger-3">
            <span className="flex items-center gap-1">
              <span className="text-cyan-400">▸</span> 5+ years experience
            </span>
            <span className="flex items-center gap-1">
              <span className="text-pink-400">▸</span> Full-stack developer
            </span>
            <span className="flex items-center gap-1">
              <span className="text-purple-400">▸</span> IoT specialist
            </span>
          </div>
          <div className="mt-6 flex justify-center md:justify-start gap-4 animate-slide-in-left stagger-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-transparent border border-cyan-400/60 text-cyan-400 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
            >
              View Projects
            </Link>
            <Link
              href="https://wa.me/6282218328615?text=Hi!%20%F0%9F%91%8B%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20hiring%20you.%20Could%20we%20discuss%20a%20potential%20project?"
              className="px-6 py-3 bg-cyan-400/10 border border-cyan-400/60 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center animate-slide-in-right">
          <div className="relative">
            {/* Rotating ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-cyan-400/20 animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>
            <div
              className="absolute inset-4 rounded-full border-2 border-pink-400/20 animate-spin"
              style={{
                animationDuration: "15s",
                animationDirection: "reverse",
              }}
            ></div>
            <div
              className="absolute inset-8 rounded-full border border-purple-400/20 animate-spin"
              style={{ animationDuration: "10s" }}
            ></div>

            <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute inset-0 holographic rounded-full"></div>
            <Image
              src="/profile.jpg"
              alt="Gora"
              width={200}
              height={200}
              className="rounded-full border-2 border-cyan-400/50 object-cover relative z-10 hover:border-cyan-400 transition-colors float neon-pulse"
            />

            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-purple-400/50"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-pink-400/50"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-pink-400/50"></div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="mt-24 max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl font-bold mb-2 text-cyan-400 animate-slide-in-up glitch-text">
            &lt; Resume /&gt;
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 mx-auto rounded-full"></div>
          <div className="absolute -top-4 -left-4 text-cyan-400/20 text-6xl font-mono">
            {"{"}
          </div>
          <div className="absolute -top-4 -right-4 text-pink-400/20 text-6xl font-mono">
            {"}"}
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-12 bg-[#1a1a2e]/80 border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/60 transition-colors relative corner-accent glow-on-hover animate-slide-in-up stagger-1 overflow-hidden">
          <CircuitLines />
          <CornerBrackets />
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            Work Experience
          </h3>
          <ul className="list-none text-gray-300 space-y-3 text-sm">
            <li className="border-l-2 border-cyan-400/50 pl-4 hover:border-cyan-400 transition-colors">
              <strong className="text-cyan-400">AssistX Enterprise</strong>{" "}
              <span className="text-gray-400">(Jul 2025 – Present)</span> —{" "}
              <span className="text-cyan-300">RnD Engineer (IoT)</span>:
              Developed SNMP and MQTT software for UPS monitoring, IoT firmware
              for ATM alert systems, and remote speaker systems for railroads.
            </li>
            <li className="border-l-2 border-cyan-400/50 pl-4 hover:border-cyan-400 transition-colors">
              <strong className="text-cyan-400">
                CV Mechtech Instrument Solutions
              </strong>{" "}
              <span className="text-gray-400">(Jan 2024 – Jul 2025)</span> —{" "}
              <span className="text-cyan-300">Software Engineer</span>:
              Developed industrial IoT platforms for real-time monitoring and
              data processing. Integrated IoT devices with cloud platforms.
            </li>
            <li className="border-l-2 border-cyan-400/50 pl-4 hover:border-cyan-400 transition-colors">
              <strong className="text-cyan-400">
                PT Inovasi Otomasi Teknologi
              </strong>{" "}
              <span className="text-gray-400">(Jan 2022 – Jan 2024)</span> —{" "}
              <span className="text-cyan-300">Software Engineer</span>: Built
              and maintained IoT platform back-end and web dashboards. Developed
              software for embedded hardware and sensor integration.
            </li>
            <li className="border-l-2 border-cyan-400/50 pl-4 hover:border-cyan-400 transition-colors">
              <strong className="text-cyan-400">
                PT Hariff Daya Tunggal Engineering
              </strong>{" "}
              <span className="text-gray-400">(Jun 2020 – Dec 2021)</span> —{" "}
              <span className="text-cyan-300">Embedded Hardware Engineer</span>:
              Engineered IoT device back-end and web dashboards. Developed
              firmware for embedded sensors.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="mb-12 bg-[#1a1a2e]/80 border border-pink-400/30 rounded-lg p-6 hover:border-pink-400/60 transition-colors relative corner-accent glow-on-hover animate-slide-in-up stagger-2 overflow-hidden">
          <CircuitLines />
          <CornerBrackets />
          <h3 className="text-2xl font-semibold mb-4 text-pink-400">
            Education
          </h3>
          <ul className="list-none text-gray-300 space-y-3 text-sm">
            <li className="border-l-2 border-pink-400/50 pl-4 hover:border-pink-400 transition-colors">
              <strong className="text-pink-400">
                Purwadhika Digital Technology School
              </strong>{" "}
              <span className="text-gray-400">(2024–2025)</span>: Software
              Engineering (Digital Talent Incubator)
            </li>
            <li className="border-l-2 border-pink-400/50 pl-4 hover:border-pink-400 transition-colors">
              <strong className="text-pink-400">Telkom University</strong>{" "}
              <span className="text-gray-400">(2015–2019)</span>: Electrical
              Engineering
            </li>
          </ul>
        </div>

        {/* Certifications */}
        <div className="mb-12 bg-[#1a1a2e]/80 border border-purple-400/30 rounded-lg p-6 hover:border-purple-400/60 transition-colors relative corner-accent glow-on-hover animate-slide-in-up stagger-3 overflow-hidden">
          <CircuitLines />
          <CornerBrackets />
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">
            Licenses & Certifications
          </h3>
          <ul className="list-none text-gray-300 text-sm">
            <li className="border-l-2 border-purple-400/50 pl-4 hover:border-purple-400 transition-colors">
              <strong className="text-purple-400">
                Purwadhika Digital Technology School
              </strong>{" "}
              <span className="text-gray-400">(2025)</span>: Software
              Engineering
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-12 bg-[#1a1a2e]/80 border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/60 transition-colors relative corner-accent glow-on-hover animate-slide-in-up stagger-4 overflow-hidden">
          <CircuitLines />
          <CornerBrackets />
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
            <div className="flex items-center gap-2 bg-black/30 p-3 rounded border border-cyan-400/20 hover:border-cyan-400/60 hover:bg-cyan-400/5 transition-all">
              <Image
                src="/tech/python.svg"
                alt="Python"
                width={24}
                height={24}
              />
              Python
            </div>
            <div className="flex items-center gap-2 bg-black/30 p-3 rounded border border-cyan-400/20 hover:border-cyan-400/60 hover:bg-cyan-400/5 transition-all">
              <Image src="/tech/cpp.png" alt="C/C++" width={24} height={24} />
              C/C++
            </div>
            <div className="flex items-center gap-2 bg-black/30 p-3 rounded border border-cyan-400/20 hover:border-cyan-400/60 hover:bg-cyan-400/5 transition-all">
              <Image src="/tech/java.png" alt="Java" width={24} height={24} />
              Java
            </div>
            <div className="flex items-center gap-2 bg-black/30 p-3 rounded border border-cyan-400/20 hover:border-cyan-400/60 hover:bg-cyan-400/5 transition-all">
              <Image
                src="/tech/js.png"
                alt="JavaScript"
                width={24}
                height={24}
              />
              JavaScript
            </div>
            <div className="flex items-center gap-2 bg-black/30 p-3 rounded border border-cyan-400/20 hover:border-cyan-400/60 hover:bg-cyan-400/5 transition-all">
              <Image src="/tech/php.svg" alt="PHP" width={24} height={24} />
              PHP
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12 bg-[#1a1a2e]/80 border border-pink-400/30 rounded-lg p-6 hover:border-pink-400/60 transition-colors relative corner-accent glow-on-hover animate-slide-in-up stagger-5 overflow-hidden">
          <CircuitLines />
          <CornerBrackets />
          <h3 className="text-2xl font-semibold mb-4 text-pink-400">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
            <div className="flex items-center gap-2 bg-black/30 p-3 rounded border border-pink-400/20 hover:border-pink-400/60 hover:bg-pink-400/5 transition-all">
              <Image
                src="/tech/laravel.svg"
                alt="Laravel"
                width={24}
                height={24}
              />
              Laravel
            </div>
            <div className="flex items-center gap-2 bg-black/30 p-3 rounded border border-pink-400/20 hover:border-pink-400/60 hover:bg-pink-400/5 transition-all">
              <Image
                src="/tech/ci.png"
                alt="CodeIgniter 3"
                width={24}
                height={24}
              />
              CodeIgniter 3
            </div>
            <div className="flex items-center gap-2 bg-black/30 p-3 rounded border border-pink-400/20 hover:border-pink-400/60 hover:bg-pink-400/5 transition-all">
              <Image
                src="/tech/next.svg"
                alt="Next.js"
                width={24}
                height={24}
              />
              Next.js
            </div>
            <div className="flex items-center gap-2 bg-black/30 p-3 rounded border border-pink-400/20 hover:border-pink-400/60 hover:bg-pink-400/5 transition-all">
              <Image
                src="/tech/spring-boot.svg"
                alt="Spring Boot"
                width={24}
                height={24}
              />
              Spring Boot
            </div>
            <div className="flex items-center gap-2 bg-black/30 p-3 rounded border border-pink-400/20 hover:border-pink-400/60 hover:bg-pink-400/5 transition-all">
              <Image
                src="/tech/nodered.svg"
                alt="Node-RED"
                width={24}
                height={24}
              />
              Node-RED
            </div>
            <div className="flex items-center gap-2 bg-black/30 p-3 rounded border border-pink-400/20 hover:border-pink-400/60 hover:bg-pink-400/5 transition-all">
              <Image
                src="/tech/grafana.svg"
                alt="Grafana"
                width={24}
                height={24}
              />
              Grafana
            </div>
            <div className="flex items-center gap-2 bg-black/30 p-3 rounded border border-pink-400/20 hover:border-pink-400/60 hover:bg-pink-400/5 transition-all">
              <Image src="/tech/mysql.png" alt="MySQL" width={24} height={24} />
              MySQL
            </div>
            <div className="flex items-center gap-2 bg-black/30 p-3 rounded border border-pink-400/20 hover:border-pink-400/60 hover:bg-pink-400/5 transition-all">
              <Image
                src="/tech/postgresql.svg"
                alt="PostgreSQL"
                width={24}
                height={24}
              />
              PostgreSQL
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center text-gray-300 text-sm mt-12 bg-[#1a1a2e]/80 border border-purple-400/30 rounded-lg p-6 hover:border-purple-400/60 transition-colors relative overflow-hidden">
          <CircuitLines />
          <CornerBrackets />
          <p className="text-lg">
            <strong className="text-cyan-400">GORA ASEP SETIANA</strong>{" "}
            <span className="text-gray-500">—</span>{" "}
            <span className="text-purple-400">Software Engineer</span>
          </p>
          <p className="mt-2">Bandung | gora.asep@gmail.com</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://linkedin.com/in/gora-asep-b55271129"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border border-cyan-400/60 text-cyan-400 px-4 py-2 rounded-md hover:bg-cyan-400/10 hover:border-cyan-400 transition-all"
            >
              <Image
                src="/tech/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
              LinkedIn
            </a>
            <a
              href="https://github.com/goraasep"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border border-pink-400/60 text-pink-400 px-4 py-2 rounded-md hover:bg-pink-400/10 hover:border-pink-400 transition-all"
            >
              <Image
                src="/tech/github-mark-white.png"
                alt="GitHub"
                width={20}
                height={20}
              />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
