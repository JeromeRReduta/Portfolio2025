import type { JSX } from "react";
import "../design/base.css";
import styles from "../design/NavArrow.module.css";
import { Link } from "react-router";
import ArrowSvg from "../../assets/right-arrow.svg?react";

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
