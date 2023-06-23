import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'

import { useDispatch } from 'react-redux'

import { useRootSelector } from '@/hooks/useRootSelector'
import { AccountTree, Check, Clear } from '@mui/icons-material'
import { BoxProps, ToggleButtonGroup } from '@mui/material'
import { Box } from '@mui/system'

import { ControlLabel } from '../ControlLabel'
import { TooltipToggleButton } from '../TooltipToggleButton'

import type { RootSelector } from '@/redux/selectors'

export type BooleanControlProps = Pick<BoxProps, 'flex'> &
  (
    | {
        readonly side?: never
        readonly title: string
        readonly selector: RootSelector<boolean>
        readonly actionCreator: ActionCreatorWithPayload<boolean>
      }
    | {
        readonly side: 'pr' | 'pl'
        readonly title?: never
        readonly selector: RootSelector<Opt<boolean>>
        readonly actionCreator: ActionCreatorWithPayload<[side: 'pr' | 'pl', value: Opt<boolean>]>
      }
  )

export const BooleanControl = ({ side, title, selector, actionCreator, flex }: BooleanControlProps): JSX.Element => {
  const value = useRootSelector(selector)
  const dispatch = useDispatch()

  let handleChange: (_: any, newValue: any) => void
  if (side === undefined) {
    handleChange = (_: any, newValue: 'yes' | 'no' | null) => {
      if (newValue === 'yes') {
        dispatch(actionCreator(true))
      } else if (newValue === 'no') {
        dispatch(actionCreator(false))
      }
    }
  } else {
    handleChange = (_: any, newValue: 'inherit' | 'yes' | 'no' | null) => {
      if (newValue === 'inherit') {
        dispatch(actionCreator([side, undefined]))
      } else if (newValue === 'yes') {
        dispatch(actionCreator([side, true]))
      } else if (newValue === 'no') {
        dispatch(actionCreator([side, false]))
      }
    }
  }

  return (
    <Box display="flex" flex={flex as any} justifyContent="space-between" alignItems="center">
      {side === undefined && <ControlLabel title={title} />}
      {side !== undefined && <ControlLabel side={side} />}

      <ToggleButtonGroup
        value={value === undefined ? 'inherit' : value ? 'yes' : 'no'}
        onChange={handleChange}
        exclusive
        size="small"
        sx={{ ml: 1 }}
      >
        {side !== undefined && (
          <TooltipToggleButton
            value="inherit"
            TooltipProps={{ title: 'Inherit', arrow: true, disableInteractive: true }}
          >
            <AccountTree fontSize="inherit" />
          </TooltipToggleButton>
        )}
        <TooltipToggleButton value="no" TooltipProps={{ title: 'No', arrow: true, disableInteractive: true }}>
          <Clear fontSize="inherit" />
        </TooltipToggleButton>
        <TooltipToggleButton value="yes" TooltipProps={{ title: 'Yes', arrow: true, disableInteractive: true }}>
          <Check fontSize="inherit" />
        </TooltipToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}
