import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon, SearchIcon } from 'lucide-react';
import { CartIcon } from './CartIcon';
const navLinks = [{
  href: '/',
  label: 'Home'
}, {
  href: '/products',
  label: 'Shop'
}];
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  return <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              <span className="text-white">Blaqkly</span>
              <span className="text-[#D4AF37]">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.href} to={link.href} className={`relative text-sm font-medium tracking-wide transition-colors ${location.pathname === link.href ? 'text-[#D4AF37]' : 'text-white/70 hover:text-white'}`}>
                {link.label}
                {location.pathname === link.href && <motion.div layoutId="activeNav" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4AF37]" />}
              </Link>)}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2 text-white/70 hover:text-white transition-colors" aria-label="Search">
              <SearchIcon className="w-5 h-5" />
            </button>

            <CartIcon />

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen}>
              {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-black border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map(link => <Link key={link.href} to={link.href} onClick={() => setIsMenuOpen(false)} className={`block text-lg font-medium ${location.pathname === link.href ? 'text-[#D4AF37]' : 'text-white/70'}`}>
                  {link.label}
                </Link>)}
            </div>
          </motion.div>}
      </AnimatePresence>
    </header>;
}