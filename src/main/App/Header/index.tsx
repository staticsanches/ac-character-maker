import { Menu as MenuIcon } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from '@mui/material'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import leaf from './leaf.svg'

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => setDrawerOpen((prevState) => !prevState)

  return (
    <Box component="header">
      <AppBar component="nav" enableColorOnDark>
        <Toolbar
          sx={{ display: 'flex', justifyContent: { xs: 'space-between', sm: 'flex-start' }, alignItems: 'center' }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <div>
            <img width={32} src={leaf} alt="leaf" />
          </div>
          <div>
            <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: 2 }}>
              <Button component={Link} to="/" color="secondary" size="large">
                Maker
              </Button>
              <Button component={Link} to="/about" color="secondary">
                About
              </Button>
            </Box>
          </div>
        </Toolbar>
      </AppBar>

      <Box component="nav" className="NavBox">
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <div>
              <img width={48} src={leaf} alt="leaf" />
            </div>
            <Divider />
            <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} sx={{ textAlign: 'center' }} to="/">
                  <ListItemText primary={'Maker'} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} sx={{ textAlign: 'center' }} to="/about">
                  <ListItemText primary={'About'} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  )
}
