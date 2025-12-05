import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftIcon, MinusIcon, PlusIcon, CheckIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
export function ProductDetailPage() {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const {
    addToCart
  } = useCart();
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product?.sizes?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  if (!product) {
    return <main className="min-h-screen bg-black pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Product Not Found
          </h1>
          <Link to="/products" className="text-[#D4AF37] hover:underline">
            Back to Shop
          </Link>
        </div>
      </main>;
  }
  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 2000);
  };
  return <main className="min-h-screen bg-black pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Back Button */}
        <motion.button initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} onClick={() => navigate(-1)} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
          <ArrowLeftIcon className="w-4 h-4" />
          Back
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Image */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="aspect-[3/4] bg-[#0A0A0A] rounded-sm overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>

          {/* Product Info */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.1
        }} className="flex flex-col">
            <p className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] mb-3">
              {product.category}
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {product.name}
            </h1>

            <p className="text-2xl md:text-3xl text-[#D4AF37] font-semibold mb-6">
              ${product.price}
            </p>

            <p className="text-white/60 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size Selector */}
            {product.sizes && <div className="mb-8">
                <label className="block text-sm font-medium text-white mb-3">
                  Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => <button key={size} onClick={() => setSelectedSize(size)} className={`min-w-[48px] h-12 px-4 border rounded-sm transition-all ${selectedSize === size ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]' : 'border-white/20 text-white/70 hover:border-white/40'}`} aria-pressed={selectedSize === size}>
                      {size}
                    </button>)}
                </div>
              </div>}

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-white mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-white/20 rounded-sm">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 text-white/60 hover:text-white transition-colors" aria-label="Decrease quantity">
                    <MinusIcon className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-white font-medium">
                    {quantity}
                  </span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 text-white/60 hover:text-white transition-colors" aria-label="Increase quantity">
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="relative">
              <Button onClick={handleAddToCart} size="lg" className="w-full">
                Add to Cart — ₦{product.price * quantity}
              </Button>

              {/* Added Message */}
              <AnimatePresence>
                {showAddedMessage && <motion.div initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -10
              }} className="absolute top-full left-0 right-0 mt-4 flex items-center justify-center gap-2 text-green-400">
                    <CheckIcon className="w-5 h-5" />
                    Added to cart!
                  </motion.div>}
              </AnimatePresence>
            </div>

            {/* Additional Info */}
            <div className="mt-12 pt-8 border-t border-white/10 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-2" />
                <p className="text-white/50 text-sm">
                  Free shipping on orders over $200
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-2" />
                <p className="text-white/50 text-sm">30-day return policy</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-1 bg-[#D4AF37] rounded-full mt-2" />
                <p className="text-white/50 text-sm">Secure checkout</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>;
}