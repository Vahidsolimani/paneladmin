"use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout, ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import SimplePost from '../admin/HOME/Home';
import { Home, Mail, PortableWifiOff, PortableWifiOffOutlined, Settings, SettingsApplications } from '@mui/icons-material';
import DashboardStats from '../admin/dashboard/Dashboard';
import BurgerMenuTable from '../admin/orders/order';
import CombinedComponents from '../admin/profile/profile';
import { Avatar, Badge } from '@mui/material';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: '',
    title: 'Home',
    icon: <Home />,
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'profile',
    title: 'profile',
    icon: <PortableWifiOff />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
      
    >
      {pathname === '/' && (
        <Box sx={{
          display: 'flex',
          gap: '20px ',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <SimplePost
            imageUrl="https://www.tabriz118.com/media/com_jbusinessdirectory/pictures/companies/2949/704-1517157485.jpg"
            description="Classic Beef Burger - Juicy beef patty with fresh lettuce, tomato, and special sauce in a soft bun. "
            likes={24}
          />
          <SimplePost
            imageUrl="https://lh6.googleusercontent.com/proxy/00PPCvZmn9f9nS6HdjEKIslhDYnCpiZD9gWcnzBDWLC9RIr_r8FtRrPSZ_0isc5lHIpvVHnmuBFq72jLTT1gPGNEZeq1edxvnvm_g34AqaycbVs"
            description="Cheeseburger Delight - Melted cheese over a grilled patty with pickles and for the perfect."
            likes={236}
          />
          <SimplePost
            imageUrl="https://www.tabriz118.com/media/com_jbusinessdirectory/pictures/companies/3168/32423423-1517235500.jpg"
            description="Crispy Chicken Burger - Golden-fried chicken fillet with mayo and crunchy veggies for a tasty crunch."
            likes={2044}
          />
          <SimplePost
            imageUrl="https://s3.ir-thr-at1.arvanstorage.ir/zoodex-cdn/StoreAttribute/2438/zoodex-8378307-ad.jpg"
            description="Double Trouble Burger - Two beef patties, double cheese, and extra bacon for ultimate satisfaction."
            likes={145}
          />
          <SimplePost
            imageUrl="https://www.jowhareh.com/images/Jowhareh/galleries_5/poster_78f910c8-1f46-442d-b707-05f837d63c6c.jpeg"
            description="Veggie Burger - A delicious plant-based patty with avocado and garlic mayo."
            likes={206}
          />
          <SimplePost
            imageUrl="https://www.candoosms.com/wp-content/uploads/2023/03/4-10.jpg"
            description="Mega Loaded Burger - Stacked with beef, cheese, onion rings, and jalapeños for bold flavors"
            likes={1025}
          />

        </Box>
      )}

      {pathname === '/dashboard' && (
        <Box>
          <Typography variant="h4"> dashboard </Typography>
          <Box>
            <DashboardStats />
          </Box>
        </Box>
      )}

      {pathname === '/orders' && (
        <>
          <Typography variant="h3" sx={{ marginY: 3 }}> orders</Typography>
          <BurgerMenuTable />

        </>
      )}

      {pathname === '/profile' && (

        <>
          <Typography variant="h6">profile</Typography>
          <CombinedComponents />
        </>
      )}
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function ToolbarActionsSearch() {
  return (
    <Stack direction="row">
      <Tooltip title="Search" enterDelay={1000}>
        <div>
          <IconButton
            type="button"
            aria-label="search"
            sx={{
              display: { xs: 'inline', md: 'none' },
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </Tooltip>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            ),
            sx: { pr: 0.5 },
          },
        }}
        sx={{ display: { xs: 'none', md: 'inline-block' }, mr: 1 }}
      />
      <ThemeSwitcher />
      <Avatar
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQE9HxAz-Dq1TKhfU56ds4TwLZIHRg-cioLQ&s'
      />
    </Stack>
  );
}

function SidebarFooter({ mini }) {
  return (
    <Typography
      variant="caption"
      sx={{ m: 1, whiteSpace: 'nowrap', overflow: 'hidden' }}
    >
      {mini ? '© MUI' : `© ${new Date().getFullYear()} Developed by Vahid Soleimani`}
    </Typography>
  );
}

SidebarFooter.propTypes = {
  mini: PropTypes.bool.isRequired,
};

function CustomAppTitle() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Badge badgeContent={6} color="error">
        <Mail color="primary" />
      </Badge>
      <Typography variant="h6">My dashboard</Typography>

    </Stack>
  );
}

function DashboardLayoutSlots(props) {
  const { window } = props;

  const router = useDemoRouter('admin');
  React.useEffect(() => {
    if (router.pathname === '/') {
      router.navigate('/');
    }
  }, [router]);
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout
        slots={{
          appTitle: CustomAppTitle,
          toolbarActions: ToolbarActionsSearch,
          sidebarFooter: SidebarFooter,
        }}
      >
        
        <DemoPageContent pathname={router.pathname} />
     
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutSlots.propTypes = {

  window: PropTypes.func,
};

export default DashboardLayoutSlots;
