'use client';

import React, {
  createContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

import { usePathname } from 'next/navigation';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';

const RootLayoutContext = createContext({});

interface IconProps {
  className?: string;
}

function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  );
}

function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  );
}

interface HeaderProps {
  panelId: string;
  invert?: boolean;
  icon: React.ComponentType<IconProps>;
  expanded: boolean;
  onToggle: () => void;
  toggleRef: React.RefObject<HTMLButtonElement>;
}

function Header({
  panelId,
  invert = false,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
}: HeaderProps) {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image width={80} height={80} src="/logos.png" alt="" />
        </Link>
        <div className="flex items-center gap-x-8">
          <Button
            href="https://id.linkedin.com/in/mtaufiqramadhan"
            invert={invert}
          >
            Contact
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            className={clsx(
              'group -m-2.5 rounded-full p-2.5 transition',
              invert ? 'hover:bg-white/10' : 'hover:bg-neutral-950/10'
            )}
          >
            <Icon
              className={clsx(
                'h-6 w-6',
                invert
                  ? 'fill-white group-hover:fill-neutral-200'
                  : 'fill-neutral-950 group-hover:fill-neutral-700'
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  );
}

interface NavigationRowProps {
  children: React.ReactNode;
}

function NavigationRow({ children }: NavigationRowProps) {
  return (
    <div className="even:mt-px sm:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  );
}

interface NavigationItemProps {
  href: string;
  children: React.ReactNode;
}

function NavigationItem({ href, children }: NavigationItemProps) {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  );
}

function Navigation() {
  return (
    <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href="/work">Our Work</NavigationItem>
        <NavigationItem href="/about">About Us</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/process">Our Process</NavigationItem>
        <NavigationItem href="/blog">Blog</NavigationItem>
      </NavigationRow>
    </nav>
  );
}

interface RootLayoutInnerProps {
  children: React.ReactNode;
}

function RootLayoutInner({ children }: RootLayoutInnerProps) {
  let panelId = useId();
  let [expanded, setExpanded] = useState(false);
  let openRef = useRef<HTMLButtonElement>(null);
  let closeRef = useRef<HTMLButtonElement>(null);
  let navRef = useRef<HTMLDivElement>(null);
  let shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.target instanceof HTMLAnchorElement &&
        event.target.href === window.location.href
      ) {
        setExpanded(false);
      }
    }

    window.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div className="absolute left-0 right-0 top-2 z-40 pt-14">
          <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded);
              window.setTimeout(
                () => closeRef.current?.focus({ preventScroll: true })
              );
            }}
          />
        </div>

        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
        >
          <motion.div layout className="bg-neutral-800">
            <div ref={navRef} className="bg-neutral-950 pb-16 pt-14">
              <Header
                invert
                panelId={panelId}
                icon={XIcon}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded);
                  window.setTimeout(
                    () => openRef.current?.focus({ preventScroll: true })
                  );
                }}
              />
            </div>
            <Navigation />
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <main className="w-full flex-auto">{children}</main>
          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let pathname = usePathname();
  let [logoHovered, setLogoHovered] = useState(false);

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  );
}
