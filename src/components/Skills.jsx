import { motion } from 'framer-motion';

const Skills = ({ darkMode }) => {
  const skillGroups = [
    {
      title: "Languages",
      accent: "brand-1",
      skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML5", "CSS3"],
    },
    {
      title: "Frontend",
      accent: "brand-3",
      skills: [
        "React.js",
        "Next.js",
        "TanStack Query",
        "Zustand",
        "Redux Toolkit",
        "Tailwind CSS",
        "Material UI",
        "Responsive Design",
        "Frontend Architecture",
        "API Integration",
        "Jest",
        "Vitest",
      ],
    },
    {
      title: "Backend",
      accent: "brand-3",
      skills: ["Django", "NestJS", "Node.js", "Express.js", "REST APIs", "GraphQL"],
    },
    {
      title: "Cloud & Infrastructure",
      accent: "brand-1",
      skills: ["AWS", "Vercel", "Cloudflare", "DNS", "SSL", "CORS", "IAM"],
    },
    {
      title: "AI & Integrations",
      accent: "brand-3",
      skills: ["AI-Assisted Development", "Gemini", "AI APIs", "WhatsApp Business API"],
    },
    {
      title: "Databases",
      accent: "brand-1",
      skills: ["PostgreSQL", "MySQL", "Supabase", "Prisma"],
    },
    {
      title: "Tools",
      accent: "brand-3",
      skills: ["Git", "GitHub", "Jira", "Postman", "Claude", "OpenCode", "Antigravity", "Cursor", "Make"],
    },
    {
      title: "Methodologies",
      accent: "brand-1",
      skills: ["Agile / Scrum", "Code Reviews", "Testing", "Technical Documentation"],
    },
  ];

  const skillItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const chipStyles = (accent) => {
    const brandHover =
      accent === "brand-1"
        ? "hover:border-brand-1 hover:text-brand-1 dark:hover:border-brand-1"
        : "hover:border-brand-3 hover:text-brand-3 dark:hover:border-brand-3";
    return `
      px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border shadow-sm dark:shadow-none
      bg-white dark:bg-gray-800/40 text-gray-700 dark:text-gray-300
      border-gray-200 dark:border-gray-700 ${brandHover}
      hover:bg-brand-1/[0.02] dark:hover:bg-brand-1/10
    `;
  };

  return (
    <section
      id="skills"
      className="py-24 transition-colors duration-500 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container px-6 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Technical <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-1 to-brand-3">Stack</span>
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-brand-1 to-brand-3 mx-auto rounded-full" />
          <p className="mt-6 text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The tools and technologies I use to take products from idea to production.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              variants={skillItemVariants}
              className={`rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg hover:shadow-brand-1/10 ${
                darkMode
                  ? 'bg-gray-800/40 border-gray-700 hover:border-brand-1/50'
                  : 'bg-white border-gray-200 hover:border-brand-1/40 shadow-sm'
              }`}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-6 flex items-center gap-4 text-gray-800 dark:text-gray-200">
                <span className="w-10 h-[3px] bg-linear-to-r from-brand-1 to-brand-3 rounded-full" />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    variants={skillItemVariants}
                    whileHover={{ y: -4 }}
                    className={chipStyles(group.accent)}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;