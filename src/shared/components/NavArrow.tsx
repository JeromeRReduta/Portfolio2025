// import type { JSX } from "react";
// import ArrowSvg from "../../assets/right-arrow.svg?react";
// import { Link } from "react-router";
// // import "../design/base.css"; // TODO
import type { JSX } from "react";
import styles from "../design/NavArrow.module.css";
import { Link } from "react-router";
import ArrowSvg from "../../assets/right-arrow.svg?react";

// // import styles from "../design/Nav-Arrow.module.css"; // TODO
type Direction = "UP" | "RIGHT" | "DOWN" | "LEFT";
const map: Map<Direction, string> = new Map([
    ["UP", styles["nav_arrow__svg_up"]],
    ["RIGHT", styles["nav_arrow__svg_right"]],
    ["DOWN", styles["nav_arrow__svg_down"]],
    ["LEFT", styles["nav_arrow__svg_left"]],
]);
interface NavArrowProps {
    readonly direction: Direction;
    readonly url: string;
    readonly message: string;
}
export default function NavArrow({
    direction,
    url,
    message,
}: NavArrowProps): JSX.Element {
    const arrowClass: string = map.get(direction)!;
    return (
        <Link className={styles["nav_arrow"]} to={url}>
            <div className={styles["nav_arrow__message"]}>{message}</div>
            <ArrowSvg className={arrowClass} />
        </Link>
    );
}

// type Direction = "UP" | "RIGHT" | "DOWN" | "LEFT";
// interface NavArrowProps {
//     readonly direction: Direction;
//     readonly url: string;
//     readonly message?: string;
// }
// const map: Map<Direction, unknown> = new Map([
//     ["UP", styles["up-arrow"]],
//     ["RIGHT", styles["right-arrow"]],
//     ["DOWN", styles["down-arrow"]],
//     ["LEFT", styles["left-arrow"]],
// ]);

// export default function NavArrow({
//     direction,
//     url,
//     message,
// }: NavArrowProps): JSX.Element {
//     const arrowClassName = map.get(direction)!;
//     return (
//         <Link className="svg-link" id={styles["nav-arrow"]} to={url}>
//             {!!message && <div className="svg-link_message">{message}</div>}
//             <ArrowSvg className={arrowClassName} />
//         </Link>
//         // <Link className="nav-arrow-container" to={url}>
//         //     {!!message && <div className="nav-arrow-message">{message}</div>}
//         //     <ArrowSvg className={`nav-arrow ${className}`} />
//         // </Link>
//     );
// }
// // <Link className="svg-link" to="https://github.com/jeromeRReduta/">
// //     <GithubSVG />
// // </Link>
