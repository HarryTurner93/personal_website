import React from "react";

import CaptionedImage from "../components";

import anchors_paper from "../../images/object-detection-2/anchors_paper.png";

const artificial_training_data_content =
    <div>
        <h3>Heading</h3>
        <h5>Sub Heading</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Paragraph
        </p>
        <CaptionedImage image={anchors_paper} caption="Figure 1 from the Faster R-CNN paper, credit to Shaoqing Ren, Kaiming He, Ross Girshick and Jian Sun."/>

    </div>

export default artificial_training_data_content;