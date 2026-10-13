import type { Source } from '@/types/content'
import {
  statPillContainer,
  statPillHeader,
  statPillSource,
  statPillText,
  statPillTone,
} from './StatPill.css'
import ExternalLink from '@/components/externalLink/ExternalLink'

export type StatPillProps = {
  title: string
  value: string
  tone: keyof typeof statPillTone
  source?: Source
}

const StatPill = ({ title, value, tone, source }: StatPillProps) => {
  return (
    <div className={`${statPillContainer} ${statPillTone[tone]}`}>
      <p className={statPillHeader}>{title}</p>
      <p className={statPillText}>{value}</p>
      {source && (
        <ExternalLink href={source.url} className={statPillSource}>
          Source: {source.publisher}
        </ExternalLink>
      )}
    </div>
  )
}

export default StatPill
