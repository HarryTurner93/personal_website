import React from "react";

import CaptionedImage from "../components";

import fastrcnn_architecture from "../../images/object-detection-2/fastrcnn_architecture.png";
import fastrcnn_architecture_paper from "../../images/object-detection-2/fastrcnn_architecture_paper.png"
import spp_feature_maps from "../../images/object-detection-2/spp-feature-maps.png";
import fastrcnn_equations from "../../images/object-detection-2/fastrcnn_equations.png";
import logloss from "../../images/object-detection-2/logloss.png";
import combinedloss from "../../images/object-detection-2/combinedloss.png";
import box_parameterisation from "../../images/object-detection-2/box_parameterisation.png";
import box_parameterisation_image from "../../images/object-detection-2/box_parameterisation_image.png";
import roi_pooling from "../../images/object-detection-2/roi-pooling.png";
import training_parameterisation from "../../images/object-detection-2/training_parameterisation.png";

const object_detection_fastrcnn_content =
    <div>
        <h3>Fast R-CNN</h3>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Fast R-CNN is an evolution of both R-CNN and SPPNet, so first of all, make sure you've read my posts on those and understand how both
            of those networks work. Secondly, it is instructive to look at where they were not so good, as it was
            these that originally motivated Fast R-CNN.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            <b>R-CNN.</b> The first problem with R-CNN, is that it is slow at test time, because the feature extractor
            runs on <i>every</i> image region, of which there are usually 2000. It takes over 10 seconds to process a single
            image, even on the GPU.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            The second problem is that training it is tedious, because it has to be done in multiple stages. First you train
            and finetune the feature extractor, then you use that feature extractor to generate the feature vectors to
            train the SVMs and regressors. This makes it A) take a long time, B) error prone and fiddly.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Third, because you have to generate the feature vectors before training the SVMs and regressors, you need
            to store them somewhere, meaning the training procedure actually required hundreds of GBs of space.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            <b>SPPNet.</b> SPPNet fixes the problem of running the feature extractor on every region, but it still
            suffers from multi-stage training and large space requirements.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            <b>The Answer.</b> This brings us to the core contributions of Fast R-CNN, which aims to fix the problems
            highlighted above.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            <ul>
                <li>They adopt the one-CNN-pass per image approach of SPPNet to improve speed. They
                    do this using a variant of the SPP Pooling Layer, called the ROI Pool layer.</li>
                <li>They integrate the classification and bounding box modules <i>into the network itself</i>.</li>
                <li>The integrated network plus a few training tricks allowed them to use single-stage training,
                    which made it much quicker and easier to train.</li>
            </ul>
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            The overall result is a <i>new architecture</i> and <i>new training procedure</i>, that are evolutions
            of what came before. Fast R-CNN has <i>better detection performance</i>, is <i>213 times faster than R-CNN at test time</i>, and is
            <i> easier and quicker to train</i>. What's not to love?
        </p>
        <h3>Architecture</h3>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            I'll start with the architecture, this is mostly to give you a visual map to help the explanations coming up, for this section
            please refer to the image below. As mentioned, rather than the feature extractor running on every region,
            it runs once on the input image to generate a set of feature maps. <i>Separately to this</i>, Selective
            Search also runs on the input image to generate the region proposals. These proposals are then projected
            onto the feature maps, just like they are in SPPNet. For <i>each region proposal in the feature maps</i>,
            an ROI Pool layer computes a fix length vector, I'll cover this in more detail shortly. That vector goes through
            a couple of fully connected layers, which then split into two sibling branches, one branch to predict
            classes, and the other to predict bounding boxes. I'll discuss these in much greater depth later.
            Finally, we do NMS to reduce duplicate boxes.
        </p>
        <CaptionedImage image={fastrcnn_architecture} caption="My visual interpretation of the Fast R-CNN architecture."/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            If you read my previous post on R-CNN, what I hope you can see by comparing the two architecture diagrams
            is that some of the boxes have changed to red,
            which means they're now being computed by the network, rather than being independent modules. What this
            diagram <i>does not communicate very well</i>, is that apart from Selective Search (and NMS), everything is in
            <i> one network</i>. A better diagram to illustrate this view is the one from the paper itself, copied below.
            My intention was that by providing you with an alternative view of the architecture you can compare and contrast
            to help your understanding, you should see that they both line up.
        </p>
        <CaptionedImage image={fastrcnn_architecture_paper} caption="This is Figure 1 from the Fast R-CNN paper, credit to Ross Girshick."/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Let's now go through each part in turn.
        </p>
        <h5>Backbones</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            First, a quick note on backbones. What is a backbone? It's simply a feature extractor, but I'll refer to
            them as backbones from now on because that's what they are generally referred to nowadays.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            A useful framework for thinking about modern object detectors is to split it into a backbone, and a head.
            The backbone takes in the image, and generates the feature maps. The head, takes in the feature maps (and
            some proposals) and generates classes and box predictions. We'll see later that we can add more heads (or more
            branches to the same head) to do more tasks like mask prediction. As a side note, the latest architectures
            introduce a term called the <i>neck</i>, which goes between the backbone and the head (surprise surprise),
            the neck is responsible for doing feature fusion, mixing and matching features across different scales, we see
            this in action later on.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            The important point for now is that a backbone can be any suitable convolutional network. R-CNN uses
            AlexNet, but it doesn't have to be, as long as the network produces feature maps, which it will once you
            remove the fully connected layers. Fast R-CNN illustrates variants of the architecture using the larger
            <i> VGG</i> backbone, which naturally improves performance. Of course it will improve performance, it's a
            better feature extractor. An important result is that the better your feature extractor, the better your
            head will perform, and the better your object detector.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            At the time that this paper came out, the very popular ResNet architectures did not exist, but they are
            just other types of backbones. <i>All modern implementations of Fast R-CNN and it's variants that you'll
            come across today use ResNet and other modern backbones.</i> It's rare to find one using VGG or AlexNet.
        </p>
        <h5>The ROI Pool Layer</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            The ROI Pool layer is what converts the variable sized regions projected onto the feature map, into
            fixed length vectors.
            When I first read this paper I got confused about this layer and how it worked. Firstly, I hadn't read the
            SPPNet paper which it is based off, second, it's got it's own impressive sounding name which made me think there was
            some clever stuff going on. Make sure you've
            read my post on the SPPNet because <i>the ROI Pooling is just an SPP Pooling Layer with one pyramid level</i>.
            That's it. I won't recap what I talked about in that post, suffice to say that the regions projected onto the
            feature maps are not all the same size, but you need a fixed length vector to go into the fully connected layers.
            It is the ROI Pooling layer that converts regions into fixed length vectors by binning and max pooling the
            features in the feature map.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            One small detail, the ROI Pool layer actually warps projected regions into smaller feature maps of dimensions
            <code> C x W x H</code>, <i>not</i> a fixed length vector.
            To produce the fixed length vector, this tensor is simply reshaped. Therefore you might see the ROI Pool layer
            described as in the image below.
        </p>
        <CaptionedImage image={roi_pooling} caption="RoI pooling (Image source: Stanford CS231n slides.)"/>
        <h5>The Integrated Network</h5>
         <p style={{textIndent: '30px', textAlign: 'left'}}>
             Now we come to the architecture, or more specifically, the architecture of the head. Look again at the architecture
             as shown in the paper (I'll repeat it below to save you scrolling back up).
        </p>
        <CaptionedImage image={fastrcnn_architecture_paper} caption="This is Figure 1 from the Fast R-CNN paper, credit to Ross Girshick."/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
             The output from the ROI Pool layer passes through several fully connected layers, and then passes
             separately through a classification branch, and a regression branch. Now in reality, batches of regions
             are processed in parallel, but for the following discussion I'll describe it as if it were operating on a single
             region, it's not too hard to generalise to batches once you understand the mechanism.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            The <b>classification branch</b> is a fully connected layer, it accepts as input a feature vector and outputs a
            <code> K + 1</code> length vector, a prediction for <code> K</code> classes plus a background class. This layer is followed
            by a softmax layer, so as to predict a probability distribution over the <code> K + 1</code> classes.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            The <b>regression branch</b> is also a fully connected layer, that accepts as input the same feature vector, and outputs a
            <code> 4K</code> length vector, a prediction for four box coordinates for <i>every predicted class.</i>
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Just for completeness, I'll tie this together in pseudo-PyTorch code below. I say pseudo because the
            code to do this is slightly more complicated depending on your implementation, but the gist of it is correct,
            and it illustrates the backbone and head nicely.
        </p>
        <pre style={{color: '#e83e8c'}}>
        {`
        def forward(self, input, regions):

            feature_maps = self.backbone(input)

            feature_vectors = self.region_pooling(feature_maps, regions) 
            feature_vectors = self.fully_connected_1(feature_vectors)
            feature_vectors = self.fully_connected_2(feature_vectors)

            class_predictions = self.class_branch(feature_vectors)   
            class_predictions = F.softmax(class_predictions)         
            box_predictions = self.box_branch(feature_vectors)  
            
            return class_predictions, box_predictions
      `}
        </pre>

        <p style={{textIndent: '30px', textAlign: 'left'}}>
            The classification and regression branches are trained <i>at the same time</i> using a multitask loss, which
            has components for both the classification loss and regression loss.
        </p>
       <CaptionedImage image={combinedloss} caption="The combined loss as defined in the paper."/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            The classification component of the loss is just the log loss for the true class, just as if you were training a normal
            CNN. It pushes softmax to make the correct class prediction closer to 1, and pushes the other classes to zero.
        </p>
        <CaptionedImage image={logloss} caption="The classification loss as defined in the paper."/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            The regression loss is the smooth L1 loss between the true and predicted box. Remember that the head
            predicts a box <i>for every class</i>. The smooth L1 loss is defined
            below, and is a blend of L1 and L2 loss, which is less sensitive to outliers. Also note that the coordinates
            of the box (both predicted and ground truth) are <i>parameterised</i>. I'll cover this at the end of the post.
        </p>
        <CaptionedImage image={fastrcnn_equations} caption="The localisation loss as defined in the paper."/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            The Iverson bracket indicator function <code>[u ≥ 1] </code>
            evaluates to 1 when the true class is greater than 1 and 0 otherwise. By convention, the background class is
            label 0, so this has the effect of ignoring the bounding box loss for background classes, as background classes
            do not have meaningful bounding boxes! Lastly, the <code>λ</code> trades off the relative weight of the two
            components, they use a value of 1, which makes both components contribute to the loss equally.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            <b>So does multitask training help?</b> Yes! The author tested it with and without and found that multitask training
            improved the mAP by an entire percentage point. Generally, multitask training does help and there
            has been a lot of work on understanding why, it's likely because when the network is trained to do 
            two different but related tasks, it has to learn a more general representation. So yes it does make
            the network perform better, but mostly it just makes training a whole lot faster and easier.
        </p>
        <h5>Batching and Sampling</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            We're almost there. There's one final trick needed to actually do single stage training. The author makes
            the observation that training as it is defined in R-CNN is <i>very inefficient</i>. This is because,
            every region comes from a different image, and therefore each image needs to be passed through the backbone,
            for <i>every training example!</i>
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            But if you think about it, a better approach would be to
            pass a single image through the CNN, then select lots of training sample regions from that single image and
            use those, then repeat with another image. We've talked about this lots before, it's exactly how the
            network works at inference time, so it's natural to try and do it at training time as well.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            In practice, the author refers to this as a batching sampling strategy, and it works like this. Each mini-batch
            is constructed by chosing <code>N = 2</code> images at random and pass each image through the backbone. In
            parallel, they generate 64 regions from each image with Selective Search and then put all the projected
            regions through the ROI Pool layer to generate a total of <code>R = 128</code> region samples (now as
            feature vectors). But as this is a training strategy, they need to be labelled! They select 25% that had
            region proposals overlapping a ground truth object by IOU of at least 0.5 and label them as positive for
            that class (of the overlapping ground truth box).
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Interestingly, they select
            negatives as those that overlap ground truth by 0.1 to 0.5, and therefore give them the label of 0,
            remember this was defined in the loss? The lower bound of 0.1 apparently acts as
            a hard negative mining heuristic, in other words, the negative samples are always regions that very slightly
            overlap the true box but not enough to be counted, those are the confusing ones. Regions that don't overlap
            are probably easy to classify.
        </p>
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
        <h5>Bounding Box Parameterisation</h5>
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
            suffers from a few problems.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Firstly, it's not scale invariant. Small regions might only need to move a few pixels to line up with the
            object, but larger ones might need to move many pixels! This is a confusing source of variation we don't
            want our regressor to have to deal with. Fortunately, because we know the size of the object, we'll
            parameterise that out.
        </p>
        <CaptionedImage image={box_parameterisation} caption="The box parameterisation defined in the R-CNN paper.
        The regressor outputs dx(p), dy(p), dw(p), and dh(p)."/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            The <code>X</code> and <code>Y</code> coordinates of the final box are now defined as the <code>X</code> and <code>Y </code>
            of the predicted box plus some fraction of their height and width. This means, in order to adjust a box
            to the left or right, the regressor <i>only needs to predict one number</i> and it'll move big and
            small boxes relatively correct distances. <i>The regressor doesn't need to know how big the box is.</i>
            This is super important as the regressor never knows how big the boxes are, they all get ROI Pooled into the
            same size feature vector remember.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Okay, what about the size? Well, we <i>could</i> just have the regressor predict a multiplier for width and height, and scale
            each accordingly. But this requires the regressor <i>to predict a 1</i> in order to keep the boxes the same
            size. That's not too bad, but it's not great for numerical stability. More importantly though,
            <i> what if the regressor predicts -1?</i> Does the box get flipped inside out? No, we can't have negative
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
            shown in the equations above.
        </p>
        <CaptionedImage image={box_parameterisation_image} caption="The box parameterisation defined in the R-CNN paper."/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            When <i>training</i> the regressor, you want it to learn to find <code>[dx(p), dy(p), dw(p), dh(p)]</code>,
            so you just rearrange the equations to get the following, note they're referred to as <code>[tx, ty, tw, th]</code> here,
            but they are the same thing. These are the actual numbers you want your
            regressor to output, they use the Sum of Squared Errors to minimise the loss in the R-CNN paper, but we've already seen
            that Fast R-CNN uses the smooth L1 loss.
        </p>
        <CaptionedImage image={training_parameterisation} caption="The box parameterisation targets defined in the R-CNN paper."/>


    </div>

export default object_detection_fastrcnn_content;