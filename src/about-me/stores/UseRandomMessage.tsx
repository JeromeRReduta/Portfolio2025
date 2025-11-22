import { useEffect, useEffectEvent, useState } from "react";

const randomMessages = [
    "crafting simple, beautiful things",
    "wondering why their code didn't work",
    "wondering why their code DID work",
    "(unfortunately) playing League of Legends",
    "cooking up the worst pun imaginable",
    "building another project",
    "dying in a survival game",
    "trying to live their best life",
    "creating another system design",
    "automating something in Minecraft...again",
    "searching for the the one typo",
    "learning about horse racing through anime somehow",
    "trying to play DND",
    "learning a new way to design code",
    "trying something they learned less than an hour ago",
];

export default function useRandomMessage(): {
    message: string;
} {
    const UNINITIALIZED = -1;
    const [selectedI, setSelectedI] = useState<number>(UNINITIALIZED);
    const getRandomMessage = useEffectEvent(() => {
        // ty https://www.reddit.com/r/react/comments/1oifd5o/calling_setstate_synchronously_within_an_effect/
        let newI = selectedI;
        while (newI === UNINITIALIZED || newI === selectedI) {
            newI = getRandomInt(0, randomMessages.length - 1);
        }
        setSelectedI(newI);
    });
    useEffect(() => getRandomMessage(), []);
    return {
        message: selectedI >= 0 ? randomMessages[selectedI] : "",
    };
}

// Copied from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
