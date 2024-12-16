import {
  Box,
  Divider,
  Drawer as DrawerMui,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { APPBAR_ITEMS } from '../AppBar/items';
import { DRAWER_MENU_ITEMS, DRAWER_SETTINGS_ITEMS } from './items';

interface IDrawer {
  open: boolean;
  handleClose(): void;
}

function Drawer({ open, handleClose }: IDrawer) {
  return (
    <DrawerMui
      open={open}
      onClose={() => handleClose()}
      PaperProps={{ sx: { width: '256px' } }}
    >
      <List
        sx={{
          mt: '64px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <Box display='flex' flexDirection='column' flex='1'>
          {APPBAR_ITEMS({ color: 'primary', fontSize: 'small' }).map(
            ({ label, icon }) => (
              <ListItem key={label} disablePadding>
                <ListItemButton color='primary' sx={{ p: '4px 12px' }}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography fontSize='14px' color='primary'>
                        {label}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            )
          )}

          <Divider sx={{ m: '4px 0' }} />

          {DRAWER_MENU_ITEMS.map(({ label, icon }) => (
            <ListItem key={label} disablePadding>
              <ListItemButton color='primary' sx={{ p: '4px 12px' }}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography fontSize='14px' color='primary'>
                      {label}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </Box>

        <Divider sx={{ m: '4px 0' }} />

        {DRAWER_SETTINGS_ITEMS.map(({ label, icon }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton color='primary' sx={{ p: '4px 12px' }}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography fontSize='14px' color='primary'>
                    {label}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </DrawerMui>
  );
}

export default Drawer;
