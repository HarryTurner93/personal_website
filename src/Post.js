import React from 'react';
import {knowledgePosts} from "./content/_content";
import TextLink from "./TextLink";
import "./App.css"

class Post extends React.Component {

    render() {

        // Destructure Props.
        let { item } = this.props;

        // If the item has a 'series' property, generate a post index.
        let series = ""
        if (typeof item.series !== 'undefined') {
            series =
            <div className='manrope' style={{padding: '50px', paddingTop: '10px', paddingBottom: '10px'}}>
                <h3>In this Series:</h3>
                <ul>
                    {item.series.map((index_item, index) => (
                    <li key={index}>
                        {knowledgePosts[index_item].url === item.url
                            ? <p>{knowledgePosts[index_item].title}</p>
                            : <TextLink text={knowledgePosts[index_item].title} page="knowledge" item={knowledgePosts[index_item]}/>
                            }
                    </li>
                    ))}
                </ul>
            </div>
        }

        // If the item has a 'date' property, generate a date string.
        let parsed_date = ""
        if (typeof item.date !== 'undefined') {

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
            parsed_date = `${parse_day(pieces[2])} ${parse_month(pieces[1])} ${pieces[0]}`

        }

        // If the item has a 'forward_to' property, render a 'Next' button.
        let forward_to = ""
        if (typeof item.forward_to !== 'undefined') {
            forward_to = <div>
                <p style={{color: "#3D72AD"}}>I'm always looking for feedback, if you have any comments on this post, either content, style, or quality of explanation, please do email me your thoughts at <b>henry.j.turner@gmail.com</b></p>
                <p>Next in this Series: <TextLink text={knowledgePosts[item.forward_to].title} page="knowledge" item={knowledgePosts[item.forward_to]}/></p>
            </div>
        }

        return (
            <div>
                <div className="contentBlockTitle">
                    <h1>{item.title}</h1>
                    {/* Render the parsed data if it provided. */}
                    {parsed_date===""?
                    null
                    :
                        <h5><i>{parsed_date}</i></h5>
                    }
                </div>

                {series}
                <div className="contentBlock">
                    {item.html}
                </div>
                <div className="contentBlockHeading">
                    {forward_to}
                </div>
            </div>
        )
    }
}

export default Post;