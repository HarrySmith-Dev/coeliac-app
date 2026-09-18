import InfoCard from '../components/infoCard/InfoCard'
import StatPill from '../components/statPill/StatPill'
import { cardStatPillContainer, pageLayout } from '../styles/shared.css'

const InfoCardData = {
  backgroundColor: 'transparent',
  border: 'none',
  description:
    'Coeliac disease is an autoimmune condition, not an allergy or a lifestyle choice. It is a condition that affects the small intestine and can cause a range of symptoms, including digestive issues, fatigue, and skin problems. It is important to get diagnosed and follow a strict gluten-free diet to manage the condition.',
  statsPills: (
    <div className={cardStatPillContainer}>
      <StatPill
        title="1 in 100"
        value="people are affected"
        backgroundColor="#EAF3DE"
        headerColor="#173404"
        textColor="#3B6D11"
      />
      <StatPill
        title="500,000"
        value="people undiagnosed in the UK"
        backgroundColor="#FAEEDA"
        headerColor="#412402"
        textColor="#854F0B"
      />
    </div>
  ),
}

const InfoCardDataList = {
  title: 'Common Symptoms',
  backgroundColor: '#FFFFFF',
  border: '1px solid #CFCBB8',
  listItems: [
    'Bloating and stomach cramps',
    'Mouth ulcers',
    'Fatigue and anaemia',
    'Diarrhoea or constipation',
  ],
}

const About = () => {
  return (
    <section className={pageLayout}>
      <InfoCard
        backgroundColor={InfoCardData.backgroundColor}
        border={InfoCardData.border}
        description={InfoCardData.description}
        statsPills={InfoCardData.statsPills}
      />
      <InfoCard
        title={InfoCardDataList.title}
        backgroundColor={InfoCardDataList.backgroundColor}
        border={InfoCardDataList.border}
        listItems={InfoCardDataList.listItems}
      />
    </section>
  )
}

export default About
