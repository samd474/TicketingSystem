import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import AdminTicketManagement from './pages/AdminTicketManagement';
import AdminAssetManagement from './pages/AdminAssetManagement';
import AdminProjectManagement from './pages/AdminProjectManagement';
import AdminContractManagement from './pages/AdminContractManagement';
import AdminLayout from './components/AdminLayout';
import PrivateRoute from './routes/PrivateRoute';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import AdminRoute from './components/AdminRoute';
import Login from './pages/Login';

function App() {
  const [isAuth, setAuth] = useState(!!localStorage.getItem('token'));

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <AdminLogin setAuth={setAuth} />
        </Route>
        <PrivateRoute path="/admin" isAuth={isAuth}>
          <AdminLayout>
            <Switch>
              <Route path="/admin/tickets" component={AdminTicketManagement} />
              <Route path="/admin/assets" component={AdminAssetManagement} />
              <Route path="/admin/projects" component={AdminProjectManagement} />
              <Route path="/admin/contracts" component={AdminContractManagement} />
            </Switch>
          </AdminLayout>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <AdminRoute path="/admin/dashboard" component={AdminDashboard} />
      </Switch>
    </Router>
  );
}

export default App;

