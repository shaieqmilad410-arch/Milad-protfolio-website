import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// ----------------------------------------------------
// PREMIUM 3D SNOWFALL
// ----------------------------------------------------

const snowflakes = Array.from({ length: 65 }, (_, index) => {
  const depth = index % 3;

  const sizes = [
    3 + ((index * 5) % 4),
    6 + ((index * 7) % 5),
    10 + ((index * 11) % 7),
  ];

  const speeds = [
    15 + ((index * 3) % 7),
    10 + ((index * 5) % 6),
    7 + ((index * 4) % 5),
  ];

  return {
    id: index,

    left: `${(index * 37) % 100}%`,

    depth,

    size: sizes[depth],

    duration: speeds[depth],

    delay: -((index * 17) % 18),

    drift:
      depth === 0
        ? 18 + ((index * 5) % 20)
        : depth === 1
          ? 28 + ((index * 7) % 30)
          : 40 + ((index * 9) % 40),

    opacity:
      depth === 0
        ? 0.25 + ((index * 3) % 25) / 100
        : depth === 1
          ? 0.45 + ((index * 5) % 30) / 100
          : 0.7 + ((index * 7) % 25) / 100,

    blur: depth === 0 ? 0.5 : depth === 1 ? 0.2 : 0,
  };
});

// ----------------------------------------------------
// SNOWFALL COMPONENT
// ----------------------------------------------------

function Snowfall() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-40 overflow-hidden"
      style={{
        perspective: "1000px",
      }}
    >
      {snowflakes.map((snow) => (
        <motion.span
          key={snow.id}
          initial={{
            y: "-12vh",
            x: 0,
            opacity: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: snow.depth === 2 ? 1 : snow.depth === 1 ? 0.85 : 0.65,
          }}
          animate={{
            y: "112vh",

            // Natural wind movement
            x: [0, snow.drift, -snow.drift * 0.45, snow.drift * 0.7, 0],

            // Fade in and out
            opacity: [0, snow.opacity, snow.opacity, snow.opacity * 0.7, 0],

            // 3D rotation
            rotateX: [0, 120, 240, 360],
            rotateY: [0, 90, 210, 360],
            rotateZ: [0, 120, 250, 360],

            // Depth movement
            scale:
              snow.depth === 2
                ? [1, 1.08, 0.95, 1]
                : snow.depth === 1
                  ? [0.85, 0.95, 0.8, 0.85]
                  : [0.65, 0.72, 0.6, 0.65],
          }}
          transition={{
            duration: snow.duration,
            delay: snow.delay,
            repeat: Infinity,
            ease: "linear",

            opacity: {
              duration: snow.duration,
              repeat: Infinity,
              ease: "linear",
            },

            scale: {
              duration: snow.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            left: snow.left,
            width: `${snow.size}px`,
            height: `${snow.size}px`,

            transformStyle: "preserve-3d",

            filter: `blur(${snow.blur}px)`,

            boxShadow:
              snow.depth === 2
                ? "0 0 8px rgba(255,255,255,0.45)"
                : "0 0 4px rgba(255,255,255,0.25)",

            willChange: "transform, opacity",
          }}
          className="absolute top-0 rounded-full bg-white"
        />
      ))}
    </div>
  );
}

// ----------------------------------------------------
// HERO COMPONENT
// ----------------------------------------------------

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* --------------------------------------------- */}
      {/* BACKGROUND */}
      {/* --------------------------------------------- */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      {/* --------------------------------------------- */}
      {/* PREMIUM SNOW */}
      {/* --------------------------------------------- */}

      <Snowfall />

      {/* --------------------------------------------- */}
      {/* HERO CONTENT */}
      {/* --------------------------------------------- */}

      <div className="relative z-30 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ----------------------------------------- */}
          {/* LEFT SIDE */}
          {/* ----------------------------------------- */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {/* Small badge */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm font-medium backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Available for remote work
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              I Build
              <span className="block text-primary">Modern Web Experiences</span>
              That People Love.
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
            >
              I'm a full-stack web developer focused on creating fast,
              responsive, beautiful and user-friendly digital experiences.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.7,
              }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-card/60 border border-border  px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                View My Work
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center rounded-xl border border-border bg-card/60 px-6 py-3 font-semibold backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-card"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Stats */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.9,
              }}
              className="mt-10 flex flex-wrap gap-8"
            >
              <div>
                <p className="text-2xl font-bold">20+</p>

                <p className="text-sm text-muted-foreground">Projects</p>
              </div>

              <div>
                <p className="text-2xl font-bold">100%</p>

                <p className="text-sm text-muted-foreground">Responsive</p>
              </div>

              <div>
                <p className="text-2xl font-bold">24/7</p>

                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ----------------------------------------- */}
          {/* RIGHT SIDE */}
          {/* ----------------------------------------- */}

          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="relative"
          >
            {/* Main image card */}

            <div className="relative mx-auto max-w-lg">
              <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-3xl" />

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-3 shadow-2xl backdrop-blur-xl"
              >
                <img
                  src="/milad1.jpeg"
                  alt="Milad - Full Stack Web Developer"
                  className="h-auto w-full rounded-2xl object-fill"
                />
              </motion.div>

              {/* ------------------------------------- */}
              {/* FLOATING CODE CARD */}
              {/* ------------------------------------- */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-8 top-10 hidden rounded-2xl border border-border bg-card/90 p-4 shadow-xl backdrop-blur-xl sm:block"
              >
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  React.js
                </div>
              </motion.div>

              {/* ------------------------------------- */}
              {/* FLOATING DEVELOPER CARD */}
              {/* ------------------------------------- */}

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-8 bottom-10 hidden rounded-2xl border border-border bg-card/90 p-4 shadow-xl backdrop-blur-xl sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <span className="font-bold">{"</>"}</span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold">Full Stack</p>

                    <p className="text-xs text-muted-foreground">Developer</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
