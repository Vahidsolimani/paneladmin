import React from 'react';
import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    useTheme
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import EventIcon from '@mui/icons-material/Event';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FormatterDemo from './chart';
import FormatterD3 from './Chart2';

const StatCard = ({ title, value, change, positive, icon }) => {
    const theme = useTheme();

    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                p:5

            }}>
                <Card sx={{
                    minWidth: 300,
                    height: 150,
                    borderRadius: 2,
                    boxShadow: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',

                }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box>
                                <Typography
                                    variant="subtitle2"
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{ fontWeight: 'bold' }}
                                >
                                    {value}
                                </Typography>
                            </Box>
                            <Box sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                {icon}
                            </Box>
                        </Box>
                    </CardContent>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        px: 2,
                        pb: 2,
                        color: positive
                            ? theme.palette.success.main
                            : theme.palette.error.main
                    }}>
                        {positive ? (
                            <ArrowUpwardIcon fontSize="small" />
                        ) : (
                            <ArrowDownwardIcon fontSize="small" />
                        )}
                        <Typography variant="body2" sx={{ ml: 0.5 }}>
                            {change}
                        </Typography>
                    </Box>
                </Card>
            </Box>
        </>
    );
};

const DashboardStats = () => {
    return (
        <>

            <Box sx={{ p: 3 }}>
                <Grid container justifyContent={'space-around'} spacing={3}>
                    <Grid item>
                        <StatCard
                            title="Users"
                            value="14k"
                            change="+25%"
                            positive={true}
                            icon={<PeopleAltIcon />}
                        />
                    </Grid>
                    <Grid item>
                        <StatCard
                            title="Conversions"
                            value="325"
                            change="-25%"
                            positive={false}
                            icon={<CompareArrowsIcon />}
                        />
                    </Grid>
                    <Grid item>
                        <StatCard
                            title="Event Count"
                            value="200k"
                            change="+5%"
                            positive={true}
                            icon={<EventIcon />}
                        />
                    </Grid>
                    <Grid item>
                        <StatCard
                            title="Revenue"
                            value="$48k"
                            change="+12%"
                            positive={true}
                            icon={<AttachMoneyIcon />}
                        />
                    </Grid>
                </Grid>
            </Box>


            <Box sx={{
                overflowX: 'hidden',
                padding: '30px'
            }}>
                
               
                        <FormatterDemo />
              
                        <FormatterD3 />
                 
              
            </Box>


        </>
    );
};

export default DashboardStats;