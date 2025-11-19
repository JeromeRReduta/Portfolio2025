import type { JSX } from "react";
import { Link } from "react-router";
import "../../shared/design/base.css";
import "../../shared/design/header.css";
import GithubSVG from "../../assets/github-mark.svg?react";
import LinkedInSVG from "../../assets/LinkedIn_icon.svg?react";

// /mnt/c/Users/JRRed/OneDrive/Desktop/Portfolio2025/src/assets/icons8-github-30.svg"

const svgLinkSideLength: number = 500;

export default function Header() {
    return (
        <header>
            <LocalLinks />
            <OffsiteLinks />
        </header>
    );
}

function LocalLinks(): JSX.Element {
    return (
        <nav className="local-links">
            <Link to="#">Welcome</Link>
            <Link to="#">Projects</Link>
            <Link to="#">Contact Me</Link>
        </nav>
    );
}

function OffsiteLinks(): JSX.Element {
    return (
        <nav className="offsite-links">
            <Link className="svg-link" to="https://github.com/jeromeRReduta/">
                <GithubSVG />
            </Link>
            <Link
                className="svg-link"
                to="https://www.linkedin.com/in/jeromerreduta/"
            >
                <LinkedInSVG />
            </Link>
        </nav>
    );
}

// function GithubSvg(): JSX.Element {
//     return (
//         <svg
//             className="header-svg"
//             fill="#1A1A1A"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 30 30"
//             width="30px"
//             height="30px"
//             strokeWidth="100px"
//         >
//             <path
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
//             />
//         </svg>
//     );
// }

// function LinkedInSvg(): JSX.Element {
//     return (
//         <svg
//             version="1.1"
//             id="Layer_1"
//             x="0px"
//             y="0px"
//             viewBox="0 0 36.099999 36"
//             width="36.099998"
//             height="36"
//         >
//             <defs id="defs11" />
//             <g id="g6">
//                 <g id="g4">
//                     <path
//                         d="M 33.3,0 H 2.7 C 1.2,0 0,1.2 0,2.6 V 33.4 C 0,34.8 1.2,36 2.7,36 h 30.7 c 1.5,0 2.7,-1.2 2.7,-2.6 V 2.6 C 36,1.2 34.8,0 33.3,0 Z M 10.7,30.7 H 5.3 V 13.5 h 5.3 V 30.7 Z M 8,11.1 C 6.3,11.1 4.9,9.7 4.9,8 4.9,6.3 6.3,5 8,5 c 1.7,0 3.1,1.4 3.1,3.1 0,1.7 -1.4,3 -3.1,3 z m 22.7,19.6 h -5.3 v -8.4 c 0,-2 0,-4.6 -2.8,-4.6 -2.8,0 -3.2,2.2 -3.2,4.4 v 8.5 H 14 V 13.5 h 5.1 v 2.3 h 0.1 c 0.7,-1.4 2.5,-2.8 5.1,-2.8 5.4,0 6.4,3.6 6.4,8.2 z"
//                         id="path2"
//                         inkscape:connector-curvature="0"
//                     />
//                 </g>
//             </g>
//         </svg>
//     );
// }
