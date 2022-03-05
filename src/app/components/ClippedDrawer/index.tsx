import * as React from 'react';
import { useAuth } from '../../libs';
import { useNavigate } from 'react-router-dom';
import { Box, Drawer, Toolbar, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Person from '@mui/icons-material/Person';
import Analytics from '@mui/icons-material/Analytics';

const drawerWidth = 240;

function ClippedDrawer() {
  // custom hooks
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // state
  // effect
  // handler

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {currentUser ? (
            <>
              <ListItem button onClick={() => navigate('/characters')}>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Characters" />
              </ListItem>
              <ListItem button onClick={() => navigate('/realms')}>
                <ListItemIcon>
                  <Analytics />
                </ListItemIcon>
                <ListItemText primary="Realms" />
              </ListItem>
            </>
          ) : (
            <Typography variant="h6" textAlign="center">
              Please Login
            </Typography>
          )}
        </List>
      </Box>
    </Drawer>
  );
}

export { ClippedDrawer };
