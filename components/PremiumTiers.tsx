'use client';

import { motion } from 'framer-motion';
import { HiCheck, HiStar } from 'react-icons/hi';

const PremiumTiers = () => {
  const tiers = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for getting started',
      features: [
        'Basic pet interactions',
        '3D model viewing',
        'Limited pet access',
        'Community support',
      ],
      icon: '🌱',
      highlighted: false,
    },
    {
      name: 'Premium',
      price: '$9.99',
      period: '/month',
      description: 'Most popular for pet lovers',
      features: [
        'All Starter features',
        'Advanced 3D interactions',
        'Full pet collection access',
        'Custom pet themes',
        'Priority support',
        'Exclusive events',
        'Ad-free experience',
      ],
      icon: '💎',
      highlighted: true,
    },
    {
      name: 'Elite',
      price: '$24.99',
      period: '/month',
      description: 'For hardcore enthusiasts',
      features: [
        'All Premium features',
        'VIP pet customization',
        'Private worlds',
        'Early access to new pets',
        'Exclusive merchandise',
        '24/7 VIP support',
        'Custom avatars',
        'Live streaming features',
      ],
      icon: '👑',
      highlighted: false,
    },
  ];

  return (
    <section id="premium" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white via-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Flexible pricing for every pet lover
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                tier.highlighted
                  ? 'bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary shadow-2xl scale-105'
                  : 'bg-white border border-gray-200 hover:border-primary'
              }`}
            >
              {tier.highlighted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg">
                    <HiStar /> Most Popular
                  </div>
                </motion.div>
              )}

              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{tier.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">{tier.price}</span>
                  {tier.period && <span className="text-gray-600">{tier.period}</span>}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-full font-bold mb-8 transition-all ${
                  tier.highlighted
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-glow'
                    : 'border-2 border-primary text-primary hover:bg-primary/10'
                }`}
              >
                {tier.price === 'Free' ? 'Get Started' : 'Choose Plan'}
              </motion.button>

              <div className="space-y-4">
                {tier.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center"
                      >
                        <HiCheck className="text-white text-sm" />
                      </motion.div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumTiers;