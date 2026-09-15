import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

const Experience = ({ darkMode }) => {
  const jobs = [
    {
      role: "Digital Health Platform Engineer",
      company: "IMSS Bienestar",
      location: "Mexico City, Mexico",
      period: "May 2026 – Present",
      points: [
        "Support the implementation, operation, and administration of digital platforms supporting electronic health records (EHR) across public healthcare facilities.",
        "Coordinate platform deployment, technical configuration, and validation across healthcare facilities.",
        "Monitor availability, connectivity, and reliability, supporting incident identification and resolution.",
        "Collaborate with multidisciplinary teams to ensure reliable system operation and user adoption.",
      ],
    },
    {
      role: "Frontend Engineer (Freelance / Contract)",
      company: "Remote",
      location: "Remote",
      period: "Sep 2023 – Present",
      points: [
        "Designed and built production-grade web applications using React, Next.js, and TypeScript, from requirements to deployment.",
        "Built complete product experiences including authentication, dashboards, onboarding, data-driven interfaces, and reusable component systems.",
        "Worked across frontend, backend APIs, databases, cloud services, and third-party integrations to deliver functional end-to-end products.",
        "Used AI-assisted development tools to accelerate research, implementation, debugging, testing, and technical problem-solving.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Dacodes (Client: Infonavit)",
      location: "Remote, Mexico",
      period: "May 2022 – Jul 2023",
      points: [
        "Developed 5+ production frontend modules using React and TypeScript for Mi Cuenta Infonavit, serving over 16 million users.",
        "Implemented advanced state management and REST API integration patterns, improving system performance by 25%.",
        "Resolved a critical production incident in the complaints module, restoring full functionality without user impact.",
        "Implemented frontend best practices that reduced team debugging time by 20% and improved code maintainability.",
      ],
    },
  ];

  const education = [
    {
      degree: "B.S. in Communications and Electronics Engineering",
      school: "Instituto Politécnico Nacional (IPN) – Mexico",
    },
    {
      degree: "Full Stack Web Development Bootcamp (Santander Scholarship)",
      school: "Digital House – México",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="experience"
      className={`py-24 transition-colors duration-500 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="container px-6 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-1 to-brand-3">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-brand-1 to-brand-3 mx-auto rounded-full" />
          <p className="mt-6 text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A product-first engineer building end-to-end solutions across healthcare, fintech, and
            SaaS.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div
            className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          />

          {jobs.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row gap-4 md:gap-0 mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-[calc(50%+3rem)]" : "md:pl-[calc(50%+3rem)]"
              } pl-12`}
            >
              <div
                className={`absolute left-4 top-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center border-2 z-10 ${
                  darkMode
                    ? "bg-gray-900 border-brand-3 text-brand-3"
                    : "bg-white border-brand-1 text-brand-1"
                }`}
              >
                <Briefcase size={14} />
              </div>

              <div
                className={`flex-1 rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg hover:shadow-brand-1/10 ${
                  darkMode
                    ? "bg-gray-800/40 border-gray-700 hover:border-brand-1/50"
                    : "bg-gray-50 border-gray-200 hover:border-brand-1/40 shadow-sm"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                    {job.role}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      darkMode
                        ? "bg-brand-1/15 text-brand-3"
                        : "bg-brand-1/10 text-brand-1"
                    }`}
                  >
                    {job.period}
                  </span>
                </div>

                <p className="text-sm font-semibold text-brand-1 dark:text-brand-3 mb-1">
                  {job.company}
                </p>

                <p
                  className={`text-xs flex items-center gap-1 mb-4 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  <MapPin size={12} /> {job.location}
                </p>

                <ul
                  className={`space-y-2 text-sm leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {job.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Education
            </h3>
            <div className="w-16 h-1 bg-linear-to-r from-brand-1 to-brand-3 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`flex items-start gap-4 rounded-2xl border p-6 transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-800/40 border-gray-700 hover:border-brand-1/50"
                    : "bg-gray-50 border-gray-200 hover:border-brand-1/40 shadow-sm"
                }`}
              >
                <div
                  className={`p-3 rounded-full shrink-0 ${
                    darkMode
                      ? "bg-brand-1/15 text-brand-3"
                      : "bg-brand-1/10 text-brand-1"
                  }`}
                >
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-gray-900 dark:text-white">
                    {item.degree}
                  </h4>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {item.school}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;