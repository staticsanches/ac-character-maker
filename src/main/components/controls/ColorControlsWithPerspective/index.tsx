import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useState } from 'react'

import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Collapse, IconButton } from '@mui/material'
import { Box } from '@mui/system'

import { ColorControl } from '../ColorControl'

import type { PresetColor } from 'react-color/lib/components/sketch/Sketch'

import type { RootSelector } from '@/redux/selectors'
import type { SvgColor, SvgColorNotNone } from '@/types/svgColor'

export type ColorControlsWithPerspectiveProps = {
  readonly title: string

  readonly notNoneSelector: RootSelector<SvgColorNotNone>

  readonly prSelector: RootSelector<Opt<SvgColor>>
  readonly prResolvedSelector: RootSelector<SvgColor>
  readonly prNotNoneSelector: RootSelector<SvgColorNotNone>

  readonly plSelector: RootSelector<Opt<SvgColor>>
  readonly plResolvedSelector: RootSelector<SvgColor>
  readonly plNotNoneSelector: RootSelector<SvgColorNotNone>

  readonly sidedActionCreator: ActionCreatorWithPayload<[side: 'pr' | 'pl', value: Opt<SvgColor>]>

  readonly presetColors?: readonly PresetColor[]
} & (
  | {
      readonly inherit?: never

      readonly selector: RootSelector<SvgColor>
      readonly resolvedSelector?: never

      readonly actionCreator: ActionCreatorWithPayload<SvgColor>
    }
  | {
      readonly inherit: true

      readonly selector: RootSelector<Opt<SvgColor>>
      readonly resolvedSelector: RootSelector<SvgColor>

      readonly actionCreator: ActionCreatorWithPayload<Opt<SvgColor>>
    }
)

export const ColorControlsWithPerspective = ({
  inherit,

  title,

  selector,
  notNoneSelector,
  resolvedSelector,

  actionCreator,

  prSelector,
  prResolvedSelector,
  prNotNoneSelector,

  plSelector,
  plResolvedSelector,
  plNotNoneSelector,

  sidedActionCreator,

  presetColors = [],
}: ColorControlsWithPerspectiveProps) => {
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
        {inherit === undefined && (
          <ColorControl
            flex={1}
            title={title}
            selector={selector}
            notNoneSelector={notNoneSelector}
            actionCreator={actionCreator}
            presetColors={presetColors}
          />
        )}
        {inherit && (
          <ColorControl
            flex={1}
            inherit
            title={title}
            selector={selector}
            resolvedSelector={resolvedSelector}
            notNoneSelector={notNoneSelector}
            actionCreator={actionCreator}
            presetColors={presetColors}
          />
        )}
      </Box>
      <Collapse in={open} timeout="auto">
        <Box display="flex" flexDirection="column" pl={6}>
          <ColorControl
            side="pr"
            selector={prSelector}
            resolvedSelector={prResolvedSelector}
            notNoneSelector={prNotNoneSelector}
            actionCreator={sidedActionCreator}
            presetColors={presetColors}
          />
          <ColorControl
            side="pl"
            selector={plSelector}
            resolvedSelector={plResolvedSelector}
            notNoneSelector={plNotNoneSelector}
            actionCreator={sidedActionCreator}
            presetColors={presetColors}
          />
        </Box>
      </Collapse>
    </Box>
  )
}
