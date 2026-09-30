import { statPillContainer, statPillHeader, statPillText, statPillTone } from './StatPill.css'

export type StatPillProps = {
  title: string
  value: string
  tone: keyof typeof statPillTone
}

const StatPill = ({ title, value, tone }: StatPillProps) => {
  return (
    <div className={`${statPillContainer} ${statPillTone[tone]}`}>
      <h3 className={statPillHeader}>{title}</h3>
      <p className={statPillText}>{value}</p>
    </div>
  )
}

export default StatPill
