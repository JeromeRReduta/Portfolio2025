// import type { JSX } from "react";
// import ArrowSvg from "../../assets/right-arrow.svg?react";
// import { Link } from "react-router";
// // import "../design/base.css"; // TODO
// // import styles from "../design/Nav-Arrow.module.css"; // TODO

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
