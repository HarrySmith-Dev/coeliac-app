import type { StatPillData } from '../components/statPill/OverviewStats'
import type { Faq } from '../types/content'
import { sources } from './sources'

export const homeOverviewDescription =
  'Living with coeliac disease means every meal out takes a little planning. Find gluten-free friendly places near you, and learn the basics of the condition so you can eat with confidence.'

export const homeOverviewStats: StatPillData[] = [
  {
    id: 'affected',
    title: '1 in 100',
    value: 'people are affected',
    tone: 'green',
    source: sources.coeliacUkAbout,
  },
  {
    id: 'undiagnosed',
    title: '500,000',
    value: 'people undiagnosed in the UK',
    tone: 'amber',
    source: sources.coeliacUkAbout,
  },
]

export const aboutOverviewDescription =
  'Coeliac disease is an autoimmune condition, not an allergy or a lifestyle choice. It is a condition that affects the small intestine and can cause a range of symptoms, including digestive issues, fatigue, and skin problems. It is important to get diagnosed and follow a strict gluten-free diet to manage the condition.'

export const aboutOverviewStats: StatPillData[] = [
  {
    id: 'diagnosis-time',
    title: '13 years',
    value: 'average time to diagnosis',
    tone: 'amber',
    source: sources.coeliacUkMyths,
  },
  {
    id: 'gluten-free-limit',
    title: '20ppm',
    value: 'max gluten in food labelled gluten-free',
    tone: 'green',
    source: sources.nhsTreatment,
  },
]

export const symptoms = [
  'Bloating and stomach aches',
  'Diarrhoea or constipation',
  'Tiredness',
  'Unintentional weight loss',
]

export const faqs: Faq[] = [
  {
    id: 'allergy',
    title: 'Is coeliac disease an allergy?',
    description:
      'No. Coeliac disease is an autoimmune condition, not an allergy or a food intolerance. When you eat gluten, your immune system mistakenly attacks the lining of your small intestine. It is lifelong, and the only treatment is a strict gluten-free diet.',
    sources: [sources.nhsOverview, sources.coeliacUkAbout],
  },
  {
    id: 'diagnosis',
    title: 'How is coeliac disease diagnosed?',
    description:
      'It usually starts with a blood test from your GP that looks for coeliac antibodies. If it is positive, you will be referred to a specialist, who may take a small sample (biopsy) of your gut lining. Some adults can now be diagnosed from the blood test alone. Keep eating gluten until testing is finished: at least 3g (about two slices of wheat bread) and preferably 6g every day for at least six weeks, or the results may be inaccurate.',
    sources: [sources.nhsDiagnosis, sources.coeliacUkDiagnosis],
  },
  {
    id: 'grains',
    title: 'Which foods contain gluten?',
    description:
      'Gluten is found in wheat (including spelt), barley and rye. That means most bread, pasta, breakfast cereals, biscuits, cakes, pastries and pies contain it, as well as many gravies and sauces and most beers. Naturally gluten-free foods include most dairy products, fruit and vegetables, unbreaded meat and fish, potatoes and rice.',
    sources: [sources.nhsTreatment],
  },
  {
    id: 'oats',
    title: 'Can I eat oats?',
    description:
      'Most people with coeliac disease can eat oats labelled gluten-free. Standard oats are often produced in the same place as wheat, barley and rye, so they can be contaminated and are not suitable. A very small number of people also react to oats themselves, so if you have symptoms or concerns after adding gluten-free oats, talk to your GP or dietitian.',
    sources: [sources.coeliacUkOats, sources.nhsTreatment],
    featured: true,
  },
  {
    id: 'small-amounts',
    title: 'Is a small amount of gluten okay?',
    description:
      'No. Even very small amounts of gluten can be damaging, and something as small as a spoonful of pasta can cause very unpleasant symptoms. Cross-contamination, such as food prepared alongside gluten or served with the same utensils, counts too. Untreated coeliac disease can lead to complications such as anaemia and osteoporosis, so it is important to avoid gluten completely.',
    sources: [sources.coeliacUkMyths, sources.nhsTreatment, sources.nhsComplications],
    featured: true,
  },
  {
    id: 'gluten-free-label',
    title: "What does 'gluten-free' on a label mean?",
    description:
      "By law, food labelled 'gluten-free' can contain no more than 20 parts per million (ppm) of gluten, which is safe for most people with coeliac disease. On packaged food, cereals containing gluten must also be highlighted in the ingredients list, for example in bold, italics or a different colour.",
    sources: [sources.nhsTreatment, sources.govUkAllergenLabelling],
  },
  {
    id: 'may-contain',
    title: "What does 'may contain gluten' mean?",
    description:
      "A 'may contain' warning means the manufacturer has identified a risk that the product could be contaminated with gluten. These warnings are voluntary, so there is no way to tell how much gluten might be present, and it is safest to avoid these products. The exception is a product that is also labelled 'gluten-free', which must still meet the 20ppm legal limit.",
    sources: [sources.govUkAllergenLabelling, sources.coeliacUkGlutenFreeLaw],
    featured: true,
  },
  {
    id: 'eating-out',
    title: 'How can I tell if a restaurant is safe?',
    description:
      'Tell staff you have coeliac disease so they understand it is a medical need, not a preference, or call ahead and speak to a manager or chef. Ask how they avoid cross-contamination, and check whether fryers and utensils are kept just for gluten-free food. Restaurants, cafes and takeaways must tell you which dishes contain gluten, verbally or in writing. The places on our map come from community-maintained OpenStreetMap data, so always check with staff before ordering.',
    sources: [sources.coeliacUkEatingOut, sources.govUkAllergenLabelling, sources.openStreetMap],
    featured: true,
  },
  {
    id: 'accidental-gluten',
    title: 'What happens if I accidentally eat gluten?',
    description:
      "Even a small amount can bring on symptoms such as stomach aches, bloating, diarrhoea and tiredness. Carry on with your gluten-free diet as normal, and speak to your GP if your symptoms are severe or don't settle. Regular exposure to gluten is what leads to long-term complications, so it's worth working out how it happened to avoid it in future.",
    sources: [sources.nhsTreatment, sources.nhsComplications],
  },
  {
    id: 'family',
    title: 'Does coeliac disease run in families?',
    description:
      "Yes. If a parent, brother, sister or child has coeliac disease, your chance of having it rises to around 1 in 10, compared with 1 in 100 in the general population. Testing is recommended for close relatives of people with coeliac disease, so speak to your GP even if you don't have obvious symptoms.",
    sources: [sources.coeliacUkAbout, sources.nhsDiagnosis],
  },
]

export const contentLastReviewed = '2 October 2026'

export const featuredFaqs = faqs.filter((faq) => faq.featured)
