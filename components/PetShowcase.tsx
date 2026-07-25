'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const PetShowcase = () => {
  const [activePet, setActivePet] = useState(0);

  const pets = [
    {
      id: 1,
      name: 'Pebbles',
      emoji: '🐧',
      type: 'Puffin',
      description: 'Cheerful and adventurous, always ready for a new experience',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      id: 2,
      name: 'Pip',
      emoji: '🐤',
      type: 'Chick',
      description: 'Energetic and playful, brings joy wherever it goes',
      color: 'from-yellow-300 to-orange-400',
    },
    {
      id: 3,
      name: 'Whiskers',
      emoji: '🐦',
      type: 'Birdie',
      description: 'Graceful and elegant, soars through skies with style',
      color: 'from-purple-400 to-pink-500',
    },
    {
      id: 4,
      name: 'Splash',
      emoji: '🦆',
      type: 'Duck',
      description: 'Friendly and sociable, loves water and adventures',
      color: 'from-green-400 to-teal-500',
    },
  ];

  const currentPet = pets[activePet];

  return (
    <section id="pets" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-light via-white to-light pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Pets</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover unique personalities and interactive experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            key={currentPet.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className={`p-8 md:p-12 rounded-3xl bg-gradient-to-br ${currentPet.color} shadow-2xl`}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-9xl md:text-[200px]"
              >
                {currentPet.emoji}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              key={currentPet.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-2">{currentPet.name}</h3>
              <p className="text-2xl text-primary font-semibold mb-4">{currentPet.type}</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{currentPet.description}</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {['Happiness', 'Energy', 'Intelligence', 'Charm'].map((stat, i) => (
                <motion.div
                  key={stat}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
                >
                  <p className="text-sm font-semibold text-gray-700 mb-2">{stat}</p>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${70 + Math.random() * 30}%` }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              {pets.map((pet, index) => (
                <motion.button
                  key={pet.id}
                  onClick={() => setActivePet(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activePet === index
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {pet.emoji} {pet.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PetShowcase;