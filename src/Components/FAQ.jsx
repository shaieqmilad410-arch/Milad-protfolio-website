import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What type of websites do you build?",
    answer:
      "I build modern, responsive websites for businesses, personal brands, and digital projects using technologies such as React, JavaScript, and Tailwind CSS.",
  },
  {
    question: "Do you build responsive websites?",
    answer:
      "Yes. I design and develop responsive interfaces that adapt smoothly to mobile phones, tablets, laptops, and larger desktop screens.",
  },
  {
    question: "Can you work with international clients?",
    answer:
      "Yes. I am interested in working remotely with clients and teams internationally, with a focus on clear communication, reliable delivery, and professional development practices.",
  },
  {
    question: "Can you improve an existing website?",
    answer:
      "Yes. I can help improve an existing website by refining its UI, responsiveness, component structure, animations, and overall user experience.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "My current frontend stack includes HTML, CSS, JavaScript, React, Tailwind CSS, Framer Motion, Git, and GitHub. I am also continuing to expand into full-stack development.",
  },
  {
    question: "How can I start a project with you?",
    answer:
      "You can contact me through the contact section of this website. Share some information about your project, what you need, and your goals, and we can discuss the next steps.",
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

const itemVariants = {
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

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-surface py-24 sm:py-28 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-accent/5 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-secondary">
            FAQ
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Questions?
            <span className="block text-accent">I’ve got answers.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-secondary sm:text-lg sm:leading-8">
            A few things you may want to know before starting a project
            together.
          </p>
        </motion.div>

        {/* FAQ list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto mt-14 max-w-4xl space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                variants={itemVariants}
                className="overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-accent/30"
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-7 sm:py-6"
                >
                  <span className="text-sm font-semibold leading-6 text-primary sm:text-base">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-secondary"
                  >
                    <Plus size={18} />
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.35,
                          ease: "easeInOut",
                        },
                        opacity: {
                          duration: 0.2,
                        },
                      }}
                    >
                      <div className="border-t border-border px-5 pb-6 pt-5 sm:px-7">
                        <p className="max-w-3xl text-sm leading-7 text-secondary sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-secondary">Still have a question?</p>

          <a
            href="#contact"
            className="mt-2 inline-flex items-center font-semibold text-accent transition-colors duration-300 hover:text-accent-hover"
          >
            Let’s talk about your project
            <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;
