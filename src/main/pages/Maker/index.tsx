import { Container, Grid } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

import { Avatar } from '@/components/Avatar'
import { AvatarControls } from '@/components/controls/AvatarControls'
import { BlushControls } from '@/components/controls/BlushControls'
import { BodyControls } from '@/components/controls/BodyControls'
import { ChestControls } from '@/components/controls/ChestControls'
import { EarsControls } from '@/components/controls/EarsControls'
import { GlobalControls } from '@/components/controls/GlobalControls'
import { MouthControls } from '@/components/controls/MouthControls'
import { NoseControls } from '@/components/controls/NoseControls'
import { PantsControls } from '@/components/controls/PantsControls'
import { DownloadableSvg } from '@/components/DownloadableSvg'

export const MakerPage = () => {
  return (
    <Container maxWidth="lg" sx={{ width: '100%', height: '100%' }}>
      <Grid container spacing={0} sx={{ width: '100%', height: '100%' }}>
        <Grid item xs={12} sm={6} sx={{ height: { xs: '50%', sm: '100%' } }}>
          <DownloadableSvg filename="avatar" svgBuilder={(ref) => <Avatar ref={ref} />} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ height: { xs: '50%', sm: '100%' } }}
          alignContent="start"
          justifyContent="center"
          overflow="auto"
        >
          <Routes>
            <Route path="*" element={<GlobalControls />} />
            <Route path="/controls/avatar" element={<AvatarControls navigateBackTo="/" />} />
            <Route path="/controls/blush" element={<BlushControls navigateBackTo="/" />} />
            <Route path="/controls/body" element={<BodyControls navigateBackTo="/" />} />
            <Route path="/controls/chest" element={<ChestControls navigateBackTo="/" />} />
            <Route path="/controls/ears" element={<EarsControls navigateBackTo="/" />} />
            <Route path="/controls/mouth" element={<MouthControls navigateBackTo="/" />} />
            <Route path="/controls/nose" element={<NoseControls navigateBackTo="/" />} />
            <Route path="/controls/pants" element={<PantsControls navigateBackTo="/" />} />
          </Routes>
        </Grid>
      </Grid>
    </Container>
  )
}
