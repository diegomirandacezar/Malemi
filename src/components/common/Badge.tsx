import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'blue' | 'neutral';
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = 'emerald',
  className = '',
  icon
}: BadgeProps) {
  const variantStyles = {
    emerald: 'bg-[#09CCA2]/10 text-[#09CCA2] border-[#09CCA2]/30',
    blue: 'bg-blue-900/30 text-sky-400 border-blue-700/40',
    neutral: 'bg-slate-800/60 text-slate-300 border-white/10'
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide border uppercase ${variantStyles} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
