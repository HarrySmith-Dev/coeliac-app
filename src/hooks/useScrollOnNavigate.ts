import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useScrollOnNavigate = () => {
  const { hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [hash, key])
}
