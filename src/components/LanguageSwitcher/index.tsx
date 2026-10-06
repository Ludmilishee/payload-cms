'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

import { DEFAULT_LOCALE, LOCALES, localeLabels, type Locale } from '@/i18n/config'

type Props = {
  locale: Locale
}

export const LanguageSwitcher: React.FC<Props> = ({ locale }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (
    <div className="flex gap-1" role="group" aria-label="Language">
      {LOCALES.map((nextLocale) => {
        const params = new URLSearchParams(searchParams.toString())

        if (nextLocale === DEFAULT_LOCALE) {
          params.delete('locale')
        } else {
          params.set('locale', nextLocale)
        }

        const query = params.toString()
        const href = query ? `${pathname}?${query}` : pathname
        const isActive = nextLocale === locale

        return (
          <Link
            className={isActive ? 'is-lang is-active' : 'is-lang'}
            href={href}
            hrefLang={nextLocale}
            key={nextLocale}
            scroll={false}
          >
            {localeLabels[nextLocale]}
          </Link>
        )
      })}
    </div>
  )
}
