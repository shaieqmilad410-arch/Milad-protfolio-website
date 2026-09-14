import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Layers3,
  Database,
  Smartphone,
  Wrench,
} from "lucide-react";

const skills = [
  {
    name: "HTML",
    level: 90,
    icon: Code2,
    category: "Frontend",
  },
  {
    name: "CSS",
    level: 85,
    icon: Palette,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    level: 80,
    icon: Code2,
    category: "Programming",
  },
  {
    name: "React",
    level: 75,
    icon: Layers3,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    level: 85,
    icon: Palette,
    category: "UI",
  },
  {
    name: "Framer Motion",
    level: 70,
    icon: Layers3,
    category: "Animation",
  },
  {
    name: "Responsive Design",
    level: 90,
    icon: Smartphone,
    category: "Frontend",
  },
  {
    name: "Git & GitHub",
    level: 75,
    icon: Wrench,
    category: "Tools",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-background py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Skills
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Technologies I work with
          </h2>

          <p className="mt-5 text-base leading-7 text-secondary sm:text-lg">
            A growing toolkit focused on building modern, responsive, and
            maintainable digital experiences.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25 },
                }}
                className="group rounded-2xl border border-border bg-card p-5 transition-colors duration-300 hover:border-accent/40"
              >
                {/* Top row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-primary">
                        {skill.name}
                      </h3>

                      <p className="mt-0.5 text-xs text-secondary">
                        {skill.category}
                      </p>
                    </div>
                  </div>

                  <span className="text-sm font-semibold text-accent">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-border">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.15,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full bg-accent"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-14 max-w-3xl text-center"
        >
          <p className="text-sm leading-6 text-secondary">
            Skills are continuously improving through real projects,
            problem-solving, and hands-on development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
