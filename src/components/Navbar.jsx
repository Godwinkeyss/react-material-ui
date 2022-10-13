import { AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem, Switch} from '@mui/material'
import React, { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:"space-between"
})

const Search = styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%"
}));
const Icons = styled(Box)(({theme})=>({
    display:"none", gap:"20px",alignItems:"center", color:"white",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }

}));
const UserBox = styled(Box)(({theme})=>({
    display:"flex", gap:"10px",alignItems:"center", color:"white",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
  
}));

const Navbar = ({mode,setMode}) => {
    const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>GIDITEX</Typography>
        <PetsIcon sx={{display:{xs:"block", sm:"none"}}}/>
        <Search><InputBase placeholder='search'></InputBase></Search>
        <Icons>
            <Badge badgeContent={4} color="error">
                <Mail color="white" />
            </Badge>
            <Badge badgeContent={4} color="error">
                <Notifications color="white" />
            </Badge>
            <Avatar onClick={e=>setOpen(true)} sx={{width:30, height:30}} src="https://img.freepik.com/free-photo/waist-up-portrait-asian-man-discomfort-distressed-annoyed-looking-up-angry-neighbours-from-upstairs-turn-loud-awful-music_176420-42185.jpg?w=1060&t=st=1665579995~exp=1665580595~hmac=9d4441348adf64a316847b57a159af43581033b5a96a7ce43441036e80cd8bbe"/>
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
        <Avatar sx={{width:30, height:30}} src="https://img.freepik.com/free-photo/waist-up-portrait-asian-man-discomfort-distressed-annoyed-looking-up-angry-neighbours-from-upstairs-turn-loud-awful-music_176420-42185.jpg?w=1060&t=st=1665579995~exp=1665580595~hmac=9d4441348adf64a316847b57a159af43581033b5a96a7ce43441036e80cd8bbe"/>
        <Typography variant='span'>Godwin</Typography>
        
        </UserBox>
        </StyledToolbar>
      
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
    
        open={open}
        onClose={e=>setOpen(false)}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
        <MenuItem><Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/></MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar