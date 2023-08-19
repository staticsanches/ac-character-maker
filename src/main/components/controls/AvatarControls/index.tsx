import { useRootSelector } from '@/hooks/useRootSelector'
import { actions } from '@/redux/actions'
import { selectors } from '@/redux/selectors'
import { Box } from '@mui/material'
import { ColorControl } from '../ColorControl'
import { ColorControlsWithPerspective } from '../ColorControlsWithPerspective'
import { ControlPanel, type NavigateBackToProps } from '../ControlPanel'
import { ControlPanelDivider } from '../ControlPanelDivider'
import { SliderControl } from '../SliderControl'
import { SliderControlsWithPerspective } from '../SliderControlsWithPerspective'

export const AvatarControls = (props: NavigateBackToProps) => {
  const earsColor = useRootSelector(selectors.pieces.ears.color.select)
  const earsPrColor = useRootSelector(selectors.pieces.ears.pr.color.select)
  const earsPlColor = useRootSelector(selectors.pieces.ears.pl.color.select)

  return (
    <ControlPanel title="Avatar" resetActionProvider={() => actions.resetAvatarControls()} {...props}>
      <ColorControl
        title="Skin"
        selector={selectors.avatar.skinColor.select}
        notNoneSelector={selectors.avatar.skinColor.notNone.select}
        actionCreator={actions.avatar.changeSkinColor}
        presetColors={skinPresetColors}
      />

      <ControlPanelDivider />

      <Box pl={4}>
        <ColorControl
          title="Head"
          inherit
          selector={selectors.pieces.head.color.select}
          resolvedSelector={selectors.pieces.head.color.selectResolved}
          notNoneSelector={selectors.pieces.head.color.notNone.selectResolved}
          actionCreator={actions.pieces.head.changeColor}
          presetColors={skinPresetColors}
        />

        <ControlPanelDivider />

        <ColorControl
          title="Body"
          inherit
          selector={selectors.pieces.body.color.select}
          resolvedSelector={selectors.pieces.body.color.selectResolved}
          notNoneSelector={selectors.pieces.body.color.notNone.selectResolved}
          actionCreator={actions.pieces.body.changeColor}
          presetColors={skinPresetColors}
        />

        <ControlPanelDivider />

        <ColorControlsWithPerspective
          title="Ears"
          inherit
          nested
          selector={selectors.pieces.ears.color.select}
          resolvedSelector={selectors.pieces.ears.color.selectResolved}
          notNoneSelector={selectors.pieces.ears.color.notNone.selectResolved}
          actionCreator={actions.pieces.ears.changeColor}
          prSelector={selectors.pieces.ears.pr.color.select}
          prResolvedSelector={selectors.pieces.ears.pr.color.selectResolved}
          prNotNoneSelector={selectors.pieces.ears.pr.color.notNone.selectResolved}
          plSelector={selectors.pieces.ears.pl.color.select}
          plResolvedSelector={selectors.pieces.ears.pl.color.selectResolved}
          plNotNoneSelector={selectors.pieces.ears.pl.color.notNone.selectResolved}
          sidedActionCreator={actions.pieces.ears.changeSidedColor}
          presetColors={skinPresetColors}
        />

        <ControlPanelDivider />

        <SliderControlsWithPerspective
          title="Darken Coeff."
          selector={selectors.pieces.ears.darkenCoefficient.select}
          actionCreator={actions.pieces.ears.changeDarkenCoefficient}
          prSelector={selectors.pieces.ears.pr.darkenCoefficient.select}
          prResolvedSelector={selectors.pieces.ears.pr.darkenCoefficient.selectResolved}
          plSelector={selectors.pieces.ears.pl.darkenCoefficient.select}
          plResolvedSelector={selectors.pieces.ears.pl.darkenCoefficient.selectResolved}
          sidedActionCreator={actions.pieces.ears.changeSidedDarkenCoefficient}
          min={0}
          max={100}
          disabled={earsColor !== undefined}
          prDisabled={earsPrColor !== undefined}
          plDisabled={earsPlColor !== undefined}
        />

        <ControlPanelDivider />

        <ColorControl
          title="Chest"
          selector={selectors.pieces.chest.color.select}
          notNoneSelector={selectors.pieces.chest.color.notNone.select}
          actionCreator={actions.pieces.chest.changeColor}
          disableAlpha
        />
      </Box>

      <ControlPanelDivider />

      <ColorControl
        title="Background"
        selector={selectors.avatar.background.color.select}
        notNoneSelector={selectors.avatar.background.color.notNone.select}
        actionCreator={actions.avatar.changeBackgroundColor}
        presetColors={backgroundPresetColors}
      />

      <ControlPanelDivider />

      <Box pl={4}>
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
}

const skinPresetColors = [
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
