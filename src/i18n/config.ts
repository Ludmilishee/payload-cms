export const LOCALES = ['ru', 'uz'] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'ru'

export const localeLabels: Record<Locale, string> = {
  ru: 'RU',
  uz: 'UZ',
}

export const isLocale = (value: unknown): value is Locale => {
  return value === 'ru' || value === 'uz'
}

export const parseLocale = (value: unknown): Locale => {
  return isLocale(value) ? value : DEFAULT_LOCALE
}
