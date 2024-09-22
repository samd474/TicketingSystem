import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import axios from 'axios';

const UserNotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await axios.get('/api/notifications', {
          headers: { Authorization: localStorage.getItem('token') },
        });
        setNotifications(res.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };
    fetchNotifications();
  }, []);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Notifications</Typography>
      <List>
        {notifications.map((notification) => (
          <ListItem key={notification._id}>
            <ListItemText primary={notification.title} secondary={notification.body} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UserNotificationList;
