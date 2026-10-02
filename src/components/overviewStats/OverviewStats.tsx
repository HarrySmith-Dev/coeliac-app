import StatPill, { type StatPillProps } from '@/components/statPill/StatPill'
import { overviewStats } from './OverviewStats.css'

export type StatPillData = StatPillProps & { id: string }

type OverviewStatsProps = {
  stats: StatPillData[]
}

const OverviewStats = ({ stats }: OverviewStatsProps) => {
  return (
    <div className={overviewStats}>
      {stats.map(({ id, ...stat }) => (
        <StatPill key={id} {...stat} />
      ))}
    </div>
  )
}

export default OverviewStats
