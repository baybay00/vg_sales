'use client';

export default function ResultTable({queryResults, columns}){
    return (
        <div className="overflow-auto">
            <h2 className="text-xl mb-4 text-beige">Query Results</h2>
            <table className="border border-tan">
                <thead>
                <tr className="border border-tan">
                    {columns.map((column, index) => (
                        <th key ={index} className="p-1 border border-tan">{ column }</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {queryResults.map((result, rowIndex) => (
                    <tr key={rowIndex} className="border border-tan">
                        {columns.map((column, colIndex) => (
                            <td key={colIndex} className="p-1 border border-tan">{ result[column] }</td>
                        )) }
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

