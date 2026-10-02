import type { Source } from '@/types/content'

export const sources = {
  nhsOverview: {
    publisher: 'NHS',
    title: 'Coeliac disease',
    url: 'https://www.nhs.uk/conditions/coeliac-disease/',
  },
  nhsDiagnosis: {
    publisher: 'NHS',
    title: 'Coeliac disease: diagnosis',
    url: 'https://www.nhs.uk/conditions/coeliac-disease/diagnosis/',
  },
  nhsTreatment: {
    publisher: 'NHS',
    title: 'Coeliac disease: treatment',
    url: 'https://www.nhs.uk/conditions/coeliac-disease/treatment/',
  },
  nhsComplications: {
    publisher: 'NHS',
    title: 'Coeliac disease: complications',
    url: 'https://www.nhs.uk/conditions/coeliac-disease/complications/',
  },
  coeliacUkAbout: {
    publisher: 'Coeliac UK',
    title: 'What is coeliac disease?',
    url: 'https://www.coeliac.org.uk/information-and-support/coeliac-disease/',
  },
  coeliacUkDiagnosis: {
    publisher: 'Coeliac UK',
    title: 'Getting diagnosed',
    url: 'https://www.coeliac.org.uk/about-coeliac-disease/getting-diagnosed/',
  },
  coeliacUkMyths: {
    publisher: 'Coeliac UK',
    title: 'Common myths about coeliac disease',
    url: 'https://www.coeliac.org.uk/about-coeliac-disease/common-myths/',
  },
  coeliacUkOats: {
    publisher: 'Coeliac UK',
    title: 'Oats and the gluten free diet',
    url: 'https://www.coeliac.org.uk/living-with-coeliac-disease/food-and-drink/food-and-drink-information/oats/',
  },
  coeliacUkEatingOut: {
    publisher: 'Coeliac UK',
    title: 'Hints and tips for eating out',
    url: 'https://www.coeliac.org.uk/living-with-coeliac-disease/food-and-drink/eating-out-and-travel/hints-and-tips-for-eating-out/',
  },
  coeliacUkGlutenFreeLaw: {
    publisher: 'Coeliac UK',
    title: 'Gluten free law',
    url: 'https://commercial.coeliac.org.uk/gluten-free-law',
  },
  govUkAllergenLabelling: {
    publisher: 'GOV.UK',
    title: 'Allergen labelling',
    url: 'https://www.gov.uk/understanding-food-labelling/allergen-labelling',
  },
  openStreetMap: {
    publisher: 'OpenStreetMap contributors',
    title: 'Map and place data',
    url: 'https://www.openstreetmap.org/copyright',
  },
} satisfies Record<string, Source>
