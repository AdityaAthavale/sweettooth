import React from "react";
import './NavBar.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isUploading: false
        }
    }
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark customNav">
                <h1 className="navTitle">Sweettooth Bakers</h1>
            </nav>
        )
    }
}

export default NavBar