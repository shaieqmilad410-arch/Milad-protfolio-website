import { motion } from "framer-motion";
import { Code2, Layers3, Smartphone, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Development",
    description:
      "I focus on writing structured, maintainable code that is easy to understand and improve.",
  },
  {
    icon: Layers3,
    title: "Modern Architecture",
    description:
      "I build projects with reusable components and scalable structures instead of one large codebase.",
  },
  {
    icon: Smartphone,
    title: "Responsive Experiences",
    description:
      "Every interface is designed to work smoothly across phones, tablets, laptops, and large screens.",
  },
  {
    icon: Sparkles,
    title: "User-Focused Design",
    description:
      "I combine development and modern UI principles to create interfaces that feel clear and intuitive.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-surface py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            About Me
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Building with purpose,
            <span className="block text-secondary">not just writing code.</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="mt-14 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 text-base leading-8 text-secondary sm:text-lg">
              <p>
                I’m a developer focused on creating modern web experiences that
                are fast, responsive, and easy to use.
              </p>

              <p>
                My development journey is centered around understanding how
                things work rather than simply making them work. I care about
                clean component structure, reusable code, responsive layouts,
                and thoughtful user experiences.
              </p>

              <p>
                I’m continuously expanding my skills across the modern
                development ecosystem, with a long-term focus on building
                full-stack web and application experiences.
              </p>
            </div>

            {/* Small principle card */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="mt-8 rounded-2xl border border-border bg-card p-6"
            >
              <p className="text-sm font-medium text-accent">
                My development principle
              </p>

              <p className="mt-3 text-lg font-medium leading-7 text-primary">
                “Understand the code. Build with purpose. Keep improving.”
              </p>
            </motion.div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.25 },
                  }}
                  className="group rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-secondary">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
