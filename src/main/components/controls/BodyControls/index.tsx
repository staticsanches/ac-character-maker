import { actions } from '@/redux/actions'
import { selectors } from '@/redux/selectors'

import { skinPresetColors } from '../AvatarControls'
import { ColorControl } from '../ColorControl'
import { ControlPanel, NavigateBackToProps } from '../ControlPanel'

export const BodyControls = (props: NavigateBackToProps) => (
  <ControlPanel title="Body" resetActionProvider={() => actions.pieces.reset('body')} {...props}>
    <ColorControl
      title="Color"
      inherit
      selector={selectors.pieces.body.color.select}
      resolvedSelector={selectors.pieces.body.color.selectResolved}
      notNoneSelector={selectors.pieces.body.color.notNone.selectResolved}
      actionCreator={actions.pieces.body.changeColor}
      presetColors={skinPresetColors}
    />
  </ControlPanel>
)
