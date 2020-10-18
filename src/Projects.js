import React from "react";
import {Route, Switch} from "react-router-dom";

// Import my components.
import Post from "./Post";
import PostLink from "./PostLink";

// Import blog data.
import { projectPosts } from './content/_content';

class Projects extends React.Component {

    render() {

        return (
            <div>
                <Switch>

                    <Route exact path="/projects">
                        <div className="contentBlockTitle">
                            <h1>Projects.</h1>
                        </div>
                        {/* Display the project links. */}
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            {projectPosts.map((item) =>
                                <div className="contentBlock">
                                    <PostLink item={item}/>
                                </div>
                            )}
                        </div>
                    </Route>

                    {/* Display all the blog posts. */}
                    {projectPosts.map((item) =>
                        <Route exact path={`/${item.url}`}>
                            <Post item={item} />
                        </Route>
                    )}

                    </Switch>
            </div>
        )
    }
}

export default Projects;