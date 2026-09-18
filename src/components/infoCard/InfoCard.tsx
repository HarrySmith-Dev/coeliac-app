import { cardContainer } from '../../styles/shared.css'
import {
  infoCardList,
  infoCardContainer,
  infoCardContent,
  infoCardHeader,
  infoCardListItem,
  infoCardText,
} from './InfoCard.css'
import React from 'react'

export type InfoCardProps = {
  title?: string
  backgroundColor: string
  border: string
  description?: string
  listItems?: string[]
  statsPills?: React.ReactNode
  nearMeButton?: React.ReactNode
}

const InfoCard = ({
  title,
  backgroundColor,
  border,
  description,
  listItems,
  statsPills,
  nearMeButton,
}: InfoCardProps) => {
  return (
    <article className={infoCardContainer}>
      <div style={{ backgroundColor, border }} className={`${cardContainer} ${infoCardContent}`}>
        {title && <h2 className={infoCardHeader}>{title}</h2>}
        {description && <p className={infoCardText}>{description}</p>}
        {listItems && (
          <ul className={infoCardList}>
            {listItems.map((item, index) => (
              <li key={index} className={infoCardListItem}>
                {item}
              </li>
            ))}
          </ul>
        )}
        {statsPills && <div>{statsPills}</div>}
        {nearMeButton && <div>{nearMeButton}</div>}
      </div>
    </article>
  )
}

export default InfoCard
