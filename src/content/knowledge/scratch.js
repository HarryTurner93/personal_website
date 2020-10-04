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
import anchors_paper from "../../images/object-detection-2/anchors_paper.png";

const object_detection_fastrcnn_content =
    <div>
        <h5>Anchors</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Two classes,
        </p>

        <h5>The Region Proposal Head</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Two classes,
        </p>





         <h3>The RPN</h3>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Backbone, head, anchors, NMS.
        </p>
        <h3>Training it all</h3>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            It's actually just teh same.
        </p>
        <h3>Ablationsl</h3>
        <p style={{textIndent: '30px', textAlign: 'left'}}>

        </p>
        <h3>We're Done.</h3>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            It's actually just teh same.
        </p>

        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Problem with Fast R-CNN, box proposal bottleneck. Could just implement on GPU but ignores opportunity to
            share features.

            Small mention of Deep Box as a previous attempt at beginning ti learn object proosals as an imrpovement
            over bottom up. Prolem is it's completely serparate, whereas FastRCNN makes it all one network.

            "You have all the pieces necessary to understand this network, anchors is like box regression, sampling
            positives and negatives is the same, the difficulty is in the complexity, there's just a lot going. There's
            sampling for the RPN, and the detector head, there's regression of proposals from anchors and refinement
            of proposals to boxes, they all use the same ideas but in slightly different ways, so lets step through it carefully."


            comparison with multibox non-translation invariant, is that because they k-means?

            New sampling method. R-CNN had two, one for selecting boxes to finetune the CNN and one for finetuning the SVM,
            Fast RCNN had just one, for sampling positive boxes period. Now we're back to two, we keep the same one for
            the head but because we have to train the RPN, we adopt a sampking method for positive object proposals. Also
            sampling 1:1 pos to neg.

            RPNs
            Quirk of implementing as convolutions... 1x1 !

            <p style={{textIndent: '30px', textAlign: 'left'}}>
                Because of all the anchors, the RPN outputs <i>a lot</i> of boxes. But not all of them are useful. Therefore
                there is a Non Maximum Suppression (NMS) step <i>in between</i> the output of the RPN and the input to the
                Detector Head. The threshold is set to 0.7, which ends up filtering the number of boxes down to about 2000 (same as Selective Search),
                by keeping the regions with the highest objectness score. This doesn't harm the accuracy of the detector,
                it just reduces the number of proposals it has to process.
            </p>

            Ablations - What is it?
            Not sharing weights.
            Mismatch between RPN and FasterCNN with EB.
            NMS does not harm.
            Class scores help the ranking
            REgression of anchors is absolutely necessary
            Better backbones make the RPN better, obviously.
            Recall to IOU plots showing RPN drops gracefully, because it's cls scoree is putting the best boxes first.


            Anchors

            The altnerating optimisation. Can't just mash it all together and train end to end because FastR-CMM depends
            on fixed proposals, proposal distribution will shift underneath it if you also train the RPN at the same time.
            Authors note an interesting option for future work.
            1. Train RPN.
            2. Train seperate detection network with proposals from step 1. Currently don't share.
            3. Use detector network to initialise RPN training and retrain only rpn-head.
            4. Now finetune FC layers of Fast R-CNN.
        </p>

        <p style={{textIndent: '30px', textAlign: 'left'}}>
            With that said however, I do want to point out one detail, and that's that we're back into the regime of
            multi-stage training. Specifically, we first train the RPN, then we train a separate Fast R-CNN with those
            proposals, then we use those weights to initialise the RPN (again), then finetune the RPN and then finetune
            the Fast R-CNN head.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            If that didn't make sense, don't worry, it wasn't meant to. It's all a bit messy and it's a hard thing to
            describe in words, in fact the paper does a good job of explaining it so have a look there if you are interested. No,
            all I wanted to point out is that we're back to multistage training again because of the complexity of having another
            network you need to train.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            What I think <i>is</i> interesting is to consider why you need this multistage regime, what would happen
            if you just trained it end to end (which is the trend nowadays). They speculate on the reason in the paper and
            then leave it to future work, but the gist is that your Fast R-CNN head relies on (good) proposals from the
            region proposal mechanism, otherwise it cannot be trained at all, but early in training the RPN is probably not
            generating very good proposals. The distribution of proposals going intot he Fast R-CNN head <i>is constantly moving</i>,
            which I assume makes it very hard for the Fast R-CNN head to learn anything as it can't rely on it's inputs!
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            I expect this makes the training unstable, and you'd have to wait for the RPN to be trained to the point where
            it's generate half decent proposals before the Fast R-CNN head began to improve. Anyway, that's all I wanted
            to mention about that, mostly I thought it was interesting.
        </p>






        <CaptionedImage image={box_parameterisation} caption="The box parameterisation defined in the R-CNN paper."/>

    </div>

export default object_detection_fastrcnn_content;