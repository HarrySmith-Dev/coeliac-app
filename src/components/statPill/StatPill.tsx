import type { Source } from '../../types/content'
import {
  statPillContainer,
  statPillHeader,
  statPillSource,
  statPillText,
  statPillTone,
} from './StatPill.css'

export type StatPillProps = {
  title: string
  value: string
  tone: keyof typeof statPillTone
  source?: Source
}

const StatPill = ({ title, value, tone, source }: StatPillProps) => {
  return (
    <div className={`${statPillContainer} ${statPillTone[tone]}`}>
      <h3 className={statPillHeader}>{title}</h3>
      <p className={statPillText}>{value}</p>
      {source && (
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className={statPillSource}
          aria-label={`Source: ${source.publisher}, ${source.title} (opens in a new tab)`}
        >
          Source: {source.publisher}
        </a>
      )}
    </div>
  )
}

export default StatPill
