import React from 'react';
import Image from 'next/image';

import { FadeIn } from '@/components/FadeIn';
import ImageFirst from '@/images/wedding-big.jpeg';

const Header: React.FC = () => {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="grid gap-6 lg:grid-cols-3">
        <FadeIn>
          <div>
            <Image
              className="object-cover w-full h-64 rounded-2xl lg:h-80 xl:h-96"
              src={ImageFirst}
              alt=""
            />
          </div>
        </FadeIn>
        <FadeIn>
          <div>
            <Image
              className="object-cover w-full h-64 rounded-2xl lg:h-80 xl:h-96"
              src={ImageFirst}
              alt=""
            />
          </div>
        </FadeIn>
        <FadeIn>
          <div>
            <Image
              className="object-cover w-full h-64 rounded-2xl lg:h-80 xl:h-96"
              src={ImageFirst}
              alt=""
            />
          </div>
        </FadeIn>
        <FadeIn>
          <div>
            <Image
              className="object-cover w-full h-64 rounded-2xl lg:h-80 xl:h-96"
              src={ImageFirst}
              alt=""
            />
          </div>
        </FadeIn>
        <FadeIn>
          <div>
            <Image
              className="object-cover w-full h-64 rounded-2xl lg:h-80 xl:h-96"
              src={ImageFirst}
              alt=""
            />
          </div>
        </FadeIn>
        <FadeIn>
          <div>
            <Image
              className="object-cover w-full h-64 rounded-2xl lg:h-80 xl:h-96"
              src={ImageFirst}
              alt=""
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Header;
