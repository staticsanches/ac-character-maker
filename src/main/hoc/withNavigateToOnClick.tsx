import React from 'react'
import { To, useNavigate } from 'react-router-dom'

import type { OnClickProps } from '@/types/react'

export const withNavigateToOnClick = <P extends OnClickProps>(Component: React.ComponentType<P>, to: To) => {
  return (props: Omit<P, keyof OnClickProps>) => {
    const navigate = useNavigate()
    const handleClick = () => navigate(to)

    return <Component {...(props as P)} onClick={handleClick} />
  }
}
