import { motion } from 'framer-motion';
import Link from 'next/link';
import { Bebas_Neue, Oswald } from 'next/font/google';
import styles from '../styles/home.module.css';

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas'
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald'
});

export default function Home() {
  return (
    <div className={`min-h-screen ${oswald.variable} font-sans`}
         style={{
           backgroundImage: "url('/garage-bg.jpg')",
           backgroundSize: 'cover',
           backgroundAttachment: 'fixed',
           backgroundPosition: 'center'
         }}>
      
      {/* Modern Glassmorphism Navigation */}
      <nav className="fixed w-full z-50 bg-[#0a192f]/90 backdrop-blur-md border-b border-[#1f3a68]">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className={`${bebasNeue.className} text-3xl bg-gradient-to-r from-[#ff8f1f] to-[#ff4d4d] bg-clip-text text-transparent`}>
            MAX DRIVE
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'Services', 'Gallery', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-[#ff8f1f] transition-colors duration-300 text-lg font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff4d4d] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax Effect */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 px-4">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl px-4"
        >
          <h1 className={`${bebasNeue.className} text-5xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-[#ff8f1f] to-[#ff4d4d] bg-clip-text text-transparent`}>
            Precision Automotive Care
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Expert tuning, premium maintenance, and performance upgrades for enthusiasts and professionals alike.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="#contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#ff4d4d] to-[#ff8f1f] text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="#services"
                className="inline-block px-8 py-3 border-2 border-[#ff4d4d] text-[#ff4d4d] rounded-lg font-medium hover:bg-[#ff4d4d]/10 transition-all duration-300"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section - Professional Cards */}
      <section id="services" className="py-20 bg-[#0a192f]/95 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <h2 className={`${bebasNeue.className} text-4xl md:text-5xl text-center mb-16 text-[#ff8f1f]`}>
            Expert Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0a192f] p-8 rounded-xl border border-[#1f3a68] hover:border-[#ff8f1f]/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d4d]/10 to-[#ff8f1f]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <service.icon className="w-12 h-12 mb-4 text-[#ff8f1f]" />
                  <h3 className="text-xl font-bold text-gray-300 mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Modern Form */}
      <section id="contact" className="py-20 bg-[#0a192f]/95 backdrop-blur-lg">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-[#0a192f] p-8 md:p-12 rounded-xl border border-[#1f3a68]">
            <h2 className={`${bebasNeue.className} text-4xl mb-8 text-[#ff8f1f] text-center`}>
              Get In Touch
            </h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-[#0a192f] border border-[#1f3a68] rounded-lg focus:ring-2 focus:ring-[#ff8f1f] focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-[#0a192f] border border-[#1f3a68] rounded-lg focus:ring-2 focus:ring-[#ff8f1f] focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 bg-[#0a192f] border border-[#1f3a68] rounded-lg focus:ring-2 focus:ring-[#ff8f1f] focus:border-transparent outline-none transition-all"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#ff4d4d] to-[#ff8f1f] text-white py-4 rounded-lg font-medium hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// Services Data
const services = [
  {
    title: 'Performance Tuning',
    description: 'Custom ECU remapping and dyno tuning for optimal power delivery',
    icon: (props) => (
      <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Engine Rebuilds',
    description: 'Complete engine overhaul and precision rebuilding services',
    icon: (props) => (
      <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    )
  },
  {
    title: 'Custom Fabrication',
    description: 'Bespoke exhaust systems and roll cage installations',
    icon: (props) => (
      <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  }
];