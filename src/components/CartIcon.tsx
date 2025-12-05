import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBagIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
export function CartIcon() {
  const {
    cartCount
  } = useCart();
  return <Link to="/cart" className="relative p-2 text-white hover:text-[#D4AF37] transition-colors" aria-label={`Shopping cart with ${cartCount} items`}>
      <ShoppingBagIcon className="w-6 h-6" />
      <AnimatePresence>
        {cartCount > 0 && <motion.span initial={{
        scale: 0
      }} animate={{
        scale: 1
      }} exit={{
        scale: 0
      }} className="absolute -top-1 -right-1 w-5 h-5 bg-[#D4AF37] text-black text-xs font-bold rounded-full flex items-center justify-center">
            {cartCount > 99 ? '99+' : cartCount}
          </motion.span>}
      </AnimatePresence>
    </Link>;
}