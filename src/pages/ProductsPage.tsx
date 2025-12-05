import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FilterIcon, XIcon } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products, categories } from '../data/products';
export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') return products;
    return products.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);
  return <main className="min-h-screen bg-black pt-20 md:pt-24">
      {/* Page Header */}
      <section className="px-4 py-12 md:py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Shop All
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.1
        }} className="text-white/60 max-w-xl">
            Discover our complete collection of premium black essentials.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <FilterIcon className="w-5 h-5" />
              Filter by Category
            </button>
          </div>

          {/* Sidebar Filters */}
          <aside className={`lg:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Categories</h2>
                <button onClick={() => setIsFilterOpen(false)} className="lg:hidden text-white/50 hover:text-white" aria-label="Close filters">
                  <XIcon className="w-5 h-5" />
                </button>
              </div>

              <nav className="space-y-2" role="navigation" aria-label="Product categories">
                {categories.map(category => <button key={category} onClick={() => {
                setSelectedCategory(category);
                setIsFilterOpen(false);
              }} className={`block w-full text-left px-4 py-2 rounded-sm transition-colors ${selectedCategory === category ? 'bg-[#D4AF37] text-black font-medium' : 'text-white/60 hover:text-white hover:bg-white/5'}`} aria-current={selectedCategory === category ? 'page' : undefined}>
                    {category}
                  </button>)}
              </nav>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <p className="text-white/50 text-sm">
                {filteredProducts.length} product
                {filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </div>

            {filteredProducts.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
              </div> : <div className="text-center py-20">
                <p className="text-white/50">
                  No products found in this category.
                </p>
              </div>}
          </div>
        </div>
      </div>
    </main>;
}