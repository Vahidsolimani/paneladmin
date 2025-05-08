import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Paper } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

const BurgerSalesChart = () => {
  const burgerData = [
    { id: 0, value: 35, label: 'Double Burger', color: '#FF6384' },
    { id: 1, value: 25, label: 'Cheeseburger', color: '#36A2EB' },
    { id: 2, value: 20, label: 'Special Burger', color: '#FFCE56' },
  ];

  return (
    <Card sx={{ 
      width: '90%',
      height: '100%',
      boxShadow: 3,
      borderRadius: 2,
      overflow: 'hidden',
      padding: '10px'
    }}>
      <CardContent sx={{ height: '100%' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Burger Sales
        </Typography>
        <Box sx={{ 
          height: { xs: 250, md: 300 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <PieChart
            series={[{
              data: burgerData,
              innerRadius: 50,
              arcLabel: (params) => `${params.value}%`,
              arcLabelMinAngle: 20,
            }]}
            width={400}
            height={300}
            margin={{ top: 20, bottom: 20 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

const TehranMap = () => {
  return (
    <Card sx={{ 
      width: '100%',
      height: '100%',
      boxShadow: 3,
      borderRadius: 2,
      overflow: 'hidden'
    }}>
      <CardContent sx={{ height: '100%' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Tehran Location
        </Typography>
        <Box
          component="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3585377666!2d51.38932841789726!3d35.68919733119598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
          width="100%"
          height="85%"
          sx={{ border: 0 }}
          loading="lazy"
          title="Tehran Map"
          allowFullScreen
        />
      </CardContent>
    </Card>
  );
};

export default function CombinedComponents() {
  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      <Grid item xs={12} md={6} sx={{ height: { xs: 'auto', md: 500 } }}>
        <BurgerSalesChart />
      </Grid>
      <Grid item xs={12} md={6} sx={{ height: { xs: 400, md: 500 }, ml:10 }}>
        <TehranMap />
      </Grid>
    </Grid>
  );
}