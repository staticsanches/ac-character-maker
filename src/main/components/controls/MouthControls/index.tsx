import { MouthVariant, mouthVariants } from '@/components/pieces/MouthPiece'
import { useRootSelector } from '@/hooks/useRootSelector'
import { actions } from '@/redux/actions'
import { selectors } from '@/redux/selectors'

import { ColorControl } from '../ColorControl'
import { ControlPanel, NavigateBackToProps } from '../ControlPanel'
import { ControlPanelDivider } from '../ControlPanelDivider'
import { SelectControl } from '../SelectControl'

export const MouthControls = (props: NavigateBackToProps) => {
  const variant = useRootSelector(selectors.pieces.mouth.variant.select)

  return (
    <ControlPanel title="Mouth" resetActionProvider={() => actions.pieces.reset('mouth')} {...props}>
      <SelectControl
        title="Variant"
        selector={selectors.pieces.mouth.variant.select}
        actionCreator={actions.pieces.mouth.changeVariant}
        availableValues={mouthVariants}
      />

      <ControlPanelDivider />

      <ColorControl
        title="Color"
        selector={selectors.pieces.mouth.color.select}
        notNoneSelector={selectors.pieces.mouth.color.notNone.select}
        actionCreator={actions.pieces.mouth.changeColor}
        presetColors={mouthPresetColors}
      />

      {showAccentColorControl(variant) && (
        <>
          <ControlPanelDivider />

          <ColorControl
            title="Accent Color"
            selector={selectors.pieces.mouth.accentColor.select}
            notNoneSelector={selectors.pieces.mouth.accentColor.notNone.select}
            actionCreator={actions.pieces.mouth.changeAccentColor}
            presetColors={['#FFFFFF']}
          />
        </>
      )}
    </ControlPanel>
  )
}

const showAccentColorControl = (variant: MouthVariant) =>
  variant === 'bunny-smile' || variant === 'drool' || variant === 'laugh'

const mouthPresetColors = ['#8C501D', '#000000', '#FFBAA5', '#FF7E36', '#841616'] as const
