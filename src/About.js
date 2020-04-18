import React from "react";

// Import images.
import landsEnd from './images/lands-end.jpg';
import mountainTop from './images/mountaintop.jpg';
import shepards from './images/shepards.jpg';

class About extends React.Component {

    render() {

        return (
            <div style={{color: '#333333'}}>
                <div className='manrope' style={{padding: '50px'}}>
                    <h1>About me.</h1>
                </div>
                <div style={{padding: '50px'}}>
                    <p>Hi, my name's Henry, although I also go by Harry.</p>
                </div>
                <div style={{paddingTop: '20px', paddingBottom: '20px', textAlign: 'center'}}>
                    <img src={landsEnd} style={{maxWidth: '100%', margin: 'auto'}}/>
                    <i><h6 style={{textAlign: 'center'}}>That's me on the left.</h6></i>
                </div>
                <div style={{padding: '50px'}}>
                    <p>Paragraph 2.</p>
                </div>
                <div style={{paddingTop: '20px', paddingBottom: '20px', textAlign: 'center'}}>
                    <img src={mountainTop} style={{maxWidth: '100%'}}/>
                    <i><h6 style={{textAlign: 'center'}}></h6></i>
                </div>
                <div style={{padding: '50px'}}>
                    <p>Paragraph 3.</p>
                </div>
                <div style={{paddingTop: '20px', paddingBottom: '20px', textAlign: 'center'}}>
                    <img src={shepards} style={{maxWidth: '100%'}}/>
                    <i><h6 style={{textAlign: 'center'}}></h6></i>
                </div>
            </div>
        )
    }
}

export default About;