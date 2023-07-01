import type { RootSelector } from '@/redux/selectors'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Collapse, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useState } from 'react'
import { SliderControl } from '../SliderControl'

export type SliderControlsWithPerspectiveProps = {
  readonly title: string

  readonly selector: RootSelector<number>
  readonly actionCreator: ActionCreatorWithPayload<number>

  readonly prSelector: RootSelector<Opt<number>>
  readonly prResolvedSelector: RootSelector<number>

  readonly plSelector: RootSelector<Opt<number>>
  readonly plResolvedSelector: RootSelector<number>

  readonly sidedActionCreator: ActionCreatorWithPayload<[side: 'pr' | 'pl', value: Opt<number>]>

  readonly min: number
  readonly max: number

  readonly disabled?: boolean
  readonly prDisabled?: boolean
  readonly plDisabled?: boolean
}

export const SliderControlsWithPerspective = ({
  title,
  selector,
  actionCreator,
  prSelector,
  prResolvedSelector,
  plSelector,
  plResolvedSelector,
  sidedActionCreator,
  min,
  max,
  disabled = false,
  prDisabled = false,
  plDisabled = false,
}: SliderControlsWithPerspectiveProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Box>
      <Box display="flex" flexDirection="row" justifyContent="start" alignItems="center">
        <Box mr={1}>
          <IconButton size="medium" onClick={() => setOpen((previous) => !previous)}>
            {open && <ExpandLess fontSize="inherit" />}
            {!open && <ExpandMore fontSize="inherit" />}
          </IconButton>
        </Box>

        <SliderControl
          sx={{ flex: 1 }}
          title={title}
          selector={selector}
          actionCreator={actionCreator}
          min={min}
          max={max}
          disabled={disabled}
        />
      </Box>
      <Collapse in={open} timeout="auto">
        <Box display="flex" flexDirection="column" pl={6} gap={1.5}>
          <SliderControl
            side="pr"
            selector={prSelector}
            resolvedSelector={prResolvedSelector}
            actionCreator={sidedActionCreator}
            min={min}
            max={max}
            disabled={prDisabled || disabled}
          />
          <SliderControl
            side="pl"
            selector={plSelector}
            resolvedSelector={plResolvedSelector}
            actionCreator={sidedActionCreator}
            min={min}
            max={max}
            disabled={plDisabled || disabled}
          />
        </Box>
      </Collapse>
    </Box>
  )
}
