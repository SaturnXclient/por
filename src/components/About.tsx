import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Professional headshot"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-2xl"></div>
              </motion.div>
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-20 -z-10"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-20"></div>
            </div>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  About Me
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-xl text-gray-300 leading-relaxed">
                  Hi, I'm Hamza Asa, a passionate developer with expertise in building modern web applications. I specialize in creating beautiful, functional, and user-friendly digital experiences.
                </p>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  With over 4 years of experience in web development, I've worked on various projects ranging from WordPress websites to Shopify e-commerce solutions and custom web applications.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {['React', 'WordPress', 'Shopify', 'TypeScript', 'Node.js', 'Tailwind CSS'].map((skill) => (
                  <span
                    key={skill}
                    className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}