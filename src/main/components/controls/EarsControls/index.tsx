import { useRootSelector } from '@/hooks/useRootSelector'
import { actions } from '@/redux/actions'
import { selectors } from '@/redux/selectors'

import { skinPresetColors } from '../AvatarControls'
import { ColorControlsWithPerspective } from '../ColorControlsWithPerspective'
import { ControlPanel, NavigateBackToProps } from '../ControlPanel'
import { ControlPanelDivider } from '../ControlPanelDivider'
import { SliderControlsWithPerspective } from '../SliderControlsWithPerspective'

export const EarsControls = (props: NavigateBackToProps) => {
  const color = useRootSelector(selectors.pieces.ears.color.select)
  const prColor = useRootSelector(selectors.pieces.ears.pr.color.select)
  const plColor = useRootSelector(selectors.pieces.ears.pl.color.select)

  return (
    <ControlPanel title="Ears" resetActionProvider={() => actions.pieces.reset('ears')} {...props}>
      <ColorControlsWithPerspective
        title="Color"
        inherit
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
        disabled={color !== undefined}
        prDisabled={prColor !== undefined}
        plDisabled={plColor !== undefined}
      />
    </ControlPanel>
  )
}
