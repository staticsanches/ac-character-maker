import { actions } from '@/redux/actions'
import { selectors } from '@/redux/selectors'
import { BooleanControlsWithPerspective } from '../BooleanControlsWithPerspective'
import { ColorControlsWithPerspective } from '../ColorControlsWithPerspective'
import { ControlPanel, type NavigateBackToProps } from '../ControlPanel'
import { ControlPanelDivider } from '../ControlPanelDivider'

export const BlushControls = (props: NavigateBackToProps) => (
  <ControlPanel title="Blush" resetActionProvider={() => actions.pieces.reset('blush')} {...props}>
    <ColorControlsWithPerspective
      title="Color"
      selector={selectors.pieces.blush.color.select}
      notNoneSelector={selectors.pieces.blush.color.notNone.select}
      actionCreator={actions.pieces.blush.changeColor}
      prSelector={selectors.pieces.blush.pr.color.select}
      prResolvedSelector={selectors.pieces.blush.pr.color.selectResolved}
      prNotNoneSelector={selectors.pieces.blush.pr.color.notNone.select}
      plSelector={selectors.pieces.blush.pl.color.select}
      plResolvedSelector={selectors.pieces.blush.pl.color.selectResolved}
      plNotNoneSelector={selectors.pieces.blush.pl.color.notNone.select}
      sidedActionCreator={actions.pieces.blush.changeSidedColor}
      presetColors={blushPresetColors}
    />

    <ControlPanelDivider />

    <BooleanControlsWithPerspective
      title="Soft"
      mainSelector={selectors.pieces.blush.soft.select}
      mainActionCreator={actions.pieces.blush.changeSoft}
      prSelector={selectors.pieces.blush.pr.soft.select}
      plSelector={selectors.pieces.blush.pl.soft.select}
      sidedActionCreator={actions.pieces.blush.changeSidedSoft}
    />
  </ControlPanel>
)

const blushPresetColors = ['#FFBAA5', '#FF7E36'] as const
