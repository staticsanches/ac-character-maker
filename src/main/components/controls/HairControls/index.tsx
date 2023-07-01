import { AvatarIcon } from '@/components/Avatar'
import { hairVariants, type HairVariant } from '@/components/pieces/HairPiece'
import { RootStateProvider, useRootSelector } from '@/hooks/useRootSelector'
import type { RootState } from '@/redux'
import { actions } from '@/redux/actions'
import { selectors } from '@/redux/selectors'
import { Grid } from '@mui/material'
import { ColorControl } from '../ColorControl'
import { ControlPanel, type NavigateBackToProps } from '../ControlPanel'
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

    <ControlPanelDivider />

    <Grid container spacing={2} alignItems="center">
      {states.map((state, index) => (
        <AvatarGridElement key={index} state={state} />
      ))}
    </Grid>
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

const AvatarGridElement = ({ state }: { state: DeepPartial<RootState> }) => {
  const baseState = useRootSelector((state) => state)
  return (
    <Grid container item xs={4}>
      <RootStateProvider base={baseState} override={state}>
        <AvatarIcon sx={{ width: '100%', height: '100%' }} />
      </RootStateProvider>
    </Grid>
  )
}

const createState = (variant: HairVariant): DeepPartial<RootState> => {
  return {
    pieces: {
      hair: {
        variant,
      },
    },
  }
}

const states = hairVariants.map(createState)
