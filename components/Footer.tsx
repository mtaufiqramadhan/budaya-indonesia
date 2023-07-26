import { Container } from '@/components/Container';
import { FadeIn } from '@/components//FadeIn';

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <p className="text-sm ">© Muhamad Taufiq Ramadhan</p>
        </div>
      </FadeIn>
    </Container>
  );
}
