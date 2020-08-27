import React from "react";

import CaptionedImage from "../components";

import trask11 from "../../images/trask-11.png";
import neural_network_library_weight_init_no_technique
    from "../../images/neural_network_library_weight_init_no_technique.png";
import neural_network_library_example_text_output from "../../images/neural_network_library_example_text_output.png";
import neural_network_library_mnist from "../../images/neural_network_library_mnist.png";
import neural_network_library_training_validation_loss
    from "../../images/neural_network_library_training_validation_loss.png";
import neural_network_library_accuracy_function from "../../images/neural_network_library_accuracy_function.png";
import neural_network_library_accuracy_90 from "../../images/neural_network_library_accuracy_90.png";
import neural_network_library_quadratic_cost_class from "../../images/neural_network_library_quadratic_cost_class.png";
import neural_network_library_backprop_using_both from "../../images/neural_network_library_backprop_using_both.png";
import neural_network_library_cross_entropy_class from "../../images/neural_network_library_cross_entropy_class.png";
import neural_network_library_b2b_quadratic_cross_entropy
    from "../../images/neural_network_library_b2b_quadratic_cross_entropy_1.png";
import neural_network_library_activation_in_forward_pass
    from "../../images/neural_network_library_activation_in_forward_pass.png";
import neural_network_library_sigmoid from "../../images/neural_network_library_sigmoid.png";
import neural_network_library_upgraded_backprop_using_both
    from "../../images/neural_network_library_upgraded_backprop_using_both.png";
import neural_network_library_activation_functions from "../../images/neural_network_library_activation_functions.png";
import neural_network_library_weight_init_with_technique
    from "../../images/neural_network_library_weight_init_with_technique.png";
import neural_network_library_overfitting from "../../images/neural_network_library_overfitting.png";
import neural_network_library_regularisation from "../../images/neural_network_library_regularisation.png";
import neural_network_library_init_documentation from "../../images/neural_network_library_init_documentation.png";
import neural_network_library_search_parameter from "../../images/neural_network_library_search_parameter.png";
import neural_network_library_img_4248 from "../../images/neural_network_library_img_4248.png";

const neural_network_library_content =
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

export default neural_network_library_content;