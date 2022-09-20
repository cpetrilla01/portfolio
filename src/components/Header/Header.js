import React, {useState} from 'react';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Fab,
  Fade,
  IconButton,
  Link,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import {
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
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
          zIndex: 1,
      }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const Header = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
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
        <Drawer
          ModalProps={{keepMounted: true}}
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{sx: {width: '80%'}}}
          sx={{display: {xs: 'block', sm: 'none'}}}
          variant='temporary'
        >
          <Toolbar>
            <IconButton
              aria-label='Close drawer'
              color='inherit'
              edge='start'
              onClick={handleDrawerToggle}
              size='large'
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          {navigationItemsData.map((navigationItem) => (
            <Link
              href={navigationItem.id}
              key={navigationItem.label}
              onClick={() => setDrawerOpen(false)}
              p={2}
              textAlign='center'
              underline='none'
              variant='h3'
            >
              {navigationItem.label}
            </Link>
          ))}
        </Drawer>
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