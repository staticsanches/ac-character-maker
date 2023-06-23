import { hairVariants } from '@/components/pieces/HairPiece'
import { actions } from '@/redux/actions'
import { selectors } from '@/redux/selectors'

import { ColorControl } from '../ColorControl'
import { ControlPanel, NavigateBackToProps } from '../ControlPanel'
import { ControlPanelDivider } from '../ControlPanelDivider'
import { SelectControl } from '../SelectControl'

export const HairControls = (props: NavigateBackToProps) => (
  <ControlPanel title="Hair" resetActionProvider={() => actions.pieces.reset('hair')} {...props}>
    <SelectControl
      title="Variant"
      selector={selectors.pieces.hair.variant.select}
      actionCreator={actions.pieces.hair.changeVariant}
      availableValues={hairVariants}
    />

    <ControlPanelDivider />

    <ColorControl
      title="Color"
      selector={selectors.pieces.hair.color.select}
      notNoneSelector={selectors.pieces.hair.color.notNone.select}
      actionCreator={actions.pieces.hair.changeColor}
      presetColors={hairPresetColors}
    />
  </ControlPanel>
)

const hairPresetColors = [
  '#161515',
  '#4E260F',
  '#7D3E10',
  '#C16523',
  '#C04703',
  '#FFC453',
  '#FFE2B7',
  '#C4C4C4',
  '#ECECEC',
] as const
