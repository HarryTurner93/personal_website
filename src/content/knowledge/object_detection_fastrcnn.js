import React from "react";

import CaptionedImage from "../components";

import spp_working from "../../images/object-detection-2/spp-working.png";
import spp_feature_maps from "../../images/object-detection-2/spp-feature-maps.png";
import regions from "../../images/object-detection-2/regions.jpg";
import rcnn_architecture from "../../images/object-detection-2/rcnn_architecture.png";

const object_detection_fastrcnn_content =
    <div>
        <h3>Fast R-CNN</h3>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Problem with R-CNN; multi stage, expensive in space and time, slow because feature extractor.
            SPP also multi stage, cannot update layers before spatial pyramid pooling.
            Fast RCNN is better detection, single stage training, multi task loss, update all layers, no disk storage required.
            Two advancements, combined regression and classification into same network, special training procedure to enable entire network training.
            Multi task. The parameterisation of bounding box. Scale invariance.
        </p>
    </div>

export default object_detection_fastrcnn_content;