import type { JSX } from "react";
import "../../shared/design/base.css";
import "../design/about-me.css";
import NavArrow from "../../shared/components/NavArrow";
import useRandomMessage from "../stores/UseRandomMessage";

export default function AboutMePage(): JSX.Element {
    const { message } = useRandomMessage();
    return (
        <section id="about-me">
            <AboutMeHeading randomMessage={message} />
            <Greeting />
            <NavArrow direction="DOWN" url="/projects" message="PROJECTS" />
        </section>
    );
}

function AboutMeHeading({
    randomMessage,
}: {
    randomMessage: string;
}): JSX.Element {
    return (
        <div className="about-me-heading">
            <h1>Jerome Reduta is...</h1>
            <h2 className="random-message">{randomMessage}</h2>
        </div>
    );
}

function Greeting(): JSX.Element {
    return (
        <div className="greeting">
            <img
                className="pic-of-me"
                src="/src/assets/its-me.png"
                alt="hey that's me"
            />
            <div className="intro">
                I'm a programmer from the University of San Francisco. Write
                code, refactor it, design it, present it, document it, test it -
                you name it, I can do it. My dream is to craft simple,
                beautiful, helpful things.
            </div>
        </div>
    );
}
