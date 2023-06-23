import { actions } from '@/redux/actions'
import { selectors } from '@/redux/selectors'

import { ColorControl } from '../ColorControl'
import { ControlPanel, NavigateBackToProps } from '../ControlPanel'

export const PantsControls = (props: NavigateBackToProps) => (
  <ControlPanel title="Pants" resetActionProvider={() => actions.pieces.reset('pants')} {...props}>
    <ColorControl
      title="Color"
      selector={selectors.pieces.pants.color.select}
      notNoneSelector={selectors.pieces.pants.color.notNone.select}
      actionCreator={actions.pieces.pants.changeColor}
      presetColors={pantsPresetColors}
    />
  </ControlPanel>
)

const pantsPresetColors = [
  '#212121',
  '#FFC453',
  '#A51C45',
  '#FFABDD',
  '#67A3FD',
  '#ACEACE',
  '#8240B6',
  '#FFA63E',
  '#149547',
  '#14119B',
  '#F22929',
] as const
