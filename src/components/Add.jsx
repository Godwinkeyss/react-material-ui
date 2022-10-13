import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import {Add as AddIcon} from "@mui/icons-material"
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useState } from 'react'


const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})
const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
    
})

const Add = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
    <Tooltip onClick={e=>setOpen(true)} title="Delete" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30}}}>
    <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
  </Tooltip>
  <StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={320} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
   <Typography variant='h6'color="gray" textAlign="center">
    Craete Post
   </Typography>
   <UserBox>
    <Avatar src="https://material-ui.com/static/images/avatar/3.jpg"sx={{width:30, height:30}} />
    <Typography fontWeight={500} variant="span">John Doe</Typography>
   </UserBox>
   <TextField
          id="standard-multiline-static"
         sx={{width:"100%"}}
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
            <InsertEmoticonIcon color="primary" />
            <CameraAltIcon color="secondary" />
            < VideocamIcon color="success"/>
            < PersonAddIcon color='error'/>
        </Stack>
        <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth >
  <Button>Post</Button>
  <Button sx={{width:"100px"}}><CalendarMonthIcon /></Button>
  
</ButtonGroup>
  </Box>
</StyledModal>
</>
  )
}

export default Add