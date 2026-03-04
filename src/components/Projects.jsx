import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "Mi Cuenta Infonavit",
      desc: "Frontend development for a platform serving over 16 million users. Critical bug resolution and performance optimization.",
      image: project1,
      tags: ["React", "TypeScript", "Node.js", "REST API"],
      code: "",
      demo: "https://micuenta.infonavit.org.mx/",
    },
    {
      id: 2,
      title: "Huellitas",
      desc: "This project facilitates the adoption of rescued dogs, connecting shelters and rescuers with responsible adopters through a fluid and loving user experience.",
      image: project2,
      tags: ["Education", "JavaScript", "Logic"],
      code: "https://github.com/carlosalberto05/perritos-refugio-frontend",
      demo: "https://perritos-refugio-frontend.vercel.app/",
    },
    {
      id: 3,
      title: "Potencial de Cambio",
      desc: "Scientific coach application that uses AI to generate personalized multisensory visualizations based on the user's psychological profile.",
      image: project3,
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
      code: "https://github.com/carlosalberto05/potencial-de-cambio-frontend.git",
      demo: "https://potencial-de-cambio-frontend.vercel.app/",
    },
    {
      id: 4,
      title: "MellowDyne",
      desc: "Mellowdyne is an e-commerce platform dedicated to selling vinyl records of various musical genres.",
      image: project4,
      tags: ["WordPress", "Elementor", "Web Design"],
      code: "https://github.com/carlosalberto05/grupo_4_exitosos",
      demo: "https://mellowdyne.onrender.com/",
    },
    {
      id: 5,
      title: "Raftec App",
      desc: "It is a mobile application designed to transform the hospitalization and treatment experience of children with cancer.",
      image: project5,
      tags: ["React Native", "Expo", "Social Impact"],
      code: "https://github.com/carlosalberto05/raftec.git",
      demo: "https://expo.dev/preview/update?message=Subiendo+avance+para+portafolio&updateRuntimeVersion=1.0.0&createdAt=2026-03-04T16%3A22%3A35.113Z&slug=exp&projectId=ce5c9b90-1feb-4a0d-b918-3369b539efa6&group=b8cb81e5-5226-405f-ab91-ab1776bbd1ac",
    },
  ];

  return (
    <section
      id="projects"
      style={{ backgroundColor: darkMode ? "#111827" : "#f9fafb" }}
      className="relative py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #1d64bf, #20afd9)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h2>

          <p
            className="max-w-xl mx-auto"
            style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
          >
            A showcase of my recent work and high-impact contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? "linear-gradient(to right, #1f2937, #111827)"
                  : "linear-gradient(to right, #ffffff, #f9fafb)",
                borderColor: darkMode ? "#374151" : "e5e7eb",
              }}
              className="group rounded-xl border hover:border-brand-1/50 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-36 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: darkMode ? "white" : "#1f2937" }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm mb-3"
                  style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
                >
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                      className="px-2 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                      color: darkMode ? "white" : "#374151",
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "linear-gradient(to right, #1d64bf, #20afd9)",
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-brand-1/25 transition-all"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            style={{
              background: "linear-gradient(to right, #1d64bf, #20afd9)",
            }}
            className="inline-flex items-center gap-2 px-7 py-4 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-brand-1/25 transition-all"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaGithub />
            <span>View All Projects</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
