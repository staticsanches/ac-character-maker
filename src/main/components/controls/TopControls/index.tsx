import { TopPieceIcon, TopVariant, topVariants } from '@/components/pieces/top/TopPiece'
import { RootStateProvider, useRootSelector } from '@/hooks/useRootSelector'
import { actions } from '@/redux/actions'
import { selectors } from '@/redux/selectors'
import { Grid } from '@mui/material'

import { ColorControl } from '../ColorControl'
import { ControlPanel, NavigateBackToProps } from '../ControlPanel'
import { ControlPanelDivider } from '../ControlPanelDivider'
import { SelectControl } from '../SelectControl'

import type { RootState } from '@/redux'
export const TopControls = (props: NavigateBackToProps) => {
  const variant = useRootSelector(selectors.pieces.top.variant.select)
  return (
    <ControlPanel title="Top" resetActionProvider={() => actions.pieces.reset('top')} {...props}>
      <SelectControl
        title="Variant"
        selector={selectors.pieces.top.variant.select}
        actionCreator={actions.pieces.top.changeVariant}
        availableValues={topVariants}
      />

      {showColorControl(variant) && (
        <>
          <ControlPanelDivider />

          <ColorControl
            title="Color"
            selector={selectors.pieces.top.color.select}
            notNoneSelector={selectors.pieces.top.color.notNone.select}
            actionCreator={actions.pieces.top.changeColor}
            presetColors={topPresetColors}
          />
        </>
      )}

      <ControlPanelDivider />

      <Grid container spacing={2} alignItems="center">
        {states.map((state, index) => (
          <TopGridElement key={index} state={state} />
        ))}
      </Grid>
    </ControlPanel>
  )
}
const showColorControl = (variant: TopVariant): boolean => variant === 'tee--single-color'

const topPresetColors = [
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

const TopGridElement = ({ state }: { state: DeepPartial<RootState> }) => {
  const baseState = useRootSelector((state) => state)
  return (
    <Grid container item xs={4}>
      <RootStateProvider base={baseState} override={state}>
        <TopPieceIcon sx={{ width: '100%', height: '100%' }} />
      </RootStateProvider>
    </Grid>
  )
}

const createState = (variant: TopVariant): DeepPartial<RootState> => {
  return {
    pieces: {
      top: {
        variant,
      },
    },
  }
}

const states = topVariants.map(createState)