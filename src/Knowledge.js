import React from "react";
import TextLink from "./TextLink";
import Post from "./Post";
import {knowledgePosts} from "./content/_content";
import {Route, Switch} from "react-router-dom";


class Knowledge extends React.Component {

    render() {

        return (
            <div style={{color: '#333333'}}>
                <Switch>
                    <Route exact path="/knowledge">

                        <div className='manrope' style={{padding: '50px', paddingBottom: '0px'}}>
                            <h1>Machine Learning.</h1>
                        </div>
                        <div style={{padding: '50px', paddingBottom: '0px'}}>
                            <p>Welcome to my website, a place where I keep a record of projects I've done, reviews of books I've read,
                            and thoughts and ideas I've had.</p>
                        </div>
                        <div style={{padding: '50px', paddingTop: '0px'}}>
                            <h3>Computer Vision</h3>
                            <h4>Object Detection with Deep Learning</h4>
                            <ul>
                                <li><TextLink text={knowledgePosts.object_detection_1.title} page="knowledge" item={knowledgePosts.object_detection_1}/></li>
                                <li><TextLink text={knowledgePosts.object_detection_2.title} page="knowledge" item={knowledgePosts.object_detection_2}/></li>
                                <li><TextLink text={knowledgePosts.object_detection_3.title} page="knowledge" item={knowledgePosts.object_detection_3}/></li>
                                <li><TextLink text={knowledgePosts.object_detection_4.title} page="knowledge" item={knowledgePosts.object_detection_4}/></li>
                            </ul>
                        </div>

                    </Route>


                    {Object.keys(knowledgePosts).map(function(key) {
                        return (
                            <Route exact path={`/knowledge/${knowledgePosts[key].url}`}>
                                <Post item={knowledgePosts[key]} />
                            </Route>
                        );
                    })}

                </Switch>
            </div>
        )
    }
}

export default Knowledge;