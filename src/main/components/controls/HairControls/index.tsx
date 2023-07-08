import { HairPieceIcon, hairVariants, type HairVariant } from '@/components/pieces/HairPiece'
import { RootStateProvider } from '@/hooks/useRootSelector'
import type { RootState } from '@/redux'
import { actions } from '@/redux/actions'
import { selectors } from '@/redux/selectors'
import { Grid, IconButton } from '@mui/material'
import { useDispatch } from 'react-redux'
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
      {hairVariants.map((variant, index) => (
        <HairGridElement key={index} variant={variant} />
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

const HairGridElement = ({ variant }: { variant: HairVariant }) => {
  const dispatch = useDispatch()

  const override: DeepPartial<RootState> = {
    pieces: {
      hair: {
        variant,
        color: '#ffffff',
      },
    },
  }

  const handleClick = () => dispatch(actions.pieces.hair.changeVariant(variant))
  const handleMouseEnter = () => dispatch(actions.pieces.hair.changeVariantPreview(variant))
  const handleMouseLeave = () => dispatch(actions.pieces.hair.changeVariantPreview(undefined))

  return (
    <Grid container item xs={4}>
      <RootStateProvider override={override}>
        <IconButton sx={{ width: '100%', height: '100%' }} onClick={handleClick}>
          <HairPieceIcon
            sx={{ width: '100%', height: '100%' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </IconButton>
      </RootStateProvider>
    </Grid>
  )
}
