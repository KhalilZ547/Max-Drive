import styles from './Contact.module.css';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Contact() {
  return (
    <div 
      className="min-h-screen bg-[#0a192f] flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('/garage-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="relative w-full max-w-2xl backdrop-blur-lg bg-[#0a192f]/90 rounded-xl shadow-2xl p-8 border border-[#1f3a68]">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ff4d4d] via-[#ff8f1f] to-[#ff4d4d] rounded-t-xl" />
        
        <h1 className={`${bebasNeue.className} text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#ff8f1f] to-[#ff4d4d] tracking-wide`}>
          GARAGE CONTACT
        </h1>
        
        <p className="text-gray-300 mb-8 text-lg font-light">
          Got a mechanical challenge? Rev up your message and we'll tune in!
        </p>

        <form className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              className={`${styles.inputField} w-full p-4 bg-[#0a192f] border-2 border-[#1f3a68] rounded-lg text-gray-300 focus:outline-none transition-colors`}
              placeholder=" "
            />
            <label className={`${styles.inputLabel} absolute left-4 top-4 text-gray-400 pointer-events-none transition-all duration-300 ease-in-out`}>
              Full Name
            </label>
            <svg className="w-6 h-6 absolute right-4 top-4 text-[#ff8f1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              className={`${styles.inputField} w-full p-4 bg-[#0a192f] border-2 border-[#1f3a68] rounded-lg text-gray-300 focus:outline-none transition-colors`}
              placeholder=" "
            />
            <label className={`${styles.inputLabel} absolute left-4 top-4 text-gray-400 pointer-events-none transition-all duration-300 ease-in-out`}>
              Email Address
            </label>
            <svg className="w-6 h-6 absolute right-4 top-4 text-[#ff8f1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <textarea
              className={`${styles.inputField} w-full p-4 bg-[#0a192f] border-2 border-[#1f3a68] rounded-lg text-gray-300 focus:outline-none transition-colors h-32`}
              placeholder=" "
            ></textarea>
            <label className={`${styles.inputLabel} absolute left-4 top-4 text-gray-400 pointer-events-none transition-all duration-300 ease-in-out`}>
              Your Message
            </label>
            <svg className="w-6 h-6 absolute right-4 top-4 text-[#ff8f1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-[#ff4d4d] to-[#ff8f1f] text-white font-bold rounded-lg hover:from-[#ff8f1f] hover:to-[#ff4d4d] transition-all duration-300 transform hover:scale-105 shadow-lg group"
          >
            <span className="flex items-center justify-center">
              SEND MESSAGE
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}