import classes from '@/css/HighlightOnHover.module.css'
import React from 'react'

export const withHighlightOnHover = <P extends {}>(Component: React.ComponentType<P>) => {
  const ComponentWithHighlightOnHover = (props: P) => {
    let className = classes.highlightOnHover
    if ('className' in props && props.className) {
      className += ' ' + props.className
    }
    return <Component {...props} className={className} />
  }
  const displayName = typeof Component === 'string' ? Component : Component.displayName || Component.name
  ComponentWithHighlightOnHover.displayName = `withHighlightOnHover(${displayName})`
  return ComponentWithHighlightOnHover
}
