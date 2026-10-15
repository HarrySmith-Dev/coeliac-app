import { useEffect, useState } from 'react'

export const useIsSlow = (isActive: boolean, delay: number) => {
  const [isSlow, setIsSlow] = useState(false)

  useEffect(() => {
    if (!isActive) {
      return
    }
    const timer = setTimeout(() => setIsSlow(true), delay)
    return () => {
      clearTimeout(timer)
      setIsSlow(false)
    }
  }, [isActive, delay])

  return isActive && isSlow
}
