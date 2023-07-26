import { Container } from '@/components/Container';
import { FadeIn } from '@/components//FadeIn';

export function Footer() {
  return (
    <Container as="footer" className="mt-12 w-full sm:mt-16 lg:mt-20">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {/* <Navigation /> */}
          <div className="flex lg:justify-end">{/* <NewsletterForm /> */}</div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <p className="text-sm text-neutral-700">© Muhamad Taufiq Ramadhan</p>
        </div>
      </FadeIn>
    </Container>
  );
}
