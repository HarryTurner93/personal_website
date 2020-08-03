import {useHistory} from "react-router-dom";
import React from "react";

function TextLink(props) {

    // React Hooks
    let history = useHistory()

    // Destructure props.
    let { item, text, page} = props;

    // Compute link, add the /blog prefix.
    let link = `/${page}/${item.url}`;

    // Redirect using Browser Router.
    const goToURL = (url) => {
        history.push(url)
    }

    return (
        <p onClick={() => {goToURL(link)}}>{text}</p>
    )
}

export default TextLink;