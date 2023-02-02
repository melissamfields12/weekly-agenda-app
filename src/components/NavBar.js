import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const linkStyle = {

    }

    const activeStyle ={

    }

    return (
      <div>
        <h1>Weekly Agenda</h1>
        <NavLink
            to="/" exact style={linkStyle}
            activeStyle={activeStyle}
            >
            Weekly Goals   
        </NavLink>
        <NavLink
            to="/weeklytasks" exact style={linkStyle}
            activeStyle={activeStyle}
            >
            Weekly Tasks
        </NavLink>
        <NavLink
            to="/shoppinglist" exact style={linkStyle}
            activeStyle={activeStyle}
            >
            Shopping List
        </NavLink>
      </div>
    )
}

export default NavBar;