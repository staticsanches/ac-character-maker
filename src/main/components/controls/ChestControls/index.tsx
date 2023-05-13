import { actions } from '@/redux/actions'
import { selectors } from '@/redux/selectors'
import { ColorControl } from '../ColorControl'
import { ControlPanel, NavigateBackToProps } from '../ControlPanel'

export const ChestControls = (props: NavigateBackToProps) => (
  <ControlPanel title="Chest" resetActionProvider={() => actions.pieces.reset('chest')} {...props}>
    <ColorControl
      title="Color"
      selector={selectors.pieces.chest.color.select}
      notNoneSelector={selectors.pieces.chest.color.notNone.select}
      actionCreator={actions.pieces.chest.changeColor}
      disableAlpha
    />
  </ControlPanel>
)
