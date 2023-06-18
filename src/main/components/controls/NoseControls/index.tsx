import { noseVariants } from '@/components/pieces/NosePiece'
import { actions } from '@/redux/actions'
import { selectors } from '@/redux/selectors'
import { ColorControl } from '../ColorControl'
import { ControlPanel, NavigateBackToProps } from '../ControlPanel'
import { ControlPanelDivider } from '../ControlPanelDivider'
import { SelectControl } from '../SelectControl'

export const NoseControls = (props: NavigateBackToProps) => (
  <ControlPanel title="Nose" resetActionProvider={() => actions.pieces.reset('nose')} {...props}>
    <ColorControl
      title="Color"
      selector={selectors.pieces.nose.color.select}
      notNoneSelector={selectors.pieces.nose.color.notNone.select}
      actionCreator={actions.pieces.nose.changeColor}
      presetColors={nosePresetColors}
    />

    <ControlPanelDivider />

    <SelectControl
      title="Variant"
      selector={selectors.pieces.nose.variant.select}
      actionCreator={actions.pieces.nose.changeVariant}
      availableValues={noseVariants}
    />
  </ControlPanel>
)

const nosePresetColors = ['#FF7E36', '#FFBAA5', '#841616'] as const
