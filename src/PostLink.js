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
    let link = `/${item.url}`;

    // Redirect using Browser Router.
    const goToURL = (url) => {
        history.push(url)
    }

    function parse_day(day) {
        let suffix = "th"
        if (day === "1" || day === "21" || day === "31") {
            suffix = "st"
        }
        if (day === "2" || day === "22") {
            suffix = "nd"
        }
        if (day === "3" || day === "23") {
            suffix = "rd"
        }

        return `${day}${suffix}`
    }

    function parse_month(month) {
        let months = {
            '01': 'January',
            '02': 'Februrary',
            '03': 'March',
            '04': 'April',
            '05': 'May',
            '06': 'June',
            '07': 'July',
            '08': 'August',
            '09': 'September',
            '10': 'October',
            '11': 'November',
            '12': 'December',
        }
        return months[month]
    }

    // Compute nicer date.
    let pieces = item.date.split("/")
    let parsed_date = `${parse_day(pieces[2])} ${parse_month(pieces[1])} ${pieces[0]}`

    return (
        <Card onClick={() => {goToURL(link)}} elevation={0} style={{width: '100%'}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2"><u>{item.title}</u></Typography>
                    <Typography gutterBottom variant="h7" component="h7"><i>{parsed_date}</i></Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{paddingTop: '10px'}}>{item.summary}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default PostLink;