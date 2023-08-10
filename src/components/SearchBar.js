import React, { useState } from "react";
import SearchBox from "./SearchBox";
import SearchResultsList from "./SearchResultsList";
import requests from "../utils/api";

const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [input, setInput] = useState("");

  const handleResults = (data) => {
    setResults(data);
    setShowResults(true);
  };

  const hideResults = () => {
    setShowResults(false);
    setInput("");
  };

  return (
    <div>
      <SearchBox
        fetchUrl={requests.fetchAll}
        onResults={handleResults}
        input={input}
        setInput={setInput}
      />
      {showResults && (
        <SearchResultsList results={results} hideResults={hideResults} />
      )}
    </div>
  );
};

export default SearchBar;
