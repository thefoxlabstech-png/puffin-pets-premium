'use client';

import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Pet Lover',
      image: '👩',
      content: 'The 3D experience is incredible! I spend hours just interacting with my pets. Absolutely worth it!',
      rating: 5,
    },
    {
      name: 'Marcus Johnson',
      role: 'Digital Creator',
      image: '👨',
      content: 'This platform has revolutionized how I interact with digital pets. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Emma Wilson',
      role: 'App Enthusiast',
      image: '👩‍🦱',
      content: 'Beautiful design, smooth animations, and the mobile experience is flawless. Love it!',
      rating: 5,
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Thousands</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See what our community has to say
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary transition-all shadow-lg hover:shadow-glow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <HiStar className="text-accent text-xl" />
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;