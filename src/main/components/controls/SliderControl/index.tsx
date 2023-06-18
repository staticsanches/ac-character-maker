import { AccountTree, PermDataSetting } from '@mui/icons-material'
import { Box, BoxProps, Slider, ToggleButtonGroup } from '@mui/material'
import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { useRootSelector } from '@/hooks/useRootSelector'
import type { RootSelector } from '@/redux/selectors'
import { ControlLabel } from '../ControlLabel'
import { TooltipToggleButton } from '../TooltipToggleButton'

export type SliderControlProps = (
  | {
      readonly side?: never

      readonly title: string

      readonly selector: RootSelector<number>
      readonly resolvedSelector?: never

      readonly actionCreator: ActionCreatorWithPayload<number>
    }
  | {
      readonly side: 'pr' | 'pl'

      readonly title?: never

      readonly selector: RootSelector<Opt<number>>
      readonly resolvedSelector: RootSelector<number>

      readonly actionCreator: ActionCreatorWithPayload<[side: 'pr' | 'pl', value: Opt<number>]>
    }
) & {
  readonly min: number
  readonly max: number

  readonly disabled?: boolean

  readonly sx?: BoxProps['sx']
}

export const SliderControl = ({
  side,
  title,
  selector,
  resolvedSelector,
  actionCreator,
  min,
  max,
  disabled = false,
  sx,
}: SliderControlProps) => {
  const value = useRootSelector(selector)
  const resolvedValue = useRootSelector(side === undefined ? selector : resolvedSelector)

  const dispatch = useDispatch()

  const handleSliderChange = (_: Event, newValue: number | number[] | null) => {
    if (typeof newValue === 'number') {
      if (side === undefined) {
        dispatch(actionCreator(newValue))
      } else if (value !== undefined) {
        dispatch(actionCreator([side, newValue]))
      }
    }
  }

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" sx={sx}>
      {side === undefined && <ControlLabel title={title} />}
      {side !== undefined && <ControlLabel side={side} />}

      <Slider
        size="small"
        sx={{ marginLeft: 2 }}
        min={min}
        max={max}
        value={resolvedValue}
        onChange={handleSliderChange}
        disabled={value === undefined || disabled}
      />

      {side !== undefined && (
        <ToggleButtonGroup
          value={value === undefined ? 'inherit' : 'custom'}
          exclusive
          size="small"
          disabled={disabled}
          sx={{ marginLeft: 2 }}
          onChange={(_, newValue) => {
            if (newValue === 'inherit') {
              dispatch(actionCreator([side, undefined]))
            } else if (newValue === 'custom') {
              dispatch(actionCreator([side, resolvedValue]))
            }
          }}
        >
          <TooltipToggleButton
            value="inherit"
            TooltipProps={{ title: 'Inherit', arrow: true, disableInteractive: true }}
          >
            <AccountTree fontSize="inherit" />
          </TooltipToggleButton>
          <TooltipToggleButton value="custom" TooltipProps={{ title: 'Custom', arrow: true, disableInteractive: true }}>
            <PermDataSetting fontSize="inherit" />
          </TooltipToggleButton>
        </ToggleButtonGroup>
      )}
    </Box>
  )
}
