import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import avatar from '../img/joachim.jpg'
import './ImageAvatar.css'

export default function ImageAvatar() {
  return (
    <div className='avatar'>
        <Avatar
        alt="Joachim Western" 
        src={avatar}
        sx={{width: 150, height: 150}}
        />
        <p>Joachim Western</p>
    </div> 
  );
}