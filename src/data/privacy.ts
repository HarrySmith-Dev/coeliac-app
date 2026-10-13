import type { Source } from '@/types/content'

type PrivacyPoint = {
  id: string
  title: string
  description: string
}

export const privacyPoints: PrivacyPoint[] = [
  {
    id: 'no-tracking',
    title: 'What we collect',
    description:
      "We don't collect any personal information. There are no accounts, no analytics and no tracking cookies.",
  },
  {
    id: 'location',
    title: 'Your location',
    description:
      'If you choose Find gluten-free spots near me, your browser asks for permission to share your location. It is used to centre the map and search nearby, as described below, and is never sent to us.',
  },
  {
    id: 'searches',
    title: 'Searching for places',
    description:
      "To find places, the centre of the area you search, rounded to about 100 metres, is sent to the Overpass API, a public service that searches OpenStreetMap data. Map images are loaded from OpenStreetMap's servers, which receive your IP address and the area of the map you are viewing.",
  },
  {
    id: 'browser-storage',
    title: 'Stored in your browser',
    description:
      "Search results are saved in your browser for 24 hours so pages load faster, and the last area you searched is remembered until you close the tab. Nothing is stored anywhere else, and you can remove it at any time by clearing this site's data in your browser settings.",
  },
  {
    id: 'hosting',
    title: 'Hosting',
    description:
      'This site is hosted by Vercel, which may keep standard server logs, such as IP addresses, for security and reliability.',
  },
]

export const privacyLinks: Source[] = [
  {
    publisher: 'OpenStreetMap Foundation',
    title: 'Privacy policy',
    url: 'https://osmfoundation.org/wiki/Privacy_Policy',
  },
  {
    publisher: 'Vercel',
    title: 'Privacy notice',
    url: 'https://vercel.com/legal/privacy-notice',
  },
]
