import { ToggleButton, Tooltip, type ToggleButtonProps, type TooltipProps } from '@mui/material'
import React from 'react'

export type TooltipToggleButtonProps = ToggleButtonProps & {
  TooltipProps: Omit<TooltipProps, 'children'>
}

export const TooltipToggleButton: React.FC<TooltipToggleButtonProps> = React.forwardRef(
  ({ TooltipProps: tooltipProps, ...props }, ref) => (
    <Tooltip {...tooltipProps}>
      <ToggleButton ref={ref} {...props} />
    </Tooltip>
  )
)
