import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, IconButton, Typography, Box } from '@mui/material';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';

const AdminNotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await axios.get('/api/notifications', {
        headers: { Authorization: localStorage.getItem('token') }
      });
      setNotifications(res.data);
    };
    fetchNotifications();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/notifications/admin/${id}`, {
        headers: { Authorization: localStorage.getItem('token') }
      });
      setNotifications(notifications.filter(notification => notification._id !== id));
      alert('Notification deleted successfully.');
    } catch (err) {
      alert('Failed to delete notification.');
    }
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Manage Notifications</Typography>
      <List>
        {notifications.map(notification => (
          <ListItem key={notification._id}>
            <ListItemText
              primary={notification.title}
              secondary={`${notification.message} (Type: ${notification.type})`}
            />
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(notification._id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AdminNotificationList;
