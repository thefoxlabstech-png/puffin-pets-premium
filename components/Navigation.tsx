'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX, HiHeart } from 'react-icons/hi';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/#features' },
    { label: 'Pets', href: '/#pets' },
    { label: 'Premium', href: '/#premium' },
    { label: 'Jokes', href: '/jokes' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2"
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="text-2xl">🐧</div>
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Puffin Pets
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex gap-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-dark hover:text-primary transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex gap-4 items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all"
            >
              Sign In
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg hover:shadow-glow transition-all flex items-center gap-2"
            >
              <HiHeart /> Premium
            </motion.button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-white/95"
          >
            <div className="flex flex-col gap-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-dark hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 px-4">
                <button className="flex-1 px-4 py-2 rounded-full border-2 border-primary text-primary text-sm font-semibold">
                  Sign In
                </button>
                <button className="flex-1 px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold">
                  Premium
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
