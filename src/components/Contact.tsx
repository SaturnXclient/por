import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-300 mb-12">
            Feel free to reach out for collaborations or just a friendly hello
          </p>

          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/Asastudio55"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            >
              <Github className="w-6 h-6" />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:asastudio55@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <span>Email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}