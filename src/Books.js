import React from "react";
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

class Book extends  React.Component {

    render() {
        let { title, author, summary, url, again } = this.props;
        return (
            <Paper style={{padding: '20px'}} elevation={3}>
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div id={title}>
                        <h4>{title}</h4>
                        <h5 style={{paddingBottom: '5px'}}>{author}</h5>
                        <p style={{fontSize: '110%', width: '96%', lineHeight: '18pt'}}>{summary}</p>
                        <div>
                            {(again)
                                ?<div style={{display: 'flex'}}><CheckIcon/><p style={{fontSize: '100%', paddingLeft: '10px'}}>Will read again.</p></div>
                                :<div style={{display: 'flex'}}><ClearIcon/><p style={{fontSize: '100%', paddingLeft: '10px'}}>Won't read again.</p></div>
                            }
                        </div>
                    </div>
                    <div>
                        <img src={url} style={{maxHeight: '150px'}}/>
                    </div>
                </div>
            </Paper>
        )
    }

}

// Reviewing Books
// 1) Why did you read it?
// 2) What's it about?
// 3) What did you like?
// 4) What didn't you like?
// 5) Biggest takeaway?

const books = {
    year_2020: [
        {
            title: "The Places in Between",
            author: "Rory Stewart",
            summary: <div>An eye-opening description of his walk across Afghanistan. A raw, and honest view of rural
                Afghan life. It's not a description of a sightseeing or backpacking holiday; no hostels,
                no airbnb, no shops or cafes. What I found most incredible was how every night he finds a village and the hosts take
                him in (most of the time), feed him, provide him (some) shelter, and talk and share their lives with him. They
                provide stories of their ancestory and past, send their sons to guide him over the snowy mountains to the next village 20 miles away,
                and generally welcome him to their homes (often dry mud huts) all because he's a guest in their valley. Imagine
                trying that nowaways in the UK. For me it was a stark insight into what life was probably like hundreds of years ago. It makes
                me feel like life was a bit more personable and human back then.
            </div>,
            url: "https://images-na.ssl-images-amazon.com/images/I/51p6r7l3vNL._SX333_BO1,204,203,200_.jpg",
            again: false
        },
        {
            title: "Economics in One Lesson",
            author: "Henry Hazlitt",
            summary: <div>A good introduction to some fundamental economic principles and mental models in economics,
                the main one being that whatever policy is implemented, you must consider effects on all parties, not
                just the most vocal one, and secondary effects over time, not just the immediate ones. This won't make you a
                master in economics but it will equip you with some core fundamental truths that will help you to reason
                intelligently about many of the political and economic problems we have today.

            </div>,
            url: "https://images-na.ssl-images-amazon.com/images/I/714VzwnSygL.jpg",
            again: true
        },
        {
            title: "12 Rules for Life: An Antidote to Chaos",
            author: "Jordan Peterson",
            summary: <div>First off, read this one <i><u>after</u></i> reading <a href='#Sapiens'>Sapiens</a>, <a href='#Homo Deus'>Homo Deus</a>, and
                     <a href='#21 Lessons for the 21st Century'> 21 Lessons for the 21st Century</a>, in that order.
                     This book is what I thought 21 Lessons would be. Both authors build on
                     the same set of ideas (human cooperation through shared belief systems), Yuval's books lay
                     the groundwork by introducing human history, how those belief systems have evolved in the 75,000
                     years humans have been around, and does a great job of explaining why we are where we are today. It
                     also expands your horizons as to what the next few decades might be like. On the other hand, 12 Rules for Life
                     offers a very practical set of guidelines on what to actually do about it. I found it much more accessible after
                     reading Yuval Harari, in that framework this book would fit into the libertarian take on the meaning of life
                     (the one I most identify with). Biggest takeaway? Humans need order, rules, and values, but too much
                     order isn't a good thing either. The path to the good life is the one treads a fine line between the two.</div>,
            url: "https://images-na.ssl-images-amazon.com/images/I/71qWDVkNMRL.jpg",
            again: true
        },
        {
            title: "21 Lessons for the 21st Century",
            author: "Yuval Noah Harari",
            summary: "Before you read this, read Sapiens first, followed by Homo Deus, by the same author. " +
                "If Sapiens is past, and Homo Deus is future, this book considers the present and why we need to think" +
                " seriously about where humanity is heading. I learned a lot about why humanity is the way it is today." +
                " I also found it shocking, and the whole book has shaken up my view of the world, but " +
                " that's probably a good thing. Biggest takeaway? A real sense of urgency. It's now more important " +
                " than ever for me (everyone) to figure out who we are, and who we want to be in the 21st Century.",
            url: "https://images-na.ssl-images-amazon.com/images/I/71vOyCvUMJL.jpg",
            again: true
        },
        {
            title: "Homo Deus",
            author: "Yuval Noah Harari",
            summary: "",
            url: "https://images-na.ssl-images-amazon.com/images/I/71FX96Ae-PL.jpg",
            again: true
        },
        {
            title: "Sapiens",
            author: "Yuval Noah Harari",
            summary: "",
            url: "https://images-na.ssl-images-amazon.com/images/I/41ac-LPtnQL._SX324_BO1,204,203,200_.jpg",
            again: true
        },
        {
            title: "Fooled by Randomness",
            author: "Nassim Nicholas Taleb",
            summary: "This was a re-read from a long time ago, but I hadn't started keeping track of books then." +
                " It's about randomness in every day life, and why we understand and appreciate it less than we should. The" +
                " book is essentially a guide to being fooled by randomness as little as possible. It's one of those books" +
                " where every page is packed with insights, and although the content is a bit all over the place (the author self" +
                " describes the book as a collection of essays), I found I liked the style. Biggest takeaway was to always " +
                "try and be aware of the histories that didn't take place, which is harder than you think.",
            url: "https://images-na.ssl-images-amazon.com/images/I/71RoZkCMk1L.jpg",
            again: true
        },
        {
            title: "Creativity Blindess",
            author: "Dave Trott",
            summary: <div>I read this because I like Dave's other books, <a href='#One + One = Three'>One + One = Three</a>,
                and <a href='#Predatory Thinking'>Predatory Thinking</a>.
                All Dave's books are collections of anecdotes (although most of them are not personal ones), each with an important
             lesson to learn. In this book, those lessons are mostly on creativity. It was enjoyable to read and
             I recorded a list of ten or so new ideas or principles that I think will be helpful for life in general.
             I'm won't share them all here, (honestly, read the book yourself, you'll get more out of it), however the one I liked
             the most was; creative solutions are <i>usually</i> the combination of two separate and unrelated problems
             where somebody had the insight to spot the connection. The book is basically a long list of examples of that rule.</div>,
            url: "https://images-na.ssl-images-amazon.com/images/I/61QM16InAtL.jpg",
            again: false
        },
        {
            title: "Man's Search for Meaning",
            author: "",
            summary: "",
            url: "https://images-na.ssl-images-amazon.com/images/I/51CDTKBPNPL._SX304_BO1,204,203,200_.jpg",
            again: true
        },
        {
            title: "Philosophy for Life and Other Dangerous Situations",
            author: "",
            summary: "",
            url: "https://images-na.ssl-images-amazon.com/images/I/81tfI3V0i1L.jpg",
            again: false
        },
    ],
    year_2019: [
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            summary: "",
            url: "https://5.imimg.com/data5/WA/IN/MY-11183377/the-alchemist-500x500.png",
            again: true
        },
        {
            title: "One + One = Three",
            author: "Dave Trott",
            summary: "It's not a maths book, don't worry. Also see Creativity Blindness and Predatory Thinking by the" +
                " same author. I read this because I'd read Predatory Thinking and loved it. All Dave's books are collections" +
                " of stories and ancecdotes, each with a very real and important principle to be learned, about both creative" +
                " thinking, and life in general. I like the style too, it's easy to read and you can pick it up and start from" +
                " any point. Biggest takeaway? Too many. My favourite one" +
                " though is ...",
            url: "https://images-na.ssl-images-amazon.com/images/I/71KdHdOSDmL.jpg",
            again: false
        },
        {
            title: "Predatory Thinking",
            author: "Dave Trott",
            summary: "",
            url: "https://images-na.ssl-images-amazon.com/images/I/41b-De0hfOL.jpg",
            again: false
        },
        {
            title: "So Good They Can't Ignore You",
            author: "Cal Newport",
            summary: "",
            url: "https://images-na.ssl-images-amazon.com/images/I/61N-1FDy8VL.jpg",
            again: false
        },
        {
            title: "Deep Work",
            author: "Cal Newport",
            summary: "",
            url: "https://m.media-amazon.com/images/I/417yjF+Z5zL.jpg",
            again: false
        },
        {
            title: "The Subtle Art of Not Giving a Fuck",
            author: "Benjamin Franklin",
            summary: "",
            url: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg",
            again: true
        },
        {
            title: "The Autobiography of Benjamin Franklin",
            author: "Benjamin Franklin",
            summary: "",
            url: "https://images-eu.ssl-images-amazon.com/images/I/41-4LexfGeL.jpg",
            again: true
        },
        {
            title: "The Road Less Travelled",
            author: "Scott Peck",
            summary: "",
            url: "https://images-na.ssl-images-amazon.com/images/I/412aaCb5XjL._SX307_BO1,204,203,200_.jpg",
            again: true
        },
        {
            title: "Black Box Thinking",
            author: "Matthew Syed",
            summary: "",
            url: "https://m.media-amazon.com/images/I/41DQ+uumaQL.jpg",
            again: true
        },
        {
            title: "Unleash the Power of Storytelling",
            author: "Rob Biesenbach",
            summary: "",
            url: "https://images.yourstory.com/cs/wordpress/2019/01/Storytelling-cover.jpg?fm=png&auto=format",
            again: true
        },
        {
            title: "Super Thinking",
            author: "Gabriel Weinberg and Lauren McCann",
            summary: "",
            url: "https://images-na.ssl-images-amazon.com/images/I/81spHh95SwL.jpg",
            again: true
        },
        {
            title: "Zero to One",
            author: "Peter Thiel",
            summary: "",
            url: "https://images-na.ssl-images-amazon.com/images/I/71uAI28kJuL.jpg",
            again: true
        },
        {
            title: "Hackers and Painters: Big Ideas from the Computer Age",
            author: "Paul Graham",
            summary: "",
            url: "https://images-na.ssl-images-amazon.com/images/I/71lIhiT5rxL.jpg",
            again: true
        },
        {
            title: "iWoz: The Autobiography of the Man who Started the Computer Revolution",
            author: "Steve Wozniak",
            summary: "",
            url: "https://images-na.ssl-images-amazon.com/images/I/61BYxrrwqEL.jpg",
            again: true
        }
    ]
}

class Books extends React.Component {

    render() {

        return (
            <div style={{color: '#333333'}}>
                <div className='manrope' style={{padding: '50px'}}>
                    <h1>Reading List.</h1>
                </div>
                <div className='manrope' style={{paddingLeft: '50px', paddingRight: '50px'}}>
                    <p>Notes to myself on books I've read (since I started keeping track).</p>
                </div>
                <div className='manrope' style={{padding: '50px'}}>
                    <h3>2020</h3>
                </div>
                {books.year_2020.map(function (item, index) {
                    return (
                        <div style={{paddingLeft: '50px', paddingRight: '50px', paddingTop: '10px', paddingBottom: '10px'}}>
                            <Book title={item.title} author={item.author} summary={item.summary} url={item.url} again={item.again}/>
                        </div>
                    )
                })}
                <div className='manrope' style={{padding: '50px'}}>
                    <h3>2019</h3>
                </div>
                {books.year_2019.map(function (item, index) {
                    return (
                        <div style={{paddingLeft: '50px', paddingRight: '50px', paddingTop: '10px', paddingBottom: '10px'}}>
                            <Book title={item.title} author={item.author} summary={item.summary} url={item.url} again={item.again}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Books;