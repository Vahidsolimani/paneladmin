import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createBurger(name, calories, carbs, protein, price, description) {
  return {
    name,
    calories,
    carbs,
    protein,
    price,
    description,
    ingredients: [
      {
        name: 'Bun',
        type: 'Base',
      },
      {
        name: 'Beef Patty',
        type: 'Main',
      },
      {
        name: 'Cheese',
        type: 'Topping',
      },
    ],
  };
}

function BurgerRow(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Typography fontWeight="bold">{row.name}</Typography>
        </TableCell>
        <TableCell align="right">{row.calories} cal</TableCell>
        <TableCell align="right">{row.carbs}g carbs</TableCell>
        <TableCell align="right">${row.price.toFixed(2)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Burger Details
              </Typography>
              <Typography paragraph>{row.description}</Typography>
              
              <Typography variant="subtitle1" gutterBottom>
                Ingredients:
              </Typography>
              <Table size="small" aria-label="ingredients">
                <TableHead>
                  <TableRow>
                    <TableCell>Ingredient</TableCell>
                    <TableCell align="right">Type</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.ingredients.map((ingredient, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {ingredient.name}
                      </TableCell>
                      <TableCell align="right">{ingredient.type}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

BurgerRow.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

const burgers = [
  createBurger(
    'Double Burger',
    800,
    45,
    40,
    8.50,
    'Double burger with two 120g beef patties, cheddar cheese, special sauce and fresh vegetables'
  ),
  createBurger(
    'Cheeseburger',
    650,
    40,
    35,
    6.50,
    'Classic burger with American cheese, caramelized onions and special sauce'
  ),
  createBurger(
    'Special Burger',
    950,
    50,
    45,
    9.50,
    'Special burger with 180g beef patty, cheddar cheese, mushrooms, bacon and BBQ sauce'
  ),
  createBurger(
    'Veggie Burger',
    450,
    55,
    25,
    5.50,
    'Plant-based burger with mushroom and soy base, suitable for vegetarians'
  ),
  createBurger(
    'Chicken Burger',
    500,
    40,
    35,
    6.00,
    'Crispy chicken burger with special sauce and lettuce'
  ),
];

export default function BurgerMenuTable() {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 1000, margin: 'auto',  }}>
      <Table aria-label="burger menu table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell sx={{ fontWeight: 'bold' }}>Burger Name</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Calories</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Carbs</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {burgers.map((burger) => (
            <BurgerRow key={burger.name} row={burger} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}