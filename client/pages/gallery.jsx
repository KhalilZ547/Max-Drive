import { motion } from 'framer-motion';
import Link from 'next/link';
import { Bebas_Neue, Oswald } from 'next/font/google';

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas'
});

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald'
});

export default function Gallery() {
  return (
    <div className={`min-h-screen ${oswald.variable} font-sans`}
         style={{
           backgroundImage: "url('/imgs/cover.jpg')",
           backgroundSize: 'cover',
           backgroundAttachment: 'fixed',
           backgroundPosition: 'center'
         }}>
      
      <nav className="fixed w-full z-50 bg-[#0a192f]/90 backdrop-blur-md border-b border-[#1f3a68]">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className={`${bebasNeue.className} text-3xl bg-gradient-to-r from-[#ff8f1f] to-[#ff4d4d] bg-clip-text text-transparent`}>MAX DRIVE</div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'Services', 'Gallery', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}

                className="text-gray-300 hover:text-[#ff8f1f] transition-colors duration-300 text-lg font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff4d4d] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`${bebasNeue.className} text-4xl md:text-5xl text-[#ff8f1f]`}>Gallery</h1>
          <p className="text-gray-400 mt-4">Explore our collection of automotive projects and services.</p>
          {/* Gallery content can be added here */}
        </div>
      </section>
    </div>
  );
}
