import { motion } from "framer-motion";
import { Quote, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    name: "Samiullah Akbari",
    role: "Business Owner",
    message:
      "Milad understood the project requirements well and turned the idea into a clean, responsive, and professional website.",
    project: "Business Website",
    image: "/milad1.jpeg",
    whatsapp: "https://wa.me/93700000000",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },

  {
    name: "Shafiqullah Mandozai",
    role: "Entrepreneur",
    message:
      "The website was modern, easy to use, and worked smoothly across different screen sizes. Communication throughout the project was clear.",
    project: "Digital Project",
    image: "/milad1.jpeg",
    whatsapp: "https://wa.me/93700000000",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },

  {
    name: "Naweed Hakimzai",
    role: "Project Collaborator",
    message:
      "Milad pays attention to details and focuses on writing organized code while creating a polished user experience.",
    project: "Web Development",
    image: "/milad1.jpeg",
    whatsapp: "https://wa.me/93700000000",
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
];

// ----------------------------------------------------
// CONTAINER ANIMATION
// ----------------------------------------------------

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

// ----------------------------------------------------
// CARD ANIMATION
// ----------------------------------------------------

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// ----------------------------------------------------
// IMAGE ANIMATION
// ----------------------------------------------------

const imageVariants = {
  rest: {
    scale: 1,
    rotate: 0,
  },

  hover: {
    scale: 1.08,
    rotate: 2,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// ----------------------------------------------------
// TESTIMONIALS COMPONENT
// ----------------------------------------------------

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-background py-24 sm:py-28 lg:py-32"
    >
      {/* -------------------------------------------- */}
      {/* BACKGROUND GLOW */}
      {/* -------------------------------------------- */}

      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -left-40 top-1/2 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

      {/* -------------------------------------------- */}
      {/* MAIN CONTAINER */}
      {/* -------------------------------------------- */}

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* ------------------------------------------ */}
        {/* SECTION HEADING */}
        {/* ------------------------------------------ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-secondary"
          >
            Client Feedback
          </motion.span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            What people say about
            <span className="block text-accent">working with me.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-secondary sm:text-lg sm:leading-8">
            I value clear communication, thoughtful development, and creating
            digital experiences that solve real problems.
          </p>
        </motion.div>

        {/* ------------------------------------------ */}
        {/* TESTIMONIAL CARDS */}
        {/* ------------------------------------------ */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.name}-${index}`}
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-accent/30 hover:shadow-2xl sm:p-7"
            >
              {/* ------------------------------------ */}
              {/* CARD TOP GLOW */}
              {/* ------------------------------------ */}

              <motion.div
                className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* ------------------------------------ */}
              {/* TOP ROW */}
              {/* ------------------------------------ */}

              <div className="relative flex items-center justify-between">
                {/* Quote */}

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card text-accent"
                >
                  <Quote size={19} />
                </motion.div>

                {/* Project */}

                <span className="rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-secondary">
                  {testimonial.project}
                </span>
              </div>

              {/* ------------------------------------ */}
              {/* CLIENT IMAGE */}
              {/* ------------------------------------ */}

              <div className="relative mt-7 flex justify-center">
                {/* Image glow */}

                <div className="absolute inset-0 mx-auto h-28 w-28 rounded-full bg-accent/20 blur-2xl" />

                {/* Image */}

                <motion.div
                  variants={imageVariants}
                  className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-card shadow-xl ring-2 ring-accent/20"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>

              {/* ------------------------------------ */}
              {/* NAME + ROLE */}
              {/* ------------------------------------ */}

              <div className="relative mt-5 text-center">
                <h3 className="text-base font-bold text-primary sm:text-lg">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-xs font-medium text-secondary">
                  {testimonial.role}
                </p>
              </div>

              {/* ------------------------------------ */}
              {/* MESSAGE */}
              {/* ------------------------------------ */}

              <p className="relative mt-6 flex-1 text-center text-sm leading-7 text-secondary sm:text-base">
                “{testimonial.message}”
              </p>

              {/* ------------------------------------ */}
              {/* DIVIDER */}
              {/* ------------------------------------ */}

              <div className="my-6 h-px w-full bg-border" />

              {/* ------------------------------------ */}
              {/* SOCIAL MEDIA */}
              {/* ------------------------------------ */}

              <div className="relative flex items-center justify-center gap-3">
                {/* WhatsApp */}

                <motion.a
                  href={testimonial.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${testimonial.name} WhatsApp`}
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.92,
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-white transition-colors duration-300 hover:border-accent/30 hover:text-accent"
                >
                  <i className="fa-brands fa-whatsapp text-lg" />
                </motion.a>

                {/* Facebook */}

                <motion.a
                  href={testimonial.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${testimonial.name} Facebook`}
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.92,
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-secondary transition-colors duration-300 hover:border-accent/30 hover:text-accent"
                >
                  <i className="fa-brands fa-facebook-f text-lg" />
                </motion.a>

                {/* Instagram */}

                <motion.a
                  href={testimonial.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${testimonial.name} Instagram`}
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.92,
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-secondary transition-colors duration-300 hover:border-accent/30 hover:text-accent"
                >
                  <i className="fa-brands fa-instagram text-lg" />
                </motion.a>
              </div>

              {/* ------------------------------------ */}
              {/* BOTTOM ARROW */}
              {/* ------------------------------------ */}

              <motion.div
                animate={{
                  x: [0, 3, 0],
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-5 top-5 text-secondary opacity-40 transition-colors duration-300 group-hover:text-accent group-hover:opacity-100"
              >
                <ArrowUpRight size={17} />
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        {/* ------------------------------------------ */}
        {/* TRUST STATEMENT */}
        {/* ------------------------------------------ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mx-auto mt-12 max-w-3xl text-center"
        >
          <p className="text-sm leading-7 text-secondary">
            Every project is an opportunity to learn, improve, and build
            something better.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
