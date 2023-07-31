import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Route } from '@/routers/types';
import { FadeIn } from '@/components/FadeIn';

import Badge from '@/components/Badge';

export interface PostDataType {
  id: string | number;
  featuredImage: string;
  author: string;
  title: string;
  desc?: string;
  date: string;
  href: Route<string>;
  categories: string;
  commentCount: number;
  viewdCount: number;
  readingTime: number;
  postType?: 'standard' | 'video' | 'gallery' | 'audio';
}

const DEMO_POST: PostDataType[] = [
  {
    id: '9e3e3994-a3ed-47ca-a014-d4483884cfe2',
    featuredImage:
      'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    author: 'Taufiq',
    title: 'Lenovo’s smarter devices stoke professional passions ',
    desc: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    date: 'May 20, 2021',
    href: '/',
    categories: 'aaa',
    commentCount: 11,
    viewdCount: 2504,
    readingTime: 2,
    postType: 'standard',
  },
  {
    id: '9e3e3994-a3ed-47ca-a014-d4483884cfe2',
    featuredImage:
      'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    author: 'Taufiq',
    title: 'Lenovo’s smarter devices stoke professional passions ',
    desc: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    date: 'May 20, 2021',
    href: '/',
    categories: 'aaa',
    commentCount: 11,
    viewdCount: 2504,
    readingTime: 2,
    postType: 'standard',
  },
  {
    id: '9e3e3994-a3ed-47ca-a014-d4483884cfe2',
    featuredImage:
      'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    author: 'Taufiq',
    title: 'Lenovo’s smarter devices stoke professional passions ',
    desc: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    date: 'May 20, 2021',
    href: '/',
    categories: 'aaa',
    commentCount: 11,
    viewdCount: 2504,
    readingTime: 2,
    postType: 'standard',
  },
  {
    id: '9e3e3994-a3ed-47ca-a014-d4483884cfe2',
    featuredImage:
      'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    author: 'Taufiq',
    title: 'Lenovo’s smarter devices stoke professional passions ',
    desc: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    date: 'May 20, 2021',
    href: '/',
    categories: 'aaa',
    commentCount: 11,
    viewdCount: 2504,
    readingTime: 2,
    postType: 'standard',
  },
];

const Header: React.FC = () => {
  const renderPostRelated = (post: PostDataType) => {
    return (
      <div
        key={post.id}
        className="relative aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden group"
      >
        <Link href={post.href as Route} />
        <Image
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
          src={post.featuredImage}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          alt=""
        />
        <div>
          <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black"></div>
        </div>
        <div className="flex flex-col justify-end items-start text-xs text-neutral-300 space-y-2.5 p-4">
          <Badge name={post.categories} />
          <h2 className="block text-lg font-semibold text-white ">
            <span className="line-clamp-2">{post.title}</span>
          </h2>

          <div className="flex">
            <span className="block text-neutral-200 hover:text-white font-medium truncate">
              {post.author}
            </span>
            <span className="mx-1.5 font-medium">·</span>
            <span className="font-normal truncate">{post.date}</span>
          </div>
        </div>
        <Link href={post.href as Route} />
      </div>
    );
  };

  return (
    <FadeIn>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {DEMO_POST.filter((_, i) => i < 4).map(renderPostRelated)}
      </div>
    </FadeIn>
  );
};

export default Header;
