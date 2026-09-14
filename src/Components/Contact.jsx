import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle, MapPin, Send } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappNumber = "93787172152";

    const whatsappMessage = `
Hello Milad,

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "https://wa.me/93787172152");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-24 sm:py-28 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

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
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            Let’s build something meaningful.
          </h2>

          <p className="mt-5 text-base leading-7 text-secondary sm:text-lg">
            Have an idea, a website that needs improvement, or a project you
            want to bring to life? Send me a message and let’s discuss it.
          </p>
        </motion.div>

        {/* Main contact area */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-border bg-card p-7 sm:p-9"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Start a conversation
            </p>

            <h3 className="mt-4 text-2xl font-bold text-primary sm:text-3xl">
              Have a project in mind?
            </h3>

            <p className="mt-4 text-sm leading-7 text-secondary sm:text-base">
              Whether you need a new website, a modern React interface, or
              improvements to an existing project, I’d be happy to hear about
              it.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="mailto:your-email@example.com"
                className="group flex items-center gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-accent transition-colors duration-300 group-hover:border-accent/40">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
                    shaieqmilad@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/93787172152"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-accent transition-colors duration-300 group-hover:border-accent/40">
                  <MessageCircle size={20} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-semibold text-primary transition-colors duration-300 group-hover:text-accent">
                    Available for project discussions
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-accent">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-semibold text-primary">
                    Afghanistan,kabul · Working Remotely & physically
                  </p>
                </div>
              </div>
            </div>

            {/* Small CTA */}
            <div className="mt-10 border-t border-border pt-7">
              <p className="text-sm leading-6 text-secondary">
                Open to remote opportunities and interesting projects.
              </p>

              <a
                href="mailto:shaieqmilad410@gamil.com"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-300 hover:text-accent"
              >
                Send an email
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-border bg-card p-7 sm:p-9"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-primary"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-primary outline-none placeholder:text-secondary/60 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-primary"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-primary outline-none placeholder:text-secondary/60 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/10"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-primary"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to build?"
                  required
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-primary outline-none placeholder:text-secondary/60 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/10"
                />
              </div>

              {/* Message */}
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-primary"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-primary outline-none placeholder:text-secondary/60 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/10"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-accent-hover"
              >
                Send via WhatsApp
                <Send size={17} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
