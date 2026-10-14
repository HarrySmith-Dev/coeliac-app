import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL } from '@/constants/site'

export const useCanonicalUrl = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${SITE_URL}${pathname}`)
  }, [pathname])
}
