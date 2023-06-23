import { actions } from '@/redux/actions'
import { selectors } from '@/redux/selectors'

import { skinPresetColors } from '../AvatarControls'
import { ColorControl } from '../ColorControl'
import { ControlPanel, NavigateBackToProps } from '../ControlPanel'

export const HeadControls = (props: NavigateBackToProps) => (
  <ControlPanel title="Head" resetActionProvider={() => actions.pieces.reset('head')} {...props}>
    <ColorControl
      title="Color"
      inherit
      selector={selectors.pieces.head.color.select}
      resolvedSelector={selectors.pieces.head.color.selectResolved}
      notNoneSelector={selectors.pieces.head.color.notNone.selectResolved}
      actionCreator={actions.pieces.head.changeColor}
      presetColors={skinPresetColors}
    />
  </ControlPanel>
)
