"use client"
import { navLinks } from '@/lib/constance';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react'

const FooterNavigation = () => {
  const t = useTranslations('components.header.navbar')
  return (
    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 font-semibold">
    {navLinks.map((e) => (
      <li key={e.href}>
        <Link
          className="text-gray-700 transition hover:text-gray-700/75"
          href={e.href}
          onClick={(event) => {
            event.preventDefault();
            const element = document.getElementById(
              e.href.replace("#", "")
            );
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          {t(e.label)}
        </Link>
      </li>
    ))}
  </ul>  )
}

export default FooterNavigation