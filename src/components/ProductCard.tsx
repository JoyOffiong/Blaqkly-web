import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
type ProductCardProps = {
  product: Product;
  index?: number;
};
export function ProductCard({
  product,
  index = 0
}: ProductCardProps) {
  return <motion.article initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.4,
    delay: index * 0.1
  }}>
      <Link to={`/product/${product.id}`} className="group block" aria-label={`View ${product.name} - $${product.price}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-[#0A0A0A] rounded-sm">
          <motion.img src={product.image} alt={product.name} className="w-full h-full object-cover" whileHover={{
          scale: 1.05
        }} transition={{
          duration: 0.4
        }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <motion.div className="absolute inset-0 ring-1 ring-inset ring-[#D4AF37]/0 group-hover:ring-[#D4AF37]/50 transition-all duration-300 rounded-sm" />
        </div>

        <div className="mt-4 space-y-1">
          <p className="text-xs text-[#A0A0A0] uppercase tracking-wider">
            {product.category}
          </p>
          <h3 className="text-white font-medium group-hover:text-[#D4AF37] transition-colors">
            {product.name}
          </h3>
          <p className="text-[#D4AF37] font-semibold">₦{product.price}</p>
        </div>
      </Link>
    </motion.article>;
}