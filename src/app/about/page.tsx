"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../../components/Button";
import SkillSection from "../../components/SkillCloud";
import Link from "next/link";

function AboutPage() {
  const skills = [
    "React", "Next.js", "TailwindCSS", "Node.js", "REST APIs", "Express.js", "Hono.js",
    "JWT", "Zod", "Serverless", "Turborepo", "Websokets", "Postgres", "MongoDB", "MySQL",
    "Prisma", "Firebase", "Git/Github", "CI/CD", "Nginx", "AWS/EC2/S3", "Docker", "C++",
    "Javascript", "Typescript",
  ];

  return (
    <div className="flex flex-col m-6 md:m-16 xl:flex-row gap-12">
      {/* Left Content */}
      <div className="flex flex-col justify-center xl:w-1/2 space-y-6">
        {/* Heading */}
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold md:text-4xl text-white"
        >
          About Me
        </motion.h2>

        {/* Education */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-3 text-gray-300 text-sm md:text-base font-medium"
        >
          <p>🎓 <strong>IIIT Ranchi (BTech CSE)</strong><br />Nov 2022 – July 2026 | CGPA: <strong>8.71</strong></p>
          <p>🏫 <strong>TINSES, Varanasi (XII)</strong><br />April 2020 – March 2022 | <strong>94.8%</strong></p>
          <p>🏫 <strong>TINSES, Varanasi (X)</strong><br />April 2018 – March 2020 | <strong>97%</strong></p>
        </motion.div>

        {/* Introduction */}
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-md md:text-lg font-medium leading-relaxed text-gray-200"
        >
          I’m a final-year Computer Science Engineering student at IIIT Ranchi. I love building performant and elegant full-stack applications, working with scalable systems, and continuously exploring new tools and frameworks.
        </motion.p>

        {/* Internship Experience */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700 rounded-2xl p-6 shadow-2xl hover:shadow-blue-700/40 transition-shadow"
        >
          <h3 className="text-xl font-semibold text-white mb-3">💼 Internship Experience</h3>
          <p className="text-sm text-gray-300 mb-1">
            <Link
              href="https://nextcrest.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-bold text-blue-400 hover:text-blue-300 transition duration-200"
            >
              Next Crest Media
            </Link>{" "}
            — Software Development Engineer Intern (Remote)<br />
            <span className="text-xs text-gray-400">May 2025 – July 2025</span>
          </p>
          <ul className="list-disc list-inside text-sm text-gray-400 space-y-1 mt-3">
            <li>Developed & integrated 10+ modular Pipedream workflows for event-driven automation.</li>
            <li>Implemented OAuth 2.0 for secure access to Google Calendar & Docs in workflows.</li>
            <li>Built a secure PDF upload system using Firebase Firestore with robust error handling.</li>
          </ul>
        </motion.div>

        {/* Tech Stack */}
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-2xl font-semibold text-gray-300 pt-4"
        >
          🧠 My Tech Stack
        </motion.h3>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex flex-wrap gap-3 pt-2"
        >
          {skills.map((skill, index) => (
            <Button key={index} content={skill} />
          ))}
        </motion.div>
      </div>

      {/* Right Content: Image + Skill Cloud */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="flex flex-col items-center xl:w-1/2"
      >
        <div className="mb-10">
          <Image
            src="/images/poperpop.jpg"
            alt="Profile"
            width={480}
            height={640}
            className="rounded-xl shadow-lg ring-1 ring-gray-700"
          />
        </div>
        <SkillSection />
      </motion.div>
    </div>
  );
}

export default AboutPage;
