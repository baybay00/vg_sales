'use client';
// Query.js
import React, { useState } from "react";
import axios from "axios";
import ResultTable from "@/app/components/Results";

function Query() {
    const [enteredQuery, setEnteredQuery] = useState("");
    const [queryResults, setQueryResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const queryHandler = (e) => {
        setEnteredQuery(e.target.value);
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8080/api/games/results",
                { query: enteredQuery }
            );
            setQueryResults(response.data);
            setShowResults(true);
            setEnteredQuery("");
        } catch (error) {
            console.error("Error fetching query results:", error);
            alert('Error fetching query results. Please try again.')
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-navy text-white">
                <p className="text-xl p-2 text-beige">Example tuples. Sales are in millions and table should be referred to as vgsales.</p>
                <table className="border border-tan mb-2">
                    <thead>
                    <tr>
                        <th className="p-1 border border-tan">Place</th>
                        <th className="p-1 border border-tan">Title</th>
                        <th className="p-1 border border-tan">Platform</th>
                        <th className="p-1 border border-tan">Year</th>
                        <th className="p-1 border border-tan">Genre</th>
                        <th className="p-1 border border-tan">Publisher</th>
                        <th className="p-1 border border-tan">NA_Sales</th>
                        <th className="p-1 border border-tan">EU_Sales</th>
                        <th className="p-1 border border-tan">JP_Sales</th>
                        <th className="p-1 border border-tan">Other_Sales</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border border-tan p-1">1</td>
                        <td className="border border-tan p-1">Wii Sports</td>
                        <td className="border border-tan p-1">Wii</td>
                        <td className="border border-tan p-1">2006</td>
                        <td className="border border-tan p-1">Sports</td>
                        <td className="border border-tan p-1">Nintendo</td>
                        <td className="border border-tan p-1">41.49</td>
                        <td className="border border-tan p-1">29.02</td>
                        <td className="border border-tan p-1">3.77</td>
                        <td className="border border-tan p-1">8.46</td>
                    </tr>
                    <tr>
                        <td className="border border-tan p-1">2</td>
                        <td className="border border-tan p-1">Super Mario Bros</td>
                        <td className="border border-tan p-1">NES</td>
                        <td className="border border-tan p-1">1985</td>
                        <td className="border border-tan p-1">Platform</td>
                        <td className="border border-tan p-1">Nintendo</td>
                        <td className="border border-tan p-1">29.08</td>
                        <td className="border border-tan p-1">3.58</td>
                        <td className="border border-tan p-1">6.81</td>
                        <td className="border border-tan p-1">0.77</td>
                    </tr>
                    <tr>
                        <td className="border border-tan p-1">3</td>
                        <td className="border border-tan p-1">Mario Kart Wii</td>
                        <td className="border border-tan p-1">Wii</td>
                        <td className="border border-tan p-1">2008</td>
                        <td className="border border-tan p-1">Racing</td>
                        <td className="border border-tan p-1">Nintendo</td>
                        <td className="border border-tan p-1">15.85</td>
                        <td className="border border-tan p-1">12.88</td>
                        <td className="border border-tan p-1">3.79</td>
                        <td className="border border-tan p-1">3.31</td>
                    </tr>
                    <tr>
                        <td className="border border-tan p-1">4</td>
                        <td className="border border-tan p-1">Wii Sports Resort</td>
                        <td className="border border-tan p-1">Wii</td>
                        <td className="border border-tan p-1">2009</td>
                        <td className="border border-tan p-1">Sports</td>
                        <td className="border border-tan p-1">Nintendo</td>
                        <td className="border border-tan p-1">15.75</td>
                        <td className="border border-tan p-1">11.01</td>
                        <td className="border border-tan p-1">3.28</td>
                        <td className="border border-tan p-1">2.96</td>
                    </tr>
                    </tbody>

                </table>
            <form className="flex flex-col items-center" onSubmit={submitHandler}>
                <input
                    type="text"
                    value={enteredQuery}
                    onChange={queryHandler}
                    placeholder="Enter a query"
                    className="m-2 p-2 rounded-lg border border-white h-48 w-96 text-navy"
                />
                <button type="submit" className="m-2 p-2 text-navy rounded-lg bg-beige">
                    Submit
                </button>
            </form>
            {showResults && <ResultTable queryResults={queryResults} />}
        </div>
    );
}

export default Query;
