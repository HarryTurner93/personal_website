import React from "react";

import CaptionedImage from "../components";

import small_nn_car_control_forces from "../../images/small_nn_car_control_forces.png";
import small_nn_car_control_sensors from "../../images/small_nn_car_control_sensors.png";
import small_nn_car_control_network from "../../images/small_nn_car_control_network.png";
import small_nn_car_control_track from "../../images/small_nn_car_control_track.png";
import small_nn_car_control_track_few from "../../images/small_nn_car_control_track_few.gif";
import small_nn_car_control_track_lines from "../../images/small_nn_car_control_track_lines.gif";
import small_nn_car_control_track_many from "../../images/small_nn_car_control_track_many.gif";
import small_nn_car_control_track_complete from "../../images/small_nn_car_control_track_complete.gif";
import small_nn_car_control_result from "../../images/small_nn_car_control_result.gif";

const small_car_control_content =
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
        </div>

export default small_car_control_content;