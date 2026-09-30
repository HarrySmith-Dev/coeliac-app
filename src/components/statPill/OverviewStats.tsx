import StatPill, { type StatPillProps } from './StatPill'
import { statPillGroup } from './StatPill.css'

export type StatPillData = StatPillProps & { id: string }

type OverviewStatsProps = {
  stats: StatPillData[]
}

const OverviewStats = ({ stats }: OverviewStatsProps) => {
  return (
    <div className={statPillGroup}>
      {stats.map(({ id, ...stat }) => (
        <StatPill key={id} {...stat} />
      ))}
    </div>
  )
}

export default OverviewStats
