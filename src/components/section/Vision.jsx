import { motion } from "framer-motion";

const Vision = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Gradient Blur Background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600 to-pink-500 opacity-30 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 z-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          >
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Vision</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            We aim to create a transparent yet anonymous platform where students can share honest feedback
            without fear. Our mission is to help institutions evolve through real student voices.
          </motion.p>
        </div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img
            src="/vision-illustration.svg" // replace with actual image path
            alt="Vision Illustration"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
