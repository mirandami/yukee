import React from "react";
import yukeebg from "../yukee-background.mp4";
import pic4 from "../pic/4-pic.png"
import "../main.css"
// import {Link} from "react-router-dom";
import About from "./about";
import Scroll from 'react-scroll';
// import Navbar from "./navbar";
import Resource from "./resource";
import Contact from "./contact";

var Link = Scroll.Link;



class Home extends React.Component{


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

        return (
            <div>


                <div className="home" id="main">

                    {/*<video id="bgvid" autoPlay muted>*/}
                    {/*    <source src={yukeebg} type="video/mp4"/>*/}
                    {/*</video>*/}

                    <div className="banner-text">
                        <h2>Actress<span> Yukee Chen</span></h2>
                    </div>

                    <img src={pic4} alt=""/>

                    <div className="nav-area" id="nav-area" style={{left:'-260px'}}>
                        <ul className="menu-area" id="menu-area">
                            <li className="active">
                                <Link activeClass="active" to="main" spy={true}
                                      smooth={true} duration={500}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" to="about" spy={true}
                                      smooth={true} duration={500}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" to="resource" spy={true}
                                      smooth={true} duration={500}
                                >
                                    Resources
                                </Link>
                            </li>
                            <li>
                                <Link activeClass="active" to="contact" spy={true}
                                      smooth={true} duration={500}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <span className="icon" id="menuicon" onClick={this.handleClick}>&#9776;</span>
                    {/*<div id='about'>avbbb</div>*/}
                </div>
                <About id='about'></About>
                <Resource id='resource'></Resource>
                <Contact id='contact'></Contact>
                <footer>
                    <p>© 2020 by a fan. Images and videos from 丰璟盛糖</p>
                </footer>

            </div>
        )
    }
}

export default Home
