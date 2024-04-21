import React, { useState, useEffect } from "react";
import ResultTable from "./Results";

const Fetcher = () => {
    const [queryResults, setQueryResults] = useState([]);


    const fetchData = async (query) => {
        try {

            const response = await fetch(`/api/data?query=${query}`);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            setQueryResults(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    const handleQuerySubmit = (query) => {

        fetchData(query);
    };

    return (
        <div>
            <Query onSubmit={handleQuerySubmit} />

            <ResultTable queryResults={queryResults} />
        </div>
    );
};

export default Fetcher;
