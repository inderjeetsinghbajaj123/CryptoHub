import React from 'react'
import { useContext } from "react";
import { CoinContext } from "../context/CoinContext";
import "./MarketFilters.css";

const MarketFilters = () => {
    const {selectedFilters, setSelectedFilters} = useContext(CoinContext);

   const toggleFilter = (filter) => {
  // Clicking "all"
  if (filter === "all") {
    setSelectedFilters(["all"]);
    return;
  }

  setSelectedFilters((prev) => {
    let updated = [...prev];

    // Remove "all" if another filter is selected
    updated = updated.filter((f) => f !== "all");

    if (updated.includes(filter)) {
      // Remove filter
      updated = updated.filter((f) => f !== filter);
    } else {
      // Add filter
      updated.push(filter);
    }

    // If nothing selected, reset to "all"
    if (updated.length === 0) {
      return ["all"];
    }

    return updated;
  });
};

  return (
    <div className="market-filters flex flex-wrap items-center gap-2 overflow-x-auto">
        <span className='filter-label mr-2 flex-shrink-0' >Filters:</span>
        <button className={`filter-btn  
            ${selectedFilters.includes("all") ? "active" : ""
            }`} 
            onClick={() => toggleFilter("all")}>
             All Coins
        </button>
                <button
        className={`filter-btn ${
            selectedFilters.includes("trending") ? "active" : ""
        }`}
        onClick={() => toggleFilter("trending")}
        >
        Trending
        </button>

        <button
        className={`filter-btn ${
            selectedFilters.includes("top_gainers") ? "active" : ""
        }`}
        onClick={() => toggleFilter("top_gainers")}
        >
        Top Gainers
        </button>
    </div>
  )
}

export default MarketFilters