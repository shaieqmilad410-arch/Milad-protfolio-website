import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/shaieqmilad410-arch",
    icon: FaGithub,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/93787172152",
    icon: FaWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/19a8S5b2Mv/?mibextid=wwXIfr",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/milad_shaieq02?stkn=ejA1MWdvZXR4MjZp&utm_source=qr",
    icon: FaInstagram,
  },
  {
    name: "Email",
    href: "mailto:shaieqmilad410@gmail.com",
    icon: Mail,
  },
];

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-lg font-bold text-white">
                M
              </span>

              <span className="text-2xl font-bold tracking-tight text-primary">
                Milad<span className="text-accent">.</span>
              </span>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-secondary">
              Full-stack developer focused on building modern, responsive, and
              meaningful digital experiences with clean and scalable code.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    aria-label={social.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.08,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-secondary transition-colors duration-300 hover:border-accent/40 hover:text-accent"
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Navigation
            </h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-secondary transition-colors duration-300 hover:text-primary"
                  >
                    {link.name}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Built With
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-secondary">
              <li>React</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>Modern Web Standards</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-secondary">
            © {new Date().getFullYear()} Milad. All rights reserved.
          </p>

          <a
            href="#"
            className="group inline-flex items-center gap-2 text-xs font-medium text-secondary transition-colors duration-300 hover:text-accent"
          >
            Back to top
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
