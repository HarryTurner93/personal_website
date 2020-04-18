import React from "react";
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import mountainTop from "./images/mountaintop.jpg";

class Book extends  React.Component {

    render() {
        let { title, author, summary, url } = this.props;
        return (
            <Paper style={{padding: '20px'}} elevation={2}>
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                    <div>
                        <h4>{title}</h4>
                        <h5>{author}</h5>
                        <p>{summary}</p>
                    </div>
                    <div>
                        <img src={url} style={{maxHeight: '150px'}}/>
                    </div>
                </div>
            </Paper>
        )
    }

}

const books = {
    year_2020: [
        {
            title: "Fooled by Randomness",
            author: "Nassim Nicholas Taleb",
            summary: "",
            url: "https://images-na.ssl-images-amazon.com/images/I/71RoZkCMk1L.jpg"
        },
        {
            title: "Homo Deus",
            author: "Yuval Noah Harari",
            summary: "",
            url: "https://images-na.ssl-images-amazon.com/images/I/71FX96Ae-PL.jpg"
        },
        {
            title: "Sapiens",
            author: "Yuval Noah Harari",
            summary: "",
            url: "https://images-na.ssl-images-amazon.com/images/I/41ac-LPtnQL._SX324_BO1,204,203,200_.jpg"
        },
        {
            title: "Man's Search for Meaning",
            author: "",
            summary: "",
            url: ""
        },
        {
            title: "Philosophy for Life and Other Dangerous Situations",
            author: "",
            summary: "",
            url: ""
        },
        {
            title: "12 Rules for Life",
            author: "",
            summary: "",
            url: ""
        },

    ]
}

class Books extends React.Component {

    render() {

        return (
            <div style={{color: '#333333'}}>
                <div className='manrope' style={{padding: '50px'}}>
                    <h1>My Reading List.</h1>
                </div>
                <div className='manrope' style={{padding: '50px'}}>
                    <h3>2020</h3>
                </div>
                {books.year_2020.map(function (item, index) {
                    return (
                        <div style={{paddingLeft: '50px', paddingRight: '50px', paddingTop: '10px', paddingBottom: '10px'}}>
                            <Book title={item.title} author={item.author} summary={item.summary} url={item.url}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Books;