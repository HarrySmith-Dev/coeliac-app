import { statPillContainer, statPillHeader, statPillText } from './StatPill.css'

type StatPillProps = {
  title: string
  value: string
  textColor: string
  headerColor: string
  backgroundColor: string
}

const StatPill = ({ title, value, backgroundColor, headerColor, textColor }: StatPillProps) => {
  return (
    <div className={statPillContainer} style={{ backgroundColor: backgroundColor }}>
      <h3 className={statPillHeader} style={{ color: headerColor }}>
        {title}
      </h3>
      <p className={statPillText} style={{ color: textColor }}>
        {value}
      </p>
    </div>
  )
}

export default StatPill
