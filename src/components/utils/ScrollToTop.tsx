import { useEffect } from 'react'

type Props = {
  path: string
  children: React.ReactNode
}

export const ScrollToTop: React.FC<Props> = (props) => {
  const { children, path } = props

  useEffect(() => {
    window.scrollTo(0, 0)
    console.warn(11)
  }, [path])

  return <>{children}</>
}
