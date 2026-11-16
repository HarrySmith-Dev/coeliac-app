import type { ReactNode } from 'react'
import ExternalLink from '@/components/externalLink/ExternalLink'
import { cardContainer, inlineLink, smallMutedText } from '@/styles/shared.css'
import type { Source } from '@/types/content'
import {
  infoCardContainer,
  infoCardHeader,
  infoCardList,
  infoCardListItem,
  infoCardText,
  infoCardVariant,
} from './InfoCard.css'

type InfoCardProps = {
  title?: string
  description?: string
  listItems?: string[]
  source?: Source
  variant?: keyof typeof infoCardVariant
  children?: ReactNode
}

const InfoCard = ({
  title,
  description,
  listItems,
  source,
  variant = 'outlined',
  children,
}: InfoCardProps) => {
  return (
    <article className={`${cardContainer} ${infoCardContainer} ${infoCardVariant[variant]}`}>
      {title && <h2 className={infoCardHeader}>{title}</h2>}
      {description && <p className={infoCardText}>{description}</p>}
      {listItems && (
        <ul className={infoCardList}>
          {listItems.map((item) => (
            <li key={item} className={infoCardListItem}>
              {item}
            </li>
          ))}
        </ul>
      )}
      {source && (
        <p className={smallMutedText}>
          Source:{' '}
          <ExternalLink href={source.url} className={inlineLink}>
            {source.publisher}: {source.title}
          </ExternalLink>
        </p>
      )}
      {children}
    </article>
  )
}

export default InfoCard
