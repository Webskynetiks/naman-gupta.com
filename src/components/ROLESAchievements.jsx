'use client';

import { Briefcase, Award, Mic, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';

const roles = [
  {
    title: ' Vice President – AIM',
    icon: Award,
    color: 'text-blue-600',
    bg: 'bg-blue-100',
    description:
      'With a strategic vision and decades of experience, Kulmani Gupta brings dynamic leadership to AIM (Association of Industries & Manufacturers), driving growth, policy advocacy, and industrial development across sectors.',
  },
  {
    title: 'Entrepreneur & Business Leader',
    icon: Briefcase,
    color: 'text-green-600',
    bg: 'bg-green-100',
    description:
      'With 27+ years in the industry, Kulmani Gupta continues to lead with innovation, building future-ready businesses and empowering India industrial ecosystem.',
  },
  {
    title: 'Public Speaker',
    icon: Mic,
    color: 'text-purple-600',
    bg: 'bg-purple-100',
    description:
      'Kulmani Gupta is a seasoned public speaker, known for addressing critical topics like entrepreneurship, industrial policy, and digital transformation at leading business forums and media platforms.',
  },
  {
    title: 'Media Recognition',
    icon: Newspaper,
    color: 'text-red-600',
    bg: 'bg-red-100',
    description: 'Featured in major newspapers for contributions to industry and society.',
  },
];

export default function RolesAchievements() {
  return (
    <section
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100"
      id="roles-achievements"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Roles & Achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg"
        >
          A journey of leadership, vision, and public service—unfolding through dynamic roles and
          impactful achievements.
        </motion.p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl border border-gray-200 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-full ${role.bg} ${role.color} mb-4 shadow-inner group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{role.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed text-justify">
                    {role.description}
                  </p>
                </div>

                {/* Decorative glow */}
                <div className="absolute -z-10 top-3 left-3 w-full h-full bg-white rounded-2xl opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 blur-md shadow-md"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
