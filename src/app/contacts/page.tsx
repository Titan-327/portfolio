"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function ContactsPage() {
  return (
    <div className="relative flex flex-col items-center py-32 px-6 text-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-float-delay"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl">
        {/* Heading */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Let&apos;s Get In Touch
          </h1>
          <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mx-auto">
            I&apos;m currently exploring new opportunities in the tech world. Whether you have a relevant role, 
            want to collaborate on something exciting, or just want to chat about the latest in technology, 
            I&apos;d love to hear from you! My inbox is always open and I&apos;ll do my best to get back to you quickly.
          </p>
        </motion.div>

        {/* Contact section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-700/50 shadow-xl"
        >
          <h2 className="text-3xl font-semibold text-white mb-8">
            Connect With Me
          </h2>

          {/* Icons */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Email */}
            <SocialCard 
              href="mailto:neeru.singh327@gmail.com" 
              title="Email"
              icon={<EmailIcon />}
              label="neeru.singh327@gmail.com"
            />

            {/* LinkedIn */}
            <SocialCard
              href="https://www.linkedin.com/in/harshit-singh-97b055265/"
              title="LinkedIn"
              icon={<LinkedInIcon />}
              label="Harshit Singh"
            />

            {/* GitHub */}
            <SocialCard 
              href="https://github.com/Titan-327" 
              title="GitHub"
              icon={<GitHubIcon />}
              label="@Titan-327"
            />

            {/* LeetCode */}
            <SocialCard 
              href="https://leetcode.com/u/Titan_108/" 
              title="LeetCode"
              icon={<LeetCodeIcon />}
              label="@Titan_108"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* Reusable Social Card Component */
const SocialCard = ({ href, title, icon, label }: any) => (
  <motion.a
    href={href}
    title={title}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center justify-center w-40 h-40 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
  >
    <div className="mb-3 p-4 bg-gray-700/50 rounded-full">
      {icon}
    </div>
    <span className="text-sm text-gray-300">{title}</span>
    <span className="text-yellow-400 text-xs mt-1 px-2 truncate w-full">{label}</span>
  </motion.a>
);

/* Enhanced Icons with consistent styling */
const iconProps = {
  width: 28,
  height: 28,
  className: "text-yellow-400",
};

// Email Icon
const EmailIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

// LinkedIn Icon
const LinkedInIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
  </svg>
);

// GitHub Icon
const GitHubIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

// LeetCode Icon
const LeetCodeIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
  </svg>
);
