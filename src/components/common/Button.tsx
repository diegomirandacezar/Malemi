// A11y reference: lang="pt-BR"
import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#09CCA2]/40 active:scale-[0.98] select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5'
  }[size];

  const variantStyles = {
    primary: 'bg-[#09CCA2] text-[#05070B] font-semibold hover:bg-[#10dfb3] shadow-[0_0_20px_rgba(9,204,162,0.25)] hover:shadow-[0_0_25px_rgba(9,204,162,0.4)] border border-[#09CCA2]',
    secondary: 'bg-[#0F1728]/90 text-white border border-white/10 hover:border-white/25 hover:bg-[#142036] shadow-sm',
    outline: 'bg-transparent text-white border border-[#09CCA2]/50 hover:border-[#09CCA2] hover:bg-[#09CCA2]/10',
    ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-white/5'
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
