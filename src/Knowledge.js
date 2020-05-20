import React from "react";
import PostLink from "./PostLink";
import Post from "./Post";
import {knowledgePosts} from "./_content";

class Knowledge extends React.Component {

    render() {

        return (
            <div style={{color: '#333333'}}>

                <div style={{color: '#333333'}}>
                    <div className='manrope' style={{padding: '50px', paddingBottom: '0px'}}>
                        <h1>Machine Learning.</h1>
                    </div>
                    <div style={{padding: '50px'}}>
                        <p>Welcome to my website, a place where I keep a record of projects I've done, reviews of books I've read,
                        and thoughts and ideas I've had.</p>
                    </div>
                    <Post item={knowledgePosts.object_detection_1} />

                </div>

            </div>
        )
    }
}

export default Knowledge;