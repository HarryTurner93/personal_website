import React from 'react';

import { Switch, Route, Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';

// Import images.
import logo from './logo.png';

// Import pages.
import Home from './Home.js';
import About from './About.js';
import Books from './Books.js';
import Knowledge from './Knowledge.js';
import Blog from './Blog.js';
import Projects from "./Projects";
import Solutions from "./Solutions";

// Import Styles
import "./App.css"

class App extends React.Component {

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0)
        }
    }

    render() {
        let jumboClass = (this.props.location.pathname === '/') ? 'jumboBig' : 'jumboSmall';
        let nameOpacity = (this.props.location.pathname === '/') ? 'nameVisible' : 'nameHidden';

        return (
            <div className="siteDiv">
                <div className={jumboClass} style={{backgroundColor: 'white', padding: '0px' }}>
                    <div className="navBar">
                        <Link to="/" className="navBarItem">Home</Link>
                        <Link to="/about" className="navBarItem">About</Link>
                        <Link to="/knowledge" className="navBarItem">Machine Learning</Link>
                        <Link to="/books" className="navBarItem">Books</Link>
                        <Link to="/blog" className="navBarItem">Blog Posts</Link>
                        <Link to="/projects" className="navBarItem">Projects</Link>
                    </div>
                    <div className={`centerPiece ${nameOpacity}`}>
                        <img src={logo} />
                        <h1>Harry Turner</h1>
                        <p>Books, projects, and things I've learned.</p>
                    </div>
                </div>

                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/knowledge">
                            <Knowledge/>
                        </Route>
                        <Route path="/books">
                            <Books/>
                        </Route>
                        <Route path="/blog">
                            <Blog/>
                        </Route>
                        <Route path="/projects">
                            <Projects/>
                        </Route>
                        <Route path="/solutions">
                            <Solutions/>
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default withRouter(App);