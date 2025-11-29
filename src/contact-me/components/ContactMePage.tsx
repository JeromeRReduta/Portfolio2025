import type { JSX } from "react";
import EmailSvg from "../../../src/assets/email.svg?react";
import { Link } from "react-router";
import NavArrow from "../../shared/components/NavArrow";
import "../../shared/design/base.css";
import styles from "../design/ContactMe.module.css";

export default function ContactMePage(): JSX.Element {
    return (
        <section className={styles["contact_me"]}>
            <NavArrow
                direction="UP"
                url="/projects"
                message="PROJECTS"
                flexJustify={"flex-start"}
                flexAlign={"center"}
            />
            <ContactMeForm />
        </section>
    );
}

function ContactMeForm(): JSX.Element {
    return (
        <Link
            className={styles["contact_me__link"]}
            to="mailto:jrreduta@yahoo.com"
        >
            <div className={styles["contact_me__message"]}>Email me</div>
            <EmailSvg className={styles["contact_me__svg"]} />
        </Link>
    );
}

// nav-arrow
// return (
//     <Link className={styles["nav_arrow"]} to={url} style={extraStyles}>
//         <div className={styles["nav_arrow__message"]}>{message}</div>
//         <ArrowSvg className={arrowClass} />
//     </Link>
// );

// contact form
// <Link
//     className="contact-link svg-link svg-base"
//     to="mailto:jrreduta@yahoo.com"
// >
//     <div className="contact-message">E-mail Me</div>
//     <EmailSvg className="email-svg" />
// </Link>
