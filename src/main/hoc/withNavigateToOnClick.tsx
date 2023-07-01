import type { OnClickProps } from '@/types/react'
import { useNavigate, type To } from 'react-router-dom'

export const withNavigateToOnClick = <P extends OnClickProps>(Component: React.ComponentType<P>, to: To) => {
  const ComponentWithNavigateToOnClick = (props: Omit<P, keyof OnClickProps>) => {
    const navigate = useNavigate()
    const handleClick = () => navigate(to)
    return <Component {...(props as P)} onClick={handleClick} />
  }
  const displayName = Component.displayName || Component.name || 'Component'
  ComponentWithNavigateToOnClick.displayName = `withNavigateToOnClick(${displayName})`
  return ComponentWithNavigateToOnClick
}
