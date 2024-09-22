import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Link } from '@mui/material';
import axios from 'axios';

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setAuth(true);
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Login</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleEmailLogin}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>Login</Button>
      </form>

      <Typography variant="h6" gutterBottom>OR</Typography>

      <Button
        variant="contained"
        color="secondary"
        fullWidth
        component={Link}
        href="/api/auth/microsoft"
      >
        Sign in with Microsoft
      </Button>
    </Box>
  );
};

export default Login;
