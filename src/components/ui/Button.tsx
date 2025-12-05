import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
} & Omit<HTMLMotionProps<'button'>, 'ref'>;
const variants: Record<ButtonVariant, string> = {
  primary: 'bg-[#D4AF37] text-black hover:bg-[#E5C158] active:bg-[#C4A030]',
  secondary: 'bg-white text-black hover:bg-gray-100 active:bg-gray-200',
  ghost: 'bg-transparent text-white hover:bg-white/10 active:bg-white/20',
  outline: 'bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/5'
};
const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  isLoading,
  className = '',
  children,
  disabled,
  ...props
}, ref) => {
  return <motion.button ref={ref} whileHover={{
    scale: disabled ? 1 : 1.02
  }} whileTap={{
    scale: disabled ? 1 : 0.98
  }} className={`
          inline-flex items-center justify-center font-medium rounded-sm
          transition-colors duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variants[variant]}
          ${sizes[size]}
          ${className}
        `} disabled={disabled || isLoading} {...props}>
        {isLoading ? <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Loading...
          </span> : children}
      </motion.button>;
});
Button.displayName = 'Button';