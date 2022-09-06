import React, {useState} from 'react';
import {
  AppBar,
  Box,
  Button,
  Fab,
  Fade,
  IconButton,
  Link,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import {
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';

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

function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{
          bottom: 16,
          position: 'fixed',
          right: 16,
      }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const Header = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <div  id='back-to-top-anchor' />
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
      <ScrollTop {...props}>
        <Fab
          size='large'
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export {Header};