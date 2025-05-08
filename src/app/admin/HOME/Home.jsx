import React from 'react';
import { Box, Typography, IconButton, Card, CardMedia } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

const SimplePost = ({ imageUrl, description, likes }) => {
  return (
    <Box sx={{ 
      maxWidth: 400,
      border: '1px solid #ddd',
      borderRadius: 2,
      overflow: 'hidden',
      m: 2
    }}>
      {/* بخش عکس */}
      <CardMedia
        component="img"
        height="300"
        image={imageUrl}
        alt="Post image"
        sx={{ width: '100%', objectFit: 'cover' }}
      />
      
      {/* بخش توضیحات */}
      <Box sx={{ p: 2 }}>
        <Typography variant="body1">{description}</Typography>
      </Box>
      
      {/* بخش دکمه‌ها */}
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 1,
        borderTop: '1px solid #eee'
      }}>
        <Box>
          <IconButton aria-label="like">
            <FavoriteBorderIcon />
          </IconButton>
          <Typography component="span" variant="body2" sx={{ ml: 1 }}>
            {likes}
          </Typography>
        </Box>
        
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SimplePost;