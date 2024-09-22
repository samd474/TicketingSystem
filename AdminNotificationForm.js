import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, Box, Typography } from '@mui/material';
import axios from 'axios';

const AdminNotificationForm = ({ onNotificationCreated }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [type, setType] = useState('info');
  const [expiresAt, setExpiresAt] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/notifications/admin', {
        title,
        message,
        type,
        expiresAt
      }, {
        headers: { Authorization: localStorage.getItem('token') }
      });
      onNotificationCreated(res.data);
      setTitle('');
      setMessage('');
      setType('info');
      setExpiresAt('');
      alert('Notification created successfully!');
    } catch (err) {
      alert('Failed to create notification.');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h5" gutterBottom>Create New Notification</Typography>
      <TextField
        label="Title"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Message"
        fullWidth
        margin="normal"
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <Select
        label="Type"
        fullWidth
        value={type}
        onChange={(e) => setType(e.target.value)}
        margin="normal"
      >
        <MenuItem value="info">Info</MenuItem>
        <MenuItem value="warning">Warning</MenuItem>
        <MenuItem value="alert">Alert</MenuItem>
      </Select>
      <TextField
        label="Expiration Date"
        type="datetime-local"
        fullWidth
        margin="normal"
        value={expiresAt}
        onChange={(e) => setExpiresAt(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">Create Notification</Button>
    </Box>
  );
};

export default AdminNotificationForm;
