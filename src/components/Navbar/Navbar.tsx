import React, { useEffect, useState } from 'react';
import { Container, RightElements } from './Navbar.styles';
import BlackLogo from 'src/assets/svg/BlackLogo';
import MenuButton from 'src/assets/svg/MenuButton';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import BlueLogo from 'src/assets/svg/BlueLogo';
import CloseIcon from 'src/assets/svg/CloseIcon';
import { primaryColor } from 'src/const';
import { useNavigate } from 'react-router';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Navbar({
  topTransparent = false,
}: {
  topTransparent?: boolean;
}) {
  const [scroll, setScroll] = useState(0);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  }, []);

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <BlueLogo />
        <button
          style={{ border: 'none', background: 'none', cursor: 'pointer' }}
        >
          <CloseIcon />
        </button>
      </Box>
      <List
        sx={{
          marginTop: '50px',
          '& *': { fontWeight: 'bolder', fontSize: '1.3rem' },
          '& li': {
            marginBottom: '15px',

            '&:hover': { background: primaryColor, color: 'white' },
          },
        }}
      >
        <ListItem key={'HomeBtn'} disablePadding>
          <ListItemButton onClick={() => navigate('/')}>
            <ListItemText primary={'Home'} />
          </ListItemButton>
        </ListItem>

        <ListItem key={'HomeBtn'} disablePadding>
          <ListItemButton onClick={() => navigate('/user')}>
            <ListItemText primary={'Profile'} />
          </ListItemButton>
        </ListItem>

        <ListItem key={'SignUpBtn'} disablePadding>
          <ListItemButton onClick={() => navigate('/signup')}>
            <ListItemText primary={'Sign up'} />
          </ListItemButton>
        </ListItem>

        <ListItem key={'LoginBtn'} disablePadding>
          <ListItemButton onClick={() => navigate('/login')}>
            <ListItemText primary={'Log in'} />
          </ListItemButton>
        </ListItem>

        <ListItem key={'BuyBtn'} disablePadding>
          <ListItemButton onClick={() => navigate('/browse')}>
            <ListItemText primary={'Buy a bike'} />
          </ListItemButton>
        </ListItem>

        <ListItem key={'RentBtn'} disablePadding sx={{}}>
          <ListItemButton onClick={() => navigate('/')}>
            <ListItemText primary={'Rent a bike'} />
          </ListItemButton>
        </ListItem>

        <ListItem key={'SellBtn'} disablePadding>
          <ListItemButton onClick={() => navigate('/')}>
            <ListItemText primary={'Sell a bike'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <Container scroll={topTransparent ? scroll : 41}>
      <BlackLogo />
      <RightElements>
        <button onClick={toggleDrawer('right', true)}>
          <MenuButton />
        </button>
      </RightElements>
      {(['right'] as const).map((anchor, index) => (
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          key={index}
        >
          {list(anchor)}
        </Drawer>
      ))}
    </Container>
  );
}
