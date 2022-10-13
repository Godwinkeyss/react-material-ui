import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';




const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'none', md:"block"} }}>
      <Box position="fixed" width={300} mt={2}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Elon Musk" src="https://img.freepik.com/free-photo/positive-overjoyed-dark-skinned-man-points-with-both-index-fingers-hints-something-wears-casual-green-jumper-smiles-broadly_273609-23582.jpg?w=1060&t=st=1665660221~exp=1665660821~hmac=a2cf71e7eecad009adc8c699eba5520c37aee7142e00ef4773f5ce8fd000745d" />
          <Avatar alt="Travis Howard" src="https://img.freepik.com/free-photo/portrait-beautiful-young-women-with-different-shapes-posing-white_155003-15980.jpg?w=1060&t=st=1665660845~exp=1665661445~hmac=1182555e1e060fcd769a692afd0feac5d7bc723509b44234ebcf5fe9ae3dd44c" />
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/8.jpg" />
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/6.jpg" />
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/7.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList col={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://img.freepik.com/free-photo/delicious-cheeseburger_1232-503.jpg?size=626&ext=jpg&ga=GA1.2.666280497.1658152572" alt=""/>
          </ImageListItem>
          <ImageListItem>
            <img src="https://img.freepik.com/premium-psd/blue-vintage-radio-isolated_1187-11504.jpg?w=1060" alt=""/>
          </ImageListItem>
          <ImageListItem>
            <img src="https://img.freepik.com/premium-psd/blue-vintage-radio-isolated_1187-11504.jpg?w=1060" alt=""/>
          </ImageListItem>
          <ImageListItem>
            <img src="https://img.freepik.com/free-photo/equipment-empty-musical-recording-room_1303-20399.jpg?w=1060&t=st=1665663294~exp=1665663894~hmac=2024abc58d5bf9f3933be281707921d2a9d1c249b68002c5dfbac582fadf527f" alt=""/>
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Coversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
