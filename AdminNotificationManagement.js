import React, { useState } from 'react';
import AdminNotificationForm from '../components/AdminNotificationForm';
import AdminNotificationList from '../components/AdminNotificationList';
import { Container } from '@mui/material';

const AdminNotificationManagement = () => {
  const [notifications, setNotifications] = useState([]);

  const handleNotificationCreated = (newNotification) => {
    setNotifications([newNotification, ...notifications]);
  };

  return (
    <Container>
      <AdminNotificationForm onNotificationCreated={handleNotificationCreated} />
      <AdminNotificationList />
    </Container>
  );
};

export default AdminNotificationManagement;
