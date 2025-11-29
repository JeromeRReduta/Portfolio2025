import type { JSX } from "react";
import "../../shared/design/base.css";
import styles from "../design/Welcome.module.css";
import NavArrow from "../../shared/components/NavArrow.tsx";
import useRandomMessage from "../stores/UseRandomMessage.tsx";
// import navArrowStyles from "../../shared/design/Nav-Arrow.module.css"; // TODO

export default function WelcomePage(): JSX.Element {
    const { message } = useRandomMessage();
    return (
        <section className={styles["welcome"]}>
            <WelcomeHeading randomMessage={message} />
            <Greeting />
            <NavArrow
                direction="DOWN"
                url="/projects"
                message="PROJECTS"
                flexJustify="flex-end"
                flexAlign="center"
            />
        </section>
    );
}

function WelcomeHeading({
    randomMessage,
}: {
    randomMessage: string;
}): JSX.Element {
    return (
        <div className={styles["heading"]}>
            <h1 className={styles["heading__i_am"]}>Jerome Reduta is...</h1>
            <h2 className={styles["heading__status"]}>{randomMessage}</h2>
        </div>
    );
}

function Greeting(): JSX.Element {
    return (
        <div className={styles["greeting"]}>
            <img
                className={styles["greeting__img"]}
                src="/src/assets/its-me.png"
                alt="hey that's me"
            />
            <div className={styles["greeting__blurb"]}>
                I'm a programmer from the University of San Francisco. Write
                code, refactor it, design it, present it, document it, test it -
                you name it, I can do it. My dream is to craft simple,
                beautiful, helpful things.
            </div>
        </div>
    );
}
