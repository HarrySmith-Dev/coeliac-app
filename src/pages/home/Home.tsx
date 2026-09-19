import FaqAccordion from '../../components/faqAccordion/FaqAccordion'
import InfoCard from '../../components/infoCard/InfoCard'
import MapCard, { type MapLocation } from '../../components/mapCard/MapCard'
import NearMeButton, { type LocationCoordinates } from '../../components/nearMeButton/NearMeButton'
import StatPill from '../../components/statPill/StatPill'
import { cardStatPillContainer, rowContainer } from '../../styles/shared.css'
import { pageLayout } from '../../styles/shared.css'

type HomeProps = {
  userLocation: MapLocation | null
  onLocationFound: (location: LocationCoordinates) => void
}

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

const Home = ({ userLocation, onLocationFound }: HomeProps) => {
  const infoCardData = [
    {
      id: 'overview',
      backgroundColor: '#FFFFFF',
      border: '1px solid #CFCBB8',
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
      nearMeButton: <NearMeButton onLocationFound={onLocationFound} desktop />,
    },
  ]

  return (
    <section id="home" className={pageLayout}>
      <div className={rowContainer} style={{ gap: '20px' }}>
        {infoCardData.map(({ id, ...infoCard }) => (
          <InfoCard key={id} {...infoCard} />
        ))}
        <NearMeButton onLocationFound={onLocationFound} />
        <MapCard userLocation={userLocation} />
      </div>

      <div style={{ border: '1px solid #D4D5D6', margin: '100px 0' }} />
      <h2>Faq</h2>

      {faqAccordionData.map((faq) => (
        <FaqAccordion key={faq.id} title={faq.title} description={faq.description} />
      ))}
    </section>
  )
}

export default Home
