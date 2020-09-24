import React from "react";

import CaptionedImage from "../components";

import fastrcnn_architecture from "../../images/object-detection-2/fastrcnn_architecture.png";
import fastrcnn_architecture_paper from "../../images/object-detection-2/fastrcnn_architecture_paper.png"
import spp_feature_maps from "../../images/object-detection-2/spp-feature-maps.png";

const object_detection_fastrcnn_content =
    <div>
        <h3>YOLO</h3>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Recommend read up to Faster R-CNN to compare.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Intuitions, cells become specialised, learning to do well on specific aspect ratios and positions.
        </p>

    </div>

export default object_detection_fastrcnn_content;