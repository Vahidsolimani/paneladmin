import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { green, blue, orange } from '@mui/material/colors';
import Grid from '@mui/material/Grid';

const cards = [
  {
    id: 1,
    title: 'Palette',
    description: 'The Eyeshadow Palette with Mirror offers a versatile',
    icon: ''
  },
  {
    id: 2,
    title: 'Princess',
    description: 'The Essence Mascara Lash Princess is a popular',
    icon: ''
  },
  {
    id: 3,
    title: 'Lipstick',
    description: 'The Red Lipstick is a classic and bold choice for adding a pop',
    icon: ''
  },
  {
    id: 4,
    title: 'Calvin ',
    description: 'CK One by Calvin Klein is a classic unisex fragrance',
    icon: ''
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const getRandomPercentage = () => Math.floor(Math.random() * 100) + 1;

  return (
    <Box sx={{ width: '100%', p: 10 , display : 'flex' , justifyContent: 'center' }}>
      <Grid container spacing={2}>
        {cards.map((card, index) => {
          const randomK = getRandomNumber(1, 10);
          const randomPercentage = getRandomPercentage();
          const avatarColors = [green[500], blue[500], orange[500]];
          
          return (
            <Grid item xs={12} mt={5} sm={6} md={6} lg={6} key={card.id}>
              <Card sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2
              }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: avatarColors[index % avatarColors.length] }}>
                      {card.icon}
                    </Avatar>
                  }
                  title={card.title}
                  subheader={`Priority: ${randomPercentage}%`}
                  sx={{ pb: 0 }}
                />
                <CardActionArea
                  onClick={() => setSelectedCard(index)}
                  data-active={selectedCard === index ? '' : undefined}
                  sx={{
                    flexGrow: 1,
                    '&[data-active]': {
                      backgroundColor: 'action.selected',
                      '&:hover': {
                        backgroundColor: 'action.selectedHover',
                      },
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="body1" gutterBottom>
                      {card.description}
                    </Typography>
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mt: 2
                    }}>
                      <Typography variant="caption" color="text.secondary">
                        Last updated: {new Date().toLocaleDateString()}
                      </Typography>
                      <Typography variant="h6" color="primary">
                        {randomK}k
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default SelectActionCard;