import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrashIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  ArrowRightIcon,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { useCart } from "../context/CartContext";
export function CartPage() {
  const { items, cartTotal, updateQuantity, removeFromCart, clearCart } =
    useCart();
  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-black pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
              <ShoppingBagIcon className="w-10 h-10 text-white/30" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Your cart is empty
            </h1>
            <p className="text-white/50 mb-8 max-w-md mx-auto">
              Looks like you haven't added anything to your cart yet. Explore
              our collection and find something you love.
            </p>
            <Link to="/products">
              <Button size="lg">
                Start Shopping
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </main>
    );
  }
  return (
    <main className="min-h-screen bg-black pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="flex items-center justify-between mb-8 md:mb-12"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Shopping Cart
          </h1>
          <button
            onClick={clearCart}
            className="text-white/50 hover:text-red-400 text-sm transition-colors"
          >
            Clear Cart
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="popLayout">
              {items.map((item, index) => (
                <motion.article
                  key={`${item.product.id}-${item.size}`}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -100,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="flex gap-4 md:gap-6 p-4 md:p-6 bg-[#0A0A0A] rounded-sm"
                >
                  {/* Product Image */}
                  <Link
                    to={`/product/${item.product.id}`}
                    className="flex-shrink-0 w-24 h-32 md:w-32 md:h-40 bg-[#141414] rounded-sm overflow-hidden"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-[#A0A0A0] text-xs uppercase tracking-wider mb-1">
                        {item.product.category}
                      </p>
                      <Link
                        to={`/product/${item.product.id}`}
                        className="text-white font-medium hover:text-[#D4AF37] transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      {item.size && (
                        <p className="text-white/50 text-sm mt-1">
                          Size: {item.size}
                        </p>
                      )}
                    </div>

                    {/* Price & Quantity */}
                    <div className="flex items-end justify-between mt-4">
                      <div className="flex items-center border border-white/20 rounded-sm">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="p-2 text-white/60 hover:text-white transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <MinusIcon className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-white text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="p-2 text-white/60 hover:text-white transition-colors"
                          aria-label="Increase quantity"
                        >
                          <PlusIcon className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <p className="text-[#D4AF37] font-semibold">
                          ₦{item.product.price * item.quantity}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-2 text-white/40 hover:text-red-400 transition-colors"
                          aria-label={`Remove ${item.product.name} from cart`}
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <motion.aside
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="lg:col-span-1"
          >
            <div className="sticky top-28 bg-[#0A0A0A] rounded-sm p-6 md:p-8">
              <h2 className="text-lg font-semibold text-white mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-white/60">
                  <span>Subtotal</span>
                  <span>₦{cartTotal}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Shipping</span>

                  <span>{cartTotal >= 20000 ? "Free" : "₦15"}</span>
                </div>

                <div></div>
                {/* <div className="flex justify-between text-white/60">
                  <span>Tax</span>
                  <span>₦{Math.round(cartTotal * 0.08)}</span>
                </div> */}
              </div>

              <div className="border-t border-white/10 pt-4 mb-6">
                <div className="flex justify-between text-white font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-[#D4AF37]">
                    ₦
                    {cartTotal +
                      (cartTotal >= 200 ? 0 : 15) +
                      Math.round(cartTotal * 0.08)}
                  </span>
                </div>
              </div>

 <Link
                to="/checkout">
              <Button size="lg" className="w-full mb-4">
                Proceed to Checkout
              </Button> </Link>

              <Link
                to="/products"
                className="block text-center text-white/50 hover:text-white text-sm transition-colors"
              >
                Continue Shopping
              </Link>

              {cartTotal < 20000 && (
                <p className="mt-6 text-center text-white/40 text-xs">
                  Add ₦{20000 - cartTotal} more for free shipping
                </p>
              )}
            </div>
          </motion.aside>
        </div>
      </div>
    </main>
  );
}
