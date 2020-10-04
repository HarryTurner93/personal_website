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
        url: "knowledge/object_detection_rcnn",
        html: object_detection_rcnn_content,
        date: "2020/09/18",
        series: ['object_detection_rcnn', 'object_detection_sppnet', 'object_detection_fastrcnn',
        'object_detection_faster_rcnn'],
        forward_to: 'object_detection_sppnet'
    },
    object_detection_sppnet: {
        title: "Spatial Pyramid Pooling",
        url: "knowledge/object_detection_sppnet",
        html: object_detection_sppnet_content,
        date: "2020/09/20",
       series: ['object_detection_rcnn', 'object_detection_sppnet', 'object_detection_fastrcnn',
        'object_detection_faster_rcnn'],
        forward_to: 'object_detection_fastrcnn'
    },
    object_detection_fastrcnn: {
        title: "Fast R-CNN",
        url: "knowledge/object_detection_fastrcnn",
        html: object_detection_fastrcnn_content,
        date: "2020/09/24",
        series: ['object_detection_rcnn', 'object_detection_sppnet', 'object_detection_fastrcnn',
        'object_detection_faster_rcnn'],
        forward_to: 'object_detection_faster_rcnn'
    },
    object_detection_faster_rcnn: {
        title: "Faster R-CNN",
        url: "knowledge/object_detection_faster_rcnn",
        html: object_detection_faster_rcnn_content,
        date: "2020/10/4",
        series: ['object_detection_rcnn', 'object_detection_sppnet', 'object_detection_fastrcnn',
        'object_detection_faster_rcnn'],
    }
}

export { blogPosts, projectPosts, specialPosts, knowledgePosts };