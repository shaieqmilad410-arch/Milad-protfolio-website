import { motion } from "framer-motion";
import { Code2, Braces, Layers3, Server, Smartphone } from "lucide-react";

const journey = [
  {
    period: "Foundation",
    title: "HTML & CSS",
    description:
      "Built a strong foundation in semantic HTML, modern CSS, responsive layouts, Flexbox, Grid, positioning, media queries, and reusable UI structures.",
    technologies: ["HTML", "CSS", "Flexbox", "Grid", "Responsive Design"],
    icon: Code2,
  },
  {
    period: "Programming",
    title: "JavaScript",
    description:
      "Learned modern JavaScript concepts including arrays, objects, destructuring, modules, DOM manipulation, events, asynchronous programming, promises, and reusable logic.",
    technologies: ["JavaScript", "DOM", "ES6+", "Async/Await", "APIs"],
    icon: Braces,
  },
  {
    period: "Frontend Development",
    title: "React & Modern UI",
    description:
      "Started building component-based applications with React, focusing on reusable components, props, state, hooks, routing, responsive interfaces, and modern user experiences.",
    technologies: ["React", "Hooks", "React Router", "Tailwind CSS"],
    icon: Layers3,
  },
  {
    period: "Current Focus",
    title: "Full-Stack Development",
    description:
      "Expanding from frontend development into backend technologies, databases, APIs, authentication, deployment, and production-ready application architecture.",
    technologies: ["Node.js", "APIs", "Databases", "Authentication"],
    icon: Server,
  },
  {
    period: "Long-Term Direction",
    title: "Web & Mobile Applications",
    description:
      "The long-term goal is to combine strong web development skills with React Native to build modern cross-platform applications for real-world users.",
    technologies: ["React Native", "Mobile Apps", "Full-Stack"],
    icon: Smartphone,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
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

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-background py-24 sm:py-28 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            My Journey
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            From fundamentals to full-stack development
          </h2>

          <p className="mt-5 text-base leading-7 text-secondary sm:text-lg">
            A continuous learning journey focused on building strong
            fundamentals, creating real projects, and developing the skills
            needed to build production-ready web and mobile applications.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          {/* Timeline line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-border sm:left-1/2 sm:block sm:-translate-x-1/2" />

          <div className="space-y-10 sm:space-y-14">
            {journey.map((item, index) => {
              const Icon = item.icon;
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className={`relative flex flex-col sm:flex-row ${
                    isRight ? "sm:justify-end" : "sm:justify-start"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-background sm:left-1/2 sm:flex sm:-translate-x-1/2">
                    <div className="h-2.5 w-2.5 rounded-full bg-accent" />
                  </div>

                  {/* Card */}
                  <motion.article
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.25 }}
                    className={`w-full sm:w-[46%] ${
                      isRight ? "sm:ml-auto" : "sm:mr-auto"
                    }`}
                  >
                    <div className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-black/5 sm:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                            {item.period}
                          </span>

                          <h3 className="mt-2 text-xl font-bold text-primary sm:text-2xl">
                            {item.title}
                          </h3>
                        </div>

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-accent">
                          <Icon size={21} />
                        </div>
                      </div>

                      <p className="mt-5 text-sm leading-7 text-secondary sm:text-base">
                        {item.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-secondary"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
