'use client'

import { useMemo, useState } from 'react'

import { LinkedText } from './LinkedText'
import {
  CARRIER_PRIVACY_LINK,
  CONDITION_LINK,
  DRIVER_APP_LINK,
  DRIVERS_AGREEMENT_LINK,
  PHONE_PREFIX,
} from './settings'

export type DriverFormCopy = {
  button: string
  city: string
  cityInvalid: string
  cityRequired: string
  cities: Array<{ label: string; value: string }>
  error: string
  firstName: string
  firstNameInvalid: string
  firstNameRequired: string
  legal1: string
  legal2: string
  legal3: string
  phone: string
  phoneInvalid: string
  phoneOnlyDigits: string
  phoneRequired: string
  phoneStartWithPlus: string
  submit: string
  successMessage: string
  successText: string
  title: string
}

type Props = {
  copy: DriverFormCopy
}

export const DriversForm = ({ copy }: Props) => {
  const [firstName, setFirstName] = useState('')
  const [phone, setPhone] = useState(PHONE_PREFIX + ' ')
  const [city, setCity] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)
  const [formError, setFormError] = useState('')

  const nameRegex = useMemo(() => /^[\p{L}\s'-]+$/u, [])

  const validate = () => {
    const next: Record<string, string> = {}
    const trimmedName = firstName.trim()
    if (!trimmedName) next.firstName = copy.firstNameRequired
    else if (!nameRegex.test(trimmedName) || !/\p{L}/u.test(trimmedName)) {
      next.firstName = copy.firstNameInvalid
    }

    const cleaned = phone.trim().replace(/\s/g, '').replace(/-/g, '')
    if (!cleaned) next.phone = copy.phoneRequired
    else if (!cleaned.startsWith('+')) next.phone = copy.phoneStartWithPlus
    else if (!/^\+\d+$/.test(cleaned)) next.phone = copy.phoneOnlyDigits
    else if (!cleaned.startsWith(PHONE_PREFIX) || cleaned.slice(1).length !== 12) {
      next.phone = copy.phoneInvalid
    }

    if (!city) next.city = copy.cityRequired
    else if (!copy.cities.some((item) => item.value === city)) next.city = copy.cityInvalid

    setErrors(next)
    return Object.keys(next).length === 0
  }

  if (success) {
    return (
      <section className="dl-form-wrap" id="formPart">
        <div className="dl-form-art" />
        <div className="dl-form">
          <div className="dl-success">
            <img alt="" height={58} src="/drivers/check.svg" width={58} />
            <div>
              <h2>{copy.successMessage}</h2>
              <p>{copy.successText}</p>
            </div>
            <a className="dl-btn" href={DRIVER_APP_LINK} rel="noopener noreferrer" target="_blank">
              {copy.submit}
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="dl-form-wrap" id="formPart">
      <div className="dl-form-art" />
      <div className="dl-form">
        <h2>{copy.title}</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            setFormError('')
            if (validate()) setSuccess(true)
            else setFormError(copy.error)
          }}
        >
          <div className="dl-field">
            <label htmlFor="first_name">{copy.firstName}</label>
            <input
              id="first_name"
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
            />
            {errors.firstName ? <span className="error">{errors.firstName}</span> : null}
          </div>
          <div className="dl-field">
            <label htmlFor="phone">{copy.phone}</label>
            <input
              id="phone"
              inputMode="tel"
              onChange={(event) => setPhone(event.target.value)}
              value={phone}
            />
            {errors.phone ? <span className="error">{errors.phone}</span> : null}
          </div>
          <div className="dl-field">
            <label htmlFor="city">{copy.city}</label>
            <select id="city" onChange={(event) => setCity(event.target.value)} value={city}>
              <option value="">{copy.city}</option>
              {copy.cities.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
            {errors.city ? <span className="error">{errors.city}</span> : null}
          </div>
          {formError ? <p className="error">{formError}</p> : null}
          <button className="dl-btn" type="submit">
            {copy.button}
          </button>
        </form>
        <div className="dl-legal">
          <p>
            <LinkedText
              components={{ conditionLink: { href: CONDITION_LINK } }}
              template={copy.legal1}
            />
          </p>
          <p>
            <LinkedText
              components={{ contractLink: { href: DRIVERS_AGREEMENT_LINK } }}
              template={copy.legal2}
            />
          </p>
          <p>
            <LinkedText
              components={{ policyLink: { href: CARRIER_PRIVACY_LINK } }}
              template={copy.legal3}
            />
          </p>
        </div>
      </div>
    </section>
  )
}
