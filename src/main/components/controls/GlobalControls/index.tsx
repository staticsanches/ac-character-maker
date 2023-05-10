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
  </ControlPanel>
)
