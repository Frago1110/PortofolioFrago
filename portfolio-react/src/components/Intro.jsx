import { motion, AnimatePresence } from 'framer-motion';

function Intro({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 px-4 text-zinc-300"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <motion.h1
            className="text-center text-2xl font-semibold uppercase tracking-[0.18em] sm:text-4xl md:text-6xl lg:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ilario Fragomeni
          </motion.h1>
          <motion.h2
            className="mt-2 text-center text-sm font-semibold uppercase tracking-[0.18em] sm:text-xl md:text-3xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Portfolio
          </motion.h2>
          <motion.h3
            className="mt-4 hidden max-w-2xl px-4 text-center text-sm font-light uppercase tracking-[0.14em] text-zinc-400 md:block md:text-base lg:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Développeur web full stack junior en recherche d'alternance
          </motion.h3>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Intro;
