'use client';

import { motion } from 'framer-motion';
import { HiHeart, HiFacebook, HiTwitter, HiInstagram } from 'react-icons/hi';

const Footer = () => {
  const links = {
    Product: ['Features', 'Pricing', 'Security', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Cookie', 'Compliance'],
  };

  return (
    <footer className="bg-dark text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🐧</span>
              <span className="font-bold text-xl">Puffin Pets</span>
            </div>
            <p className="text-gray-400 text-sm">Creating magical pet experiences for everyone.</p>
          </motion.div>

          {Object.entries(links).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <HiHeart className="text-primary" /> by Fox Labs
            </p>
            <div className="flex gap-6">
              {[HiFacebook, HiTwitter, HiInstagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, color: '#FF6B6B' }}
                  className="text-gray-400 text-xl transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">© 2026 Puffin Pets. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;