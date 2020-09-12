import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Dashboad from '../pages/Dashbord';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/forgot-password" exact component={ForgotPassword} />
    <Route path="/reset-password" exact component={ResetPassword} />

    <Route path="/dashboard" component={Dashboad} isPrivate />
  </Switch>
);

export default Routes;
