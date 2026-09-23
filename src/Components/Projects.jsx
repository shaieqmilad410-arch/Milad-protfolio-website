import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Dr.waris Tasal Dental Clinic Website",
    description:
      "A modern and responsive dental clinic website designed to provide a professional online presence and make it easy for patients to explore services and contact the clinic.",
    category: "Web Development",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/tasal web.JPG",
    github: "#",
    live: "#",
  },
  {
    title: "Sami AMZ pro Amazon Business Platform",
    description:
      "A professional educational platform designed to present Amazon business courses, success stories, FAQs, and contact information through a modern responsive interface.",
    category: "Web Development",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/sami web.JPG",
    github: "#",
    live: "#",
  },
  {
    title: "Modern Business Website",
    description:
      "A clean business website concept focused on strong visual hierarchy, responsive layouts, reusable components, and a polished user experience.",
    category: "UI Development",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    image:
      "/freelancers-and-startups-business-website-template-141119-1610385954426-cover.webp",
    github: "#",
    live: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const projectVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-surface py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Selected Work
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Projects I’ve built
            </h2>

            <p className="mt-5 text-base leading-7 text-secondary sm:text-lg">
              A selection of projects that demonstrate my approach to
              development, responsive design, and modern user experiences.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 font-semibold text-primary transition-colors duration-300 hover:text-accent"
          >
            Start a project
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 space-y-8"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={projectVariants}
              className="group overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="grid lg:grid-cols-2">
                {/* Project image */}
                <div className="relative min-h-[280px] overflow-hidden bg-background sm:min-h-[360px] lg:min-h-[430px]">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                  {/* Project number */}
                  <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-background/70 text-sm font-semibold text-primary backdrop-blur-md">
                    0{index + 1}
                  </div>
                </div>

                {/* Project information */}
                <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-12">
                  <span className="text-sm font-medium text-accent">
                    {project.category}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-primary sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-base leading-7 text-secondary">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-secondary"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-9 flex flex-wrap gap-5">
                    <a
                      href={project.github}
                      className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-300 hover:text-accent"
                    >
                      <FaGithub size={18} />
                      GitHub
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>

                    <a
                      href={project.live}
                      className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-300 hover:text-accent"
                    >
                      <ExternalLink size={18} />
                      Live Website
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
