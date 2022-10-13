import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Post from './Post';

const title= ""
const image = ''
const post = ''
const Feeds = () => {
  return (
    <Box flex={4} p={2}>
        <Post title='Momodu Success' image='https://img.freepik.com/free-photo/positive-overjoyed-dark-skinned-man-points-with-both-index-fingers-hints-something-wears-casual-green-jumper-smiles-broadly_273609-23582.jpg?w=1060&t=st=1665660221~exp=1665660821~hmac=a2cf71e7eecad009adc8c699eba5520c37aee7142e00ef4773f5ce8fd000745d'post='I think 2023 election would be a very easy win for atiku. He has a master plan and that fact alone will make me declare publicly for him' profiles='https://img.freepik.com/free-photo/portrait-beautiful-young-women-with-different-shapes-posing-white_155003-15980.jpg?w=1060&t=st=1665660845~exp=1665661445~hmac=1182555e1e060fcd769a692afd0feac5d7bc723509b44234ebcf5fe9ae3dd44c'/>
        <Post title="Isaiah Tokunbo " image='https://img.freepik.com/free-photo/close-up-adult-woman-lingerie_23-2149179701.jpg?size=626&ext=jpg&ga=GA1.2.666280497.1658152572' post='This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add 1cup of frozen peas along with the mussels,if you like'profiles='https://img.freepik.com/free-photo/plus-size-model-studio-shoot-happy-smiling_633478-2026.jpg?w=1380&t=st=1665661307~exp=1665661907~hmac=c94c642b24b5cdf4b694b0fd0c9f78da1f9955ae8111cb07bb5edd62aca5e7ce'/>
        <Post title='Abumere Stanley' image='https://img.freepik.com/free-photo/beautiful-african-woman-smiling-enjoying-massage-spa-resort_176420-12930.jpg?w=1060&t=st=1665660411~exp=1665661011~hmac=4f3336129cb80e8821619205cffac6835babc8958038b58dcc8d8078229352af'post='This is what i am doing all day in abraka. i am having a good time with all the babes. i do not care if buhari destroy the country. Just bring in some hot babes for me'/>
        <Post title='Izekor Godwin' image='https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg?w=1060&t=st=1665660578~exp=1665661178~hmac=9327b8fe52294090e0361bbf77c681692de203b714b5dc7765840060b0776358'post='Being creative with material ui and react is so sweet. I am passing out props to render this component. What a good time to be a react developer. 'profiles='https://img.freepik.com/free-photo/glamorous-african-american-woman-white-turtleneck-sweater-pose-street-with-cup-coffee-hand_627829-12532.jpg?w=1060&t=st=1665661477~exp=1665662077~hmac=2b5e3105c4f20f87b33b0d6a25668288121ba78184285d87308b817be7672c68'/>
        <Post title='Izekor Godwin' image='https://img.freepik.com/premium-photo/afro-american-businessman-classic-suit_85574-6304.jpg?w=1060'post='Being creative with material ui and react is so sweet. I am passing out props to render this component. What a good time to be a react developer. '/>
        <Post title='Izekor Godwin' image='https://img.freepik.com/free-photo/medium-shot-different-women-modeling-together_23-2149253146.jpg?w=1060&t=st=1665660766~exp=1665661366~hmac=94fe8dbeaaf518425b3554a783ca915a1062d95f4092280934293df75f0ad409'post='Being creative with material ui and react iis so sweet. I am passing out props to render this component. What a good time to be a react developer. '/>
        <Post title='Izekor Godwin' image='https://img.freepik.com/free-photo/portrait-beautiful-young-women-with-different-shapes-posing-white_155003-15980.jpg?w=1060&t=st=1665660845~exp=1665661445~hmac=1182555e1e060fcd769a692afd0feac5d7bc723509b44234ebcf5fe9ae3dd44c'post='Being creative with material ui and react is so sweet. I am passing out props to render this component. What a good time to be a react developer. '/>
        

    </Box>
  )
}

export default Feeds