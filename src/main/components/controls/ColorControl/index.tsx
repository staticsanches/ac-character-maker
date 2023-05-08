import { AccountTree, Clear, Palette } from '@mui/icons-material'
import { Box, BoxProps, IconButton, Popover, ToggleButtonGroup } from '@mui/material'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useState } from 'react'
import { ColorChangeHandler, SketchPicker } from 'react-color'
import { useDispatch } from 'react-redux'

import { useRootSelector } from '@/hooks/useRootSelector'
import { RootSelector } from '@/redux/selectors'
import { SvgColor } from '@/types/svgColor'
import { toReactColor, toSvgColor } from '@/utils/svgColorUtils'
import { PresetColor } from 'react-color/lib/components/sketch/Sketch'
import { ControlLabel } from '../ControlLabel'
import { SvgColorPreviewIcon } from '../SvgColorPreviewIcon'
import { TooltipToggleButton } from '../TooltipToggleButton'

export type ColorControlProps = Pick<BoxProps, 'flex'> &
  (
    | {
        readonly side?: never
        readonly inherit?: never

        readonly title: string

        readonly selector: RootSelector<SvgColor>
        readonly resolvedSelector?: RootSelector<SvgColor> & never

        readonly actionCreator: ActionCreatorWithPayload<SvgColor>
      }
    | {
        readonly side?: never
        readonly inherit: true

        readonly title: string

        readonly selector: RootSelector<Opt<SvgColor>>
        readonly resolvedSelector: RootSelector<SvgColor>

        readonly actionCreator: ActionCreatorWithPayload<Opt<SvgColor>>
      }
    | {
        readonly side: 'pr' | 'pl'
        readonly inherit?: never

        readonly title?: never

        readonly selector: RootSelector<Opt<SvgColor>>
        readonly resolvedSelector: RootSelector<SvgColor>

        readonly actionCreator: ActionCreatorWithPayload<[side: 'pr' | 'pl', value: Opt<SvgColor>]>
      }
  ) & {
    readonly notNoneSelector: RootSelector<Exclude<SvgColor, 'none'>>
    readonly presetColors?: readonly PresetColor[]
  }

export const ColorControl = ({
  side,
  inherit,
  title,
  selector,
  notNoneSelector,
  resolvedSelector,
  actionCreator,
  presetColors = [],
  flex,
}: ColorControlProps) => {
  const color = useRootSelector(selector)
  const initialColor = useRootSelector(notNoneSelector)
  const dispatch = useDispatch()

  const [popoverAnchorEl, setPopoverAnchorEl] = useState<HTMLButtonElement | null>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPopoverAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setPopoverAnchorEl(null)
  }
  const popoverOpen = Boolean(popoverAnchorEl)
  const popoverID = popoverOpen ? 'color-popover' : undefined

  const handleColorChange: ColorChangeHandler = (selectedColor) => {
    if (side === undefined) {
      dispatch(actionCreator(toSvgColor(selectedColor.rgb)))
    } else {
      dispatch(actionCreator([side, toSvgColor(selectedColor.rgb)]))
    }
  }

  let handleChange: (_: any, newValue: any) => void
  if (side === undefined) {
    if (inherit === undefined) {
      handleChange = (_: any, newValue: 'palette' | 'none' | null) => {
        if (newValue === 'palette') {
          dispatch(actionCreator(initialColor))
        } else if (newValue === 'none') {
          dispatch(actionCreator('none'))
        }
      }
    } else {
      handleChange = (_: any, newValue: 'inherit' | 'palette' | 'none' | null) => {
        if (newValue === 'inherit') {
          dispatch(actionCreator(undefined))
        } else if (newValue === 'palette') {
          dispatch(actionCreator(initialColor))
        } else if (newValue === 'none') {
          dispatch(actionCreator('none'))
        }
      }
    }
  } else {
    handleChange = (_: any, newValue: 'inherit' | 'palette' | 'none' | null) => {
      if (newValue === 'inherit') {
        dispatch(actionCreator([side, undefined]))
      } else if (newValue === 'palette') {
        dispatch(actionCreator([side, initialColor]))
      } else if (newValue === 'none') {
        dispatch(actionCreator([side, 'none']))
      }
    }
  }

  return (
    <>
      <Box display="flex" flex={flex as any} justifyContent="space-between" alignItems="center">
        {side === undefined && <ControlLabel title={title} />}
        {side !== undefined && <ControlLabel side={side} />}

        <Box display="flex" alignItems="center" ml={1}>
          <IconButton
            id={popoverID}
            disabled={color === undefined || color === 'none'}
            sx={{ mr: 1 }}
            onClick={handleClick}
          >
            <SvgColorPreviewIcon
              fontSize="inherit"
              colorSelector={side === undefined && inherit === undefined ? selector : resolvedSelector}
            />
          </IconButton>

          <ToggleButtonGroup
            value={color === undefined ? 'inherit' : color === 'none' ? 'none' : 'palette'}
            onChange={handleChange}
            exclusive
            size="small"
          >
            {side !== undefined && (
              <TooltipToggleButton
                value="inherit"
                TooltipProps={{ title: 'Inherit', arrow: true, disableInteractive: true }}
              >
                <AccountTree fontSize="inherit" />
              </TooltipToggleButton>
            )}
            <TooltipToggleButton value="none" TooltipProps={{ title: 'None', arrow: true, disableInteractive: true }}>
              <Clear fontSize="inherit" />
            </TooltipToggleButton>
            <TooltipToggleButton
              value="palette"
              TooltipProps={{ title: 'Palette', arrow: true, disableInteractive: true }}
            >
              <Palette fontSize="inherit" />
            </TooltipToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>

      <Popover
        id={popoverID}
        open={popoverOpen}
        anchorEl={popoverAnchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {color !== undefined && color !== 'none' && (
          <SketchPicker color={toReactColor(color)} onChange={handleColorChange} presetColors={[...presetColors]} />
        )}
      </Popover>
    </>
  )
}
