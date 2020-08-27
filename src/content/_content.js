import sourdough_complexity_content from "./blog/sourdough_complexity"
import mentorship_scam_content from "./blog/mentorship_scam";
import neural_network_library_content from "./projects/neural_network_library";
import small_car_control_content from "./projects/small_car_control";
import about_me_content from "./page/about_me";
import object_detection_1_content from "./knowledge/object_detection_1";

const blogPosts = [
    {
        title: "Sourdough, Self Tracking, and Complexity",
        url: "sourdough_complexity",
        summary: "<summary>",
        date: "26th August 2020",
        html: sourdough_complexity_content
    },
    {
        title: "The Mentorship Scam",
        url: "mentorship_scam",
        thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51ojLicqjBL._SX329_BO1,204,203,200_.jpg",
        summary: "I was approached with a too-good-to-be-true opportunity that turned out to be a pyramid scheme. I " +
            "didn't think I was the sort of person to fall for that sort of thing but I almost did. This post briefly explains " +
            "what happened, why it was effective, and how to not fall for the same trick.",
        date: "21st May 2020",
        html: mentorship_scam_content
    }
]

const projectPosts = [
    {
        title: "Generating Artificial Training Data",
        url: "artificial_training_data",
        summary: "",
        date: "??",
        html: ""
    },
    {
        title: "Building a Neural Network Library from Scratch",
        url: "neural_network_library",
        summary: "I discuss how I built a neural network library from scratch, using only numpy.",
        date: "30th April 2018",
        html: neural_network_library_content
    },
    {
        title: "Small Neural Network for Car Control",
        url: "small_nn_car_control",
        summary: "In this project, I use genetic algorithms to train a small neural network to control a virtual car around a track.",
        date: "13th September 2017",
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
    object_detection_1: {
        title: "The Beginning: Problem Formation and Metrics",
        url: "object_detection_part_1",
        html: object_detection_1_content,
        date: "13th September 2017",
    },
    object_detection_2: {
        title: "Two Stage Detectors: R-CNN to Mesh R-CNN",
        url: "object_detection_part_2",
        html: "",
        date: "13th September 2017",
    },
    object_detection_3: {
        title: "Rise of the Single Stage Detectors: SSD to RetinaNet",
        url: "object_detection_part_3",
        html: "",
        date: "13th September 2017",
    },
    object_detection_4: {
        title: "The State of the Art (as of 2020): EfficientDet and DETR",
        url: "object_detection_part_4",
        html: "",
        date: "13th September 2017",
    }
}

export { blogPosts, projectPosts, specialPosts, knowledgePosts };