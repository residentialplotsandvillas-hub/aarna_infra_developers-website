import { ElementType, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  /** Extra utility classes appended after the base styles */
  className?: string;
  /** Render a different tag instead of <div> (e.g. 'section', 'header', 'footer') */
  as?: ElementType;
  /** Use a narrower max-width for editorial / text-heavy sections */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

const SIZE_MAP: Record<NonNullable<ContainerProps['size']>, string> = {
  sm: 'max-w-3xl',   // ~768px  — FAQ, long-form copy
  md: 'max-w-5xl',   // ~1024px — contact, about
  lg: 'max-w-6xl',   // ~1152px — most content sections
  xl: 'max-w-7xl',   // ~1280px — default, hero, projects grid
  full: 'max-w-none', // no cap
};

export default function Container({
  children,
  className = '',
  as: Tag = 'div',
  size = 'xl',
}: ContainerProps) {
  return (
    <Tag
      className={[
        'mx-auto w-full',
        SIZE_MAP[size],
        'px-4 sm:px-6 lg:px-8',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  );
}