"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Reference {
  id: string;
  name: string;
  logo: string;
  contactName?: string;
  contactPhoto?: string;
  testimonial?: string;
}

type TestimonialsProps = {
  references?: Reference[];
};

const Testimonials = ({ references }: TestimonialsProps) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="references" className="py-24 px-6 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            className="text-sm uppercase tracking-widest text-amber-700 font-medium block mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted by leading brands
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            References & Testimonials
          </motion.h2>
          <motion.div 
            className="h-px w-16 bg-amber-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>
        
        {/* Logo grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {references?.map((ref) => (
            <motion.div
              key={ref.id}
              className="flex items-center justify-center group"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              <div
                className="h-14 w-36 relative flex items-center justify-center transition-all duration-300"
              >
                <Image
                  src={ref.logo}
                  alt={ref.name}
                  fill
                  className="absolute w-full h-full object-contain inset-0 filter grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Testimonials */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {references?.filter(ref => ref.testimonial).slice(0, 3).map((ref) => (
            <motion.div
              key={`testimonial-${ref.id}`}
              className="bg-white p-8 rounded-sm shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_2px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 group relative overflow-hidden"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 to-amber-500" />
              
              {/* Quote mark */}
              <div className="absolute -right-4 -top-6 text-8xl font-serif text-neutral-100 leading-none select-none z-0 transition-all duration-300 group-hover:text-neutral-50">“</div>

              <div className="flex items-center mb-6 relative z-10">
                <div className="mr-4 w-14 h-14 relative ring-1 ring-amber-200 rounded-full p-0.5">
                  <Image
                    src={ref.contactPhoto || "/models/model-1.png"}
                    alt={ref.contactName || "Contact"}
                    fill
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{ref.contactName}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">{ref.name}</span>
                    <span className="w-4 h-4 relative">
                      <Image 
                        src={ref.logo}
                        alt={ref.name}
                        fill
                        className="object-contain"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 relative z-10 leading-relaxed">{ref.testimonial}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-serif mb-4">Ready to elevate your brand?</h3>
          <p className="text-gray-600 mb-8">Join leading fashion brands that trust Neovitrin for their visual content needs.</p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-black text-white uppercase tracking-wider text-sm hover:bg-amber-900 transition-colors duration-300"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
