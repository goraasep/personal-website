import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-sky-50 text-gray-800 px-6 py-12">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hi, I&apos;m Gora<span className="text-sky-600">.</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Software Engineer specializing in web and IoT solutions.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <Link
              href="/projects"
              className="px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
            >
              View Projects
            </Link>
            <Link
              href="https://wa.me/6282218328615?text=Hi!%20%F0%9F%91%8B%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20hiring%20you.%20Could%20we%20discuss%20a%20potential%20project?"
              className="px-6 py-2 border border-sky-600 text-sky-600 rounded-lg hover:bg-sky-50 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/profile.jpg" // Replace with your own image
            alt="Gora"
            width={200}
            height={200}
            className="rounded-full shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Resume Section */}
      <section className="mt-24 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Resume</h2>

        {/* Work Experience */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-sky-700">
            Work Experience
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>CV Mechtech Instrument Solutions</strong> (Jan 2024 –
              Present): Developed industrial IoT platforms for real-time
              monitoring and data processing. Integrated IoT devices with cloud
              platforms.
            </li>
            <li>
              <strong>PT Inovasi Otomasi Teknologi</strong> (Jan 2022 – Jan
              2024): Built and maintained IoT platform back-end and web
              dashboards. Developed software for embedded hardware and sensor
              integration.
            </li>
            <li>
              <strong>PT Hariff Daya Tunggal Engineering</strong> (Jun 2020 –
              Dec 2021): Engineered IoT device back-end and web dashboards.
              Developed firmware for embedded sensors.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-sky-700">
            Education
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Purwadhika Digital Technology School</strong> (2024–2025):
              Software Engineering (Digital Talent Incubator)
            </li>
            <li>
              <strong>Telkom University</strong> (2015–2019): Electrical
              Engineering
            </li>
          </ul>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-sky-700">
            Licenses & Certifications
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Purwadhika Digital Technology School (2025): Software Engineering
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-sky-700">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              <Image
                src="/tech/python.svg"
                alt="Python"
                width={24}
                height={24}
              />
              Python
            </div>
            <div className="flex items-center gap-2">
              <Image src="/tech/cpp.png" alt="C/C++" width={24} height={24} />
              C/C++
            </div>
            <div className="flex items-center gap-2">
              <Image src="/tech/java.png" alt="Java" width={24} height={24} />
              Java
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/tech/js.png"
                alt="JavaScript"
                width={24}
                height={24}
              />
              JavaScript
            </div>
            <div className="flex items-center gap-2">
              <Image src="/tech/php.svg" alt="PHP" width={24} height={24} />
              PHP
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-sky-700">Tech</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              <Image
                src="/tech/laravel.svg"
                alt="Laravel"
                width={24}
                height={24}
              />
              Laravel
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/tech/ci.png"
                alt="CodeIgniter 3"
                width={24}
                height={24}
              />
              CodeIgniter 3
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/tech/next.svg"
                alt="Next.js"
                width={24}
                height={24}
              />
              Next.js
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/tech/spring-boot.svg"
                alt="Spring Boot"
                width={24}
                height={24}
              />
              Spring Boot
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/tech/nodered.svg"
                alt="Node-RED"
                width={24}
                height={24}
              />
              Node-RED
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/tech/grafana.svg"
                alt="Grafana"
                width={24}
                height={24}
              />
              Grafana
            </div>
            <div className="flex items-center gap-2">
              <Image src="/tech/mysql.png" alt="MySQL" width={24} height={24} />
              MySQL
            </div>
            <div className="flex items-center gap-2">
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
        <div className="text-center text-gray-600 text-sm mt-12">
          <p>
            <strong>GORA ASEP SETIANA</strong> — Software Engineer
          </p>
          <p>Bandung | gora.asep@gmail.com</p>
          <div className="flex justify-center gap-2 mt-2">
            <p>
              <a
                href="https://linkedin.com/in/gora-asep-b55271129"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition"
              >
                <Image
                  src="/tech/linkedin.svg" // Make sure this file exists in your /public/logos folder
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
                LinkedIn
              </a>
            </p>
            <p>
              <a
                href="https://github.com/goraasep" // Update with your actual GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition"
              >
                <Image
                  src="/tech/github-mark-white.png" // Make sure the icon is available at public/logos/github.svg
                  alt="GitHub"
                  width={20}
                  height={20}
                />
                GitHub
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
