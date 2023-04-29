import { Container, Grid, Typography } from '@mui/material'

import { Avatar } from '@/components/Avatar'
import { DownloadableSvg } from '@/components/DownloadableSvg'

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
          alignContent="center"
          justifyContent="center"
        >
          <Grid item>
            <Typography variant="h4" textAlign="center">
              Controls (TODO)
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
