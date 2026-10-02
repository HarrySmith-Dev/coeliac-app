import { useEffect } from 'react'
import { SITE_NAME } from '@/constants/site'

export const usePageTitle = (title?: string) => {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  }, [title])
}
