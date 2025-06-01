'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  TextField, 
  Button, 
  Box, 
  Typography, 
  Paper,
  Alert,
  Fade,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === 'admin@example.com' && password === '123') {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/home');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        p: 2,
        
      }}
    >
      <Box sx={{ position: 'absolute', top: 16, left: 16, p: '4px' }}>
        <Typography variant="caption" sx={{ color: 'white', display: 'block', bgcolor: 'black', fontSize:'20px', p: '4px', borderRadius: '10px' }}>
          Email: admin@example.com
        </Typography>
        <Typography variant="caption" sx={{ color: 'white', display: 'block', bgcolor: 'black', fontSize:'20px', p: '4px', borderRadius: '10px', mt:'10px' }}>
          Password: 123
        </Typography>
      </Box>

      <Fade in timeout={800}>
        <Paper sx={{ 
          p: 4, 
          width: '100%',
          maxWidth: 400,
          borderRadius: 3,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)'
        }}>
          <Box textAlign="center" mb={3}>
            <Typography 
              variant="h4" 
              sx={{ 
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1
              }}
            >
              Welcome
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Please enter your email to continue
            </Typography>
          </Box>
          
          {error && (
            <Alert 
              severity="error" 
              sx={{ 
                mb: 2,
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              label="Email Address"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '& fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                  },
                },
                mb: 2
              }}
            />
            
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                  '& fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                  },
                },
                mb: 3
              }}
            />
            
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{
                mt: 1,
                py: 1.5,
                borderRadius: 2,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
                },
                transition: 'all 0.3s ease',
                fontWeight: 'bold',
                letterSpacing: 0.5
              }}
            >
              Sign In
            </Button>
          </form>
        </Paper>
      </Fade>
    </Box>
  );
}