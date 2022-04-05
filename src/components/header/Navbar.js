import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    return (


<>
        <header>
            <div className="header-top">
                <div className="logo-dark">
                    <img src="../assets/images/logo-dark.png"></img>
                </div>
                <div className="supplier">
                    Supplier Discovery
                </div>
                <div className="rapid">
                    Rapid sourcing
                </div>
                <div className="control">
                    Control Tower
                </div>
                <div className="costing">
                    Rapid Costing
                </div>
                <div className="vectors">
                    <img src="../assets/images/Vector (9).png"></img>
                </div>
                <div className="eclipse">
                    <img src="../assets/images/Ellipse 3.png"></img>
                </div>
            </div>
         
        </header>
       

</>

    );
};

export default Navbar;
