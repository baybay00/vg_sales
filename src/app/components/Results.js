'use client';

export default function ResultTable({queryResults}){
    return (
        <div className="overflow-auto">
            <h2 className="text-xl mb-4 text-beige">Query Results</h2>
            <table className="border border-tan">
                <thead>
                <tr className="border border-tan">
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
                {queryResults.map((result, index) => (
                    <tr key={index} className="border border-tan">
                        <td className="p-1 border border-tan">{result.Place}</td>
                        <td className="p-1 border border-tan">{result.Title}</td>
                        <td className="p-1 border border-tan">{result.Platform}</td>
                        <td className="p-1 border border-tan">{result.Year}</td>
                        <td className="p-1 border border-tan">{result.Genre}</td>
                        <td className="p-1 border border-tan">{result.Publisher}</td>
                        <td className="p-1 border border-tan">{result.NA_Sales}</td>
                        <td className="p-1 border border-tan">{result.EU_Sales}</td>
                        <td className="p-1 border border-tan">{result.JP_Sales}</td>
                        <td className="p-1 border border-tan">{result.Other_Sales}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

