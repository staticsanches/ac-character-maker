import React from 'react'

import { ToggleButton, ToggleButtonProps, Tooltip, TooltipProps } from '@mui/material'

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
