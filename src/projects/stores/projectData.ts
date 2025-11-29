import type Project from "../entities/Project.ts";
import morScoreSrc from "../../assets/MorScoreCropped.png";
import bookBuddySrc from "../../assets/BookBuddyCropped.png";
import marketSrc from "../../assets/DbPicByFullstackCropped.png";
import searchEngineSrc from "../../assets/SearchEngineMVCCropped.png";
import portfolioSrc from "../../assets/its-me.png";

const morScore: Project = {
    id: 0,
    imageSrc: morScoreSrc,
    title: "MorScore",
    description: `A capstone project done for Fullstack Academy. It attempts to solve "the greatest root problem plaguing
    the world today:" bad words. Input a text file and get a moral score
    (MorScore) rating for it.`,
    link: "https://github.com/JeromeRReduta/MorScore",
};

const bookBuddy: Project = {
    id: 1,
    imageSrc: bookBuddySrc,
    title: "Book Buddy",
    description: `A frontend book catalog site. Supports viewing books from a provided database, signing in, reserving books, and 
    returning books.`,
    link: "https://github.com/JeromeRReduta/2412.BookBuddy/",
};

const market: Project = {
    id: 2,
    imageSrc: marketSrc,
    title: "Market",
    description: `Simulation of the backend of a shop website. Runs CRUD operations based on people logging in, registering, and adding
    a product to their cart.`,
    link: "https://github.com/JeromeRReduta/2412.Market",
};

const searchEngineMVC: Project = {
    id: 3,
    imageSrc: searchEngineSrc,
    title: "Search Engine MVC",
    description: `A search engine built in Java.`,
    link: "https://github.com/JeromeRReduta/project-JeromeRRedutaMVC",
};

const portfolio2025: Project = {
    id: 4,
    imageSrc: portfolioSrc,
    title: "Portfolio",
    description: "This site!",
    link: "./",
};

const projectData: Project[] = [
    morScore,
    bookBuddy,
    market,
    searchEngineMVC,
    portfolio2025,
];

export default projectData;
