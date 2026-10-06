import type { ReactNode } from 'react'

type LinkTag = {
  className?: string
  href: string
}

export const LinkedText = ({
  components,
  template,
}: {
  components: Record<string, LinkTag>
  template: string
}) => {
  const nodes: ReactNode[] = []
  const pattern = /<(\w+)>([\s\S]*?)<\/\1>/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let index = 0

  while ((match = pattern.exec(template))) {
    if (match.index > lastIndex) {
      nodes.push(template.slice(lastIndex, match.index))
    }

    const tag = components[match[1]]
    if (tag) {
      nodes.push(
        <a
          className={tag.className}
          href={tag.href}
          key={index}
          rel="noopener noreferrer"
          target="_blank"
        >
          {match[2]}
        </a>,
      )
    } else {
      nodes.push(match[2])
    }

    index += 1
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < template.length) {
    nodes.push(template.slice(lastIndex))
  }

  return nodes
}
