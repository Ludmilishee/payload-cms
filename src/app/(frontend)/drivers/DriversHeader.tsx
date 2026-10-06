'use client'

import Link from 'next/link'
import { useState } from 'react'

import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import type { Locale } from '@/i18n/config'

type Props = {
  ctaHref: string
  ctaLabel: string
  locale: Locale
  menuDrivers: string
  menuParks: string
}

export const DriversHeader = ({ ctaHref, ctaLabel, locale, menuDrivers, menuParks }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="dl-header">
        <img alt="WB Flot" src="/drivers/logo.svg" />
        <div className="dl-header-bar">
          <nav>
            <Link href="/drivers">{menuDrivers}</Link>
            <a href="#parks">{menuParks}</a>
          </nav>
          <div className="dl-lang">
            <LanguageSwitcher locale={locale} />
          </div>
          <Link className="dl-btn dl-btn-light" href={ctaHref}>
            {ctaLabel}
          </Link>
        </div>
      </header>

      <header className="dl-header-mobile">
        <img alt="WB Flot" className="dl-logo" src="/drivers/logo.svg" />
        <div className="dl-lang">
          <LanguageSwitcher locale={locale} />
        </div>
        <button
          aria-expanded={open}
          className="dl-burger"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          ☰
        </button>
      </header>
      {open ? (
        <div className="dl-mobile-menu">
          <a href="#parks" onClick={() => setOpen(false)}>
            {menuParks}
          </a>
          <Link href="/drivers" onClick={() => setOpen(false)}>
            {menuDrivers}
          </Link>
        </div>
      ) : null}
    </>
  )
}
