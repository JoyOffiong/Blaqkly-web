import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';


export function HomePage() {
  const featuredProducts = products.slice(0, 6);
  return <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&h=1080&fit=crop" alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-[#D4AF37] text-sm md:text-base uppercase tracking-[0.3em] mb-6">
          
          </motion.p>

          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Embrace the
            <br />
            <span className="text-[#D4AF37]">Darkness</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Premium black essentials crafted for those who dare to stand out by
            blending in.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg">
                Shop Collection
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" size="lg">
                View Lookbook
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{
          y: [0, 8, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
            <div>
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] mb-3">
                Curated Selection
              </motion.p>
              <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.1
            }} className="text-3xl md:text-4xl font-bold text-white">
                Featured Products
              </motion.h2>
            </div>

            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }}>
              <Link to="/products" className="inline-flex items-center text-white/70 hover:text-[#D4AF37] transition-colors mt-4 md:mt-0">
                View All Products
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="relative py-32 md:py-40 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-3xl md:text-5xl font-bold text-white mb-6">
            Crafted for the Bold
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Every piece in our collection is designed with intention, crafted
            with precision, and made to last.
          </motion.p>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }}>
            <Link to="/products">
              <Button size="lg">Explore Now</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xl font-bold">
              <span className="text-white">NOIR</span>
              <span className="text-[#D4AF37]">.</span>
            </div>
            <p className="text-white/40 text-sm">
              © 2024 NOIR. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>;
}