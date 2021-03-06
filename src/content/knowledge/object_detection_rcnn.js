import React from "react";

import CaptionedImage from "../components";

import spp_working from "../../images/object-detection-2/spp-working.png";
import spp_feature_maps from "../../images/object-detection-2/spp-feature-maps.png";
import regions from "../../images/object-detection-2/regions.jpg";
import rcnn_architecture from "../../images/object-detection-2/rcnn_architecture.png";
import nms from "../../images/object-detection-2/nms.png";
import TextLink from "../../TextLink";

const object_detection_rcnn_content =
    <div>
        <h3>R-CNN</h3>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            This brings us to the first object detector that I want to discuss, it's really the one that started it
            all, <a href="https://arxiv.org/abs/1311.2524">R-CNN (Regions with CNN Features)</a>. When it was released in late 2014, it beat all existing object detectors on
            the PASCAL VOC 2012 challenge <i>and</i> the ILSVRC2013 challenge by a large margin, but more importantly
            it demonstrated just how effectively CNNs could be exploited in the domain of object detection. They weren't
            the first to think of using CNNs for object detection (up to that point most approaches used the sliding window method),
            but they were the first to do it so well, and by using a few other tricks (which we'll explore in a moment), the guys from UC Berkely designed and built a
            very effective and actually quite simple deep object detector. Lastly, this paper sparked a
            whole chain of related model architectures, each building on the last, which has since become known as the family of
            two-stage object detectors. This is a good place to start, and I will spend a bit of time on this building up your
            intuition, because then you will more clearly see how future architectures have evolved from this one.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            So how does R-CNN approach the object detection problem? They follow the recognition by region method. 
            R-CNN is made up of five main parts; something to propose regions in the image
            that are likely to contain objects, a feature extractor that runs on <i>each</i> region and produces a 
            4096-length vector, a set of classifiers that classify each feature vector into one of a set of
            C classes, a regressor that <i>finetunes</i> the region proposal to make the box fit better,
            and finally something called an NMS step (Non Maximum Suppression), which combines similar
            bounding boxes of the same class into one. Put those together and you have image in, classified regions out, those classified
            regions (or boxes) are your detected objects. Let's look at each of those parts in turn.
        </p>
        <CaptionedImage image={rcnn_architecture} caption="The R-CNN Architecture."/>
        <h5>Region Proposals</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Given an image, the region proposal module produces a set of candidate regions
            that are likely to contain objects. A region in this case is restricted to a 2D box.
        </p>
        <CaptionedImage image={regions} caption="Example set of candidate regions. Source: https://www.learnopencv.com/selective-search-for-object-detection-cpp-python/"/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Let me give you some intuition about this step. As I've currently described the architecture, it is <i>this </i>
            step that actually produces the boxes, the rest of the architecture just classifies and adjusts them, so it is <i>this </i>
            step that bottlenecks your <i>recall</i> performance (remember that one?). In
            other words, if the image has a certain object in it and the region proposal step <i>does not</i> manage to
            produce a region for that object, R-CNN will <i>not</i> detect it. You might also be wondering whether
            it bottlenecks the <i>localisation</i> performance as well, in other words, what if the box does not fit the object very well?
            The architecture can somewhat compensate for this using the box regressor which we'll see in a moment, however the
            worse the proposed region, the harder it is to adjust it to fit. So we need this stage to produce lots of high quality boxes.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            There are lots of ways to do region proposal, and R-CNN opts for a non-learned approach called Selective
            Search, which is good enough. They do so because other papers also did so and they wanted to be able to 
            compare. You don't <i>need</i> to know how it works other than; it produces regions, somebody has implemented it
            for you, and it has a fast mode. It's actually a nice demonstration how how Deep Learning can be mixed with more
            classical techniques. In R-CNN, Selective Search produces about <i>2000</i> region proposals per
            image.
        </p>
        <h5>Feature Extraction</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            At this point, thanks to Selective Search we have 2000 regions from our image, and we want to classify them.
            When this paper came out, it was two years after CNNs first won the ImageNet classification challenge, and everyone was getting
            excited and applying them to all sorts of vision problems. As a brief reminder, CNNs do very well because
            they learn their own representations (amongst other benefits), and <i>do not</i> require hand crafted features
            like HOG or SIFT (more traditional descriptive features). The point here is that the authors recognised that
            using a CNN as the feature extractor was the most powerful way to do it and would result in better detection.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            R-CNN uses a CNN as a feature extractor, an image
            goes in, and a feature vector of length 4096 comes out. They used AlexNet, the ImageNet winner of 2012, which has five
            convolutional layers, with two fully connected layers on top. It's not essential you understand the
            architecture of this network in detail, if you want to you're better off reading the Krizhevsky paper which proposed it,
            what's more important is that you understand that the CNN is being used to transform an image into a powerful
            vector representation that can then be used to do classification. Note that in R-CNN, this network does <i>not </i>
            actually do the classification itself, in other words, the final layer has 4096 outputs for the vector. For completeness,
            if you <i>did</i> want this network to also do the classification, you could add <i>another</i> fully connected
            layer than went from 4096 down to C outputs, where C is the number of classes. I'll explain in a minute why
            the authors decided not to do that.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            In the paragraph above, I described the CNN as taking in an image, this is a bit misleading. In R-CNN,
            the feature extractor actually takes in <i>regions</i>, specifically, it turns <i>every</i> region into a feature vector.
            That's right, the CNN is run 2000 times, expensive!
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            But aren't the regions different sizes? Yes! AlexNet cannot handle different image sizes, that wasn't
            to come until 2016, it requires an exact input image of size 227 x 227. The authors went for the simplest option
            and just warped all regions (after cropping them out of the original image), into the right shape. This is a
            one line operation in OpenCV. Note that
            they also applied a bit of padding around the region to add a bit of context, they found this to be quite
            important for getting good performance.
        </p>
        <h5>Classification</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            At this point, we have 2000 regions from Selective Search, and we've applied our CNN feature extractor to
            each region to get 2000 feature vectors, each of length 4096. The intuition at this point is that we already
            have our boxes (thanks to Selective Search), we just need to know what's in them.
            The way R-CNN does this is to train a couple of Support Vector Machines (SVMs), one per class. An SVM
            (once trained) takes in a vector and computes a number, if that number is positive, then the SVM is classifying
            the vector as belonging to that class. If you're curious as to how you handle the case of conflicting
            answers, see the one-vs-rest approach. This is a drastic simplification of how SVMs work, I encourage you to read
            up on them if you're interested, the important bit here is that we just need a way to classify vectors into
            one of C classes, and SVMs are one way to do that. One final point, SVMs can process batches of vectors in one go,
            in fact for R-CNN they process all 2000 vectors to produce 2000 class predictions at the same time.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            The authors trained the SVMs by feeding them labelled 4096-length vectors. They generated these vectors using
            the ground truth data. First, they use the ground truth box itself as the positive example, what I mean by that
            is that they crop out the ground truth box (after adding a bit of padding), put that through the feature extractor,
            which generates a 4096-length vector, and label it with the label of the ground truth box. But what about negative examples?
            They use Selective Search to generate proposals, then they select proposals with IOU <i>under</i> 0.3. They use a ratio
            of 25% to 75% negatives for training.
        </p>
        <h5>Non Maximum Suppresion</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Non Maximum Suppression is a non-learned algorithm that just reduces the number of boxes. If you think about it,
            at this point you have 2000 boxes, each with a predicted class and score (SVMs give scores). It is very likely that Selective
            Search proposed lots of boxes for the same object, and so you'll get lots and lots of detections, see the dog
            example below. In this case, what you really
            want is to collapse those boxes down into the best one. One way to do this would be to average all the boxes
            that were predicted to be of class dog, but that doesn't give you very good results, a better way is to simply
            take the highest confidence box and use that one, the idea is that the highest confidence box is the one that
            probably fits the dog the best. NMS looks for <i>overlapping</i> boxes of the <i>same</i> class, and removes
            all except the highest confidence box. It uses an IOU threshold of 0.5 to determine which boxes overlap.
        </p>
        <CaptionedImage image={nms} caption="Non Maximum Suppression"/>
        <h5>Tricks</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            R-CNN did very well because of a few extra tricks, which are illuminating in their own right, so I'll cover
            two of the important ones here.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            <b>Supervised Pretraining.</b> The authors trained the feature extractor (AlexNet) by first training it
            on the ImageNet classification task, so the last fully connected layer had 1000 outputs for the 1000 ImageNet classes.
            To do this, they followed the exact same training procedure from the original Krizhevsky paper and achieved the same results. Next,
            they removed the final layer, and replaced it with a fully connected layer with C + 1 classes (+1 for background), and they finetuned
            the network with <i>classification</i> on the C + 1 classes from the <i>new object detection dataset</i>. Hang on,
            how did they do classification on an object detection dataset? They used Selective Search on the image to generate
            proposals, and all proposals that overlapped groundtruth objects by more than an IOU of 0.5, they marked as the
            class of the ground truth object. They then cropped them out and warped them up to 227 x 277 and used those as the images for training.
            Anything under IOU of 0.5 was marked as background, that is where the C + 1 classes
            comes from. Finally they remove that final layer again to get the finetuned feature extractor.
            It turns out that this fine tuning step on the same data was essential for making the feature extractor work well.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            If this seems familiar to the SVM training procedure, you're right. R-CNN has what is called a multi-stage
            training procedure, so you need to train the feature extractor first, then when you have that you can generate
            the vectors to train the SVMs and so on. You might also notice that the definition of positives and negatives is
            different for the two training methods, the feature extractor defines positives to have IOU of above 0.5 with a
            ground truth box and negatives as under 0.5, but for SVM training, they take only the ground truth box as the positive,
            and select negatives as those with IOU of less than 0.3. I only wanted to point this out to avoid confusion,
            the reason for doing it this way is part historical, and part <i>"it just worked well"</i>, there isn't any special
            secret. Appendix B in the pack of the R-CNN paper offers a possible explanation.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            <b>Bounding Box Regression.</b> R-CNN works just fine without any bounding box regression, but the predicted boxes
            that come from Selective Search are not always that good. The bounding box regression step takes the 4096-length
            vectors, and predicts a new set of four numbers for the finetuned bounding box, it does this for every box. To train these linear regressors,
            they fed it pairs of proposals and ground truth boxes, but you can't just give it any pair, if the target box is the
            other side of the image, it doesn't matter how good your regressor is, it can't adjust it that far. So the authors only picked
            boxes that overlapped the ground truth by 0.7 for training. Yet another training step in our multi-stage training procedure,
            wouldn't it be great if there was a training procedure that did it all in one go (hint hint)...
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            There is a technical detail on how the boxes are parameterised, I will cover this in a couple of posts time in Fast R-CNN.
        </p>
        <h5>Why SVMs?</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Earlier I said that you could use the feature extractor to do the classification as well, by adding another
          layer and doing softmax, but the authors
            adopted SVMs instead, why? The answer is in an appendix at the back of the paper, and it boils down to...
           it just works better. They hypothesize a couple of reasons for this, but a lot of deep learning results are
          quite empirical, and it's not always obvious as to why something works as well as it does. (If you're
          interested, they hypothesize that it's probably due to a combination of the definition of positive
          examples used in fine tuning not emphasizing precise localisation, and the softmax classifier using
          randomly sampled negatives instead of hard negative mining that is used when training SVMs).
        </p>
        <h3>After R-CNN</h3>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            As I said in the introduction, R-CNN was the start of a long series of innovations in the family of two-stage
            detectors, before we move onto the next one however, let's make a short detour to see an important result.
        </p>
    </div>

export default object_detection_rcnn_content;