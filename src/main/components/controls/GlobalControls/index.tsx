import { actions } from '@/redux/actions'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { ControlPanel } from '../ControlPanel'

export const GlobalControls = () => (
  <ControlPanel title="Controls" resetActionProvider={() => actions.resetAll()}>
    <Button component={Link} to="/controls/avatar" color="secondary">
      Avatar
    </Button>
    <Button component={Link} to="/controls/blush" color="secondary">
      Blush
    </Button>
    <Button component={Link} to="/controls/hair" color="secondary">
      Hair
    </Button>
    <Button component={Link} to="/controls/mouth" color="secondary">
      Mouth
    </Button>
    <Button component={Link} to="/controls/nose" color="secondary">
      Nose
    </Button>
    <Button component={Link} to="/controls/pants" color="secondary">
      Pants
    </Button>
    <Button component={Link} to="/controls/top" color="secondary">
      Top
    </Button>
  </ControlPanel>
)
