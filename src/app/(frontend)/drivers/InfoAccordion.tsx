'use client'

import { useState } from 'react'

import { LinkedText } from './LinkedText'

type Item = {
  content: string
  title: string
}

type Props = {
  items: Item[]
  tariffsHref: string
  tariffsLabel: string
}

export const InfoAccordion = ({ items, tariffsHref, tariffsLabel }: Props) => {
  const [open, setOpen] = useState(0)

  return (
    <div className="dl-accordion">
      {items.map((item, index) => {
        const isOpen = open === index
        return (
          <div className="dl-acc-item" key={item.title}>
            <button onClick={() => setOpen(isOpen ? -1 : index)} type="button">
              {item.title}
              <span aria-hidden>{isOpen ? '–' : '+'}</span>
            </button>
            {isOpen ? (
              <div className="body">
                {index === 1 ? (
                  <LinkedText
                    components={{ tariffsLink: { href: tariffsHref } }}
                    template={item.content}
                  />
                ) : (
                  item.content
                )}
              </div>
            ) : null}
          </div>
        )
      })}
      <span className="sr-only">{tariffsLabel}</span>
    </div>
  )
}
