import type { ReactNode } from 'react'
import { cardContainer } from '@/styles/shared.css'
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
  variant?: keyof typeof infoCardVariant
  children?: ReactNode
}

const InfoCard = ({
  title,
  description,
  listItems,
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
      {children}
    </article>
  )
}

export default InfoCard
