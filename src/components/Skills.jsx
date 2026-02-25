import { motion } from 'framer-motion';

const Skills = ({ darkMode }) => {
  const coreStack = [
    "React", 
    "Next.js", 
    "TypeScript", 
    "JavaScript (ES6+)", 
    "REST APIs", 
    "Jest", 
    "Git"
  ];

  const additionalTech = [
    "Node.js", 
    "MySQL", 
    "Tailwind CSS"
  ];

  const skillItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section
      id="skills"
      className="py-24 transition-colors duration-500 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container px-6 mx-auto max-w-5xl">
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Core Stack */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-10 flex items-center gap-4 text-gray-800 dark:text-gray-200">
              <span className="w-10 h-[3px] bg-brand-1 rounded-full" />
              Core Stack
            </h3>
            <div className="flex flex-wrap gap-4">
              {coreStack.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={skillItemVariants}
                  whileHover={{ y: -4 }}
                  className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border shadow-sm dark:shadow-none bg-white dark:bg-gray-800/40 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-brand-1 hover:text-brand-1 dark:hover:text-white dark:hover:border-brand-1 hover:bg-brand-1/[0.02] dark:hover:bg-brand-1/10"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Additional Technologies */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-10 flex items-center gap-4 text-gray-800 dark:text-gray-200">
              <span className="w-10 h-[3px] bg-brand-3 rounded-full" />
              Additional Technologies
            </h3>
            <div className="flex flex-wrap gap-4">
              {additionalTech.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={skillItemVariants}
                  whileHover={{ y: -4 }}
                  className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border shadow-sm dark:shadow-none bg-white dark:bg-gray-800/40 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-brand-3 hover:text-brand-3 dark:hover:text-white dark:hover:border-brand-3 hover:bg-brand-3/[0.02] dark:hover:bg-brand-3/10"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
