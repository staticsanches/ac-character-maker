import { AccountTree, Check, Clear, EmojiPeople, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { Box, Collapse, IconButton, ToggleButtonGroup, Tooltip, Typography } from '@mui/material'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { useRootSelector } from '@/hooks/useRootSelector'
import { RootSelector } from '@/redux/selectors'
import { TooltipToggleButton } from '../TooltipToggleButton'

export type BooleanControlWithPerspectiveProps = {
  readonly title: string

  readonly mainSelector: RootSelector<boolean>
  readonly mainActionCreator: ActionCreatorWithPayload<boolean>

  readonly prSelector: RootSelector<Opt<boolean>>
  readonly plSelector: RootSelector<Opt<boolean>>
  readonly sidedActionCreator: ActionCreatorWithPayload<[side: 'pr' | 'pl', value: Opt<boolean>]>
}

export const BooleanControlWithPerspective = ({
  title,

  mainSelector,
  mainActionCreator,

  prSelector,
  plSelector,
  sidedActionCreator,
}: BooleanControlWithPerspectiveProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
        <Box display="flex" flexDirection="row" alignItems="center">
          <IconButton size="medium" onClick={() => setOpen((previous) => !previous)}>
            {open && <KeyboardArrowUp fontSize="inherit" />}
            {!open && <KeyboardArrowDown fontSize="inherit" />}
          </IconButton>
          <Typography variant="subtitle1" component="span" pl={1}>
            {title}
          </Typography>
        </Box>
        <BooleanControl selector={mainSelector} actionCreator={mainActionCreator} />
      </Box>
      <Collapse in={open} timeout="auto">
        <Box display="flex" flexDirection="column" rowGap={1.5} pl={6} sx={{ paddingBlock: 0.75 }}>
          <SidedBooleanControl side="pr" selector={prSelector} actionCreator={sidedActionCreator} />
          <SidedBooleanControl side="pl" selector={plSelector} actionCreator={sidedActionCreator} />
        </Box>
      </Collapse>
    </Box>
  )
}

type BoolenControlProps = {
  readonly selector: RootSelector<boolean>
  readonly actionCreator: ActionCreatorWithPayload<boolean>
}

const BooleanControl = ({ selector, actionCreator }: BoolenControlProps) => {
  const value = useRootSelector(selector)

  const dispatch = useDispatch()
  const handleChange = (_: any, newValue: 'yes' | 'no' | null) => {
    if (newValue === 'yes') {
      dispatch(actionCreator(true))
    } else if (newValue === 'no') {
      dispatch(actionCreator(false))
    }
  }

  return (
    <ToggleButtonGroup value={value ? 'yes' : 'no'} onChange={handleChange} exclusive size="small">
      <TooltipToggleButton value="no" TooltipProps={{ title: 'No', arrow: true, disableInteractive: true }}>
        <Clear fontSize="inherit" />
      </TooltipToggleButton>
      <TooltipToggleButton value="yes" TooltipProps={{ title: 'Yes', arrow: true, disableInteractive: true }}>
        <Check fontSize="inherit" />
      </TooltipToggleButton>
    </ToggleButtonGroup>
  )
}

type SidedBoolenControlProps = {
  readonly side: 'pr' | 'pl'
  readonly selector: RootSelector<Opt<boolean>>
  readonly actionCreator: ActionCreatorWithPayload<[side: 'pr' | 'pl', value: Opt<boolean>]>
}

const SidedBooleanControl = ({ side, selector, actionCreator }: SidedBoolenControlProps) => {
  const value = useRootSelector(selector)

  const dispatch = useDispatch()
  const handleChange = (_: any, newValue: 'inherit' | 'yes' | 'no' | null) => {
    if (newValue === 'inherit') {
      dispatch(actionCreator([side, undefined]))
    } else if (newValue === 'yes') {
      dispatch(actionCreator([side, true]))
    } else if (newValue === 'no') {
      dispatch(actionCreator([side, false]))
    }
  }

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Tooltip title={side === 'pr' ? 'Proper Right' : 'Proper Left'} disableInteractive>
        <EmojiPeople sx={{ transform: side === 'pl' ? 'scaleX(-1)' : undefined, width: '1em', height: '1em' }} />
      </Tooltip>

      <ToggleButtonGroup
        value={value === undefined ? 'inherit' : value ? 'yes' : 'no'}
        onChange={handleChange}
        exclusive
        size="small"
      >
        <TooltipToggleButton value="inherit" TooltipProps={{ title: 'Inherit', arrow: true, disableInteractive: true }}>
          <AccountTree fontSize="inherit" />
        </TooltipToggleButton>
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
