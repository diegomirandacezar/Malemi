import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  highlightedWord,
  description,
  align = 'center',
  className = ''
}: SectionHeadingProps) {
  const alignmentClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  // Render title with optional highlighted word in emerald
  const renderTitle = () => {
    if (!highlightedWord || !title.includes(highlightedWord)) {
      return title;
    }
    const parts = title.split(highlightedWord);
    return (
      <>
        {parts[0]}
        <span className="text-[#09CCA2] font-semibold">{highlightedWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`flex flex-col ${alignmentClass} mb-12 md:mb-16 ${className}`}>
      {badge && (
        <div className="mb-4">
          <Badge variant="emerald">{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl leading-[1.15]">
        {renderTitle()}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
