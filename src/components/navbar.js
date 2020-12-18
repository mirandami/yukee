import React , {Component} from "react";
import {Link} from "react-router-dom";

class Navbar extends Component{

    handleClick = () => {
        let navarea = document.getElementById("nav-area");
        if (navarea.style.left=="-260px"){
            navarea.style.left="0";
            console.log('show successfully')
        }
        else {
            navarea.style.left="-260px";
            console.log('hide successfully')
        }
    };


    render() {
        return(
            <div>
                <div className="nav-area" id="nav-area" style={{left:'-260px'}}>
                    <ul className="menu-area" id="menu-area">
                        <li className="active">
                            <Link to={'/'}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link  to={'/about'}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to={'/resource'}>
                                Resources
                            </Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <span className="icon" id="menuicon" onClick={this.handleClick}>&#9776;</span>
            </div>

        )
    }
}

export default Navbar
