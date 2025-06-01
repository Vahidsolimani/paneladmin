import { Box, Grid } from '@mui/material';
import React from 'react';
import PieAnimation from './profile/chart';
import TehranMap from './profile/map';

export default function Profile() {
  return (
    <Box sx={{ p: { xs: 4, md: 10 } }}>
      <Grid container spacing={15}>
    
        <Grid item xs={12} md={6}>
          <PieAnimation />
        </Grid>
        
       
        <Grid item xs={12} md={6}>
          <TehranMap />
        </Grid>
      </Grid>
    </Box>
  );
}