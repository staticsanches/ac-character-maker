import { Container, Grid, Typography } from '@mui/material'

import { Avatar } from '@/components/Avatar'
import { BooleanControlWithPerspective } from '@/components/controls/BooleanControlWithPerspective'
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

            <BooleanControlWithPerspective
              title="Soft"
              mainSelector={selectors.pieces.blush.soft.select}
              mainActionCreator={actions.pieces.blush.changeSoft}
              prSelector={selectors.pieces.blush.pr.soft.select}
              plSelector={selectors.pieces.blush.pl.soft.select}
              sidedActionCreator={actions.pieces.blush.changeSidedSoft}
            />

            <BooleanControlWithPerspective
              title="Bottom Lashes"
              mainSelector={selectors.pieces.eyes.bottomLashes.select}
              mainActionCreator={actions.pieces.eyes.changeBottomLashes}
              prSelector={selectors.pieces.eyes.pr.bottomLashes.select}
              plSelector={selectors.pieces.eyes.pl.bottomLashes.select}
              sidedActionCreator={actions.pieces.eyes.changeSidedBottomLashes}
            />

            <BooleanControlWithPerspective
              title="Top Lashes"
              mainSelector={selectors.pieces.eyes.topLashes.select}
              mainActionCreator={actions.pieces.eyes.changeTopLashes}
              prSelector={selectors.pieces.eyes.pr.topLashes.select}
              plSelector={selectors.pieces.eyes.pl.topLashes.select}
              sidedActionCreator={actions.pieces.eyes.changeSidedTopLashes}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
