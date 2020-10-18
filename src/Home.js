import React from "react";
import {Route, Switch} from "react-router-dom";
import {blogPosts, projectPosts, knowledgePosts} from "./content/_content";
import PostLink from "./PostLink";
import Post from "./Post";
import "./App.css"

class Home extends React.Component {

    render() {

        // Compile all articles.
        let combinedPosts = blogPosts.concat(projectPosts).concat(Object.values(knowledgePosts))

        function compare( a, b ) {
            if ( a.date < b.date ){
                return 1;
            }
            if ( a.date > b.date ){
                return -1;
            }
            return 0;
            }

        combinedPosts.sort( compare );

        return (

            <div>
                <div className="contentBlockTitle">
                    <h1>Home.</h1>
                </div>
                <div className="contentBlock">
                    <p>Welcome to my website, a place where I keep a record of projects I've done, reviews of books I've read,
                    machine learning topics I've studied, and thoughts and ideas I've had.</p>
                </div>

               <div className="contentBlockHeading">
                    <h3>Latest Posts and Articles.</h3>
                </div>

                {/* Display the blog links. */}
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {combinedPosts.map((item) =>
                        <div className="contentBlock">
                            <PostLink item={item}/>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Home;