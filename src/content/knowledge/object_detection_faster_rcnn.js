import React from "react";

import CaptionedImage from "../components";

import fastrcnn_architecture from "../../images/object-detection-2/fastrcnn_architecture.png";
import fastrcnn_architecture_paper from "../../images/object-detection-2/fastrcnn_architecture_paper.png"
import spp_feature_maps from "../../images/object-detection-2/spp-feature-maps.png";

const object_detection_fastrcnn_content =
    <div>
        <h3>Fast R-CNN</h3>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Small mention of Deep Box as a previous attempt at beginning ti learn object proosals as an imrpovement
            over bottom up. Prolem is it's completely serparate, whereas FastRCNN makes it all one network.
        </p>

    </div>

export default object_detection_fastrcnn_content;