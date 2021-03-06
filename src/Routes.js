import { Switch, Route } from "react-router-dom";

import HomePage from './pages/Home';
import FaqPage from './pages/Faq'
import ProfilePage from './pages/Profile'
import ServicesPage from './pages/Services'
import ServiceDetailPage from './pages/ServiceDetail'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import SecretPage from "./pages/Secret";
import ServiceCreatePage from './pages/services/ServiceCreate';
import UserServicesPage from "./pages/services/UserServices";
import MessagePage from "./pages/Messagepage";
import Inbox from "./pages/Inbox";

const Routes = () => (
  <Switch>
    <Route path="/inbox/:userid/:userName">
      <Inbox />
    </Route>
    <Route path="/message/:userName/:myuserid/:senderId">
      <MessagePage />
    </Route>
    <Route path="/register">
      <RegisterPage />
    </Route>
    <Route path="/secret">
      <SecretPage />
    </Route>
    <Route path="/login">
      <LoginPage />
    </Route>
    <Route path="/services/me">
      <UserServicesPage />
    </Route>
    <Route path="/services/new">
      <ServiceCreatePage />
    </Route>
    <Route path="/services/:serviceId">
      <ServiceDetailPage />
    </Route>
    <Route path="/services">
      <ServicesPage />
    </Route>
    <Route path="/profile">
      <ProfilePage />
    </Route>
    <Route path="/faq">
      <FaqPage />
    </Route>
    <Route path="/">
      <HomePage />
    </Route>
  </Switch>
);

export default Routes;
