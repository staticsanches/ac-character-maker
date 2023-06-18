import { Box, Typography } from '@mui/material'

import { actions } from '@/redux/actions'
import { selectors } from '@/redux/selectors'
import { ColorControl } from '../ColorControl'
import { ControlPanel, NavigateBackToProps } from '../ControlPanel'
import { ControlPanelDivider } from '../ControlPanelDivider'
import { SliderControl } from '../SliderControl'

export const AvatarControls = (props: NavigateBackToProps) => (
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
        presetColors={backgroundPresetColors}
      />

      <ControlPanelDivider />

      <SliderControl
        title="Radius"
        selector={selectors.avatar.background.radius.select}
        actionCreator={actions.avatar.changeBackgroundRadius}
        min={0}
        max={180}
        sx={{ paddingBlock: 0.75 }}
      />
    </Box>
  </ControlPanel>
)

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

const backgroundPresetColors = [
  '#5A5A5A',
  '#FFD686',
  '#5F0932',
  '#FFD1DF',
  '#C8DEFE',
  '#D7FBEB',
  '#4A2A63',
  '#FFBE73',
  '#5F9073',
  '#2C2B5C',
  '#8D0C0C',
  '#FFFFFF',
] as const
