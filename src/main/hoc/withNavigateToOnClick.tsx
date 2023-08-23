import type { OnClickProps } from '@/types/react'
import React from 'react'
import { useNavigate, type To } from 'react-router-dom'

export const withNavigateToOnClick = <P extends OnClickProps>(Component: React.ElementType<P>, to: To) => {
  const ComponentWithNavigateToOnClick = (props: Omit<P, keyof OnClickProps>) => {
    const navigate = useNavigate()
    return React.createElement(Component, { ...props, onClick: () => navigate(to) } as any)
  }
  const displayName = typeof Component === 'string' ? Component : Component.displayName || Component.name
  ComponentWithNavigateToOnClick.displayName = `withNavigateToOnClick(${displayName})`
  return ComponentWithNavigateToOnClick
}
