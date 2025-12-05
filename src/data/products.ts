export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes?: string[];
};
export const products: Product[] = [{
  id: '1',
  name: 'Midnight Leather Jacket',
  price: 299,
  image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop',
  category: 'Outerwear',
  description: 'Premium black leather jacket with matte finish. Features asymmetric zip closure and quilted lining for warmth.',
  sizes: ['S', 'M', 'L', 'XL']
}, {
  id: '2',
  name: 'Shadow Knit Sweater',
  price: 129,
  image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop',
  category: 'Tops',
  description: 'Luxuriously soft merino wool sweater in deep charcoal. Relaxed fit with ribbed cuffs and hem.',
  sizes: ['XS', 'S', 'M', 'L', 'XL']
}, {
  id: '3',
  name: 'Obsidian Slim Jeans',
  price: 149,
  image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop',
  category: 'Bottoms',
  description: 'Japanese selvedge denim in washed black. Slim fit with slight stretch for comfort.',
  sizes: ['28', '30', '32', '34', '36']
}, {
  id: '4',
  name: 'Noir Canvas Sneakers',
  price: 189,
  image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop',
  category: 'Footwear',
  description: 'Minimalist canvas sneakers with vulcanized rubber sole. Triple black colorway.',
  sizes: ['7', '8', '9', '10', '11', '12']
}, {
  id: '5',
  name: 'Eclipse Wool Coat',
  price: 449,
  image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop',
  category: 'Outerwear',
  description: 'Double-breasted wool coat in midnight black. Fully lined with horn buttons.',
  sizes: ['S', 'M', 'L', 'XL']
}, {
  id: '6',
  name: 'Carbon Fiber Watch',
  price: 599,
  image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=800&fit=crop',
  category: 'Accessories',
  description: 'Precision timepiece with carbon fiber dial and sapphire crystal. Water resistant to 100m.'
}, {
  id: '7',
  name: 'Phantom Hoodie',
  price: 99,
  image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop',
  category: 'Tops',
  description: 'Heavyweight French terry hoodie with kangaroo pocket. Oversized fit.',
  sizes: ['S', 'M', 'L', 'XL', 'XXL']
}, {
  id: '8',
  name: 'Onyx Leather Belt',
  price: 79,
  image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop',
  category: 'Accessories',
  description: 'Full-grain leather belt with brushed gunmetal buckle. 35mm width.',
  sizes: ['30', '32', '34', '36', '38']
}, {
  id: '9',
  name: 'Stealth Cargo Pants',
  price: 169,
  image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop',
  category: 'Bottoms',
  description: 'Technical cargo pants with water-resistant coating. Multiple utility pockets.',
  sizes: ['S', 'M', 'L', 'XL']
}, {
  id: '10',
  name: 'Void Sunglasses',
  price: 249,
  image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=800&fit=crop',
  category: 'Accessories',
  description: 'Acetate frame sunglasses with polarized lenses. UV400 protection.'
}, {
  id: '11',
  name: 'Raven Bomber Jacket',
  price: 279,
  image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop',
  category: 'Outerwear',
  description: 'Classic MA-1 bomber in satin nylon. Orange reversible lining.',
  sizes: ['S', 'M', 'L', 'XL']
}, {
  id: '12',
  name: 'Abyss Leather Boots',
  price: 329,
  image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=800&fit=crop',
  category: 'Footwear',
  description: 'Chelsea boots in polished leather with elastic side panels. Goodyear welted.',
  sizes: ['7', '8', '9', '10', '11', '12']
}];
export const categories = ['All', 'Outerwear', 'Tops', 'Bottoms', 'Footwear', 'Accessories'];