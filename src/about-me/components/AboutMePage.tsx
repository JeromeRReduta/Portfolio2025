import type { JSX } from "react";
import "../../shared/design/base.css";
import "../design/about-me.css";

export default function AboutMePage(): JSX.Element {
    return (
        <section id="about-me">
            <AboutMeHeading
                randomMessage={"SUPPOSED TO REMOVE THIS PLACEHOLDER"}
            />
            {/*TODO - literally make a thing that changes random message every 15 seconds*/}
            <PicOfMe />
            <Intro />
        </section>
    );
}

function AboutMeHeading({
    randomMessage,
}: {
    randomMessage: string;
}): JSX.Element {
    return (
        <>
            <h1>Jerome Reduta is...</h1>
            <h2 className="random-message">{randomMessage}</h2>
        </>
    );
}

function PicOfMe(): JSX.Element {
    return (
        <img
            className="pic-of-me"
            src="/src/assets/its-me.png"
            alt="hey that's me"
            width="400px"
            height="400px"
        />
    );
}

function Intro(): JSX.Element {
    return (
        <div className="intro">
            I'm a programmer from the University of San Francisco. Write code,
            refactor it, design it, present it, document it, test it - you name
            it, I can do it. My dream is to craft simple, beautiful, helpful
            things.
        </div>
    );
}
