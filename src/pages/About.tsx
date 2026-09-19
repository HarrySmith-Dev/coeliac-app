import FaqAccordion from '../components/faqAccordion/FaqAccordion'
import InfoCard from '../components/infoCard/InfoCard'
import StatPill from '../components/statPill/StatPill'
import { cardStatPillContainer, pageLayout, rowContainer } from '../styles/shared.css'

const infoCardData = [
  {
    id: 'overview',
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
  },
  {
    id: 'symptoms',
    title: 'Common Symptoms',
    backgroundColor: '#FFFFFF',
    border: '1px solid #CFCBB8',
    listItems: [
      'Bloating and stomach cramps',
      'Mouth ulcers',
      'Fatigue and anaemia',
      'Diarrhoea or constipation',
    ],
  },
]

const faqAccordionData = [
  {
    id: 'faq-1',
    title: 'Test title',
    description:
      'lorem ipsum dolor sit amet consectetur adipiscing elit irure labore velit similique veniam quis libero veniam qui libero proident dolorum aliqua commodo laboris rerum aliquip ut ut accusamus autem ut autem ad nulla est et aliquip nulla qui distinctio possimus labore dolor quo sint pariatur in veniam aliqua minim qui',
  },
  {
    id: 'faq-2',
    title: 'Test title',
    description:
      'lorem ipsum dolor sit amet consectetur adipiscing elit irure labore velit similique veniam quis libero veniam qui libero proident dolorum aliqua commodo laboris rerum aliquip ut ut accusamus autem ut autem ad nulla est et aliquip nulla qui distinctio possimus labore dolor quo sint pariatur in veniam aliqua minim qui',
  },
  {
    id: 'faq-3',
    title: 'Test title',
    description:
      'lorem ipsum dolor sit amet consectetur adipiscing elit irure labore velit similique veniam quis libero veniam qui libero proident dolorum aliqua commodo laboris rerum aliquip ut ut accusamus autem ut autem ad nulla est et aliquip nulla qui distinctio possimus labore dolor quo sint pariatur in veniam aliqua minim qui',
  },
  {
    id: 'faq-4',
    title: 'Test title',
    description:
      'lorem ipsum dolor sit amet consectetur adipiscing elit irure labore velit similique veniam quis libero veniam qui libero proident dolorum aliqua commodo laboris rerum aliquip ut ut accusamus autem ut autem ad nulla est et aliquip nulla qui distinctio possimus labore dolor quo sint pariatur in veniam aliqua minim qui',
  },
]

const About = () => {
  return (
    <section className={pageLayout}>
      <div className={rowContainer} style={{ gap: '20px' }}>
        {infoCardData.map(({ id, ...infoCard }) => (
          <InfoCard key={id} {...infoCard} />
        ))}
      </div>
      {faqAccordionData.map((faq) => (
        <FaqAccordion key={faq.id} title={faq.title} description={faq.description} />
      ))}
    </section>
  )
}

export default About
