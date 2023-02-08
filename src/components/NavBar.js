import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const style = {
        color: "#008080",
        padding: "10px 5px",
        marginRight: "20px",
        background: "white",
        border: "solid",
        borderRadius: "2px",
        borderWidth: "2px",
    }

    const activeStyle = {
        color: "#F08080",
        border: "solid",
        fontWeight: "bold",
    }

    return (
      <div>
        <h1 className="weekly-agenda">Weekly Agenda</h1>
        <NavLink
            to="/" exact style={style}
            activeStyle={activeStyle}
            >
            Home   
        </NavLink>
        <NavLink
            to="/weeklygoals" exact style={style}
            activeStyle={activeStyle}
            >
            Weekly Goals
        </NavLink>
        <NavLink
            to="/weeklytasks" exact style={style}
            activeStyle={activeStyle}
            >
            Weekly Tasks
        </NavLink>
      </div>
    )
}

export default NavBar;