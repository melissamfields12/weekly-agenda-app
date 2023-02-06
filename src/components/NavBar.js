import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const linkStyle = {
        color: "#008B8B",
        padding: "10px 5px",
        marginRight: "20px",
        background: "#FFF8DC",
        border: "solid",
        borderRadius: "2px",
        borderWidth: "2px",
    }

    const activeStyle = {
        color: "#F08080",
        border: "solid",
        fontWeight: "bold"
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