import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import Header from '@/components/Header';

const Page: React.FC = () => {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="w-full">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Budaya Indonesia
          </h1>
          <p className="mt-6 text-xl text-neutral-600 leading-10 max-w-xl">
            Negara kepulauan yang menghadirkan kekayaan budaya dari beragam
            suku, tradisi, bahasa, dan seni yang menghiasi nusantara ini.
          </p>
        </FadeIn>
      </Container>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <Header />
      </Container>
    </>
  );
};

export default Page;
