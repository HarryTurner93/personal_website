import React from "react";
import {Route, Switch} from "react-router-dom";

// Import my components.
import Post from "./Post";

// Import blog data.
import { blogPosts } from './content/_content';
import PostLink from "./PostLink";

class Blog extends React.Component {

    render() {

        return (
            <div style={{color: '#333333'}}>
                <Switch>
                    <Route exact path="/blog">

                        <div className='manrope' style={{padding: '50px'}}>
                            <h1>Thoughts and Ideas.</h1>
                        </div>

                        {/* Display the blog links. */}
                        <div style={{display: 'flex', flexWrap: 'wrap'}}>
                            {blogPosts.map((item) =>
                                <div style={{padding: '25px'}}>
                                    <PostLink item={item}/>
                                </div>
                            )}
                        </div>

                    </Route>

                    {/* Display all the blog posts. */}
                    {blogPosts.map((item) =>
                        <Route exact path={`/${item.url}`}>
                            <Post item={item} />
                        </Route>
                    )}

                    </Switch>
            </div>
        )
    }
}

export default Blog;