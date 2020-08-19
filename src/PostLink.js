import {useHistory} from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";

function PostLink(props) {

    // React Hooks
    let history = useHistory()

    // Destructure props.
    let { item } = props;

    // Compute link, add the /blog prefix.
    let link = `/${props.page}/${item.url}`;

    // Redirect using Browser Router.
    const goToURL = (url) => {
        history.push(url)
    }

    return (
        <Card onClick={() => {goToURL(link)}} elevation={0} style={{width: '100%'}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2"><u>{item.title}</u></Typography>
                    <Typography gutterBottom variant="h7" component="h7"><i>{item.date}</i></Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{paddingTop: '10px'}}>{item.summary}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default PostLink;