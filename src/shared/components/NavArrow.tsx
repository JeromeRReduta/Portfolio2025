import type { JSX } from "react";
import ArrowSvg from "../../assets/right-arrow.svg?react";
import { Link } from "react-router";

type Direction = "UP" | "RIGHT" | "DOWN" | "LEFT";

interface NavArrowProps {
    readonly direction: Direction;
    readonly url: string;
}

export default function NavArrow({
    direction,
    url,
}: NavArrowProps): JSX.Element {
    let className: string;
    switch (direction) {
        case "UP":
            className = "up-arrow";
            break;
        case "RIGHT":
            className = "right-arrow";
            break;
        case "DOWN":
            className = "down-arrow";
            break;
        case "LEFT":
            className = "left-arrow";
            break;
        default:
            throw new Error("this is literally never supposed to run");
    }
    return (
        <Link to={url}>
            <ArrowSvg className={className} />
        </Link>
    );
}
