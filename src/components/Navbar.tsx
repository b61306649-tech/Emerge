import { motion } from 'motion/react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Memberships', href: '#memberships' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 p-2 rounded-lg">
              <Dumbbell className="w-6 h-6 text-zinc-950" />
            </div>
            <span className="text-xl font-bold text-white tracking-wider uppercase">Emerge</span>
          </div>
          
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-orange-500 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <a href="#memberships" className="bg-orange-500 text-zinc-950 px-6 py-2.5 rounded-full font-bold uppercase tracking-wide hover:bg-orange-400 transition-colors">
              Join Now
            </a>
          </div>

          <button 
            className="md:hidden text-zinc-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-zinc-900 border-b border-zinc-800 absolute w-full"
        >
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-2xl">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-zinc-300 hover:text-orange-500 hover:bg-zinc-800 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a href="#memberships" className="block w-full text-center mt-4 bg-orange-500 text-zinc-950 px-6 py-3 rounded-md font-bold uppercase">
              Join Now
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
