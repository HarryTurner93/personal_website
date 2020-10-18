import React from "react";

// Import my Components.
import Post from "./Post";

// Import blog data.
import { specialPosts } from './content/_content';

class About extends React.Component {

    render() {
        return (
            <div>
                <Post item={specialPosts.about} />
            </div>
        )
    }
}

export default About;