import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Box, Collapse, IconButton } from '@mui/material'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useState } from 'react'

import { RootSelector } from '@/redux/selectors'
import { BooleanControl } from '../BooleanControl'

export type BooleanControlsWithPerspectiveProps = {
  readonly title: string

  readonly mainSelector: RootSelector<boolean>
  readonly mainActionCreator: ActionCreatorWithPayload<boolean>

  readonly prSelector: RootSelector<Opt<boolean>>
  readonly plSelector: RootSelector<Opt<boolean>>
  readonly sidedActionCreator: ActionCreatorWithPayload<[side: 'pr' | 'pl', value: Opt<boolean>]>
}

export const BooleanControlsWithPerspective = ({
  title,

  mainSelector,
  mainActionCreator,

  prSelector,
  plSelector,
  sidedActionCreator,
}: BooleanControlsWithPerspectiveProps) => {
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
        <BooleanControl flex={1} title={title} selector={mainSelector} actionCreator={mainActionCreator} />
      </Box>
      <Collapse in={open} timeout="auto">
        <Box display="flex" flexDirection="column" rowGap={1.5} pl={6} sx={{ paddingBlock: 0.75 }}>
          <BooleanControl side="pr" selector={prSelector} actionCreator={sidedActionCreator} />
          <BooleanControl side="pl" selector={plSelector} actionCreator={sidedActionCreator} />
        </Box>
      </Collapse>
    </Box>
  )
}
