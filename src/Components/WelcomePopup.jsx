import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Gift, X } from "lucide-react";

function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -15,
            scale: 0.95,
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="
            fixed
            right-4
            top-[72px]
            z-[90]
            w-[calc(100%-2rem)]
            max-w-sm
            overflow-hidden
            rounded-2xl
            border
            border-white/20
            bg-gradient-to-br
            from-blue-600
            via-blue-700
            to-indigo-800
            p-4
            shadow-2xl
            shadow-blue-900/40
            sm:right-6
            sm:top-[78px]
            sm:p-5
          "
        >
          {/* Decorative Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-12
              -top-12
              h-32
              w-32
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <div className="relative">
            {/* Close Button */}
            <button
              type="button"
              onClick={closePopup}
              aria-label="Close announcement"
              className="
                absolute
                right-0
                top-0
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-lg
                text-white/70
                transition
                hover:bg-white/10
                hover:text-white
              "
            >
              <X size={16} />
            </button>

            {/* Greeting */}
            <div className="flex items-start gap-3 pr-7">
              <motion.div
                animate={{
                  rotate: [0, -8, 8, -5, 5, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 1.3,
                  delay: 0.3,
                }}
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/15
                  text-white
                  backdrop-blur-sm
                "
              >
                <Gift size={19} />
              </motion.div>

              <div>
                <p className="text-md font-medium text-blue-100">
                  👋 Welcome to my portfolio
                </p>

                {/* <h3 className="mt-1 text-sm font-bold text-white sm:text-base">
                  Let’s build something great.
                </h3> */}
              </div>
            </div>

            {/* Discount */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="
                mt-4
                rounded-xl
                border
                border-white/15
                bg-white/10
                px-4
                py-3
                backdrop-blur-sm
              "
            >
              <p className="text-xs font-medium uppercase tracking-wider text-blue-100">
                Special offer from Milad
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                30% OFF your first project
              </p>
            </motion.div>

            {/* CTA */}
            <motion.a
              href="#contact"
              onClick={closePopup}
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.98 }}
              className="
                group
                mt-4
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                bg-white
                px-4
                py-2.5
                text-xs
                font-bold
                text-blue-700
                shadow-lg
                shadow-black/10
                transition
                hover:bg-blue-50
              "
            >
              Let’s Talk
              <ArrowRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.a>

            {/* 15 Second Progress */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{
                duration: 15,
                ease: "linear",
              }}
              className="
                absolute
                bottom-[-20px]
                left-0
                h-0.5
                rounded-full
                bg-white/70
              "
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WelcomePopup;
