import React from 'react';
import './components/home'
import Home from "./components/home";
import {HashRouter as Router, Link, Route} from "react-router-dom";
import Collection from "./components/collection";
import Film from "./components/film";
import Event from "./components/event";
import Video from "./components/video";

function App() {

  return (
      <Router>
    <div className="App">
        <header className="App-header">
                <div>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/collection" exact component={Collection}></Route>
                    <Route path="/video" exact component={Video}></Route>
                    <Route path="/film" exact component={Film}></Route>
                    <Route path="/event" exact component={Event}></Route>
                </div>

        </header>



        {/*<header className="App-header">*/}
        {/*    /!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
        {/*    <p>*/}
        {/*        Heello this is new page and all project create by{" "}*/}
        {/*        <a*/}
        {/*            className="App-link"*/}
        {/*            href="https://reactjs.org/docs/create-a-new-react-app.html#create-react-app"*/}
        {/*            target="_blank"*/}
        {/*            rel="noopener noreferrer"*/}
        {/*        >*/}
        {/*            Create React App*/}
        {/*        </a>*/}
        {/*    </p>*/}
        {/*    <p>*/}
        {/*        The purpose of this project is try{" "}*/}
        {/*        <a*/}
        {/*            className="App-link"*/}
        {/*            href="https://github.com/gitname/react-gh-pages"*/}
        {/*            target="_blank"*/}
        {/*            rel="noopener noreferrer"*/}
        {/*        >*/}
        {/*            Deploying a React App* to GitHub Pages*/}
        {/*        </a>*/}
        {/*    </p>*/}
        {/*    <p>*/}
        {/*        Edit <code>src/App.js</code> and save to reload.*/}
        {/*    </p>*/}
        {/*    <a*/}
        {/*        className="App-link"*/}
        {/*        href="https://reactjs.org"*/}
        {/*        target="_blank"*/}
        {/*        rel="noopener noreferrer"*/}
        {/*    >*/}
        {/*        Learn React*/}
        {/*    </a>*/}
        {/*</header>*/}
        {/*<Home></Home>*/}
    </div>
      </Router>
  );
}

export default App;
