import { DEFAULT_LOCALE, type Locale } from './config'
import { DRIVERS_TRANSLATIONS } from './driversKeys'

const interpolate = (template: string, vars?: Record<string, string | number>) => {
  if (!vars) return template

  return template.replace(/\{(\w+)\}/g, (_, name: string) => {
    const value = vars[name]
    return value === undefined ? `{${name}}` : String(value)
  })
}

export const translate = (
  dict: Record<string, string>,
  locale: Locale,
  key: string,
  vars?: Record<string, string | number>,
) => {
  const defaults = DRIVERS_TRANSLATIONS[key as keyof typeof DRIVERS_TRANSLATIONS]
  const template = dict[key] || defaults?.[locale] || defaults?.[DEFAULT_LOCALE] || key

  return interpolate(template, vars)
}

export const createTranslator = (dict: Record<string, string>, locale: Locale) => {
  return (key: string, vars?: Record<string, string | number>) => translate(dict, locale, key, vars)
}
