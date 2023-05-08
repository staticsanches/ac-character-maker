import { Container, Grid, Typography } from '@mui/material'

import { Avatar } from '@/components/Avatar'
import { BooleanControlsWithPerspective } from '@/components/controls/BooleanControlsWithPerspective'
import { ColorControl } from '@/components/controls/ColorControl'
import { DownloadableSvg } from '@/components/DownloadableSvg'
import { actions } from '@/redux/actions'
import { selectors } from '@/redux/selectors'

export const MakerPage = () => {
  return (
    <Container maxWidth="lg" sx={{ width: '100%', height: '100%' }}>
      <Grid container spacing={0} sx={{ width: '100%', height: '100%' }}>
        <Grid item xs={12} sm={6} sx={{ height: { xs: '50%', sm: '100%' } }}>
          <DownloadableSvg filename="avatar" svgBuilder={(ref) => <Avatar ref={ref} />} />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          sx={{ height: { xs: '50%', sm: '100%' } }}
          alignContent="start"
          justifyContent="center"
          overflow="auto"
        >
          <Grid item width="100%" p={2}>
            <Typography variant="h4" textAlign="center" p={3}>
              Controls
            </Typography>

            <BooleanControlsWithPerspective
              title="Soft"
              mainSelector={selectors.pieces.blush.soft.select}
              mainActionCreator={actions.pieces.blush.changeSoft}
              prSelector={selectors.pieces.blush.pr.soft.select}
              plSelector={selectors.pieces.blush.pl.soft.select}
              sidedActionCreator={actions.pieces.blush.changeSidedSoft}
            />

            <BooleanControlsWithPerspective
              title="Bottom Lashes"
              mainSelector={selectors.pieces.eyes.bottomLashes.select}
              mainActionCreator={actions.pieces.eyes.changeBottomLashes}
              prSelector={selectors.pieces.eyes.pr.bottomLashes.select}
              plSelector={selectors.pieces.eyes.pl.bottomLashes.select}
              sidedActionCreator={actions.pieces.eyes.changeSidedBottomLashes}
            />

            <BooleanControlsWithPerspective
              title="Top Lashes"
              mainSelector={selectors.pieces.eyes.topLashes.select}
              mainActionCreator={actions.pieces.eyes.changeTopLashes}
              prSelector={selectors.pieces.eyes.pr.topLashes.select}
              plSelector={selectors.pieces.eyes.pl.topLashes.select}
              sidedActionCreator={actions.pieces.eyes.changeSidedTopLashes}
            />

            <ColorControl
              title="Skin"
              selector={selectors.avatar.skinColor.select}
              actionCreator={actions.avatar.changeSkinColor}
              notNoneSelector={selectors.avatar.skinColor.notNone.select}
              presetColors={skinPresetColors}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

const skinPresetColors = [
  '#57280D',
  '#84401A',
  '#BA6332',
  '#D0784E',
  '#DB8C5D',
  '#F0A06F',
  '#FBB985',
  '#FFC892',
  '#FFD0B2',
  '#FFDCBC',
  '#FFE6CF',
] as const
