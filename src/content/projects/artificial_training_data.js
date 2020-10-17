import React from "react";

import CaptionedImage from "../components";

import gad_1 from "../../images/object-detection-2/gad_1.png";
import gad_2 from "../../images/object-detection-2/gad_2.png";
import gad_3 from "../../images/object-detection-2/gad_3.png";
import gad_4 from "../../images/object-detection-2/gad_4.png";
import gad_5 from "../../images/object-detection-2/gad_5.png";
import gad_6 from "../../images/object-detection-2/gad_6.png";
import gad_7 from "../../images/object-detection-2/gad_7.png";
import gad_8 from "../../images/object-detection-2/gad_8.png";
import gad_9 from "../../images/object-detection-2/gad_9.png";
import gad_10 from "../../images/object-detection-2/gad_10.png";
import gad_11 from "../../images/object-detection-2/gad_11.png";
import gad_12 from "../../images/object-detection-2/gad_12.png";
import gad_13 from "../../images/object-detection-2/gad_13.png";
import gad_14 from "../../images/object-detection-2/gad_14.png";
import gad_15 from "../../images/object-detection-2/gad_15.png";
import gad_16 from "../../images/object-detection-2/gad_16.png";
import gad_17 from "../../images/object-detection-2/gad_17.png";

const artificial_training_data_content =
    <div>
        <h3>Introduction</h3>
        <h5>Background</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Training deep neural networks requires a lot of data. To give you an idea of just how big some of the major datasets really are, ImageNet has over 14 million images, MNIST has 70,000 images, and the IMDB Wiki dataset has 500,000 images. Often times, the biggest challenge in applying machine learning to a problem is not picking the right algorithm, or even getting it to train properly; it’s gathering the dataset in the first place.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            What I wanted to do in this project was to turn that idea on its head, and see if I could write an algorithm that would generate training examples for me. I could then generate a training set of any size that I liked, and use that to train an image classifier as accurately as possible.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Before I continue however, there are some very important, yet subtle points buried within this challenge, and I want to make sure that I address those first. Also, this project was about generating images for an image classifier, and I’ll therefore keep the discussion to image classification, but note that it applies to all problems.
        </p>
        <h5>A Little Bit of Theory</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            In image classification tasks, the power of using learning algorithms is that a model can learn to detect patterns and features in an image that help it determine which class the image belongs to. Say that you trained a face detector on a dataset of real human faces, if you looked inside the algorithm after training, you might find that it was looking for particular shapes like noses, jawlines, or eyes, that it used to inform it’s decision about which class the image belonged to.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            If however, you wanted to generate an artificial training set to train your face detector, you’d have to make sure that the resulting training images have those particular patterns and features in it that the classifier needs. You couldn’t generate stick-men faces for example, because they lack the necessary detail in the noses, jawlines and eyes that the classifier requires to correctly classify the test images. Another way of saying the same thing is that both your training and testing images need to be drawn from the same distribution, and therefore are representative of each other.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            If I’m arbitrarily generating training data, then by definition, my machine learning algorithm is very unlikely to discover a pattern that I don’t already know about, because I have already programmed the pattern into my image generator as a rule! This therefore defeats the whole point of using machine learning in the first place. So what’s the point?
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            The point is this. If you don’t have much data, and data collection is expensive, then you can’t use machine learning no matter how much you want to. An alternative is to try and write an algorithm that looks for the patterns yourself. Going back to the face detector, you could write a set of rules looking for shapes that look like noses, concentric circles that look like eyes and so on, but you’d have to try and account for every variation of face, at every angle, for every expression. Naturally, this would get incredibly tedious, and it’s why we use machine learning in the first place.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            It turns out, that a slightly easier method is not to write rules to detect faces, but to write rules to generate faces, and then use that algorithm to generate a large training dataset, and train a machine learning classifier on that dataset. The patterns that the classifier learns are the same rules that your generator uses to generate images. Same problem, but tackled in slightly different way.
        </p>
        <h5>Disclaimer</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Please understand that this isn’t research by any means, I haven’t been rigorous, I haven’t conducted carefully controlled experiments, I’ve just tried something out that I thought would be interesting. The results are purely subjective, and can be summarised as follows.
        </p>
        <p style={{textIndent: '30px', textAlign: 'center'}}>
            <b><i>If I want to build a face detector, but don't have any training data, I have to write an algorithm to do it myself. I found it easier and got better results by writing rules to generate faces and then training a classifier on those artificial faces, instead of by writing the rules to detect the faces themselves.</i></b>
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            So, with that preamble out of the way, let’s get to it.
        </p>

        <h3>Artificial Data Generation</h3>
        <h5>The Problem</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            After spending the whole introduction talking about detecting faces, I’m going to tackle a completely different problem, the reason being that face detection is quite tricky, and I wanted a simpler toy problem to test my ideas on.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            The problem I chose to tackle is ship identification, specifically, tankers. The reason I picked this dataset was because it was simple enough that I would be able to write rules for detecting ships if I had to, but it also included slight complications that made the problem challenging, like clouds, land, and waves. Examples of the types of images that I attempted to classify are shown below. The dataset I used has 375 images with ships in them, and 375 images without.
        </p>
        <CaptionedImage image={gad_1} caption="A selection of example images from the dataset."/>

        <h5>The Baseline</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            The first thing I did was to establish a baseline for a model trained on real training data. The reason for this is because when I eventually generate my own artificial training data, I want to see if I can train models with comparable accuracy to those trained with the real data.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            I took the 375 images for each class, and put 300 of each into a training set, and the other 75 each into a test set. I then trained a model on the 600 images in the training set, and tested it on the 150 images in the test set. There’s nothing special about the classifier I used, if you’re interested in the details, please see the code.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            If you look at the confusion matrix below, you can see that the model actually classifies everything perfectly. Confusion matrices are standard reporting tools for classification algorithms, and if you’re not familiar with them, I encourage you to look them up. Specifically, the confusion matrix below is saying that for the 75 images that were actually “none“, my classifier predicted them to be “none”, and likewise for “ships”.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Arguably my testing set wasn’t big enough and there isn’t enough information to confirm whether it’s a good classifier or not, but hopefully you get the point, it was trained on a real training set, and it classified the 150 images in the test set with 100% accuracy. That’s going to be tough to beat.
        </p>
        <CaptionedImage image={gad_2} caption="Confusion matrix for a classifier trained on real training data."/>

        <h5>Testing the Setup</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Before I launched into the generation of artificial images, I checked that the pipeline was setup and working properly. By pipeline, I mean the following:
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            <ol>
                <li>Generate a training set of arbitrary size using the artificial generation function.</li>
                <li>Save all of those training images into the training folders.</li>
                <li>Create a model.</li>
                <li>Train the model on the new artificial images.</li>
                <li>Test the model on the real images. (I use all 650 images from the original dataset).</li>
                <li>Plot the results in a confusion matrix.</li>
            </ol>
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            I wanted to automate this entire process so that I could focus all of my efforts on writing a good generation function, and then I could test it by simply running the pipeline from start to finish. The details of the pipeline aren’t important, it’s all in the code if you’re interested.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            To test the pipeline, I wrote a very quick generation function that simply generated black images. Running the pipeline gave me the confusion matrix below. The confusion matrix is telling me that an image classifier that has been trained on black images basically classifies everything it sees as “not containing a ship“. Fair enough.
        </p>
        <CaptionedImage image={gad_3} caption="Confusion matrix for a classifier trained on black images."/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            From then on, whenever I wanted to test my generation function, I simply ran the pipeline and looked at the confusion matrix, this gave me a standard metric for comparing generation functions as I improved them.
        </p>

        <h5>A First Pass</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            My generation algorithm needed to generate two kinds of image, one with a ship in it, labelled “ship”, and one without, labelled “none”. Look again at what the real images look like, because my generator is going to try and replicate them.
        </p>
        <CaptionedImage image={gad_4} caption="A selection of example images from the dataset."/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            The main points that I took away from analysing the real training set images were the following:
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            <ol>
                <li>The sea is generally blue, or green, or grey, more usually a various mixture of all three.</li>
                <li>There are clouds in some of the images.</li>
                <li>Ships fill the whole image, are found in the middle of the image, and can be at any angle.</li>
                <li>Some of the images have wave textures, some are smooth.</li>
                <li>Ships have detail in them such as containers, bridges, etc.</li>
                <li>Ships are usually of a low contrast colour, normally red, blue, grey, or green.</li>
            </ol>

        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            I then wrote a generation algorithm based on those criteria. If you want to see how the generation algorithm works, it’s all in the code. The easiest way to understand it however is to visualise the images that come out of it! Below, I’ve shown two sets of images, one for images of classification “none”, and one for images of classification “ship“.
        </p>
        <CaptionedImage image={gad_5} caption="Set of basic artificial training images, of classification “none”."/>
        <CaptionedImage image={gad_6} caption="Set of basic artificial training images, of classification “ship”."/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            They’re not very good ships, I’ll admit. But I was curious to see whether the simple presence of a block of colour, in the middle of a uniformly coloured sea, would be enough for the model to begin to detect ships. Sure enough, if you look at the confusion matrix below, you can see that it is. In fact, it’s so effective, that for every single image that is a true “ship“, the model predicts it to be so. Unfortunately, it now appears to be biased in favour of ships, since it’s also miss-classifying 142 images as ships, when they’re not. Still, the results are promising.
        </p>
        <CaptionedImage image={gad_7} caption="Confusion matrix for a classifier trained on basic artificial images."/>

        <h5>A Second Pass</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Time to improve it! I added new functionality to the generation algorithm, so that it adds clouds, has more representative colours, and creates more realistic looking ships. As usual, the easiest way to understand what it is doing is to visualise the output, see below!
        </p>
        <CaptionedImage image={gad_8} caption="Set of improved artificial training images, of classification “none”, including better clouds, and more representative colours."/>
        <CaptionedImage image={gad_9} caption="Set of improved artificial training images, of classification “ship”, including more representative colours, better clouds, and better ship shapes."/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            As usual, I ran the pipeline and looked at the confusion matrix, shown below. Simply adding those new features has drastically improved the performance of the classifier, at the expense of now miss-classifying a few ships. It’s encouraging that it’s doing such a good job, considering that it’s never seen a true image during it’s training.
        </p>
        <CaptionedImage image={gad_10} caption="Confusion matrix for a classifier trained on improved artificial images."/>

        <h5>A Third and Final Pass</h5>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            The classifier is doing a great job, but it’s not perfect. At this point, it is constructive to look at which images are tripping the classifier up. I can then use that knowledge to refine the generation algorithm.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Firstly, as a sanity check, I’ve plotted images that the classifier got correct, and was also very confident in it’s prediction. Note that the numbers above the images represent the probability of an image being of class “ship”.
        </p>
        <CaptionedImage image={gad_11} caption="Images of “none” that the classifier got correct, and was highly confident."/>
        <CaptionedImage image={gad_12} caption="Images of “ship” that the classifier got correct, and was highly confident."/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            That’s exactly what I expected which is good. It’s much more informative however to plot images that the classifier got wrong, but was also very confident in it’s predictions. In other words, which images did the classifier get the most wrong.
        </p>
        <CaptionedImage image={gad_13} caption="Images of “none” that the classifier got wrong, and was highly confident."/>
        <CaptionedImage image={gad_14} caption="Images of “ship” that the classifier got wrong, and was highly confident."/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            From analysing the images above, I made the following observations.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            <ol>
                <li>The classifier struggles to properly classify images with lots of cloud.</li>
                <li>The classifier struggles to properly classify images with strong wave texture.</li>
                <li>The classifier struggles to classify ships with shadows or other unusual super structure.</li>
                <li>Some ships are longer and narrower than I’m currently generating.</li>
                <li>Even though the classifier predicted some of the ships wrongly, if you look at the probabilities, it’s not drastically wrong, so it’s not too far off.</li>
            </ol>
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            From these points, I refined my generation algorithm to generate more cloud cover, and a wider variety of ship shapes. I also generated 10,000 images, rather than 1000 images, which is what I’d been generating so far. As usual, a sample of the output from the generation algorithm is shown below.
        </p>
        <CaptionedImage image={gad_15} caption="Set of best artificial training images, of classification “none”, including better clouds."/>
        <CaptionedImage image={gad_16} caption="Set of best artificial training images, of classification “ship”, including better clouds, and better ship shapes."/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            As usual, I ran the pipeline and got the confusion matrix below. The classifier now only miss-classifies 14 images out of 650, an accuracy of almost 98%. Not bad considering it’s never seen a real image!
        </p>
        <CaptionedImage image={gad_17} caption="Confusion matrix for a classifier trained on the best artificial images."/>
        <p style={{textIndent: '30px', textAlign: 'left'}}>

        </p>
    </div>

export default artificial_training_data_content;