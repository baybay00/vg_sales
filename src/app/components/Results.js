'use client';
// ResultTable component
// ResultTable.js
import React from "react";

function ResultTable({ queryResults }) {
    if (!queryResults || queryResults.length === 0) {
        return <div>No results to display</div>;
    }

    const columns = Object.keys(queryResults[0]);

    return (
        <div className="overflow-auto">
            <h2 className="text-xl mb-4 text-beige">Query Results</h2>
            <table className="border border-tan">
                <thead>
                <tr className="border border-tan">
                    {columns.map((column, index) => (
                        <th key={index} className="p-1 border border-tan">
                            {column}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {queryResults.map((result, rowIndex) => (
                    <tr key={rowIndex} className="border border-tan">
                        {columns.map((column, colIndex) => (
                            <td key={colIndex} className="p-1 border border-tan">
                                {result[column]}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ResultTable;
