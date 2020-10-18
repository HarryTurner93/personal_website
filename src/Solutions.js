import React from "react";

// Import blog data.
import Paper from "@material-ui/core/Paper";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import "./App.css"
import PostLink from "./PostLink";

class Solution extends  React.Component {

    render() {
        let { problem, solution, title } = this.props;
        return (
            <Paper style={{padding: '20px'}} elevation={1}>
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                        <h3>{title}</h3>
                        <p>{problem}</p>
                        <p>{solution}</p>
                    </div>
                </div>
            </Paper>
        )
    }



}

const solutions = [
        {
            title: "Encoding video on Ubuntu for Windows 10",
            problem: <div>
                Occasionally I encode an MP4 and send it to someone on Windows 10 and they can't open or play it,
                sometimes accompanied with an error about codecs or "This items is in a format we don't support".
            </div>,
            solution: <div>
                    Use ffmpeg to re-encode with the following parameters. The most important part is the <code>yuv420p </code>
                    pixel format.
                <pre style={{paddingTop: '20px', width: '100%'}}>
                    <code>
                        ffmpeg -i &lt;input&gt; -c:v libx264 -strict -2 -preset slow -pix_fmt yuv420p -f mp4 output.mp4
                    </code>
                </pre>
            </div>
        }
    ]



class Solutions extends React.Component {

    render() {

        return (
            <div style={{color: '#333333'}}>

                <div className="contentBlockTitle">
                    <h1>Solutions.</h1>
                </div>
                <div className="contentBlock">
                    <p>If I come across a problem more than twice, that's the signal to implement or record the solution somewhere. This page is that somewhere. I built it for me, but hopefully it solves a problem you have as well.</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {solutions.map((item) =>
                        <div className="contentBlockHeading">
                            <Solution title={item.title} problem={item.problem} solution={item.solution}/>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Solutions;