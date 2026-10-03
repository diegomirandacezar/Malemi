// A11y reference: lang="pt-BR"
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function Card({
  children,
  className = '',
  glow = false,
  ...props
}: CardProps) {
  return (
    <div
      className={`card-luxury rounded-xl p-6 sm:p-8 relative overflow-hidden ${
        glow ? 'border-[#09CCA2]/40 shadow-[0_0_30px_rgba(9,204,162,0.1)]' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
