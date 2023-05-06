import { ToggleButton, ToggleButtonProps, Tooltip, TooltipProps } from '@mui/material'
import React from 'react'

export type TooltipToggleButtonProps = ToggleButtonProps & {
  TooltipProps: Omit<TooltipProps, 'children'>
}

export const TooltipToggleButton: React.FC<TooltipToggleButtonProps> = React.forwardRef(
  ({ TooltipProps, ...props }, ref) => (
    <Tooltip {...TooltipProps}>
      <ToggleButton ref={ref} {...props} />
    </Tooltip>
  )
)
