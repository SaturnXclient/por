import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Discovery",
    description: "Understanding your business needs and goals through detailed consultation"
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Design",
    description: "Creating wireframes and designs that align with your brand identity"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Development",
    description: "Building your website with WordPress or Shopify, ensuring quality and functionality"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Launch",
    description: "Deploying your website and providing ongoing support and maintenance"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-black text-white">
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
              How I Work
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A streamlined process to bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/5 rounded-2xl p-8 relative z-10">
                  <div className="mb-6 text-purple-500">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent transform -translate-y-1/2 z-0"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}