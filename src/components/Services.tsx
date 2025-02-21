import { motion } from 'framer-motion';
import { ShoppingBag, Globe, Palette, Settings, Layout, Code, Search, Users } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    name: "WordPress Development",
    description: "Custom WordPress themes and plugins tailored to your needs"
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    name: "Shopify Solutions",
    description: "E-commerce websites with custom Shopify themes"
  },
  {
    icon: <Layout className="w-8 h-8" />,
    name: "Theme Customization",
    description: "Modification of existing themes to match your brand"
  },
  {
    icon: <Code className="w-8 h-8" />,
    name: "Custom Development",
    description: "Bespoke features and functionality for your website"
  },
  {
    icon: <Search className="w-8 h-8" />,
    name: "SEO Optimization",
    description: "Improve your website's search engine rankings"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    name: "Website Maintenance",
    description: "Regular updates and maintenance to keep your site running smoothly"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    name: "UI/UX Design",
    description: "User-friendly interface design for better engagement"
  },
  {
    icon: <Users className="w-8 h-8" />,
    name: "Training & Support",
    description: "Learn how to manage your website effectively"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-black text-white">
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
              Services
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web solutions focused on WordPress and Shopify development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all hover:scale-105"
              >
                <div className="mb-6 text-purple-500 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.name}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}