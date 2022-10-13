import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';
const Leftbar = ({mode, setMode}) => {
  return (
    <Box  flex={1} p={2} sx={{display:{xs:"none", sm:"none", md:"block"}}}>
      <Box position="fixed">
         <List>
          <ListItem disablePadding>
            <ListItemButton component="a"href="#home" >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" sx={{display:{xs:"none", sm:"none", md:"block"}}}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"href="#home">
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" sx={{display:{xs:"none", sm:"none", md:"block"}}}/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"href="#home">
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" sx={{display:{xs:"none", sm:"none", md:"block"}}} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"href="#home">
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText primary="Marketplace" sx={{display:{xs:"none", sm:"none", md:"block"}}} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"href="#home">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" sx={{display:{xs:"none", sm:"none", md:"block"}}} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"href="#home">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" sx={{display:{xs:"none", sm:"none", md:"block"}}} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a"href="#home">
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" sx={{display:{xs:"none", sm:"none", md:"block"}}} />
            </ListItemButton>
          </ListItem>
        
          <ListItem disablePadding>
            <ListItemButton component="a"href="#home">
              <ListItemIcon sx={{display:{xs:"none", sm:"none", md:"block"}}}>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")} sx={{display:{xs:"none", sm:"none", md:"block"}}}/>
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
    </Box>
  )
}

export default Leftbar