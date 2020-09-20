import React from "react";

import CaptionedImage from "../components";

import spp_working from "../../images/object-detection-2/spp-working.png";
import spp_feature_maps from "../../images/object-detection-2/spp-feature-maps.png";
import landsEnd from "../../images/lands-end.jpg";

const object_detection_3_content =
    <div>
        <h3>Multi Box</h3>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Precursor to SSD, outputs boxes and objectness scores only, solves bipartite matching problem, doesn't have
            anchors but regresses from computed priors. Use to introduce the concept of single shot, framing as a regression problem,
            make the connection between anchors and priors. Touch on loss function in passing just saying it's forumlated
            to reduce distance between matched boxes and push confidence to 1, all else to zero.
        </p>

    </div>

export default object_detection_3_content;