'use client';

import { motion } from 'framer-motion';
import { HiCube, HiSparkles, HiZoom, HiDeviceMobile, HiLightBulb, HiShieldCheck } from 'react-icons/hi';

const Features = () => {
  const features = [
    {
      icon: HiCube,
      title: '3D Interactive World',
      description: 'Fully rendered 3D environments with real-time interactions and dynamic lighting',
    },
    {
      icon: HiSparkles,
      title: 'Smooth Animations',
      description: 'Premium animations and transitions that bring everything to life',
    },
    {
      icon: HiZoom,
      title: 'Detailed Pet Models',
      description: 'High-quality 3D pet models with intricate details and customizations',
    },
    {
      icon: HiDeviceMobile,
      title: 'Mobile Optimized',
      description: 'Fully responsive design that works beautifully on all devices',
    },
    {
      icon: HiLightBulb,
      title: 'Smart Features',
      description: 'AI-powered features that learn your preferences and adapt to your style',
    },
    {
      icon: HiShieldCheck,
      title: 'Secure & Safe',
      description: 'Enterprise-grade security with advanced encryption and protection',
    },
  ];

  return (
    <section id="features" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white to-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need for an extraordinary pet experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: '0 0 30px rgba(255, 107, 107, 0.2)' }}
                className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary transition-all cursor-pointer glass"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6"
                >
                  <Icon className="text-white text-2xl" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;