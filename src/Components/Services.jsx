import { motion } from "framer-motion";
import {
  Globe,
  Code2,
  Layout,
  Sparkles,
  Smartphone,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive websites built with clean structure, reusable components, and a strong focus on performance and usability.",
    icon: Globe,
  },
  {
    number: "02",
    title: "React Development",
    description:
      "Component-based React interfaces designed to be maintainable, scalable, and easy to extend as a project grows.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Responsive UI",
    description:
      "Interfaces that adapt smoothly across mobile phones, tablets, laptops, and large desktop screens.",
    icon: Layout,
  },
  {
    number: "04",
    title: "Interactive Experiences",
    description:
      "Thoughtful animations and micro-interactions that make interfaces feel polished without sacrificing usability or performance.",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Mobile-Ready Experiences",
    description:
      "Web experiences designed with a mobile-first mindset and a long-term path toward modern cross-platform applications.",
    icon: Smartphone,
  },
  {
    number: "06",
    title: "Website Improvement",
    description:
      "UI improvements, responsive fixes, component refinements, and ongoing updates to make existing websites more professional.",
    icon: Wrench,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-surface py-24 sm:py-28 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Services
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            What I can build for you
          </h2>

          <p className="mt-5 text-base leading-7 text-secondary sm:text-lg">
            I focus on building modern digital experiences that combine clean
            development, responsive design, and thoughtful user interactions.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                variants={cardVariants}
                whileHover={{
                  y: -7,
                  transition: { duration: 0.25 },
                }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-7"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top row */}
                <div className="relative flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-accent transition-transform duration-300 group-hover:scale-105">
                    <Icon size={22} />
                  </div>

                  <span className="text-sm font-semibold text-secondary/50">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="relative mt-7 text-xl font-bold text-primary sm:text-2xl">
                  {service.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-secondary sm:text-base">
                  {service.description}
                </p>

                {/* Bottom link */}
                <div className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
                  Discuss a project
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-card p-7 sm:p-9 lg:flex-row lg:items-center lg:p-10"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Have a project in mind?
            </p>

            <h3 className="mt-3 text-2xl font-bold text-primary sm:text-3xl">
              Let’s build something useful.
            </h3>

            <p className="mt-3 text-sm leading-7 text-secondary sm:text-base">
              Tell me what you are trying to build, and we can discuss the best
              approach for your project.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-accent-hover"
          >
            Start a Conversation
            <ArrowUpRight size={17} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
