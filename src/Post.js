import React from 'react';

class Post extends React.Component {

    render() {

        // Destructure Props.
        let { item } = this.props;

        return (
            <div style={{color: '#333333'}}>
                <div className='manrope' style={{padding: '50px', paddingBottom: '0px'}}>
                    <h1>{item.title}</h1>
                </div>
                <div className='manrope' style={{padding: '50px', paddingTop: '10px', paddingBottom: '10px'}}>
                    <h4><i>{item.date}</i></h4>
                </div>
                <div style={{padding: '50px'}}>
                    {item.html}
                </div>
            </div>
        )
    }
}

export default Post;