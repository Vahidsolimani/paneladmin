import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/material';
import { Margin } from '@mui/icons-material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [products, setProducts] = React.useState([]);

  // Fetch data from API
  React.useEffect(() => {
    fetch('https://dummyjson.com/products?limit=12') // دریافت ۳ محصول نمونه
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box style={{ display: 'flex',justifyContent:  'center', flexWrap: 'wrap', gap: '20px' }}>
      {products.map((product) => (
        <Card key={product.id} sx={{ maxWidth: 345, mt: '30px' }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {product.title.charAt(0)}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={product.title}
            subheader={`${product.id}`}
          />
          <CardMedia
            component="img"
            height="194"
            image={product.thumbnail} // استفاده از تصویر اصلی محصول
            alt={product.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Details:</Typography>
              <Typography paragraph>
                Brand: {product.brand}
              </Typography>
              <Typography paragraph>
                Rating: {product.rating}
              </Typography>
              <Typography>
                Stock: {product.stock} units available
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </Box>
  );
}