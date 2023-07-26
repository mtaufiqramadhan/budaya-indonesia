import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';

const Page: React.FC = () => {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Welcome to Next.js
          </h1>
          <p className="mt-6 text-xl text-neutral-600">This is a sample page</p>
        </FadeIn>
      </Container>
    </>
  );
};

export default Page;
