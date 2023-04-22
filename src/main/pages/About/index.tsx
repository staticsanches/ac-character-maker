import { Container, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export const AboutPage = () => (
  <Container maxWidth="lg" sx={{ mt: 4 }}>
    <Typography variant="h3" component="h1">
      Attributions
    </Typography>

    <ul>
      <li>
        <Typography mt={4}>
          The{' '}
          <Link
            component={RouterLink}
            to="https://www.figma.com/community/file/834210307944210537/Animal-Crossing-Character-Maker"
          >
            Animal Crossing Character Maker (Figma)
          </Link>{' '}
          used in this project was designed by{' '}
          <Link component={RouterLink} to="https://www.figma.com/@ace">
            @ace
          </Link>{' '}
          and is licensed under{' '}
          <Link component={RouterLink} to="https://creativecommons.org/licenses/by/4.0/">
            CC BY 4.0
          </Link>
          .
        </Typography>
      </li>

      <li>
        <Typography mt={2}>
          The{' '}
          <Link
            component={RouterLink}
            to="https://www.figma.com/community/file/882693668626621042/Animal-Crossing-icons"
          >
            Animal Crossing icons (Figma)
          </Link>{' '}
          used in this project was designed by{' '}
          <Link component={RouterLink} to="https://www.figma.com/@ashleykseo">
            @ashleykseo
          </Link>{' '}
          and is licensed under{' '}
          <Link component={RouterLink} to="https://creativecommons.org/licenses/by/4.0/">
            CC BY 4.0
          </Link>
          .
        </Typography>
      </li>
    </ul>
  </Container>
)
