import { Box, Slider, Typography } from '@mui/material'

import { useRootSelector } from '@/hooks/useRootSelector'
import { actions } from '@/redux/actions'
import { selectors } from '@/redux/selectors'
import { useDispatch } from 'react-redux'
import { ColorControl } from '../ColorControl'
import { ControlLabel } from '../ControlLabel'
import { ControlPanel, NavigateBackToProps } from '../ControlPanel'
import { ControlPanelDivider } from '../ControlPanelDivider'

export const AvatarControls = (props: NavigateBackToProps) => {
  const backgroundRadius = useRootSelector(selectors.avatar.background.radius.select)
  const dispatch = useDispatch()

  const handleRadius = (_: Event, radius: number | number[]) => {
    if (typeof radius === 'number') {
      dispatch(actions.avatar.changeBackgroundRadius(radius))
    }
  }

  return (
    <ControlPanel title="Avatar" resetActionProvider={() => actions.avatar.reset()} {...props}>
      <ColorControl
        title="Skin"
        selector={selectors.avatar.skinColor.select}
        notNoneSelector={selectors.avatar.skinColor.notNone.select}
        actionCreator={actions.avatar.changeSkinColor}
        presetColors={skinPresetColors}
      />

      <ControlPanelDivider />

      <Typography variant="subtitle1">Background</Typography>
      <Box pl={4}>
        <ControlPanelDivider />

        <ColorControl
          title="Color"
          selector={selectors.avatar.background.color.select}
          notNoneSelector={selectors.avatar.background.color.notNone.select}
          actionCreator={actions.avatar.changeBackgroundColor}
        />

        <ControlPanelDivider />

        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ paddingBlock: 0.75 }}>
          <ControlLabel title="Radius" />
          <Slider
            size="small"
            sx={{ marginLeft: 2 }}
            min={0}
            max={180}
            value={backgroundRadius}
            onChange={handleRadius}
          />
        </Box>
      </Box>
    </ControlPanel>
  )
}

export const skinPresetColors = [
  '#57280D',
  '#84401A',
  '#BA6332',
  '#D0784E',
  '#DB8C5D',
  '#F0A06F',
  '#FBB985',
  '#FFC892',
  '#FFD0B2',
  '#FFDCBC',
  '#FFE6CF',
] as const
