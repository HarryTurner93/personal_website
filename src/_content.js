import React from "react";

// Import images.
import small_nn_car_control_forces from "./images/small_nn_car_control_forces.png";
import small_nn_car_control_sensors from "./images/small_nn_car_control_sensors.png";
import small_nn_car_control_result from "./images/small_nn_car_control_result.gif";
import small_nn_car_control_network from "./images/small_nn_car_control_network.png"
import small_nn_car_control_track from "./images/small_nn_car_control_track.png";
import small_nn_car_control_track_complete from "./images/small_nn_car_control_track_complete.gif";
import small_nn_car_control_track_few from "./images/small_nn_car_control_track_few.gif";
import small_nn_car_control_track_lines from "./images/small_nn_car_control_track_lines.gif";
import small_nn_car_control_track_many from "./images/small_nn_car_control_track_many.gif";

import trask11 from "./images/trask-11.png"
import neural_network_library_accuracy_function from "./images/neural_network_library_accuracy_function.png"
import neural_network_library_activation_functions from "./images/neural_network_library_activation_functions.png"
import neural_network_library_activation_in_forward_pass from "./images/neural_network_library_activation_in_forward_pass.png"
import neural_network_library_b2b_quadratic_cross_entropy from "./images/neural_network_library_b2b_quadratic_cross_entropy_1.png"
import neural_network_library_backprop_using_both from "./images/neural_network_library_backprop_using_both.png"
import neural_network_library_cross_entropy_class from "./images/neural_network_library_cross_entropy_class.png"
import neural_network_library_example_text_output from "./images/neural_network_library_example_text_output.png"
import neural_network_library_img_4248 from "./images/neural_network_library_img_4248.png"
import neural_network_library_init_documentation from "./images/neural_network_library_init_documentation.png"
import neural_network_library_mnist from "./images/neural_network_library_mnist.png"
import neural_network_library_overfitting from "./images/neural_network_library_overfitting.png"
import neural_network_library_quadratic_cost_class from "./images/neural_network_library_quadratic_cost_class.png"
import neural_network_library_regularisation from "./images/neural_network_library_regularisation.png"
import neural_network_library_search_parameter from "./images/neural_network_library_search_parameter.png"
import neural_network_library_sigmoid from "./images/neural_network_library_sigmoid.png"
import neural_network_library_training_validation_loss from "./images/neural_network_library_training_validation_loss.png"
import neural_network_library_upgraded_backprop_using_both from "./images/neural_network_library_upgraded_backprop_using_both.png"
import neural_network_library_weight_init_no_technique from "./images/neural_network_library_weight_init_no_technique.png"
import neural_network_library_weight_init_with_technique from "./images/neural_network_library_weight_init_with_technique.png"
import neural_network_library_accuracy_90 from "./images/neural_network_library_accuracy_90.png"

import the_mentorship_scam_dom_testimonial from "./images/the_mentorship_scam_dom_testimonial.png"

import landsEnd from "./images/lands-end.jpg";
import rov from "./images/rov.jpeg";
import shepards from "./images/shepards.jpg";
import trainACar from "./images/train-a-car.png";

import website from "./images/website.jpg";

import neural_network_library_thumbnail from "./images/neural_network_library_thumbnail.png";

function CaptionedImage(props) {
  return (
      <div style={{paddingTop: '20px', paddingBottom: '20px', textAlign: 'center', width: '100%'}}>
        <img alt={props.caption} src={props.image} style={{maxWidth: '100%', margin: 'auto'}}/>
        <i><h6 style={{textAlign: 'center', paddingTop: '5px', width: '75%', margin: 'auto'}}>{props.caption}</h6></i>
    </div>
  )
}

