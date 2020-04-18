import React from 'react';
import './App.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";

import {withRouter} from 'react-router-dom';

// Import images.
import cover from './images/cover.jpg';

// Import pages.
import Home from './Home.js';
import About from './About.js';
import Books from './Books.js';
import Knowledge from './Knowledge.js';
import Blog from './Blog.js';

class App extends React.Component {

    render() {
        let jumboClass = (this.props.location.pathname === '/') ? 'jumboBig' : 'jumboSmall';
        let nameOpacity = (this.props.location.pathname === '/') ? 'nameVisible' : 'nameHidden';

        return (
            <div>
                <div>
                    <Jumbotron className={jumboClass} style={{backgroundImage: `url(${cover})`, backgroundSize: 'cover', padding: '20px' }}>
                        <Navbar>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav style={{margin: 'auto'}}>
                                    <NavItem href="/"><Nav.Link as={Link} to="/"  className="manrope"  style={{paddingLeft: '20px', paddingRight: '20px', color: '#DDDDDD', fontSize: '130%', fontWeight: '700'}}>Home</Nav.Link></NavItem>
                                    <NavItem href="/about"><Nav.Link as={Link} to="/about" className="manrope"  style={{paddingLeft: '20px', paddingRight: '20px', color: '#DDDDDD', fontSize: '130%', fontWeight: '700'}}>About</Nav.Link></NavItem>
                                    <NavItem href="/knowledge"><Nav.Link as={Link} to="/knowledge"  className="manrope"  style={{paddingLeft: '20px', paddingRight: '20px', color: '#DDDDDD', fontSize: '130%', fontWeight: '700'}}>Machine Learning</Nav.Link></NavItem>
                                    <NavItem href="/books"><Nav.Link as={Link} to="/books"  className="manrope"  style={{paddingLeft: '20px', paddingRight: '20px', color: '#DDDDDD', fontSize: '130%', fontWeight: '700'}}>Books</Nav.Link></NavItem>
                                    <NavItem href="/blog"><Nav.Link as={Link} to="/blog"  className="manrope"  style={{paddingLeft: '20px', paddingRight: '20px', color: '#DDDDDD', fontSize: '130%', fontWeight: '700'}}>Blog Posts</Nav.Link></NavItem>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <div className={nameOpacity}>
                            <h1 className="manrope" style={{color: '#EEEEEE', textAlign: 'center', fontSize: '400%', fontWeight: '700', paddingTop: '40px'}}>Henry Turner</h1>
                            <p className="manrope" style={{color: '#EEEEEE', textAlign: 'center', fontSize: '150%', fontWeight: '300'}}>Thoughts, projects, and things I've learned.</p>
                        </div>
                    </Jumbotron>
                </div>
                <div style={{width: '50%', margin: 'auto'}}>
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
                    </Switch>
                </div>
            </div>
        )
    }
}

export default withRouter(App);