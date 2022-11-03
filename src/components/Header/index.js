import React from "react";
import "./style.css"

function Header(props) {
    return <header className="header-container">
        <h1>My React Portfolio</h1>
        <img src="https://images.unsplash.com/photo-1567994200289-a98293394b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        {props.children}
    </header>
}

export default Header;