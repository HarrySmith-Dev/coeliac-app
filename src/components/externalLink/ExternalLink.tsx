import type { ReactNode } from 'react'
import { visuallyHidden } from '@/styles/shared.css'

type ExternalLinkProps = {
  href: string
  className?: string
  children: ReactNode
}

const ExternalLink = ({ href, className, children }: ExternalLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className={visuallyHidden}> (opens in a new tab)</span>
    </a>
  )
}

export default ExternalLink
