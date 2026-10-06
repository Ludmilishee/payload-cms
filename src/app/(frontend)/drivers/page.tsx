import type { Metadata } from 'next'
import { Suspense } from 'react'

import { DriversForm } from './DriversForm'
import { DriversHeader } from './DriversHeader'
import { InfoAccordion } from './InfoAccordion'
import { ParksPart } from './ParksPart'
import { DRIVER_APP_LINK } from './settings'
import './drivers.css'

import { parseLocale } from '@/i18n/config'
import { createTranslator } from '@/i18n/t'
import { getActiveParks, getCities } from '@/utilities/getParks'
import { getTranslations } from '@/utilities/getTranslations'

export const dynamic = 'force-dynamic'

type Args = {
  searchParams: Promise<{
    city?: string
    locale?: string
  }>
}

export async function generateMetadata({ searchParams }: Args): Promise<Metadata> {
  const { locale: localeParam } = await searchParams
  const locale = parseLocale(localeParam)
  const t = createTranslator(await getTranslations(locale), locale)

  return {
    title: t('introTitle'),
    description: t('parksBlockDescription.generic'),
  }
}

export default async function DriversLandingPage({ searchParams }: Args) {
  const { locale: localeParam } = await searchParams
  const locale = parseLocale(localeParam)
  const [cities, parks, translations] = await Promise.all([
    getCities(undefined, locale),
    getActiveParks({ locale }),
    getTranslations(locale),
  ])
  const t = createTranslator(translations, locale)
  const cityOptions = cities.map((city) => ({
    id: city.id,
    name: city.name,
    slug: city.slug ?? '',
  }))

  return (
    <div className="drivers-landing" lang={locale}>
      <Suspense>
        <DriversHeader
          ctaHref="#formPart"
          ctaLabel={t('common.become-driver')}
          locale={locale}
          menuDrivers={t('common.menu-drivers')}
          menuParks={t('common.menu-parks')}
        />
      </Suspense>

      <section className="dl-intro">
        <div className="dl-intro-copy">
          <h1>{t('introTitle')}</h1>
          <a className="dl-btn" href="#formPart">
            {t('becomeDriver')}
          </a>
        </div>
        <div className="dl-intro-art" />
      </section>

      <section className="dl-values" id="values-part">
        <div className="dl-values-title">
          <h2>{t('valuesTitle')}</h2>
        </div>
        <div className="dl-value dl-value-profit">
          <h3>{t('profitTitle')}</h3>
          <p>{t('profitInfo')}</p>
          <p className="muted">{t('profitInfo2')}</p>
        </div>
        <div className="dl-value dl-value-clear">
          <h3>{t('clearTitle')}</h3>
          <p>{t('clearInfo')}</p>
        </div>
        <div className="dl-value dl-value-justice">
          <h3>{t('justiceTitle')}</h3>
          <p>{t('justiceInfo')}</p>
        </div>
      </section>

      <DriversForm
        copy={{
          button: t('form.button'),
          city: t('form.city'),
          cityInvalid: t('common.validation-city-invalid'),
          cityRequired: t('common.validation-city-required'),
          cities: cityOptions.map((city) => ({ label: city.name, value: city.slug })),
          error: t('errorMessage'),
          firstName: t('form.first-name'),
          firstNameInvalid: t('validation-first-name-invalid'),
          firstNameRequired: t('validation-first-name-required'),
          legal1: t('wrapperFooter'),
          legal2: t('wrapperFooter2'),
          legal3: t('wrapperFooter3'),
          phone: t('form.phone'),
          phoneInvalid: t('common.validation-phone-uz'),
          phoneOnlyDigits: t('common.validation-phone-only-digits'),
          phoneRequired: t('common.validation-phone-required'),
          phoneStartWithPlus: t('common.validation-phone-start-with-plus'),
          submit: t('becomeDriver'),
          successMessage: t('successMessage'),
          successText: t('successText'),
          title: t('formTitle'),
        }}
      />

      <Suspense>
        <ParksPart
          cities={cityOptions}
          descriptionGeneric={t('parksBlockDescription.generic')}
          descriptions={{
            bukhara: t('parksBlockDescription.bukhara'),
            samarkand: t('parksBlockDescription.samarkand'),
            tashkent: t('parksBlockDescription.tashkent'),
          }}
          empty={t('noParks')}
          locale={locale}
          parks={parks.map((park) => ({
            id: park.id,
            name: park.name,
            address: park.address,
            city: {
              id: park.city.id,
              name: park.city.name,
              slug: park.city.slug ?? '',
            },
          }))}
          title={t('parksBlockTitle')}
        />
      </Suspense>

      <section className="dl-info">
        <div>
          <h2>{t('infoTitle')}</h2>
          <div className="dl-info-row">
            <a className="dl-info-card tariffs" href="#formPart">
              <span>{t('infoTariffsTitle')}</span>
              <span className="dl-info-arrow">
                <img alt="" src="/drivers/arrow.svg" />
              </span>
            </a>
            <a className="dl-info-card" href="#parks">
              <span>{t('infoStandartsTitle')}</span>
              <span className="dl-info-arrow">
                <img alt="" src="/drivers/arrow.svg" />
              </span>
            </a>
          </div>
        </div>
        <InfoAccordion
          items={[1, 2, 3, 4, 5].map((index) => ({
            content: t(`infoBlock.item${index}.content`),
            title: t(`infoBlock.item${index}.title`),
          }))}
          tariffsHref="#formPart"
          tariffsLabel={t('infoTariffsTitle')}
        />
      </section>

      <footer className="dl-footer">
        <img alt="WB Flot" src="/drivers/logo.svg" />
        <p className="dl-footer-copy">{t('common.footer-copyright')}</p>
        <div className="dl-footer-links">
          <a
            className="dl-download"
            href={DRIVER_APP_LINK}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>{t('common.footer-download-in')}</span>
            <img alt="Google Play" src="/drivers/gp-text.svg" />
          </a>
          <span>{t('common.footer-schedule-text')}</span>
          <a
            href="https://legal.wildberries.uz/privacypolicy-driver/country/uz/lang/ru/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('common.footer-privacy-policy')}
          </a>
        </div>
      </footer>

      <div className="dl-sticky">
        <a className="dl-btn" href="#formPart">
          {t('becomeDriver')}
        </a>
      </div>
    </div>
  )
}
