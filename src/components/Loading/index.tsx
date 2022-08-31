import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { PageTransition } from './PageTransition'

export const Loading: React.FC = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleStart = (url: string) => {
    if (url !== router.pathname) {
      setIsLoading(true)
    }
  }
  const handleComplete = () => {
    setIsLoading(false)
  }
  useEffect(() => {
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return <>{isLoading && <PageTransition />}</>
}
