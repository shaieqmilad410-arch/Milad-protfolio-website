import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        {/* <motion.a
          href="#home"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={closeMenu}
          className="group flex items-center gap-2"
        >
          <span className="text-xl font-bold tracking-tight text-primary sm:text-2xl">
            Milad <span className="text-accent">Shaieq.</span>
          </span>

          <span className="hidden text-xs font-medium text-secondary sm:block">
            Developer
          </span>
        </motion.a> */}
        <img
          src="/WhatsApp_Image_2026-09-22_at_11.34.07_AM-removebg-preview.png"
          className="w-40 h-20 object-cover"
          alt="Milad shaieq"
        />

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="group relative py-2 text-sm font-medium text-secondary transition-colors duration-300 hover:text-primary"
            >
              {link.name}

              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Desktop CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-300 hover:bg-accent-hover hover:shadow-accent/30 lg:flex"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-primary transition-colors hover:bg-surface lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.05,
                    }}
                    className="border-b border-border/50 py-4 text-base font-medium text-secondary transition-colors hover:text-primary"
                  >
                    {link.name}
                  </motion.a>
                ))}

                <motion.a
                  href="#contact"
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                  Let's Talk
                  <ArrowUpRight size={17} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
