import { motion } from 'framer-motion';
import { Users, Code2, Award, Coffee } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "50+",
    label: "Happy Clients"
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    value: "100+",
    label: "Projects Completed"
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: "4+",
    label: "Years Experience"
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    value: "∞",
    label: "Coffee Cups"
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-block p-4 bg-white/5 rounded-full mb-4">
                <div className="text-purple-500">{stat.icon}</div>
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}