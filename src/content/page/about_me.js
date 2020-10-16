import React from "react";

import CaptionedImage from "../components";

import landsEnd from "../../images/lands-end.jpg";
import rov from "../../images/rov.jpeg";
import shepards from "../../images/shepards.jpg";

const about_me_content =
    <div>
        <p>
            Hi, I'm Harry, I'm a machine learning engineer at work, and
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
            I get to work on real problems in computer vision and robotics,
            where my work has a positive impact on the planet (95% of our business is in offshore wind).
        </p>
        <CaptionedImage image={rov} caption="An ROV equipped with a Rovco SubSLAM camera system for surveying in 3D."/>
        <p>
            This website isn't just a blog, it's a journal, a living document that I'll revisit and rewrite again
            and again. It's somewhere I can keep all my thoughts and ideas, somewhere to keep track of my
            progress, somewhere to reflect and write down things I've learned along the way. Although I'm doing it for me, I'm making it public in case anything here is of
            use to somebody else.
        </p>
        <CaptionedImage image={shepards} caption="Who said bike touring can't be done in style?"/>
    </div>

export default about_me_content;