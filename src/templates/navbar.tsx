import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

const Navbar = () => {
  const t = useTranslations('Navbar');

  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b border-neutral-900 bg-black/40 p-4 backdrop-blur-lg">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">So</p>
        <Image
          src="/assets/soraa-logo.png"
          width={30}
          height={30}
          alt="Soraa logo"
          className="shadow-sm"
        />
        <p className="text-3xl font-bold">aa</p>
      </aside>
      <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
        <ul className="flex list-none items-center gap-4">
          <li>
            <Link href="/product">{t('product')}</Link>
          </li>
          <li>
            <Link href="/pricing">{t('pricing')}</Link>
          </li>
          <li>
            <Link href="/about">{t('about')}</Link>
          </li>
          <li>
            <Link href="/contact">{t('contact')}</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex size-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Dashboard
          </span>
        </Link>
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;
