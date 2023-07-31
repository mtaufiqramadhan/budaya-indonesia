import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';

import Header from '@/components/Header';
import SectionVideos from '@/components/SectionVideos';

const Page: React.FC = () => {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="w-full">
          <h1 className="font-display text-5xl font-bold tracking-tight text-[#6E0B75] [text-wrap:balance] sm:text-7xl">
            Budaya Indonesia
          </h1>
          <p className="mt-6 text-xl text-neutral-600 leading-10 max-w-xl">
            Menghadirkan informasi budaya dari beragam suku, tradisi, bahasa,
            dan seni yang menghiasi nusantara.
          </p>
          <div className="mt-28">
            <Header />
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-56">
        <FadeIn className="w-full">
          <h1 className="font-display text-3xl font-bold tracking-tight text-[#6E0B75] [text-wrap:balance] sm:text-5xl">
            Tarian Daerah
          </h1>
          <p className="mt-6 text-xl text-neutral-600 leading-10 max-w-xl">
            Menampilkan keberagaman pertunjukan tiap daerah
          </p>
          <SectionVideos />
        </FadeIn>
      </Container>

      <Container className="mt-56">
        <FadeIn className="w-full"></FadeIn>
      </Container>
    </>
  );
};

export default Page;
