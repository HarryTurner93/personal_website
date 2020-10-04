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
                        <div style={{padding: '50px', paddingTop: '0px'}}>
                            <h3>Object Detection with Deep Learning</h3>
                            <ul>
                                <h5>Two Stage Detectors: R-CNN to Mesh-RCNN</h5>
                                <ul>
                                    <li><TextLink text={knowledgePosts.object_detection_rcnn.title} item={knowledgePosts.object_detection_rcnn}/></li>
                                    <li><TextLink text={knowledgePosts.object_detection_sppnet.title} item={knowledgePosts.object_detection_sppnet}/></li>
                                    <li><TextLink text={knowledgePosts.object_detection_fastrcnn.title} item={knowledgePosts.object_detection_fastrcnn}/></li>
                                    <li><TextLink text={knowledgePosts.object_detection_faster_rcnn.title} item={knowledgePosts.object_detection_faster_rcnn}/></li>
                                </ul>
                            </ul>

                        </div>

                    </Route>


                    {Object.keys(knowledgePosts).map(function(key) {
                        return (
                            <Route exact path={`/${knowledgePosts[key].url}`}>
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