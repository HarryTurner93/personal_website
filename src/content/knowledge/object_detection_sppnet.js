import React from "react";

import CaptionedImage from "../components";

import spp_working from "../../images/object-detection-2/spp-working.png";
import spp_feature_maps from "../../images/object-detection-2/spp-feature-maps.png";
import regions from "../../images/object-detection-2/regions.jpg";
import rcnn_architecture from "../../images/object-detection-2/rcnn_architecture.png";

const object_detection_sppnet_content =
    <div>
        <h3>Spatial Pyramid Pooling</h3>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Shortly after R-CNN was released, came <a href="https://arxiv.org/abs/1406.4729">SPP-Net</a>, which
            demonstrated what I refer to as a generally applicable result, something that could be applied
            to many different networks in object detection, classification, segmentation, etc, and provide significant
            improvements in all. These papers are usually well worth reading.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Their insight was that up to this point, all these tasks used convolutional
            networks with fully connected layers at the end, and that these fully connected layers enforced a
            fixed size constraint on the input image. In other words, if the first fully connected layer is of size AxB, then
            the <i>resized</i> output from the last convolutional layer <i>must</i> be A (or matrix computation wouldn't line up), which fixes the next
            convolutional layer, and the next, all the way to the input. This is why AlexNet needs an input of 227x227.
            SPP-Net introduced a new
            layer between the final convolutional layer and the fully connected layer that removes this constraint.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            It's called a spatial pyramid pooling layer and here's how it works. Refer to the image below this paragraph, 
            I'll explain it from the bottom up.
            Once you've passed your
            image through the convolutional layers, you get a set of feature maps, for example, let's say 256. You max
            pool each feature map to produce a vector of length 256 (remember max pool picks the largest value
            in each feature map and there are 256 maps). So you've now got a vector of 256, are you done? No,
            you've only done one layer of the pyramid. Now you do it again, but this time you split
            each feature map into four quadrants (bins) and do a max pool in each bin, this gives you four
            numbers for each of the 256 feature maps, or four lots of 256-length vectors, then you do it again
            but split each feature map into 16 bins which gives you 16 lots of 256-length vectors. Now lets
            stop there and stack all those vectors up, your final vector is made up of stacking all those 256-length
            vectors, the 16 from the lowest level plus the 4 from the next level plus the global one to produce
            21 lots of 256-length vectors, or a single vector of length 5376. Not too difficult, but
            make sure you understand the significance, work this through in your mind: <i>no matter what size the input is</i>,
            it will always produce a vector of length 5376 (for that particular configuration of bins).
        </p>
        <CaptionedImage image={spp_working} caption="This is Figure 3 from the SPP-Net paper, credit to He, Zhang, Ren, Sun."/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Why is this relevant to object detection? Most of the SPP-Net paper is the authors applying their
            new idea to lots of different domains and showing how it improves performance in all of them, including
            R-CNN! They make a very important observation, they recognise that the speed bottle neck in
            R-CNN is because the CNN is applied to every <i>image</i> region (all 2000), meaning it is run 2000 times.
            But they realised that they could run the CNN <i>once</i> on the entire image to produce a set of feature
            maps (remember no fully connected layers for the feature extractor), and <i>then</i> apply their
            SPP-Pooling layer to each region.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Let me repeat that again, R-CNN applies the CNN to every <i>image region</i> in the original image. But
            SPP-Net applies the CNN once to produce the feature maps, and then applies
            <i> only the SPP layer and fully connected layers to each feature region.</i> Note the distinction between
            feature region and image region, there is no difference in the way spatial pyramid pooling is actually done.
            This process is illustrated in the image below.
        </p>
        <CaptionedImage image={spp_feature_maps} caption="This is Figure 5 from the SPP-Net paper, credit to He, Zhang, Ren, Sun."/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Why is this important? Two reasons, the first is that by doing a spatial pyramid pool of the region, you
            get a better feature vector because it's considering multiple scales. Second, by running the pooling
            on feature map regions, instead of image regions, you only run the CNN once, which makes your
            network about 2000 faster, not bad. (In practice, for various reasons, they saw a speed up of about x200).
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            A final nuance that might bugging you, what if the bins don't line up with the image (or region)? What if
            the region in the feature map doesn't perfectly split into 16 bins? The short answer is they interpolate,
            the long answer is it's a bit fiddly, and you don't need to understand the technical details other than
            it's possible, all details are explained in the paper.
        </p>
        <h3>Next Up</h3>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            With that, we're ready to tackle Fast R-CNN. See you in the next post.
        </p>

    </div>

export default object_detection_sppnet_content;