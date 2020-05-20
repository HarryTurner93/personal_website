import React from "react";
import {Route, Switch} from "react-router-dom";

// Import my components.
import Post from "./Post";
import PostLink from "./PostLink";

// Import blog data.
import { projectPosts } from './_content';

class Projects extends React.Component {

    render() {

        return (
            <div style={{color: '#333333'}}>
                <Switch>
                    <Route exact path="/projects">

                        <div className='manrope' style={{padding: '50px'}}>
                            <h1>Projects.</h1>
                        </div>

                        {/* Display the blog links. */}
                        <div style={{display: 'flex', flexWrap: 'wrap'}}>
                            {projectPosts.map((item) =>
                                <div style={{padding: '25px'}}>
                                    <PostLink page='projects' item={item}/>
                                </div>
                            )}
                        </div>

                    </Route>

                    {/* Display all the blog posts. */}
                    {projectPosts.map((item) =>
                        <Route exact path={`/projects/${item.url}`}>
                            <Post item={item} />
                        </Route>
                    )}

                    </Switch>
            </div>
        )
    }
}

export default Projects;