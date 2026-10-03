import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description?: string;
  image: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
  imageClassName?: string;
}

export function Card({ title, description, image, icon, href, className = '', imageClassName = '' }: CardProps) {
  const content = (
    <div className={`relative overflow-hidden rounded-[10px] group cursor-pointer ${className}`}>
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-300 group-hover:scale-105 ${imageClassName}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-display mb-1">{title}</h3>
            {description && (
              <p className="text-sm text-white/90">{description}</p>
            )}
          </div>
          {icon && (
            <div className="flex-shrink-0 ml-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              {icon}
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
  if (href) {
    return <a href={href}>{content}</a>;
  }
  
  return content;
}
