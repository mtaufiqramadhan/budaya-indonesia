import { Route } from '@/routers/types';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';

export interface BadgeProps {
  className?: string;
  name: ReactNode;
  color?: String;
  href?: Route<string>;
}

const Badge: FC<BadgeProps> = ({
  className = 'relative',
  name,
  color = '#6E0B75',
  href,
}) => {
  const CLASSES =
    'nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs ' +
    className;
  return href ? (
    <Link
      href={href || ''}
      className={`transition-colors hover:text- duration-300 ${CLASSES} ${color}`}
    >
      {name}
    </Link>
  ) : (
    <div className="flex justify-center items-center font-medium py-1 px-2 rounded-full text-purple-800 bg-purple-100 border ">
      <div className="text-xs font-normal leading-none max-w-full flex-initial">
        {name}
      </div>
    </div>
  );
};

export default Badge;
