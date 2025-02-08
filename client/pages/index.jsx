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
          <div className={`${bebasNeue.className} text-3xl bg-gradient-to-r from-[#ff8f1f] to-[#ff4d4d] bg-clip-text text-transparent`}>MAX DRIVE</div>
          
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

      {/* Hero Section with Enhanced CTA */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 px-4">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl px-4"
        >
          <h1 className={`${bebasNeue.className} text-5xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-[#ff8f1f] to-[#ff4d4d] bg-clip-text text-transparent`}>Precision Automotive Care</h1>
          
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

      {/* User Engagement Section */}
      <section className="py-20 bg-[#0a192f]/95 backdrop-blur-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${bebasNeue.className} text-4xl md:text-5xl text-[#ff8f1f]`}>Manage Your Car Data</h2>
          <p className="text-gray-400 mt-4">Track your service history, diagnostics, and custom tuning files.</p>
          <Link href="#dashboard" className="mt-6 inline-block px-6 py-3 bg-[#ff8f1f] text-white rounded-lg shadow-lg hover:bg-[#ff4d4d] transition-all">Explore Dashboard</Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#0a192f]/95 backdrop-blur-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${bebasNeue.className} text-4xl md:text-5xl text-[#ff8f1f]`}>Our Services</h2>
          <p className="text-gray-400 mt-4">We offer a wide range of services to help you get the most out of your vehicle.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl text-[#ff8f1f]">Tuning</h3>
              <p className="text-gray-400 mt-2">Expert tuning for optimal performance and efficiency.</p>
            </div>
            <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl text-[#ff8f1f]">Maintenance</h3>
              <p className="text-gray-400 mt-2">Regular maintenance to keep your vehicle running smoothly.</p>
            </div>
            <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl text-[#ff8f1f]">Upgrades</h3>
              <p className="text-gray-400 mt-2">Performance upgrades to take your vehicle to the next level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0a192f]/95 backdrop-blur-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${bebasNeue.className} text-4xl md:text-5xl text-[#ff8f1f]`}>Get in Touch</h2>
          <p className="text-gray-400 mt-4">Contact us to schedule a consultation or learn more about our services.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl text-[#ff8f1f]">Phone</h3>
              <p className="text-gray-400 mt-2">123-456-7890</p>
            </div>
            <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl text-[#ff8f1f]">Email</h3>
              <p className="text-gray-400 mt-2">info@maxdrive.com</p>
            </div>
            <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl text-[#ff8f1f]">Address</h3>
              <p className="text-gray-400 mt-2">123 Main St, Anytown, USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-20 bg-[#0a192f]/95 backdrop-blur-lg">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${bebasNeue.className} text-4xl md:text-5xl text-[#ff8f1f]`}>Dashboard</h2>
          <p className="text-gray-400 mt-4">Track your service history, diagnostics, and custom tuning files.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl text-[#ff8f1f]">Service History</h3>
              <p className="text-gray-400 mt-2">View your vehicle's service history.</p>
            </div>
            <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl text-[#ff8f1f]">Diagnostics</h3>
              <p className="text-gray-400 mt-2">Check your vehicle's diagnostic data.</p>
            </div>
            <div className="bg-[#0a192f] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl text-[#ff8f1f]">Tuning Files</h3>
              <p className="text-gray-400 mt-2">Manage your custom tuning files.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
