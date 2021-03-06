import React from "react";

const the_so_what_content =
    <div>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            This post describes my technique for handling (reading, digesting, & storing) articles and blog posts in
            a way that helps me keep track of the bigger picture, figure out the trends
            that underlie those articles, and link them together in a way that makes them easier to remember.
            It helps me extract the signal from the noise.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            <b>Why am I reading that much anyway?</b> I'm not going to argue for whether it's a good or bad thing to stay in
            the know, and maybe we are better off curtailing the information flow somewhat and focusing our attention
            on a few larger problems (that's usually how things get done by the way). However, I think it's fair to say
            that in most fields it helps to have a good idea of where 'the field is at', and where it is going.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            <b>Why does that help?</b> In my field at least, it helps me in the following ways.
            <ul>
                <li style={{marginTop:'10px', marginBottom:'10px'}}><i>I didn't know you could use it like that!</i> Sometimes I see applications of
            technology that I already knew, but in a way that I hadn't thought of before. Maybe I can use that trick
            in my own work.</li>
                <li style={{marginTop:'10px', marginBottom:'10px'}}><i>I didn't realise you could solve the problem that way!</i> Other times I see a problem I know well,
                    solved in a novel way.</li>
                <li style={{marginTop:'10px', marginBottom:'10px'}}><i>Ah this is just an extension of that.</i> I connect ideas, and develop a better understanding of both because
            of it.</li>
                <li style={{marginTop:'10px', marginBottom:'10px'}}><i>This says the complete opposite of that.</i> Finding two opposing and well written view points on the same problem
            is a good way to understand it better.</li>
                <li style={{marginTop:'10px', marginBottom:'10px'}}><i>This is just plain cool.</i> What's not to love.</li>
            </ul>
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            <b>A note on scope.</b> To be clear, what I describe here is my process for staying up to date
            in my field. I also subscribe and read lots of blogs by authors I like (not all technical),
            which I read because they're interesting, thoughtful, and well written. For those types of writings I
            read them as and when I feel like it. What I talk about here is a more mechanical
            process for triaging and absorbing useful information in my field, stuff that I should probably know about but
            isn't always that interesting to read.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            <b>The Problem.</b> There's just
            too much to read. There is so much going on, especially in the world of tech, that you can't stay on top of
            it all. It's also mostly noise.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            Nassim Taleb proposes an answer to this in his book Antifragile; very simply, stop consuming information.
            The best way to filter out the irrelevant is to let time do it for you, noise has a tendency to fade
            into insignificance. If you look back ten years ago, it is trivial to figure out what the important stuff
            was at the time, but it's only trivial <i>in hindsight.</i> Whilst I completely agree with Taleb,
            this leaves you with the option of only reading stuff that is at least ten years old, hardly helpful
            for staying at the front of your field...
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            <b>There must be a middle way.</b> I think the trick is to read as much as you can (or can be bothered to), but
            don't read in detail and don't try to remember specifics, instead I propose to adopt a system of getting to the
            core of the article, <i>the so what</i>, and connecting this to other articles you know in order to build up a map of
            connected ideas, this lets you see trends, patterns, and the significance of ideas, instead of isolated news stories.
            (That sounds grand when described like that, I'll be more specific next.).
        </p>

        <h3>The Technique</h3>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            <b>Sources of Information.</b> To begin, I assume that you have a number of sources for articles already, perhaps
            they are newsletters, or maybe the company Research Slack Channel. My only advice here is not to have too
            many, in my experience it's a case of 90% of the useful content comes from 10% of the sources, particularly
            those sources that already do some curation. On the
            other hand, I do recommend picking a few newsletters from <i>adjacent</i> disciplines. For example,
            my sources are: <a href="https://www.tldrnewsletter.com/">TL;DR</a>,
            <a href="https://thegradient.pub/subscribe/"> The Gradient</a>,
            <a href="https://ai.facebook.com/"> Facebook AI Research</a>,
            <a href="https://blog.google/"> Google Blog</a>,
            <a href="https://dataelixir.com/"> Data Elixir</a>,
            <a href="https://hackernewsletter.com/"> Hacker News</a>,
            <a href="https://www.nvidia.com/content/subscribe/nvidia/nvidia_newsletter_sg.asp"> NVIDIA Blog</a>,
            <a href="https://www.tomshardware.com/uk/news"> Toms Hardware</a>, &
            <a href="https://jack-clark.net/"> Import AI</a>.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            <b>First Triage Step.</b> Hopefully your information sources provide summaries of the articles, I skim these
            and try to figure out, firstly does it pique my interest, secondly is it relevant to one of my chosen topics to stay informed on.
            If it meets both those criterior, I open it in a new tab. Be ruthless here, don't open every link, be disciplined
            in selecting content relevant to you.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            <b>Second Triage Step.</b> Now you've got about twenty open tabs (or two hundred), I flick through each one and quickly skim
            it. If it's too salesy I delete it, if it looks (particularly) badly written I delete it, if it's not what
            I thought it was from reading the summary, I delete it. For all those that are left, I save to Instapaper,
            using their handy bookmarklet feature.
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            <b>Reading.</b>
            <ul>
                <li>Don't read the whole thing.</li> This is still a triage step, the summary and look of the article has
                earned your trust, now you skim the headings, the first lines of paragraphs, and see if it's still relevant.
                Be pragmatic here, don't read it start to finish.
                <li>You don't need to finish reading it. Although this sounds similar to the above point, I'm addressing
                a specific tendency (of mine) to feel like I need to finish an article once started. Don't fall into that trap.</li>
                <li>Connect it to what you know already. As you read, try and relate to other similar articles. For example,
                if reading about the performance of the new 3000 series NVIDIA Graphics Cards, how do they compare to the 2000 series.</li>
                <li>Figure out why it is significant. Signifiance here can mean different things, but as an example, the
                significance of the graphic card article might be that it's good enough to warrant upgrading your own later this year,
                or maybe you read that it doesn't perform well in a particular usecase that you need it to do. Essentially you want
                this article to provide a piece of evidence for some future decision you may need to make. As another example,
                I read <a href="https://www.thedrive.com/tech/36167/new-mario-kart-live-home-circuit-uses-augmented-reality-to-race-inside-your-home"> this article </a>
                this morning about playing Mario Kart in your living with augmented reality. I haven't played Mario Kart in a long
                time but I am interested in keeping a close on eye on the progress of AR and the art of the possible because I want
                    to make my own AR applications and games in the future. For me the significance is simply, <i>this is what is currently possible.</i></li>
                <li>Look for multiple layers of meaning, what might this cause, who might be affected; this can help you spot trends. As an example of what
                this means, the layers of meaning for the graphics card article might be that cheaper and more accessible compute is on the way, which
                makes training prohibitively large neural networks slightly less prohibitive. The layers of meaning for the Mario Kart article
                are that Nintendo are making bets on the AR industry, perhaps this is the way all games are going, will we see more games like this?
                More than that, the AR in Home Circuit (the game from the article) is interacting with the physical world, yes it's a game at the moment
                but what likely applications might also be possible with the same technology and who else might be looking at the same opportunities?</li>
            </ul>
        </p>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            <b>Summarising and Storing.</b> Finally, I summarise into a single sentence or two that captures the following.
            1) What was the article about, to remind you when you go back to it. 2) What is the <i>so what</i>, in other
            words why is the article worth storing and how does it connect to the other articles you've stored. If you
            can't find a strong enough <i>so what</i>, then you should revisit the article and think more carefully or simply
            don't save it. I store the summary and the link to the article in Evernote, and I put similar themed articles together.
        </p>
        <h3>Wrapping Up</h3>
        <p style={{textIndent: '30px', textAlign: 'left'}}>
            To wrap up, a word on benefits. As I said, I use this technique to triage, absorb, and store content that I feel like
            I should know about (for various reasons, but mostly to stay up to date). I like this technique because
            it forces me to distill the content and connect it to what I already know, which helps me find trends and develop
            my intuition and instinct for directions of technology, rather than try to memorise the specifics. I can always
            go back and find the specific article if I need to.
        </p>
    </div>

export default the_so_what_content;