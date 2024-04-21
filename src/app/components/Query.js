'use client';

import { useState } from "react";
import axios from "axios";

const Query = (props) => {

    const [enteredQuery, setEnteredQuery] = useState('')
    const [queryResults, setQueryResults] = useState([])

    const queryHandler = (e) => {
        setEnteredQuery(e.target.value)
        props.queryHandler(e)
    }

    const submitHandler = async  (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`/api/games/results?query=${enteredQuery}`);
            setQueryResults(response.data);
        } catch (error) {
            console.error('Error fetching query results:', error);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-navy text-white">
            <p className="text-xl p-2 text-beige">Example entries. Sales in millions.</p>
            <table className="border border-tan">
                <thead>
                <tr className="border border-tan">
                    <th className="p-1 border border-tan">Rank</th>
                    <th className="p-1 border border-tan">Name</th>
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
                <tr className="border border-tan">
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

            <form className="flex flex-col items-center" onSubmit={ submitHandler }>
                <input
                    type="text"
                    value={ enteredQuery }
                    onChange={ queryHandler }
                    placeholder="Enter a query"
                    className="m-2 p-2 rounded-lg border border-white h-48 w-96 text-navy"

                />
                <button type="submit" className="m-2 p-2 text-navy rounded-lg bg-beige">Submit</button>
            </form>
            <div>
                { queryResults.map((game) => (
                    <div key={ game.id }>
                        <p>{ game.title }</p>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default Query;
