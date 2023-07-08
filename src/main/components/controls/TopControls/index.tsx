import { TopPieceIcon, topVariants, type TopVariant } from '@/components/pieces/top/TopPiece'
import { RootStateProvider, useRootSelector } from '@/hooks/useRootSelector'
import type { RootState } from '@/redux'
import { actions } from '@/redux/actions'
import { selectors } from '@/redux/selectors'
import { Grid, IconButton } from '@mui/material'
import { useDispatch } from 'react-redux'
import { ColorControl } from '../ColorControl'
import { ControlPanel, type NavigateBackToProps } from '../ControlPanel'
import { ControlPanelDivider } from '../ControlPanelDivider'
import { SelectControl } from '../SelectControl'

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
        {topVariants.map((variant, index) => (
          <TopGridElement key={index} variant={variant} />
        ))}
      </Grid>
    </ControlPanel>
  )
}
const showColorControl = (variant: TopVariant): boolean =>
  variant === 'tee--single-color' || variant === 'crop-top--single-color'

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

const TopGridElement = ({ variant }: { variant: TopVariant }) => {
  const dispatch = useDispatch()
  const color = useRootSelector(selectors.pieces.top.color.notNone.select)

  const override: DeepPartial<RootState> = {
    pieces: {
      top: {
        variant,
        color,
      },
    },
  }

  const handleClick = () => dispatch(actions.pieces.top.changeVariant(variant))
  const handleMouseEnter = () => dispatch(actions.pieces.top.changeVariantPreview(variant))
  const handleMouseLeave = () => dispatch(actions.pieces.top.changeVariantPreview(undefined))

  return (
    <Grid container item xs={4}>
      <RootStateProvider override={override}>
        <IconButton sx={{ width: '100%', height: '100%' }} onClick={handleClick}>
          <TopPieceIcon
            sx={{ width: '100%', height: '100%' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </IconButton>
      </RootStateProvider>
    </Grid>
  )
}
