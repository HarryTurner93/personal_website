import React from "react";

import CaptionedImage from "../components";

import spp_working from "../../images/object-detection-2/spp-working.png";
import spp_feature_maps from "../../images/object-detection-2/spp-feature-maps.png";
import regions from "../../images/object-detection-2/regions.jpg";
import rcnn_architecture from "../../images/object-detection-2/rcnn_architecture.png";
import fastrcnn_architecture from "../../images/object-detection-2/fastrcnn_architecture.png";
import fastrcnn_architecture_paper from "../../images/object-detection-2/fastrcnn_architecture_paper.png";
import box_parameterisation from "../../images/object-detection-2/box_parameterisation.png";
import box_parameterisation_image from "../../images/object-detection-2/box_parameterisation_image.png";

const object_detection_fastrcnn_content =
    <div>
        <h5>Last Few Pieces</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Because they now use the larger VGG backbone, the authors hypothesized that it
            was important to finetune the entire network, <i>not just the classification and regression branches.</i> I've
            not covered this, but it <i>is possible</i> to back propogate through the ROI Pool layer, and therefore
            to update the weights of the convolutional layers as well, this is full end to end training. If you're
            interested, the derivation of back prop through the ROI Pool layer is given in the paper. The authors find
            that in practice, fine tuning <i>all layers except the first couple of convolutions</i> leads to the best
            performance.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
           And finally, a short note on the parameterisation of the bounding box. Fast R-CNN (and other evolutions of it
            that we'll see next) all use the bounding box parameterisation defined in the R-CNN paper.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            R-CNN trained linear regressors, Fast R-CNN uses a fully connected layer, but in both cases, they are
            regressing, but regressing to what? Region proposals from Selective
            Search are defined in pixels, usually the <code>X</code> and <code>Y</code> center and the width and height.
            The grouth truth boxes are defined in the same way, so can we not just regress the pixel coordinates of the
            region proposal to the pixel coordinates of the ground truth box? Well, you <i>could</i> do that, but it
            suffers a few problems.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Firstly, it's not scale invariant. Small regions might only need to move a few pixels to line up with the
            object, but larger ones might need to move many pixels! This is a confusing source of variation we don't
            want our regressor to have to deal with. Fortunately, because we know the size of the object, we'll
            parameterise that out.
        </p>
        <CaptionedImage image={box_parameterisation} caption="The box parameterisation defined in the R-CNN paper."/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            The <code>X</code> and <code>Y</code> coordinates are now defined as the <code>X</code> and <code>Y</code>
            of the predicted box plus some fraction of their height and width. This means, in order to adjust a box
            to the left or right, the regressor <i>only needs to predict one number</i> and it'll move big and
            small boxes relatively correct distances. <i>The regressor doesn't need to know how big the box is.</i>
            This is super important as the regressor never knows how big the boxes are, they all get ROI Pooled into the
            same size feature vector remember.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Okay, what about the size? Well, we <i>could</i> just have the regressor predict a multiplier for width and height, and scale
            each accordingly. But this requires the regressot <i>to predict a 1</i> in order to keep the boxes the same
            size. That's not too bad, but it's not great for numerical stability. More importantly though,
            <i>what if the regressor predicts -1?</i> Does the box get flipped inside out? No, we can't have negative
            multipliers, so let's take the exponential of the predicted value instead. Now, if the regressor predicts
            a zero, the exponential evaluates to 1, so our box stays the same size! That's nice. If the regressor
            predicts <i>less than zero</i>, the exponential will evaluate to less than 1 but greater than 0, so it will
            make our box smaller, and if the regressor predicts greater than 1, our box will get bigger.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            The important part is that our predicted boxes can never be flipped inside out, the centering around 0
            adds (slightly) to numerical stability.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            So there you have it, that is the box parameterisation, the regressor outputs four numbers,
            <code>[dx(p), dy(p), dw(p), dh(p)]</code> and the final box is constructed through the equations
            shown in the figure above.
        </p>
        <CaptionedImage image={box_parameterisation_image} caption="The box parameterisation defined in the R-CNN paper."/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            When <i>training</i> the regressor, you want it to learn to find <code>[dx(p), dy(p), dw(p), dh(p)]</code>,
            so you just rearrange the equations to get the following. These are the actual numbers you want your
            regressor to output, they use the Sum of Squared Errors in the R-CNN paper, but we've already seen
            that Fast R-CNN uses the smooth L1 loss.
        </p>
    </div>

export default object_detection_fastrcnn_content;