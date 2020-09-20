import {useHistory} from "react-router-dom";
import React from "react";

function TextLink(props) {

    // React Hooks
    let history = useHistory()

    // Destructure props.
    let { item, text} = props;

    // Compute link, add the /blog prefix.
    let link = `/${item.url}`;

    // Redirect using Browser Router.
    const goToURL = (url) => {
        history.push(url)
    }

    return (
        <p style={{cursor: "pointer"}} onClick={() => {goToURL(link)}}><u>{text}</u></p>
    )
}

export default TextLink;