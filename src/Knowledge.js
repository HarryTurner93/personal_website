import React from "react";
import TextLink from "./TextLink";
import Post from "./Post";
import {knowledgePosts} from "./content/_content";
import {Route, Switch} from "react-router-dom";


class Knowledge extends React.Component {

    render() {

        return (
            <div>
                <Switch>

                    <Route exact path="/knowledge">
                        <div className="contentBlockTitle">
                            <h1>Machine Learning.</h1>
                        </div>
                        <div className="contentBlockHeading">
                            <h3>Object Detection with Deep Learning</h3>
                            <p>This is an introductory tutorial series to doing object detection with Deep Learning,
                            specifically, I cover each of the seminal papers in object detection from 2014 when they
                            first appeared to the state of the art architectures as of 2020. When I first started learning
                            this field, it took me a while to bridge the gap from basic convolutional classifiers to
                            object detectors, in this tutorial series I hope to accelerate that process for you by
                            explaining more clearly the parts that I struggled with the first time around.</p>
                            <p>The best way to tackle this series is to read it alongside the papers. Except for the first few
                                introductory posts, each post tackles one paper,
                            and I attempt to explain the important bits in detail, so that they can be understood
                            by someone with slightly less background in object detection than the papers assume.</p>
                            <p>I'm still writing this series right now (October 2020) and the majority of these posts are
                                still not ready for publishing, more posts will be added as they get written.</p>
                            <ul style={{paddingTop: '10px'}}>
                                <h5>What Is Object Detection: A Birds Eye View of the Field</h5>
                                <ul>
                                    <p style={{color: '#CCCCCC'}}>Problem Formation</p>
                                    <p style={{color: '#CCCCCC'}}>Datasets and Benchmarks</p>
                                    <p style={{color: '#CCCCCC'}}>Cheat Sheet</p>
                                </ul>
                            </ul>
                            <ul style={{paddingTop: '10px'}}>
                                <h5>Two Stage Detectors: R-CNN to Mesh-RCNN</h5>
                                <ul>
                                    <li><TextLink text={knowledgePosts.object_detection_rcnn.title} item={knowledgePosts.object_detection_rcnn}/></li>
                                    <li><TextLink text={knowledgePosts.object_detection_sppnet.title} item={knowledgePosts.object_detection_sppnet}/></li>
                                    <li><TextLink text={knowledgePosts.object_detection_fastrcnn.title} item={knowledgePosts.object_detection_fastrcnn}/></li>
                                    <li><TextLink text={knowledgePosts.object_detection_faster_rcnn.title} item={knowledgePosts.object_detection_faster_rcnn}/></li>
                                    <li><TextLink text={knowledgePosts.object_detection_mask_rcnn.title} item={knowledgePosts.object_detection_mask_rcnn}/></li>
                                    <p style={{color: '#CCCCCC'}}>Mesh R-CNN</p>
                                </ul>
                            </ul>
                            <ul style={{paddingTop: '10px'}}>
                                <h5>One Stage Detectors: Yolo to RetinaNet</h5>
                                <ul>
                                    <p style={{color: '#CCCCCC'}}>YOLO V1</p>
                                    <p style={{color: '#CCCCCC'}}>YOLO V2</p>
                                    <p style={{color: '#CCCCCC'}}>YOLO V3</p>
                                    <p style={{color: '#CCCCCC'}}>Single Shot Detector</p>
                                    <p style={{color: '#CCCCCC'}}>RetinaNet</p>
                                </ul>
                            </ul>
                            <ul style={{paddingTop: '10px'}}>
                                <h5>The State of the Art</h5>
                                <ul>
                                    <p style={{color: '#CCCCCC'}}>Feature Pyramid Networks</p>
                                    <p style={{color: '#CCCCCC'}}>Path Aggregation Networks</p>
                                    <p style={{color: '#CCCCCC'}}>EfficientNet (A short detour)</p>
                                    <p style={{color: '#CCCCCC'}}>EfficientDet</p>
                                    <p style={{color: '#CCCCCC'}}>The Detectron Transformer</p>
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