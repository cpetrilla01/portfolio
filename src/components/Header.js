import React, {useState} from 'react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@mui/material';
import {Menu as MenuIcon} from '@mui/icons-material';

const navigationItemsData = [
  {
    id: '#skills',
    label: 'Skills',
 },
  {
    id: '#about',
    label: 'About',
 },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        component='nav'
        position='sticky'
      >
        <Toolbar>
          <Box
            sx={{display: {sm: 'none'}}}>
            <IconButton
              aria-label='Open drawer'
              color='inherit'
              edge='start'
              onClick={handleDrawerToggle}
              size='large'
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            color='inherit'
            component='h1'
            sx={{flexGrow: 1, textTransform: 'uppercase'}}
            variant='h6'
          >
            <Link
              color='inherit'
              href='/'
              underline='none'
            >
              Christopher Petrilla
            </Link>
          </Typography>
          <Box
            sx={{display: {xs: 'none', sm: 'block'}}}
          >
            {navigationItemsData.map((navigationItem) => (
              <Button
                color='inherit'
                href={navigationItem.id}
                key={navigationItem.id}
                size='large'
              >
                {navigationItem.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
      >
        <SwipeableDrawer
          ModalProps={{keepMounted: true}}
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          onOpen={() => setMobileOpen(true)}
          PaperProps={{sx: {py: 4, width: '80%'}}}
          sx={{display: {xs: 'block', sm: 'none'}}}
          variant='temporary'
        >
          {navigationItemsData.map((navigationItem) => (
            <Link
              href={navigationItem.id}
              key={navigationItem.label}
              onClick={() => setMobileOpen(false)}
              p={2}
              textAlign='center'
              underline='none'
              variant='h3'
            >
              {navigationItem.label}
            </Link>
          ))}
        </SwipeableDrawer>
      </Box>
    </>
  );
}

export {Header};