import React from "react";
import {Route, Switch} from "react-router-dom";
import {blogPosts, projectPosts} from "./_content";
import PostLink from "./PostLink";
import Post from "./Post";

class Home extends React.Component {

    render() {

        // Compile all articles.
        let combinedPosts = blogPosts.concat(projectPosts)

        return (

            <div style={{color: '#333333'}}>

                <div style={{color: '#333333'}}>
                    <div className='manrope' style={{padding: '50px', paddingBottom: '0px'}}>
                        <h1>Home.</h1>
                    </div>
                    <div style={{padding: '50px', paddingTop: '30px'}}>
                        <p>Welcome to my website, a place where I keep a record of projects I've done, reviews of books I've read,
                        and thoughts and ideas I've had.</p>
                    </div>

                   <div style={{padding: '50px', paddingTop: '10px'}}>
                        <h3>Latest Posts and Articles.</h3>
                    </div>
                    {/* Display the blog links. */}
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        {combinedPosts.map((item) =>
                            <div style={{padding: '25px'}}>
                                <PostLink page='blog' item={item}/>
                            </div>
                        )}
                    </div>

                </div>

            </div>
        )
    }
}

export default Home;