import type { JSX } from "react";
import NavArrow from "../../shared/components/NavArrow";
import EmailSvg from "../../../src/assets/email.svg?react";
import { Link } from "react-router";
import "../../shared/design/base.css";
import "../design/contact-me.css";

export default function ContactMePage(): JSX.Element {
    return (
        <section id="contact-me">
            <NavArrow direction="UP" url="/projects" message="PROJECTS" />
            <ContactForm />
        </section>
    );
}

function ContactForm(): JSX.Element {
    return (
        // TODO: make it so that on hovering the LINK (not the contents), all contents turn to accent color
        <Link
            className="contact-link svg-link svg-base"
            to="mailto:jrreduta@yahoo.com"
        >
            <div className="contact-message">E-mail Me</div>
            <EmailSvg className="email-svg" />
        </Link>
    );
}
