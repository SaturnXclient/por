import { motion } from 'framer-motion';
import { ShoppingBag, Globe, Code, Palette } from 'lucide-react';

const platforms = [
  {
    icon: <Globe className="w-8 h-8" />,
    name: "WordPress",
    description: "Custom theme development and plugin integration"
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    name: "Shopify",
    description: "E-commerce solutions and theme customization"
  },
  {
    icon: <Code className="w-8 h-8" />,
    name: "Web Development",
    description: "Modern web applications with React and TypeScript"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    name: "UI/UX Design",
    description: "Creative and user-friendly interface design"
  }
];

export default function Platforms() {
  return (
    <section id="platforms" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Platforms & Skills
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors"
              >
                <div className="mb-6 text-purple-500">{platform.icon}</div>
                <h3 className="text-xl font-bold mb-4">{platform.name}</h3>
                <p className="text-gray-400">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}