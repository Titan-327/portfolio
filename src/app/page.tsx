"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  function handleDownload() {
    window.open(
      "https://drive.google.com/file/d/152j50E0Nj-zmZnqDhl3osdrqfUCBXT67/view",
      "_blank"
    );
  }

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 pt-24 md:pt-36 gap-12">
      {/* Left Section */}
      <div className="flex flex-col justify-center xl:w-1/2 space-y-6">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-muted text-lg md:text-xl"
        >
          👋 Hi there,
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-3xl md:text-6xl font-extrabold leading-tight"
        >
          I’m <span className="text-highlight">Harshit Singh</span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-xl md:text-3xl font-semibold text-muted"
        >
          A Full-Stack Developer
        </motion.h2>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto"
        >
          <Link
            href="/contacts"
            className="bg-highlight text-light font-bold py-3 px-6 rounded-lg text-center shadow-md hover:shadow-xl hover:scale-[1.02] transition"
          >
            Get in Touch
          </Link>

          <button
            onClick={handleDownload}
            className="border-2 border-highlight text-highlight font-bold py-3 px-6 rounded-lg hover:bg-highlight hover:text-light shadow-sm hover:shadow-lg transition text-center"
          >
            View Resume
          </button>
        </motion.div>
      </div>

      {/* Right Section - Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.7 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <Image
          src="/images/programming.svg"
          alt="Developer Illustration"
          width={480}
          height={480}
          className="rounded-xl shadow-2xl hover:scale-105 transition duration-300"
        />
      </motion.div>
    </div>
  );
}
