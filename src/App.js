import { Provider } from 'react-redux';
import initStore from './store';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import ServicesPage from "./pages/Services";
import FaqPage from "./pages/Faq";
import ProfilePage from "./pages/Profile";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const store = initStore();

function App() {
  return (
    <Provider store={store}> 
      <Router>
        <Navbar />
        <Navbar id="navbar-clone" />
        <Sidebar />
        <Switch>
          <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
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
              <Homepage />
            </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;