'use client'
import { Box, Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import DashboardLayoutSlots from '@/app/components/DashboardLayoutSlots'
const theme = createTheme({
  
})

import React from 'react'
export default function layout({ children }) {
  return (
    <div>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            minHeight: '100vh',
            maxWidth: '100vw',
            overflowX: 'hidden'
          }}
        >
          <DashboardLayoutSlots>
            {children}
        
          </DashboardLayoutSlots>
        </Box>
      </ThemeProvider>
    </div>
  )
}
