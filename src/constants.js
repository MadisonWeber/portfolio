import FlitterImg from "./photos/flitter.jpg";
import AdriftImg from "./photos/adrift-pic.jpg";
import EnjoiImg from "./photos/enjoi-pic.jpg";
import HousePricesImg from "./photos/data-science1.png";
import HockeyImg from "./photos/data-science2.png";

const CATEGORIES = {
  ALL: "All",
  APPS: "Applications",
  DATASCIENCE: "Data Science",
  LANDINGPAGES: "Landing Page",
};

export const ALL_PROJECTS = [
  {
    name: "Adrift Website",
    category: CATEGORIES.LANDINGPAGES,
    tags: null,
    img: AdriftImg,
    link: "https://adrift-clone.netlify.app/",
    githubLink: "https://github.com/MadisonWeber/adrift-clone",
    description:
      "This was the first website i ever made. Using HTML CSS and Javascript, i cloned Adrift Skateboardings landing page.",
    metaData: null,
  },
  {
    name: "Enjoi Website",
    category: CATEGORIES.APPS,
    tags: null,
    img: EnjoiImg,
    link: "https://enjoi-clone.netlify.app/",
    githubLink: "https://github.com/MadisonWeber/enjoi_skateboarding",
    description:
      "Using HTML, CSS and Javascript, this is a mock website for a popular skateboarding company. It includes a shopping cart and a slideshow.",
    metaData: null,
  },
  {
    name: "Predicting Housing Prices",
    category: CATEGORIES.DATASCIENCE,
    tags: null,
    img: HousePricesImg,
    link: "https://www.kaggle.com/madison88/top-5-house-price-pred-xgboost-neuralnet-glmnet",
    githubLink: null,
    description:
      "This is a notebook i wrote in R-Markdown, showing the data-wrangling and modelling performed for my submission in the Kaggle competition HousePrices: Advanced Regression Techniques. At the time, it was in the top 5% of all entries.",
    metaData: null,
  },
  {
    name: "Flitter--MERN Twitter Clone",
    category: CATEGORIES.APPS,
    tags: null,
    img: FlitterImg,
    link: "https://flitter.netlify.app/",
    githubLink: "https://github.com/MadisonWeber/flitter--fake-twitter",
    description:
      "Full Stack MERN twitter clone. Rest-Api written in Express, utilizing a MongoDB database and leveraging mongoose. Password encryption with bcrypt. React Frontend utilizing axios to fetch data. After authorization user can write and post tweets, comment on others tweet and like others tweets. User has follow/unfollow functionality, and the ability to upload a profile picture. User can navigate to their profile and see all their tweets, followers and liked tweets.",
    metaData: null,
  },
  {
    name: "Modelling NHL Expected Goals",
    category: CATEGORIES.DATASCIENCE,
    tags: null,
    img: HockeyImg,
    link: "https://www.kaggle.com/madison88/nhl-expected-goals-model-and-heat-maps",
    githubLink: null,
    description:
      "This is a notebook i wrote in R-Markdown, it analyzes NHL play-by-play data, visualizes trends, and uses multiple modelling techniques to calculate the probability of any shot in the NHL turning into a goal.",
    metaData: null,
  },
];

export const SEARCHSTATES = {
  ALL: "ALL",
  APPS: "APPS",
  DATASCIENCE: "DATASCIENCE",
  LANDINGPAGES: "LANDINGPAGES",
};
