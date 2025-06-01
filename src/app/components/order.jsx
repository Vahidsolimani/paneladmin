import { Box } from '@mui/material'
import React from 'react'
import AccordionUsage from './orderss/divider'
import CustomizedTables from './orderss/table'

export default function Order() {
  return (
    <Box sx={{p:'5px'}}> 
      
      <AccordionUsage/>
      <CustomizedTables/>
    </Box>
  )
}
