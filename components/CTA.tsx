'use client';

import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const CTA = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Join the <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Adventure?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Start your premium pet experience today. No credit card required for the free tier.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 107, 107, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg flex items-center gap-2"
            >
              Start Free Now <HiArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary/10 transition-all"
            >
              View Pricing
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;