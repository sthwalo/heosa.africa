/**
 * Reusable Card Component
 * Provides consistent card styling across the app
 */

import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  onClick?: () => void;
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function Card({
  children,
  className = '',
  padding = 'md',
  hover = false,
  onClick,
}: CardProps) {
  const baseClasses = 'bg-white rounded-lg shadow-lg overflow-hidden';
  const hoverClasses = hover ? 'hover:shadow-xl transition-shadow cursor-pointer' : '';
  const paddingClass = paddingClasses[padding];
  
  const classes = `${baseClasses} ${hoverClasses} ${paddingClass} ${className}`;

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}

/**
 * Card Header component
 */
export function CardHeader({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`border-b border-gray-200 pb-4 mb-4 ${className}`}>{children}</div>;
}

/**
 * Card Title component
 */
export function CardTitle({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h3 className={`text-xl font-semibold text-[#2B2A29] ${className}`}>{children}</h3>;
}

/**
 * Card Content component
 */
export function CardContent({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

/**
 * Card Footer component
 */
export function CardFooter({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`border-t border-gray-200 pt-4 mt-4 ${className}`}>{children}</div>;
}
