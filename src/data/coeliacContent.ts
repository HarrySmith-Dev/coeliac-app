import type { StatPillData } from '../components/statPill/OverviewStats'

export const homeOverviewDescription =
  'Living with coeliac disease means every meal out takes a little planning. Find gluten-free friendly places near you, and learn the basics of the condition so you can eat with confidence.'

export const homeOverviewStats: StatPillData[] = [
  { id: 'affected', title: '1 in 100', value: 'people are affected', tone: 'green' },
  { id: 'undiagnosed', title: '500,000', value: 'people undiagnosed in the UK', tone: 'amber' },
]

export const aboutOverviewDescription =
  'Coeliac disease is an autoimmune condition, not an allergy or a lifestyle choice. It is a condition that affects the small intestine and can cause a range of symptoms, including digestive issues, fatigue, and skin problems. It is important to get diagnosed and follow a strict gluten-free diet to manage the condition.'

export const aboutOverviewStats: StatPillData[] = [
  { id: 'diagnosis-time', title: '13 years', value: 'average time to diagnosis', tone: 'amber' },
  {
    id: 'gluten-free-limit',
    title: '20ppm',
    value: 'max gluten in food labelled gluten-free',
    tone: 'green',
  },
]

export const symptoms = [
  'Bloating and stomach cramps',
  'Mouth ulcers',
  'Fatigue and anaemia',
  'Diarrhoea or constipation',
]

const placeholderDescription =
  'lorem ipsum dolor sit amet consectetur adipiscing elit irure labore velit similique veniam quis libero veniam qui libero proident dolorum aliqua commodo laboris rerum aliquip ut ut accusamus autem ut autem ad nulla est et aliquip nulla qui distinctio possimus labore dolor quo sint pariatur in veniam aliqua minim qui'

export const faqs = [
  { id: 'faq-1', title: 'Test title', description: placeholderDescription },
  { id: 'faq-2', title: 'Test title', description: placeholderDescription },
  { id: 'faq-3', title: 'Test title', description: placeholderDescription },
  { id: 'faq-4', title: 'Test title', description: placeholderDescription },
]
