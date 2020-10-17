import the_so_what_content from "./blog/the_so_what";
import mentorship_scam_content from "./blog/mentorship_scam";
import neural_network_library_content from "./projects/neural_network_library";
import small_car_control_content from "./projects/small_car_control";
import about_me_content from "./page/about_me";
import object_detection_1_content from "./knowledge/object_detection_1";
import object_detection_rcnn_content from "./knowledge/object_detection_rcnn";
import object_detection_sppnet_content from "./knowledge/object_detection_sppnet";
import object_detection_fastrcnn_content from "./knowledge/object_detection_fastrcnn";
import object_detection_faster_rcnn_content from "./knowledge/object_detection_faster_rcnn";
import object_detection_mask_rcnn_content from "./knowledge/object_detection_maskrcnn";
import artificial_training_data_content from "./projects/artificial_training_data";

const blogPosts = [
    {
        title: "The 'So What?'",
        url: "blog/the_so_what",
        summary: "A technique for sourcing, triaging, reading, and storing articles. ",
        date: "2020/09/15",
        html: the_so_what_content
    },
    {
        title: "The Mentorship Scam",
        url: "blog/mentorship_scam",
        thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51ojLicqjBL._SX329_BO1,204,203,200_.jpg",
        summary: "I was approached with a too-good-to-be-true opportunity that turned out to be a pyramid scheme. I " +
            "didn't think I was the sort of person to fall for that sort of thing but I almost did. This post briefly explains " +
            "what happened, why it was effective, and how to not fall for the same trick.",
        date: "2020/05/21",
        html: mentorship_scam_content
    }
]

const projectPosts = [
    {
        title: "Generating Artificial Training Data",
        url: "projects/artificial_training_data",
        summary: "I write an algorithm to generate artificial training images, and then train an image classifier to classify real images with an accuracy of 98%",
        date: "2018/07/17",
        html: artificial_training_data_content
    },
    {
        title: "Building a Neural Network Library from Scratch",
        url: "projects/neural_network_library",
        summary: "I discuss how I built a neural network library from scratch, using only numpy.",
        date: "2018/04/30",
        html: neural_network_library_content
    },
    {
        title: "Small Neural Network for Car Control",
        url: "projects/small_nn_car_control",
        summary: "In this project, I use genetic algorithms to train a small neural network to control a virtual car around a track.",
        date: "2017/09/13",
        html: small_car_control_content
    },
]

const specialPosts = {
    about: {
        title: "About Me.",
        html: about_me_content
    }
}

const knowledgePosts = {
    object_detection_rcnn: {
        title: "R-CNN",
        summary: "Introduction to the first model in the two-stage object detection family. We look at" +
            "all parts of the pipeline in detail, region proposals, feature extraction, classification, and" +
            " bounding box regression.",
        url: "knowledge/object_detection_rcnn",
        html: object_detection_rcnn_content,
        date: "2020/09/18",
        series: ['object_detection_rcnn', 'object_detection_sppnet', 'object_detection_fastrcnn',
        'object_detection_faster_rcnn', 'object_detection_mask_rcnn'],
        forward_to: 'object_detection_sppnet'
    },
    object_detection_sppnet: {
        title: "Spatial Pyramid Pooling",
        summary: "A short post, looking at the Spatial Pyramid Pooling layer, and why that improved the" +
            " speed of R-CNN by over 200 times by sharing computation over regions.",
        url: "knowledge/object_detection_sppnet",
        html: object_detection_sppnet_content,
        date: "2020/09/20",
       series: ['object_detection_rcnn', 'object_detection_sppnet', 'object_detection_fastrcnn',
        'object_detection_faster_rcnn', 'object_detection_mask_rcnn'],
        forward_to: 'object_detection_fastrcnn'
    },
    object_detection_fastrcnn: {
        title: "Fast R-CNN",
        summary: "Explains the evolution of R-CNN into Fast R-CNN with integration of the ROI Pool layer" +
            " and multi task training. In this post we also start to think about networks in terms of" +
            " backbones and heads. We finish with a deep dive into bounding box parameterisation.",
        url: "knowledge/object_detection_fastrcnn",
        html: object_detection_fastrcnn_content,
        date: "2020/09/24",
        series: ['object_detection_rcnn', 'object_detection_sppnet', 'object_detection_fastrcnn',
        'object_detection_faster_rcnn', 'object_detection_mask_rcnn'],
        forward_to: 'object_detection_faster_rcnn'
    },
    object_detection_faster_rcnn: {
        title: "Faster R-CNN",
        summary: "A thorough explanation of Faster R-CNN, that spends quite a bit of time building up" +
            " a framework for thinking about modern object detectors. We cover anchors and the RPN head in detail, " +
            "and compare the architecture of Faster R-CNN to the others we've looked at so far to understand the" +
            "patterns.",
        url: "knowledge/object_detection_faster_rcnn",
        html: object_detection_faster_rcnn_content,
        date: "2020/10/11",
        series: ['object_detection_rcnn', 'object_detection_sppnet', 'object_detection_fastrcnn',
        'object_detection_faster_rcnn', 'object_detection_mask_rcnn'],
        forward_to: 'object_detection_mask_rcnn'
    },
    object_detection_mask_rcnn: {
        title: "Mask R-CNN",
        summary: "Introduces Mask R-CNN as a simple addition of a new branch to the detector head. We cover the " +
            "new branch architecture in detail with an example and explore the new ROI Align layer and how it works.",
        url: "knowledge/object_detection_mask_rcnn",
        html: object_detection_mask_rcnn_content,
        date: "2020/10/16",
        series: ['object_detection_rcnn', 'object_detection_sppnet', 'object_detection_fastrcnn',
        'object_detection_faster_rcnn', 'object_detection_mask_rcnn'],
    }
}

export { blogPosts, projectPosts, specialPosts, knowledgePosts };