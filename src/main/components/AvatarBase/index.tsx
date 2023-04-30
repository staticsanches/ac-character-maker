import React from 'react'

export type AvatarBaseProps = {
  size: number
}

export const AvatarBase = React.forwardRef<SVGSVGElement, React.PropsWithChildren<AvatarBaseProps>>(
  ({ size, children }, ref) => (
    <svg ref={ref} viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" fill="none" width={size} height={size}>
      {children}
    </svg>
  )
)
