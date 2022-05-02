import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from "../../assets/image/logo.png";
import "./Navbar.css";


export default function Navbar (props) {
  return (
    <React.Fragment>
        <AppBar className="appbar">
          <Toolbar>
          <img src={Logo} className="logo" />
          </Toolbar>
        </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
