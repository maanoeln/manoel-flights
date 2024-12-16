import {
  AppBar as AppBarMui,
  Avatar,
  Box,
  IconButton,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Apps, LightModeTwoTone, Menu } from '@mui/icons-material';
import { APPBAR_ITEMS } from './items';
import Chip from '../Chip';

interface IAppBar {
  handleOpen(): void;
}

function AppBar({ handleOpen }: IAppBar) {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const justify = isDesktop ? 'unset' : 'space-between';
  return (
    <Box alignItems='center' display='flex'>
      <AppBarMui
        position='fixed'
        sx={{
          zIndex: 999999,
          bgcolor: '#202124',
          borderBottom: '1px solid #5F6369',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <>
            <Box
              display='flex'
              alignItems='center'
              paddingRight='30px'
              justifyContent={justify}
            >
              <IconButton color='primary' onClick={() => handleOpen()}>
                <Menu />
              </IconButton>

              <Typography variant='h6' component='div' color='primary'>
                Google
              </Typography>
            </Box>

            {isDesktop && (
              <Box
                display='flex'
                flexGrow={1}
                justifyContent='space-between'
                alignItems='center'
              >
                <div style={{ display: 'flex', gap: '8px' }}>
                  {APPBAR_ITEMS({ color: 'secondary', fontSize: 'medium' }).map(
                    ({ label, icon }) => (
                      <Chip label={label} icon={icon} key={label} />
                    )
                  )}
                </div>
              </Box>
            )}
          </>

          <Box display='flex' gap='12px' alignItems='center'>
            <IconButton color='primary' sx={{ p: 0 }}>
              <LightModeTwoTone />
            </IconButton>

            <IconButton color='primary' sx={{ p: 0 }}>
              <Apps fontSize='medium' color='primary' sx={{ mr: '2px' }} />
            </IconButton>

            <Avatar sx={{ width: 32, height: 32 }}>MN</Avatar>
          </Box>
        </Toolbar>
      </AppBarMui>
    </Box>
  );
}

export default AppBar;
