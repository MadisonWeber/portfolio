import React, { useState } from 'react'
import FlitterCard from './Cards/FlitterCard'
import PokemonCard from './Cards/PokemonCard'
import JimmysCard from './Cards/JimmysCard'
import EnjoiCard from './Cards/EnjoiCard'
import MovieCard from './Cards/MovieCard'
import AdriftCard from './Cards/AdriftCard'
import HousePricesCard from './Cards/HousePricesCard'
import NhlGoalsCard from './Cards/NhlGoalsCard'
import WineQualityCard from './Cards/WineQualityCard'
import EasyBankCard from './Cards/EasyBankCard'
import RoomCard from './Cards/RoomCard'
import BookmarkCard from './Cards/BookmarkCard'
import HuddleCard from './Cards/HuddleCard'
import { motion } from 'framer-motion'
import "../css/portfolio.css"

const Portfolio = () => {

    const SEARCHSTATES = { 
        ALL : 'ALL',
        APPS : 'APPS',
        DATASCIENCE: "DATASCIENCE",
        LANDINGPAGES: 'LANDINGPAGES'
    }

    const [ searchState, setSearchState ] = useState(SEARCHSTATES.ALL)

    return (
        <motion.div animate = {{opacity : 1, x : 0 }} initial = {{opacity : 0, x : -80}} transition = {{duration : 0.8}} >
            <div className = 'portfolio-container'>
                <div className="portfolio-card-holder">
                    <div className="portfolio-header-holder">
                        <h1>My Recent Work</h1>
                        <div className="portfolio-button-container">
                            <button className = {searchState === SEARCHSTATES.ALL ? "search-btn all highlighted" : 'search-btn all'} onClick = {()=> setSearchState(SEARCHSTATES.ALL)}>All</button>
                            <button className = {searchState === SEARCHSTATES.APPS ? "search-btn apps highlighted" : 'search-btn all'} onClick = {()=> setSearchState(SEARCHSTATES.APPS)}>Apps</button>
                            <button className = {searchState === SEARCHSTATES.DATASCIENCE ? "search-btn datascience highlighted" : 'search-btn all'} onClick = {()=> setSearchState(SEARCHSTATES.DATASCIENCE)}>Data Science</button>
                            <button className = {searchState === SEARCHSTATES.LANDINGPAGES ? "search-btn landingpages highlighted" : 'search-btn all'} onClick = {()=> setSearchState(SEARCHSTATES.LANDINGPAGES)}>Landing Pages</button>
                        </div>
                    </div>
                    {searchState === SEARCHSTATES.ALL && 
                    <>
                        <FlitterCard />
                        <JimmysCard/>
                        <EasyBankCard />
                        <BookmarkCard />
                        <RoomCard />
                        <EnjoiCard />
                        <HuddleCard />
                        <AdriftCard />
                        <HousePricesCard />
                        <PokemonCard />
                        <NhlGoalsCard />
                        <WineQualityCard />
                        <MovieCard />
                    </>
                    }

                    {searchState === SEARCHSTATES.APPS &&
                    <>
                        <FlitterCard />
                        <JimmysCard/>
                        <PokemonCard />
                        <EnjoiCard />
                        <MovieCard />
                    </>
                    }
                    {searchState === SEARCHSTATES.DATASCIENCE &&
                    <>
                        <HousePricesCard />
                        <NhlGoalsCard />
                        <WineQualityCard />
                    </>
                    }
                    {searchState === SEARCHSTATES.LANDINGPAGES &&
                    <>
                        <EasyBankCard />
                        <BookmarkCard />
                        <RoomCard />
                        <HuddleCard />
                        <AdriftCard />
                        <EnjoiCard />
                    </>
                    }


                </div>
            </div>

        </motion.div>

    )
}

export default Portfolio
