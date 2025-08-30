import React, { useState } from "react";
import FlitterCard from "../components/Cards/FlitterCard";
import JimmysCard from "../components/Cards/JimmysCard";
import EnjoiCard from "../components/Cards/EnjoiCard";
import AdriftCard from "../components/Cards/AdriftCard";
import HousePricesCard from "../components/Cards/HousePricesCard";
import NhlGoalsCard from "../components/Cards/NhlGoalsCard";
import WineQualityCard from "../components/Cards/WineQualityCard";
import EasyBankCard from "../components/Cards/EasyBankCard";
import RoomCard from "../components/Cards/RoomCard";
import BookmarkCard from "../components/Cards/BookmarkCard";
import HuddleCard from "../components/Cards/HuddleCard";
import { motion } from "framer-motion";
import "../css/portfolio.css";
import { ALL_PROJECTS } from "../constants";
import PortfolioCard from "../components/PortfolioCard";

const SEARCHSTATES = {
  ALL: "ALL",
  APPS: "APPS",
  DATASCIENCE: "DATASCIENCE",
  LANDINGPAGES: "LANDINGPAGES",
};

const Portfolio = () => {
  const [searchState, setSearchState] = useState(SEARCHSTATES.ALL);

  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.8 }}
    >
      <div className="portfolio-container">
        <div className="portfolio-card-holder">
          <div className="portfolio-header-holder">
            <h3>My Recent Work</h3>
            <div className="portfolio-button-container">
              <button
                className={
                  searchState === SEARCHSTATES.ALL
                    ? "search-btn all highlighted"
                    : "search-btn all"
                }
                onClick={() => setSearchState(SEARCHSTATES.ALL)}
              >
                All
              </button>
              <button
                className={
                  searchState === SEARCHSTATES.APPS
                    ? "search-btn apps highlighted"
                    : "search-btn all"
                }
                onClick={() => setSearchState(SEARCHSTATES.APPS)}
              >
                Apps
              </button>
              <button
                className={
                  searchState === SEARCHSTATES.DATASCIENCE
                    ? "search-btn datascience highlighted"
                    : "search-btn all"
                }
                onClick={() => setSearchState(SEARCHSTATES.DATASCIENCE)}
              >
                Data Science
              </button>
              <button
                className={
                  searchState === SEARCHSTATES.LANDINGPAGES
                    ? "search-btn landingpages highlighted"
                    : "search-btn all"
                }
                onClick={() => setSearchState(SEARCHSTATES.LANDINGPAGES)}
              >
                Landing Pages
              </button>
            </div>
          </div>
          <div style={{ minHeight: 22 }} />
          <div
            style={{
              minHeight: 100,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 24,
              alignItems: "flexstart",
              justifyContent: "flex-start",
            }}
          >
            {ALL_PROJECTS.map((project) => (
              <PortfolioCard key={project?.name} project={project} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
