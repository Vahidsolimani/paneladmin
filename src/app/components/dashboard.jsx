import React from 'react'
import FormatterDemo from './daashboard/chart'
import SelectActionCard from './daashboard/card'
import { Box } from '@mui/material'
import GroupedAxes from './daashboard/chart2'


export default function Dashboard() {
  return (
    <Box sx={{ width: '100%' }}>
        
        <FormatterDemo/>
        <SelectActionCard/>
        <GroupedAxes/>
    </Box>
  )
}