const content = {
    object_detection_part_1:
        <div>
        </div>,
    about_me:
        <div>
            <p>
                Hi, my name's Henry, (although I also go by Harry). I'm a machine learning engineer at work, and
                a tinkerer at home. I'll do any project that looks like fun or if I think
                there's something to be learned. I also read a lot. The tech world can be exhausting,
                so to relax I get out into nature as much as I can, either on my gravel bike
                (who needs roads), or under the water in the UK coasts and quarries.
            </p>
            <CaptionedImage image={landsEnd} caption="Off-road cycle from Lands End to Bristol. That's me on the left."/>
            <p>
                I work at <a href="https://www.rovco.com/">Rovco</a>, a rapidly growing tech company in the
                off-shore renewables industry. Essentially an ROV (Remotely Operated Vehicle) and hydrographic
                survey company, but with a very strong R&D arm in 3D, AI, and autonomous robotics.
                <b> Why do I love it?</b> I get to work on real problems in computer vision and robotics,
                where my work has a positive impact on the planet (95% of our business is in wind farms).
            </p>
            <CaptionedImage image={rov} caption="An ROV equipped with a Rovco SubSLAM camera system for surveying in 3D."/>
            <p>
                This website isn't a blog, it's a journal, a living document that I'll revisit and rewrite again
                and again. It's somewhere I can keep all my thoughts and ideas, somewhere to keep track of my
                progress, somewhere to reflect and write down things I've learned along the way. It's basically
                the Wiki of me. Although I'm doing it for me, I'm making it public in case anything here is of
                use to somebody else.
            </p>
            <CaptionedImage image={shepards} caption="Who said bike touring can't be done in style?"/>
        </div>,
    small_nn_car_control:
        <div>
            <h3>Introduction</h3>
            <p>This project was about building a small neural network that could effectively control a virtual car 
                around a track. I thought it would be an interesting challenge, especially with all the hype surrounding
                self-driving cars at the moment. What this post demonstrates is how a very simple neural network is able
                to control a virtual car better than any manually written control system ever could!</p>
            <p>In this post I’ll cover the architecture of the neural network, the set of sensors used as input to the
                network and the training method which was a combination of randomised optimization and evolutionary algorithms.</p>
            <h3>Traditional Control vs Learning Algorithms</h3>
            <p>I could have used more traditional control methods by writing a set of rules
                for the car such as “<em>if there is nothing in front of me, accelerate hard”</em>, and <em>“if the wall
                    on the left stops then turn left”</em>.</p>
            <p>But imagine how this set of simple rules quickly grows into a large number
                of complex rules to account for every possible situation, e.g. “<em>if there is something rapidly
                    approaching in front of me and something to the right, but not to the left and I’m travelling
                    quickly, brake hard and turn left with a radius of…</em>” and so on.</p>
            <p>So why use a neural network? Well that’s the beauty of neural networks and
                other machine learning algorithms, rather than explicitly hard code the rules into our car, we give it
                the ability to learn the rules and let it figure them out on its own. It usually does a much better job
                then we could, and it saves us the effort!</p>
            <p>I’ve essentially transformed the problem from that of writing a set of
                rules to control a car into that of building a system capable of learning the rules on its own, and it
                turns out this second problem is <em>usually</em> easier to solve.</p>

            <h3>Sensors</h3>
            <p>I'll start with the car. The car physics models velocity and acceleration
                only. To control the car, the control system has two things it can do. First, it can apply a force to
                the car in the direction in which the car is facing. Think of this as the driving force from the engine,
                which gives the control system a way of accelerating the car. The force can also be negative allowing
                the control system to stop the car. To turn the car, the control system applies a positive/negative
                torque to the car about a center point.</p>

            <CaptionedImage image={small_nn_car_control_forces} caption="The two forces used to control the car."/>

            <p>The translational and rotational accelerations are calculated from the two
                forces using a specified mass and rotational inertia, and the position and rotation are calculated from
                these accelerations.</p>

            <p>The car has 5 sensors on it, which are all distances in pixels to the
                nearest wall in 5 different directions as shown in the picture below. These 5 distances form the input
                vector to the network.</p>


            <CaptionedImage image={small_nn_car_control_sensors} caption="The five sensor directions."/>

            <p>A big lesson that I learned while doing this project is how important it is
                to get the inputs to your network right. It doesn’t matter how complicated your network is, or how well
                you train it. If it doesn’t have any information about the environment, it won’t do very well.
                Intuitively, by choosing these 5 distances as input, I’m giving my network the ability to determine its
                position on the track, which is all it really needs to navigate properly. You can imagine the sensor
                input at the bottom right saying <em>"hey, you've got lots of space in this direction, you might want to
                    think about turning right soon!"</em></p>

            <h3>Network</h3>
            <p>The network is incredibly basic. The input layer has five inputs for each of
                the five sensors. These inputs pass through two fully connected layers, the hidden layer has three
                neurons and the output layer has two, one for the driving force of the car and one for the torque for
                turning. Both the hidden layer and the output layer have a sigmoid activation applied to them.</p>
            <p>There is nothing fancy about this network, no drop out, regularisation, or
                softmax layers. The outputs are used to directly control the car.</p>

            <CaptionedImage image={small_nn_car_control_network} caption="The Network Architecture."/>

            <h3>Training</h3>
            <p>Training our car to do a better job of navigating the track is a typical
                example of reinforcement learning. Every time our network makes a decision about which way to turn, or
                how fast to move, there is no immediate feedback telling it whether the decision was a good one. It only
                finds out at the end of the track, or when it crashes, where it receives a reward for how far it made it
                around the track.</p>
            <p>For example, if the car makes it 90% the way around the track before
                crashing, it receives a high reward. This reward tells the network that whatever it was doing to get the
                car so far along the track was probably the right thing to do! The challenge in reinforcement learning
                is trying to figure out exactly which actions the car took were good ones, and which ones caused it to
                crash. This is called the credit assignment problem.</p>
            <p>I'll talk about how I tackled this challenge next.</p>
            <CaptionedImage image={small_nn_car_control_track} caption="The Track. To calculate a reward for the car, I simply designed the track to
                start black and get bluer as it gets towards the end. When the car crashes, it just reads the blue
                component of the colour of the pixel below it and uses that as the reward. Therefore, cars who crash
                near the beginning get scores near 0, and those who crash near the end get scores closer to 255."/>


            <h3>Evolutionary Algorithms</h3>
            <p>I'll create fifty virtual cars. Every one of those cars has its own neural
                network brain, and I’ll give the weights of those networks random values between -1 and 1.</p>
            <p>Because each network is randomised, I don’t expect any of them to do a very
                good job of controlling the car.</p>

            <CaptionedImage image={small_nn_car_control_track_few} caption="The first 50 cars. Cars are represented as white dots because with fifty red triangles it
                would be hard to see what’s going on. Also, I use fifty because it's easier to see what's happening.
                Later I'll train with thousands."/>


            <p>Okay so not too bad, but then it's not a particularly difficult track.
                Notice that a lot of them crash almost straight away and most of them end up hovering around the start
                point. One or two however have begun to actually make their way around the track, but don't make it much
                further than the first corner.</p>
            <p>They're not impressing anybody with their performance at the moment, but
                here’s the important part, some cars made it further than others! This means that whatever values were
                used to initialise the weights in those cars produced neural networks that were slightly better at
                controlling the cars than those who crashed straight away.</p>
            <p>After every car in the batch has crashed, I take the car which made it the
                furthest (the car with the highest reward) and use it to generate a new population of one thousand cars.
                If I do this correctly, the new batch of cars will be similar enough to the previously winning car that
                they will on average, make it further than the cars in the previous batch. The cars would be getting
                better over time.</p>
            <p>Each new car is generated by duplicating the neural network of the winning
                car and adjusting every weight in its network by a very small random amount α. I can
                vary α to produce different results. If α is small, then most of the
                cars in the new batch will have similar behaviour. If α is large, then I’ll get lots
                of variation in behaviour.</p>


            <CaptionedImage image={small_nn_car_control_track_lines} caption="Similar Behaviour: After the first batch begins to die off, notice the long lines
            that form. I've switched from batch mode to a continuous stream and am using many more cars to illustrate the
            point more effectively. See Extensions below for more details."/>

            <CaptionedImage image={small_nn_car_control_track_many} caption="Varied Behaviour."/>


            <p>I repeat this process again and again, and in each new batch, there’s always at least one car that makes it
            further than before, so each new batch is better than the batch before it. Eventually, the cars make it
            around the entire track.</p>

            <CaptionedImage image={small_nn_car_control_track_complete} caption="Making it around the whole track.
            Note that I have switched to a much more complicated track with successively tighter turns."/>

            <h3>Implementation</h3>
            <p>The project was implemented in Java/Processing, a very useful sketchbook IDE
                with support for graphics, sounds, networking and much more.</p>
            <p>The neural network was implemented by hand with the forward pass carried out
                with usual matrix multiplication.</p>

            <h3>Extensions</h3>
            <p><b>Optimising Car Performance</b></p>
            <p>Once the cars have learned to complete the track, they stop learning, since
                I can’t give them a higher reward for making it any further, but just because they complete the track,
                doesn’t mean they did it well! To optimise their performance, I introduced a new reward, which was based
                on how quickly they completed the race. Faster cars got better rewards. With this new reward system,
                cars were incentivised to complete the race as quickly as possible which resulted in some very
                interesting behaviour such as taking the optimal path around bends.</p>

           <p><b>Batch vs Continuous</b></p>
            <p>In batch mode, a new population of cars is generated at the same time, and I
                have to wait for all the cars to crash before waiting for the next batch. This was a huge waste of
                resources. During training, I want as many cars on the track as I can! I changed the car generation
                procedure to generate a new car every time a car crashed, which kept the maximum amount of cars on the
                road at any one time. The new car was generated using the most recent “best car”.</p>

            <h3>Results</h3>
            <p>The training was a success! I trained the car for a substantial amount of
                time and for the rewards, I used both the distance progressed along the track as well as the speed at
                which the track was completed. Look at it go!</p>

            <CaptionedImage image={small_nn_car_control_result} caption="The Final Race."/>

            <h3>Conclusion</h3>
            <p>This project was a fun exercise in reinforcement learning. The neural
                network itself isn’t going to win any awards, but the method of training the car should be mildly
                interesting at the very least.</p>
            <p>The big take away for me is how a simple neural network of just two layers
                is able to give such incredible performance. Within the constraints of the car physics, it looks like
                the car’s performance is pretty near optimum.</p>
            <p>I hope you found this post interesting, I’ve made all the code available <a
                href="https://github.com/harryt93/neural-network-car">here</a>, note that you’ll need to download <a
                href="https://processing.org/download/">Processing </a>to run it.</p>
        </div>,
    making_this_website:
        <div>
            <p>Aim: Enough to be able to go and attempt building your own.</p>

        </div>,
    mentorship_scam:
        <div>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                A few months ago, I almost got tricked into joining a pyramid scheme. I don't consider myself
                someone who usually falls for that sort of thing but that's probably why I almost did.
                I'm writing this now because I thought it would be an
                interesting lesson worth sharing, mostly so that others don't also fall into the same trap. I'm writing
                it as a story, sprinkled throughout with some of my observations in hindsight. I hope you find it enlightening.
            </p>
            <h3>The Approach</h3>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                It all started with Toastmasters. Toastmasters is an international organisation of public speaking clubs,
                with clubs all around the world, including two in Bristol alone. The meetings are opportunities to
                practice and get better at public speaking, as well as to develop basic leadership skills by taking on
                different roles within the club. Toastmaster clubs attract a variety of people, but mainly they attract
                those looking to develop themselves in some way, and therefore it's not uncommon to find people there who
                read lots of books, deliberately push and stretch themselves, and who are generally open to new
                opportunities.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                I joined Toastmasters in September 2019. After having attended a few meetings, I ended up finally doing a short
                speech in which I introduced myself to the club, and during the speech, I mentioned a few interesting
                books I'd read along the way. During the short break
                afterwards, I was immediately approached by a guy about my age, he had a big grin on his face and introduced
                himself as Pete.</p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                <i>"I loved your speech".</i> He said. <i>"I wanted to say that I'm also a big reader, what
                have you read recently?"</i>
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                He seemed nice enough, and we quickly got talking about books, speeches, toastmasters, and self-development in general.
                After the meeting, the members moved to a nearby pub to catch up with each other, and Pete and I sat down in a corner.
                I asked what he was reading at the moment and he pulled out a book called "Outwitting the Devil", by Napolean Hill. I'd not
                read it, but I knew of the author. I asked him where he'd heard of it.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                <i>"My mentors recommended it to me".</i>
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                I was intrigued. <i>"Who are your mentors"?</i> I asked.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                <i>"Just a group of like-minded people all helping each other to improve, develop their finances, and achieve their goals." </i>
                 He stopped and waited as if expecting me to ask to join. I didn't know what to make of it, it was unusual,
                but I have to admit I was curious.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                <i>"That sounds.. interesting. What's it all about?"</i> I said, and then things really got interesting.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                Pete told me about a young couple called Dom and Karina Mckenna who live in Australia, they were in their early 30s and had
                already retired, having started <i>"building financial assets"</i> in their late 20s. They now lived a life of
                pleasure and adventure and spent their days realising their goals, reading books, travelling to exotic
                places, and generally living the lives of their dreams. Great for them I thought. Pete then told me how
                they were dedicating their lives to helping others also achieve that same life by developing their
                own <i>"financial assets"</i>, and that this was in the form of a mentorship group where those who had achieved results in the
                areas of your interest would help you do the same. I was intrigued by the assets, so I asked about them.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                <i>"All I can tell you is that my mentors are helping me to build my own business. I help other
                    companies set up their supply lines, and take a share of the profit"</i>, he said.
                    That didn't really explain much, that's just the definition of a franchise, I thought.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                <i>"Well, how's it going?"</i> I asked.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                <i>"I'm 2 years away from the point where my business will take care
                of itself, and then I'll be able to stop my job"</i>, he replied.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                It all sounded very impressive, and I'll be completely honest here, I wanted to get involved, so I asked. He paused for a
                second, then said, <i>"Well, I can't just invite you into the group. But if you're interested I can ask
                my mentors to see if they'd be willing to meet with you?"</i>
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                <i>"Please, that would be great"</i>, I replied.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                Pete smiled, <i>"Brilliant, I'll let you know what they say."</i>
            </p>

            <h3>Hook, Line, and Sinker</h3>

            <p style={{textIndent: '30px', textAlign: 'left'}}>I heard nothing for two weeks, then eventually I get a text from somebody called Jack.</p>
            <p style={{textIndent: '30px', textAlign: 'left'}}><i>Hi Harry it's Jack here, Pete asked me to give you a call as you were asking him lots of questions about our
            mentorship group. I'll be free for you to ring me back after 8pm this evening or Saturday after 3pm. Thanks!</i>
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                I requested the 8pm time slot. Notice the time slots are either evenings and weekends.
                This is always the case as they always have full-time jobs. So much for retirement.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                The two week delay was not the first time they made me wait, I'm now tempted to think that the long delays
                and the very specific timeslots are part of a psychological/sales strategy. Then again, he might just
                be a busy guy. As the day approached, I actually felt nervous, remember that I still knew basically
                nothing at this point. I expected the call to be some sort of initial interview, and the only questions
                I knew they'd be bound to ask were <i>"Why do you want to be in our mentorship group?"</i> and
                <i>"Why should we let you in?"</i>, so I prepared answers just in case.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                At 8pm, I called Jack, and as predicted, it was an interview. Jack mostly asked me questions about what kind
                of person I was, whether I set myself goals, and whether I achieved them. He asked what books I'd read and why,
                and what I did for a living. It wasn't a one-way chat, I asked him lots of questions in return and he answered them, he
                genuinely did seem friendly and all in all it was a fun conversation. I was struck by how young he was, he said he was 24, and having now
                researched him, I believe he was telling the truth. He seemed to be ambitious, sure of himself, cocky even, and that he
                knew what he wanted and was going after it. He seemed exactly how I expected someone part of such a
                mentorship group would be. I wasn't surprised, I've met lots of people like that.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                Naturally, I asked Jack lots of questions about the mentorship group, and in particular about these elusive
                <i>"financial assets"</i>, of course, he was just as vague as Pete had been. He did, however, tell me not to
                worry just yet,
                they didn't just share their secrets with anybody, they expect commitment first and then put you
                on what is effectively a training program. Fair enough, I thought. He asked whether I would be receptive
                to taking part in such a training program? I said yes, and meant it if it was going to teach me how I
                could get the same results.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                At this point, you might be thinking, <i>"Ha, what a naive fool, it's obviously too good to be true, I'd
                never fall for something like that!"</i> and you might be right. But let me try and explain what my state of mind
                was at the time so you can compare, although it's very difficult to do this after the fact.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                Basically, I was roped in
                by the idea of the mentorship scheme. Right now I'm very into self-development, and I'm not talking about the wishy
                washy self-help type stuff that has you chant <i>"I will be successful"</i> over and over every night, and hang
                dream boards all over your walls (I'm not judging that style of self-help, I'm just not into it), I mean instead
                that I read books on psychology because it's good to understand how people work, I joined toastmasters because
                I was crap at public speaking and wanted to get better, I'm doing a masters in my spare time because I want
                to learn more about Computer Science, etc. Essentially the normal self-development
                that most people are interested in at some point in their lives.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                Anyway,
                a natural idea in that world of thinking is that the best way of getting better at something is to have a mentor
                that is already an expert at that thing so that they can guide you, point out mistakes, and make your learning generally
                much more efficient. This is basically what all apprenticeships are, and it works very well. Want to get better at running?
                Go make friends with someone who is very good at running, runs regularly, and wins races. Then find out what they do and
                copy it. I'm not saying this works 100% every time but it's not a bad place to start. Also, I'm not advocating that you go
                around selfishly sucking value out of other people, I mean that you should go genuinely make friends and add value back to them so it's not all one way.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                Anyway, back to the point. I thought that this mentorship group would be something like that, that was how Jack and Pete described
                it, and that was why I jumped at the opportunity. The bit on the financial assets was actually secondary to me (honestly,
                even in hindsight!) because I'm not that bothered about retiring in my early 30s. Sure it would be nice, and
                I have days where I really can't be arsed to go to work, just like everyone else has days like that, but I generally
                enjoy my job and what I do, and I'd be quite happy to do it for a career. So the financial assets were intriguing, but
                only played a secondary role in my motivation to join the group.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                I think this partially explains why I didn't see it as a pyramid scheme, I wasn't looking at the financial aspect
                of it, and therefore my guard wasn't up. I just saw it as an opportunity to join a like-minded group of people.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                How could that ever be a scam?
            </p>
            <h3>The Second Interview</h3>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                At the end of the first call, Jack essentially told me that I'd passed.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                <i>"Harry, I think you'd be a good candidate to go on to the next stage"</i>, he said. <i>"Let's organise
                a video call this time with you, me, and Pete. Can you do a week on Saturday?"</i>
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                I said that I could, and we agreed to talk then. (Apparently, his previously available Saturday appointment had been filled..)
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                I waited the usual two weeks before I spoke to them again, and at the appointed time, I logged onto Zoom and joined the
                meeting Jack had setup. The first few minutes were filled with the usual small talk, what have I been up to, etc. But
                pretty soon the second interview began.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                In this section, I'll introduce the questions and how I interpreted them at the time, I'll also share
                with you my thoughts on them now, having seen similar discussions about them on the internet. By the way,
                these questions are absolute red flags to watch out for, they crop up again and again in
                all sorts of pyramid schemes.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                <b>Question 1.</b> How familiar was I with marketing methods? Okay this one was interesting, basically if I already knew what a multi-level marketing scheme was,
                or a pyramid scheme as they're more commonly known, then I'd have likely already known it was a scam, in which case,
                neither Jack nor Pete would waste their time with me and would quickly end the call. This is why they ask this first. I wasn't thinking
                anything along those lines at the time, I thought they were trying to get an idea of my business acumen (naive I know).
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                They
                specifically asked whether I knew anything about network marketing (another word for pyramid schemes),
                I said I didn't.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                <i>"That's okay, we'll teach you everything
                you need to know in the training scheme. It's actually a good thing because if you did know something already,
                we'd have to get you to unlearn it first because a lot of what common people think and understand about
                    network marketing is wrong."</i>
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                That should have been a red flag, they were basically saying, <i>"We're glad you don't know anything
                about our scam."</i> Being super naive I instead thought <i>"Oh that's a relief then."</i>
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                <b>Question 2.</b> What does your 10/10 life look like? This is the first of a set of questions designed
                to lead you to their desired outcome, getting you to sign up.
                What's the purpose of this question? At the time I thought it was just a behavioural interview question, designed to see how
                aspirational I was. What it actually does it get you to describe a desired goal state, ideally one you haven't
                already attained.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                I described mine. I actually tried to impress them by making sure it wasn't all about big houses and cars (mine genuinely isn't),
                I described how I wanted to build businesses to help people and make the world a better place with technology (that is genuinely my life goal).
                Anyway, they seemed happy with it, and why wouldn't they be, they don't care, they just wanted me to get a solid picture of it
                in my mind so I'd be more swayed by the later arguments. It's all just psychology.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                <b>Question 3. </b>Next, they asked me how far along I was towards that goal (out of 10), and whether I was moving towards it or not.
                Jack told me that his own original answer to that question was a 2.
                He described how the path he was on at the time wasn't going to take him where he wanted to be.
                For some reason I said 2 as well, I don't know if I was just saying what they wanted me to hear or not. It's easy to say this in
                hindsight, but I think in reality I'm more than a two, I'm quite happy with where I am right now and where I'm going, and although
                I might not end up with that perfect 10/10 life (most people don't and that's okay), I'd do well enough to be happy.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                Anyway, despite this, at the time I said what they wanted to hear, and I probably believed it too, maybe I was sucked into the moment
                of the interview. The question itself is supposed to make you feel stress and urgency by contrasting
                where your life is now, with where you want to be.
                If you accept the questions and your answers so far (and you should do because they're your answers), then you're basically admitting
                that you have this grand ambition that you've just spelled out, but at the moment you haven't achieved it, and aren't on the path to achieving it...
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                <b>Question 4. </b>Next they asked me whether I was an independent person, capable of making my own choices and decisions. This one
                was downright devious. First of all, who wouldn't say yes to that? Everyone wants to be their own person, make
                their own choices, and make their own mistakes. So naturally, I said yes, and backed it up with an example.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                Jack liked that answer, he said it was important to be an independent thinker, then he said that most people
                don't understand the value of a mentorship group and that family and friends might try and distract me and talk me
                out of it, it was important that I wouldn't be a sheep to their advice. Do you
                see how evil that is? They're preempting your family and friends seeing through the ruse when you tell
                them about it and warning you that it's a scam. They prime you to think <i>"They don't understand me, I'm
                independent and will make my own decisions thank you very much."</i> so that the advice falls on deaf ears.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                <b>Question 5. </b> Jack gave me the following analogy.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                <i>"Harry, would you be willing to shovel manure every single day for 2 hours a day, for 2 years,
                    without complaining, for a guaranteed payoff of a million pounds at the end?"</i>
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                This one is apparently a classic MLM question, so if you want one warning sign to
                take away from all this to protect yourself, it's to keep an eye out for this question. What they
                want you to admit to (and what I did actually admit to at the time), is that you are a person who can
                commit to something for the long term, even if it doesn't pay off for years. Not everybody has the
                will power to stick something out for two years with no upside, but most people want to
                believe that they are capable of delaying gratification in order to receive some larger future pay
                off (and most people are to some extent).
                What they're trying to gauge here however is how long
                you'll put up with their pyramid scheme (because there won't ever be a pay off, but the longer you do
                it, the more money they make).
            </p>

            <p style={{textIndent: '30px', textAlign: 'left'}}>
                <b>Question 6. </b>Next, they gave me a commitment test.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                <i>"Alright Harry, I've been impressed with your answers and I think my mentors would be happy for you to
                    proceed to the next stage and apply to the training programme. But listen, it turns out that Dom and
                    Karina are coming to London on Wednesday, they don't come to the UK that often and it would be great for your application if you could make it
                    to that meeting and introduce yourself."</i>
            </p>

            <p style={{textIndent: '30px', textAlign: 'left'}}>
                That was the first time in the whole process that I genuinely felt uneasy, I didn't twig
                that it was a scam, I just felt lazy, I didn't want the pressure of having to
                go to London, especially at such short notice and expense.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                I told Jack this and there was a short pause, then he said: <i>"Sorry to hear that Harry, this was kind of a test to see how
                committed you really were"</i>.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                Shit, I've failed, I thought.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                <i>"But we understand you've got lots going on. I've got some homework that we'd like
                you to do. Have you heard of the book Business of the 21st Century?"</i> I said I hadn't. <i>"It's a book by a
                financial guru called Robert Kiyosaki, it's a great read and will give you an introduction to some topics
                that I'd like to talk about with you next time. We'd like you to read it in three days, by Tuesday if you can, and we'll set up
                a call for then, how does that sound?"</i>
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                There it was. The archetypal symbol of the pyramid scheme, and the cover photo for this post, Business of the 21st Century.
                I'll come back to that later on, but for the moment I'll just say that I felt that same pressure and unease again. Not
                because I knew what the book was about, or because I'd figured out their scheme, but because I like working at my pace and
                I didn't want to have to read a book in three days, I had other stuff to do.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                It might have been that laziness that saved me, or perhaps deep down I wasn't as interested in this mentorship
                group as I thought, but whilst talking on the phone and Zoom had been fine, I was not super thrilled about
                starting to invest actual time and money into this, despite what I'd just said on the call.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                After the call finished, I just sat for a while and thought. I eventually decided, for the first time
                since the whole saga had begun, that I was not interested in pursuing it any further. I'm not just saying
                this in hindsight, I'm lucky that I genuinely felt this way. I remember going downstairs to talk to my
                girlfriend about it, I told her all about the call, and what they'd asked, and what they wanted me to do.
                She thought it all sounded a bit iffy. She's more pragmatic than I am.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                I said to her, <i>"I've already got a good thing going, I've got a
                good job, my life is on track, I honestly don't fancy spending the next two years of my life working
                towards this dream life, when in fact I'm not that far off that life already."</i> In the interview, I'd said
                I was a 2/10 for that life, but I think I was saying that to please them, because the more I thought about
                it, the more I realised it was a 7 or 8.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                I remember that at this point, I still genuinely believed that what they were doing was legitimate and that
                there was an actual pay off after working hard for 2 years, but it didn't sound interesting to me, it all
                sounded like marketing and sales, and I honestly just didn't think two years of that was worth an
                early retirement. That's true. I love what I do at work and if I wasn't working I'd be doing
                something similar in personal projects, maybe that's why I didn't have that motivation. I can completely
                understand how someone not in that position would be more tempted though.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                I made up my mind then and there that I wouldn't pursue it. I didn't plan to read the book, had
                no intention of going to London, and planned to let Jack and Pete know the next day.
            </p>

            <h3>Red Flags</h3>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                The next day, I received a text from Jack, it was a link to the PDF version of the book he'd asked me to
                 read. <i>Only</i> because I was curious, I downloaded the book and began to skim the first few pages. It was atrocious.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                It was one of the worst books I'd ever seen, and Robert Kiyosaki is supposedly a good author, I'd read one of
                his other books, Rich Dad Poor Dad, and I remember my impression of that book was that it was well written
                and made some good points, but this one...
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                If you value good books, books that are clearly thought out,
                with well-considered arguments, that are respectful of the reader, then you'd be pissed off by this book.
                It wasn't just that it was poorly written and full of retired cliche's, it was appealing to fear,
                trying to scare the reader into accepting it's arguments.
                I felt offended by it, and remember, at this point, I still believed that what Jack and Pete
                were doing was legitimate, even though I'd decided against it. I couldn't believe that
                this was the big secret that Jack wanted to share with me. I didn't read any more of it, I couldn't,
                so I googled it instead.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                On the first page of results, there were at least three entries with the word "SCAM" in them,
                I opened one and started to read, and everything clicked. Everything that I had been through was a pyramid scheme,
                and I'd almost fallen for it.
                I read more articles and started seeing my story repeated all over the internet, from the random
                approach by a stranger to the exact list of questions, and of course, the book.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                I felt angry, at myself and them. I was angry that I hadn't spotted what they were up to sooner, it takes
                a swipe at your pride when something like this happens. After reading about similar experiences online,
                I realised I certainly wasn't the only one, many people had not only fallen for the same initial approach but
                had gone further and even turned up to that first meeting. It turns out that there is <i>always</i> a
                meeting with the founding mentors that just happens to occur a few days after the second interview. Some people
                go to that and even start paying the subscription to join the mentorship group. They start attending the training
                programme, which of course, you have to pay for, and then they are themselves encouraged to start <i>selling</i> to
                more people and start the process all over again. At this point, the honourable ones understand what happened
                to them, drop out, and share their experiences with others so they can learn from them.
                Others clearly continue to propagate the illusion and
                screw up more lives. <a href="https://www.reddit.com/r/antiMLM/">Reddit's antiMLM subreddit</a> is full of examples of this.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                I'm glad I stopped before then, that's not because I knew better or was more resistant to their tricks, in fact,
                I fell for all of them. I was just lucky that
                I was in a position where what they had to offer wasn't attractive enough to me. I can clearly see
                how easy it would have been to continue, and how easily others can be sucked in.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                I realised that I now had the upper hand, they didn't know that I knew what they were up to, I thought maybe
                I could play along, waste their time, take them for a ride just like they had to me. It was definitely tempting.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                In the end, I just let the whole thing drop, it wasn't worth my while wasting any more time on them.
                I texted both Pete and Jack and told them I wasn't going to
                continue. I didn't tell them I'd figured out what they were up to, I just said I had other stuff going
                on and was too busy to start something new. Jack simply wished me luck, Pete never replied.
            </p>
            <h3>Lessons</h3>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                The most obvious lesson here is that a mentorship group dedicated to helping you build your assets is just
                another pyramid scheme, but that hardly helps me or others from falling for other more sophisticated tactics in the future. A more general
                lesson would be not to believe things that are too good to be true, but I knew that already and that didn't stop me from
                getting sucked in.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                After reading up quite a bit on MLMs, I want to share <a href="https://np.reddit.com/r/Edmonton/comments/57n0wd/avoid_acn_like_the_plague/d8tfrqv/">this reddit list</a> which summarises the signs to look for
                to spot an MLM. There are lots of such lists out there, and this mirrors my experience the closest. All the red flags from my experience that I now see with hindsight are present in this list.
                I think that even a passing familiarity with these signs, and having read my story (and others), will arm you
                with the knowledge needed to stop you from falling for their tricks.
            </p>
            <p style={{textIndent: '30px', textAlign: 'left'}}>
                The part that is the most confounding, is that the whole pyramid scheme is mixed with this mentorship and
                self-development philosophy. Proper adherents to the program don't ever talk about how they've managed to
                scam their <i>downline</i> into effectively paying for their lifestyle, they instead always talk about how
                the mentorship received has changed them, made them a better person, and how rewarding it's been to develop
                others in the same way. When the entire system is cloaked in this facade of altruistic intention, it's
                difficult to see what's truly going on.
            </p>
            <CaptionedImage image={the_mentorship_scam_dom_testimonial} caption="
            This type of message is repeated over and over. Do such people genuinely believe what they're saying or is it part of the scam? Who knows.
            [https://onlinemlmcommunity.com/peter-and-helen-mckenna-team-mak-amway-australia-diamonds/]"/>

            <p style={{textIndent: '30px', paddingTop: '20px', textAlign: 'left'}}>
                At the end of the day, they have no product to sell
                and no legitimate business model. The only revenue coming into the "business" comes from the pockets of the
                employees themselves. If those employees are all "retired" and living the lives of their dreams, then
                5 minutes of a basic economics class will prove to you that it simply cannot work.
            </p>
            <p style={{textIndent: '30px', paddingBottom: '100px', textAlign: 'left'}}>
                The only way a pyramid scheme can survive, is by roping in more unaware participants, therefore no matter how they may
                try and dress it up, it should always be possible to spot the fundamental warning signs ever-present beneath the lies.
            </p>
        </div>,
    neural_network_library:
        <div>
            <h3>Introduction</h3>
            <p>I built a neural network library using only python and numpy. It's capable of
                training networks with multiple layers using back propagation and gradient descent. The library has a
                range of activation functions, a range of cost functions, regularisation, smart weight initialisation,
                and more. It prints out pretty graphs of the accuracy or the loss, it creates lovely looking diagrams of
                your network, and is even able to optimise hyper parameters for you!</p>
            <p><b>Let me make a big disclaimer here.</b> My neural network library
                is certainly not the most efficient. Nor is it the most well written, nor easiest to use, nor does it
                have the most features. I certainly don't suggest that anyone actually tries to use it! Why then, have I
                bothered to write one?</p>
            <p>The answer is that, in my opinion, it's the single best way to truly learn
                how neural nets work; by building them up from the inside out. By writing the program using only numpy
                (and technically a plotting library too), I'm forced to implement my own algorithms for back
                propagation, gradient descent, batching, activation functions, regularisation, accuracy metrics and so
                on. My goal in this post is not to describe in detail how to do it, there are lots of great resources
                already out there that do that, I simply want to briefly describe the process I followed for solving
                this challenge and hopefully persuade you to attempt to write your own as well. Here is a brief summary
                of what's to come.</p>

            <h3>Contents</h3>
            <ul>
                <li><p><b>Making the Library</b></p>
                    <ul>
                        <li><p>The Basics</p></li>
                        <li><p>MNIST</p></li>
                        <li><p>Graph Output</p></li>
                        <li><p>Evaluation Functions</p></li>
                        <li><p>Cost Functions</p></li>
                        <li><p>Activation Functions</p></li>
                        <li><p>Regularisation</p></li>
                        <li><p>Weight Initialisation</p></li>
                        <li><p>Documentation</p></li>
                    </ul>
                </li>
                <li><p><b>Optional Extras</b></p>
                    <ul>
                        <li><p>Parameter Search</p></li>
                        <li><p>Drawing the Network</p></li>
                    </ul>
                </li>
                <li><p><b>Improvements</b></p></li>
                <li><p><b>Conclusion</b></p></li>
            </ul>

            <h3>Making the Library</h3>
            <h4>The Basics</h4>
            <p>The hardest part of the library is arguably the back propagation and gradient
                descent code itself. Mostly because without this you can't train a functioning network. Once you have
                the back propagation, gradient descent, and feed forward code working, you can train a network on a tiny
                toy dataset and prove that it learns. This is exactly what I did.</p>
            <p>I started with Andrew Trasks <a
                href="https://iamtrask.github.io/2015/07/12/basic-python-network/">neural network
                implementation</a> written in eleven lines of code (below). In those eleven lines he sets up a toy
                dataset, implements feed-forward, back propagation, gradient descent, and a loop that trains a tiny
                network for <b>60,000</b> epochs. Lines <b>1</b> and <b>2</b> define his
                toy dataset. Lines <b>3</b> and <b>4</b> initialise the weights, note that the input
                layer has <b>3</b> neurons, the hidden layer has <b>4</b> neurons, and the output
                layer has <b>1</b> neuron. Line <b>5</b> is the loop that will train the network
                over <b>60,000</b> epochs. Lines <b>6</b> and <b>7</b> describe the
                feed-forward logic, they calculate the output activations. Line <b>8</b> calculates the delta
                at the output using the first back propagation equation. Line <b>9</b> back propagates the
                deltas to the previous layer using the second back propagation equation.
                Lines <b>10</b> and <b>11</b> update the weights using the third back propagation
                equation. These eleven lines define the very core of the library.</p>

            <CaptionedImage image={trask11} caption="The 11 lines of code that builds and trains a neural network. By Andrew Trask. Source: https://iamtrask.github.io/2015/07/12/basic-python-network."/>

            <p>Once I had this basic implementation working, I started to build and abstract
                some of the details away into functions and classes. I did this by attempting to recreate Michael
                Nielsens neural network library described in his book, <a
                    href="http://neuralnetworksanddeeplearning.com/">Neural Networks and Deep Learning</a>. Firstly I
                abstracted Andrews code into a class and separated the functionality into different functions. In
                particular, I had a <b>back_propagation() </b>function that implemented one forward and
                backwards pass, a <b>weight_update()</b> function that implemented gradient descent and
                updated the weights for that pass, and a <b>train() </b>function that took care of running the
                code for <b>60,000</b> epochs. It's worth pointing out that the back propagation code above
                accepts batches of training examples and carries out the forward and backwards pass on the batch.
                Michael Nielsen also implements batching, but does it in a different way, he actually makes a forward
                and backwards pass for each instance and averages in the weight update function. Watch out for this.</p>
            <p>I upgraded the training function so that it would split incoming data into
                batches, carry out a weight update for each batch, and run through the entire dataset for a specified
                number of epochs. Although it wasn't an issue with the toy dataset defined in
                Lines <b>1</b> and <b>2</b> of the code above, trying to make a forwards and
                backwards pass on a batch with more than <b>1000</b> examples in it may consume too much
                memory. The batching step in the train function takes care of this and splits the data into batches
                of <b>1000</b> examples (or less). Note that each batch is processed in one go as per my
                comment above.</p>
            <p>I then moved the weight initialisation step to
                the <b>__init__()</b> function of the network class to allow my network to build arbitrary network architectures from a
                list of layer sizes.</p>

            <CaptionedImage image={neural_network_library_weight_init_no_technique} caption="The weight initialisation logic."/>

            <p>I then added biases in a very similar way to the weights. Finally, note that Andrews back propagation code
                actually prints the output error directly at the end of the forward pass. I abstracted this away into
                the <b>evaluate_loss()</b> function and updated the <b>train() </b>function so that
                at regular intervals it would evaluate and print the training loss and validation loss at that epoch.
                The output from the <b>train()</b> function now looks like the output below. (Note that if I
                use my new code to evaluate and print the training loss for every single batch, I would get the same
                output as from Andrews code, they are doing the same thing, the new code is just abstracted away into an
                evaluation function.)</p>

            <CaptionedImage image={neural_network_library_example_text_output} caption="Example progress output of the training and validation loss."/>

            <h4>MNIST</h4>
            The next step was to upgrade from the toy dataset to <a href="http://yann.lecun.com/exdb/mnist/">MNIST</a>,
            the hello world of machine learning.

            <CaptionedImage image={neural_network_library_mnist} caption="Samples from the MNIST
            dataset. Source: https://data.world/nrippner/mnist-handwritten-digits"/>

            <p>This turned out to be a simple process once the data had been moulded into
                the right shape. My network requires an array of arrays, for both the features and the labels. In other
                words, the correct shape for the MNIST training feature set would be
                (<b>50000</b>, <b>784</b>), and the training label set would have the shape
                (<b>50000</b>, <b>10</b>). I pass the training set into
                the <b>train()</b> function as a two tuple of features and labels.</p>

            <h4>Graph Output</h4>
            <p>My network was training perfectly well, and showing it's progress via a
                series of text updates. But it can be much more useful and convenient for the user if it's able to plot
                a graph of the training and validation loss against epochs, so I did. I used the external library <a
                    href="https://bokeh.pydata.org/en/latest/">Bokeh</a>, which makes plotting pretty graphs very
                convenient. I wrote a function called <b>plot_losses()</b> that accepts a list of training
                losses, a list of validation losses, and plots them on the same graph.</p>
            <p>I upgraded the <b>train()</b> function to take advantage of this
                new plotting function. Rather than print the training and validation losses at each evaluation step, I
                appended them to lists. At the end of training, I send these lists to <b>plot_losses()</b>.
                The below image shows you what the output looks like, in this case, the training loss is hidden behind
                the validation loss..</p>


            <CaptionedImage image={neural_network_library_training_validation_loss} caption="Example plot showing training and validation loss
            decreasing."/>

            <h4>Evaluation Functions</h4>
            <p>I wanted to compare my results to those in Michael's book, but he used an
                accuracy score, whilst I was calculating quadratic cost. To make the results comparable, I implemented
                an <b>evaluate_accuracy()</b> function and refactored my code so that the user is able to
                specify which metric they want to see when they train. The accuracy function is copied below.</p>


            <CaptionedImage image={neural_network_library_accuracy_function} caption="Evaluate accuracy function."/>

            <p>The <b>evaluate_accuracy() </b>function uses the feed forward pass
                to produce a series of predictions, it then compares these predictions to the actual answers and
                calculates the percentage that it got correct.
            Using this accuracy metric, I was able to show that my network was achieving an accuracy of 92%.</p>

            <CaptionedImage image={neural_network_library_accuracy_90} caption="'Proof' that the networks achieves accuracies of over 90%."/>

            <h4>Cost Functions</h4>
            <p>At that point, the user was able to specify whether they wanted to see
                accuracy output or evaluation loss output. The evaluation loss would be calculated using the quadratic
                cost, but arguably there is a better cost function, the cross entropy cost. I wanted to give the user a
                choice of which cost function to use.</p>
            <p>This was an exercise in refactoring, the cost function is used twice during
                training; the cost function itself is used when evaluating accuracy, but the derivative of the cost
                function is used in the backwards pass in back propagation. I abstracted the function away into a class
                which implements both the function and the derivative. (Technically it calculates the delta which goes a
                step further, but this is a small mathematical detail that makes the code nicer.)</p>


            <CaptionedImage image={neural_network_library_quadratic_cost_class} caption="The Quadratic Cost class."/>

            <p>I then adjusted the <b>__init__()</b> function to set a class
                variable when the class is created, specifying which cost function to use, and adjusted
                the <b>back_propagation()</b> algorithm to use the cost function stored in the class variable.
            </p>


            <CaptionedImage image={neural_network_library_backprop_using_both} caption="The algorithm uses the class cost function in the first line of the
            code."/>

            <p>So far my code doesn't actually do anything different, I've just shuffled the
                code around. But now it's trivial to create a new cost function class for cross entropy, and set the
                cost function to this new class if the user specifies it.</p>


            <CaptionedImage image={neural_network_library_cross_entropy_class} caption="The Cross Entropy Cost class."/>

            <p>To prove that it worked, here's a comparison of a network trained with
                quadratic cost and a network trained with cross entropy. In both cases I'm plotting the validation loss.
                (I'll explain how I implemented this back to back comparison shortly.)</p>


            <CaptionedImage image={neural_network_library_b2b_quadratic_cross_entropy} caption="Back to back comparison of networks trained
            with cross entropy and quadratic cost."/>

            <p>Lastly, it's worth mentioning that whole point of this is to learn, not just
                blindly implement. Michael Nielsen has a chapter on improving the way neural networks learn, including a
                whole section on why cross entropy is arguably a better cost function than the quadratic cost. It's
                definitely worthwhile reading that chapter whilst implementing these new features.</p>

            <h4>Activation Functions</h4>
            <p>Just as cost functions can be refactored into their own class, so can
                activation functions. Currently, the network is using a sigmoid function, which is fine, but there are
                lots of others out there that are arguably better. The cost function is used twice in the code, the
                function itself is used in the feed forward code, and the derivative is used in the backwards pass.</p>


            <CaptionedImage image={neural_network_library_activation_in_forward_pass} caption="The feed forward logic. See the activation
            function used to calculate the activations from Z."/>

            <p>Just as with the cost function, I abstracted the details into a class for the
                sigmoid function.</p>


            <CaptionedImage image={neural_network_library_sigmoid} caption="Sigmoid Activation class."/>

           <p>I then adjusted the code in the <b>__init__()</b> function to set a class variable indicating
            which activation function is to be used. I then upgraded the <b>back_propagation()</b> function to
            use which ever activation function was specified by the class variable.</p>

            <CaptionedImage image={neural_network_library_upgraded_backprop_using_both} caption="The last line in the code uses the class activation function."/>

            <p>Just as before, my code is not doing anything new yet, I've simply shuffled
                the code around. But now it's trivial to add new activation functions by defining a class for each. To
                define a new activation function you need to know the function and it's derivative. It's trivial to find
                these on the web, this user has implemented a few <a
                    href="https://codereview.stackexchange.com/questions/132023/different-neural-network-activation-functions-and-gradient-descent">here.</a> Although
                he has implemented them differently, the maths is the same.</p>
            <p>I implemented <b>tanh</b>, <b>arctan</b>,
                and <b>relu</b> activation functions. To show that they all work, here's a back to back
                comparison below. In each case I train a network using a different activation function, and plot it's
                validation loss as it trains.</p>
            <CaptionedImage image={neural_network_library_activation_functions} caption=""/>

            <p>Note that this is not a fair comparison because I should be adjusting the
                learning rate for each, but I just want to prove that the network does indeed learn. (Note also
                that <b>relu</b> isn't shown because it needs a drastically different learning rate, but I
                promise that it does work too.) Lastly it's worth pointing out that all of the activation functions are
                taking advantage of <b>numpys</b> vector maths, there are no loops involved. Trying to
                implement an activation function as a loop would be far too slow.</p>

            <h4>Regularisation</h4>
            <p>Phew, we're getting there! There are two more techniques I want to quickly
                discuss. The first is regularisation. Again, I'll point out that this is an opportunity to gain a deep
                understanding, and Michael Nielsen does an excellent job of
                describing <b>l1</b> and <b>l2</b> regularisation in his book. In fact, if you
                follow Michael's arguments to their conclusion, adding regularisation to the network library boils down
                to changing one line in the weight update function. Therefore it's easy to implement, but to gain the
                most from this, you need to understand why this line works.</p>


            <CaptionedImage image={neural_network_library_weight_init_with_technique} caption="The weight update rule
            including l2 regularisation."/>

            <p>I actually only implement <b>l2</b> regularisation, but it wouldn't
                be too difficult to add <b>l1</b> regularisation as well. Again, I allow the user to specify a
                coefficient when the network is created, which is stored in a class variable. If you know what
                regularisation does then the graph below should demonstrate that my network is indeed being regularised.
                The first graph shows that the network is over fitting (training accuracy high, validation accuracy
                low). The second graph shows that the network is being slightly regularised, the gap between the
                training and validation accuracy isn't as great. Also, I'm only using <b>1000</b> of
                the <b>50,000</b> MNIST training images, to make the over fitting more obvious.</p>


            <CaptionedImage image={neural_network_library_overfitting} caption="Over fitting. The gap between the training and validation accuracy is high."/>

            <CaptionedImage image={neural_network_library_regularisation} caption="Regularisation. The gap between the training and validation accuracy is smaller."/>

            <h4>Weight Initialisation</h4>
            <p>The last technique I implement is weight initialisation, another of those
                small tweaks that can make a big difference. In the same way that I've implemented all of these new
                features, I used Michael's book to thoroughly understand the theory, and eventually it all boiled down
                to changing one line of code in the <b>__init__()</b> function. The weight update is now done
                by the following line of code, note the new square root.</p>


            <CaptionedImage image={neural_network_library_weight_init_with_technique} caption="New weight initialisation code."/>

            <h4>Documentation</h4>
            <p>No library is complete without a set of documentation to accompany it. I
                created a <b>jupyter</b> <b>notebook</b> to do it. This was the first time I had
                ever created documentation, so I followed the example set by <b>sklearn</b> in their online
                docs. I separate the documentation out into two sections, the data section and the functions. The data
                section discusses what format the data is required to be fed into the library, since it is a very
                important first step that needs to be done correctly before the library can be used. The next section
                goes through each of the functions in the library in turn. For each function, the documentation shows
                the format of the function call, explains each of the parameters, tells you what values are expected for
                the parameter and whether it's optional or not. If the function returns output, the output is explained
                as well. See an example below of a section of the documentation for
                the <b>__init__()</b> function.</p>


            <CaptionedImage image={neural_network_library_init_documentation} caption="Example documentation entry for
            the init() function."/>

            <p>Lastly, a complete example of the use of the library in it's own jupyter
                notebook is provided alongside the documentation showing each of the functions being used in turn.</p>

            <h2>Optional Extras</h2>
            <p>The next two features are not core parts of the library, they're fun little
                add-on functions that offer useful extra tools for the user. I won't explain how I implemented them, I
                simply want to demonstrate that there is a lot of scope for adding cool features to your library.</p>

            <h4>Parameter Search</h4>
            <p>This is the first of the little extra functions that I wanted to throw in. It
                takes a set of model and training parameters, as well as a search parameter and a series of search
                values. The function then trains a number of networks using the different values for the search
                parameter, and plots the validation loss for each of those network training sessions on one graph. The
                image below shows one such search where the regularisation coefficient
                for <b>l2</b> regularisation has been varied between three values.</p>


            <CaptionedImage image={neural_network_library_search_parameter} caption="Output from search_parameter() when looking at three values for
            the regularisation coefficient."/>

            <p>The function allows the user to easily try out a range of values for a
                particular parameter. This is also a great educational tool for my own use as I can play with features
                of the network and see the results immediately. Note that I didn't get around to implementing a full
                grid search, although this wouldn't be too much of a step up from what I've done above.</p>

            <h4>Drawing the Network</h4>
            <p>This is the second fun little function that I wanted to throw in.
                Calling <b>draw_network()</b> on your network object will draw a pretty picture of the
                architecture just like the one in the image below.</p>


            <CaptionedImage image={neural_network_library_img_4248} caption="Example of the output from the draw_network() function."/>

            <p>There are couple of ways to do this, arguably the easiest is to represent
                each neuron in the network as an object and keep track of the weights coming into and out of it. But
                this would have become quite lengthy and I wanted to keep everything within one function so my
                implementation involves playing around with array slicing to select the right numbers of neurons in each
                layer. The function is able to handle any architecture, although layers with more
                than <b>100</b> neurons don't look very good since the weights become hard to see at that
                point. The neurons themselves resize themselves based on the largest layer, ensuring that the network
                always looks right. I'll admit it's not a particularly useful function, but at the very least it allowed
                me to generate the featured image for this post.</p>

            <h4>Improvements</h4>
            <p>I decided to leave the project here as I have other projects I want to get on
                with, however I do intend to return to it in the future and add a few more features in, which I'll
                briefly describe now.</p>

            <ul>
                <li><p>Currently there is no support for using different activation functions
                    at different layers, therefore if I want to use a <b>relu</b> activation layer, I'm forced
                    to use it at every layer making regression tasks difficult.
                </p></li>
                <li><p>I'd like to implement more advanced weight initialisation techniques
                    such as <b>Xavier</b> initialisation and <b>He</b> initialisation.
                </p></li>
                <li><p>I'd also like to add <b>batch</b>
                    <b>normalisation</b>. Whereas the concept is fairly simple,
                    the <b>back_propagation()</b> algorithm will need to be amended to account for the batch
                    normalisation layers.
                </p></li>
            </ul>

            <h4>Conclusion</h4>
            <p>Overall, this was a great project, and a lot of fun. Although there were some
                very stressful moments, I learned a lot about the ins and outs of how some of the most popular
                techniques in deep learning actually work. I'll reiterate here that the whole thing was a training
                exercise, and therefore was successful. I used Michael Nielsens book very heavily, as well as a few
                other resources, I'd like to come back to this in the future and add some new techniques to it as well.
                This is an exercise that I'd recommend someone do if they really want to understand the nitty gritty
                details of how neural networks really work.</p>
        </div>
};

const blogPosts = [
    {
        title: "The Mentorship Scam",
        url: "mentorship_scam",
        thumbnail: "https://images-na.ssl-images-amazon.com/images/I/51ojLicqjBL._SX329_BO1,204,203,200_.jpg",
        summary: "I was approached with a too-good-to-be-true opportunity that turned out to be a pyramid scheme. I " +
            "didn't think I was the sort of person to fall for that sort of thing but I almost did. This post briefly explains " +
            "what happened, why it was effective, and how to not fall for the same trick.",
        date: "21st May 2020",
        html: content.mentorship_scam
    },
]

const projectPosts = [
    {
        title: "Making this Website",
        url: "making_this_website",
        thumbnail: website,
        summary: "",
        date: "27th April 2020",
        html: content.making_this_website
    },
    {
        title: "Building a Neural Network Library from Scratch",
        url: "neural_network_library",
        thumbnail: neural_network_library_thumbnail,
        summary: "I discuss how I built a neural network library from scratch, using only numpy.",
        date: "30th April 2018",
        html: content.neural_network_library
    },
    {
        title: "Small Neural Network for Car Control",
        url: "small_nn_car_control",
        thumbnail: trainACar,
        summary: "In this project, I use genetic algorithms to train a small neural network to control a virtual car around a track.",
        date: "13th September 2017",
        html: content.small_nn_car_control
    },
]

const specialPosts = {
    about: {
        title: "About Me.",
        html: content.about_me
    }
}

const knowledgePosts = {
    object_detection_1: {
        title: "Problem Formation and Metrics",
        url: "object_detection_part_1",
        html: content.about_me
    },
    object_detection_2: {
        title: "Two Stage Detectors: R-CNN to Mesh R-CNN",
        url: "object_detection_part_2",
        html: content.about_me
    },
    object_detection_3: {
        title: "Single Stage Detectors: SSD to RetinaNet",
        url: "object_detection_part_3",
        html: content.about_me
    },
    object_detection_4: {
        title: "The State of the Art (as of 2019)",
        url: "object_detection_part_4",
        html: content.about_me
    }
}

export { blogPosts, projectPosts, specialPosts, knowledgePosts };