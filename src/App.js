import React from 'react';
import './App.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import { Navbar, Nav } from "react-bootstrap";

import cover from './images/cover.jpg';

class App extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron style={{height: '400px', backgroundImage: `url(${cover})`, backgroundSize: 'cover', padding: '20px' }}>
                    <Navbar>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav style={{margin: 'auto'}}>
                                <Nav.Link href="home" className="manrope"  style={{color: '#DDDDDD', fontSize: '120%', fontWeight: '700'}}>Home</Nav.Link>
                                <Nav.Link href="about" className="manrope"  style={{color: '#DDDDDD', fontSize: '120%', fontWeight: '700'}}>About</Nav.Link>
                                <Nav.Link href="Knowledge" className="manrope"  style={{color: '#DDDDDD', fontSize: '120%', fontWeight: '700'}}>Knowledge</Nav.Link>
                                <Nav.Link href="Knowledge" className="manrope"  style={{color: '#DDDDDD', fontSize: '120%', fontWeight: '700'}}>Books</Nav.Link>
                                <Nav.Link href="Knowledge" className="manrope"  style={{color: '#DDDDDD', fontSize: '120%', fontWeight: '700'}}>Blog Posts</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <h1 className="manrope" style={{color: '#EEEEEE', textAlign: 'center', fontSize: '400%', fontWeight: '700', paddingTop: '40px'}}>Henry Turner</h1>
                    <p className="manrope" style={{color: '#EEEEEE', textAlign: 'center', fontSize: '150%', fontWeight: '300'}}>Thoughts, projects, and things I've learned.</p>
                </Jumbotron>
            </div>
        )
    }
}

export default App;
