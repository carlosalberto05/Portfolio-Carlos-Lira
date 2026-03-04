import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import googleCloudBadge from '../assets/google-cloud-computing-foundations-certificate.png';

const Certifications = ({ darkMode }) => {
  const certifications = [
    {
      id: 1,
      title: "Google Cloud Computing Foundations Certificate",
      issuer: "Google Cloud",
      image: googleCloudBadge,
      link: "https://www.credly.com/badges/ee35ba5e-04d5-4f04-aa8d-4674a9ace5ac",
      date: "Feb 2026"
    },
    // More can be added here in the future
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section
      id="certifications"
      className={`py-24 transition-colors duration-500 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="container px-6 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Professional <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-1 to-brand-3">Certifications</span>
          </h2>
          <div className="w-24 h-1.5 bg-linear-to-r from-brand-1 to-brand-3 mx-auto rounded-full" />
          <p className="mt-6 text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            My verified credentials and technical achievements from world-class organizations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-800/40 border-gray-700 hover:border-brand-1/50'
                    : 'bg-gray-50 border-gray-200 hover:border-brand-1/50 shadow-sm'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-brand-1/20 blur-2xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="relative w-28 h-28 md:w-32 md:h-32 object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <h3 className="text-base md:text-lg font-bold mb-2 text-gray-900 dark:text-white leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-xs md:text-sm font-medium text-brand-1 dark:text-brand-3 mb-4">
                    {cert.issuer} • {cert.date}
                  </p>
                  
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      darkMode
                        ? 'bg-gray-700 text-white hover:bg-brand-1'
                        : 'bg-white text-gray-700 hover:bg-brand-1 hover:text-white border border-gray-200 shadow-xs'
                    }`}
                  >
                    Verify Credential <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Credly Link Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`flex flex-col items-center justify-center rounded-2xl border border-dashed p-8 transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800/20 border-gray-700 hover:border-brand-3/50'
                  : 'bg-gray-50 border-gray-300 hover:border-brand-3/50'
              }`}
              data-aos="fade-up"
              data-aos-delay={certifications.length * 100}
            >
              <div className={`p-4 rounded-full mb-4 shadow-sm ${
                darkMode ? 'bg-gray-800 text-brand-3' : 'bg-white text-brand-1 border border-gray-100'
              }`}>
                <Award size={36} />
              </div>
              <h3 className="text-base md:text-lg font-bold mb-2 text-gray-900 dark:text-white text-center">
                View All Badges
              </h3>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 text-center mb-6 leading-relaxed">
                Explore my full list of verified badges and certificates on Credly.
              </p>
              <a
                href="https://www.credly.com/users/carlos-de-jesus-alberto-lira/badges"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-1 dark:text-brand-3 text-sm md:text-base font-bold flex items-center gap-2 hover:underline transition-all"
              >
                Credly Profile <ExternalLink size={16} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
