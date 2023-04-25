import { AvatarPiece } from '@/components/AvatarPiece'
import { DownloadableSvg } from '@/components/DownloadableSvg'
import { Head } from '@/pieces/Head'
import { Container, Grid, Typography } from '@mui/material'

export const MakerPage = () => {
  return (
    <Container maxWidth="lg" sx={{ width: '100%', height: '100%' }}>
      <Grid container spacing={0} sx={{ width: '100%', height: '100%' }}>
        <Grid item xs={12} sm={6} sx={{ height: { xs: '50%', sm: '100%' } }}>
          <DownloadableSvg
            filename="head"
            svgBuilder={(ref) => <AvatarPiece ref={ref} pieceType="head" pieceComponent={Head} omitXY />}
          />
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
