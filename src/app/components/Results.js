'use client';

export default function ResultTable({queryResults}){

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Query Results</h2>
            <table className="border border-tan">
                <thead>
                <tr className="border border-tan">
                    <th className="p-1 border border-tan">Rank</th>
                    <th className="p-1 border border-tan">Name</th>
                    <th className="p-1 border border-tan">Platform</th>
                    <th className="p-1 border border-tan">Year</th>
                    <th className="p-1 border border-tan">Genre</th>
                    <th className="p-1 border border-tan">Publisher</th>
                    <th className="p-1 border border-tan">NA Sales</th>
                    <th className="p-1 border border-tan">EU Sales</th>
                    <th className="p-1 border border-tan">JP Sales</th>
                    <th className="p-1 border border-tan">Other Sales</th>
                </tr>
                </thead>
                <tbody>
                {queryResults.map((result, index) => (
                    <tr key={index} className="border border-tan">
                        <td className="p-1 border border-tan">{result.rank}</td>
                        <td className="p-1 border border-tan">{result.name}</td>
                        <td className="p-1 border border-tan">{result.platform}</td>
                        <td className="p-1 border border-tan">{result.year}</td>
                        <td className="p-1 border border-tan">{result.genre}</td>
                        <td className="p-1 border border-tan">{result.publisher}</td>
                        <td className="p-1 border border-tan">{result.naSales}</td>
                        <td className="p-1 border border-tan">{result.euSales}</td>
                        <td className="p-1 border border-tan">{result.jpSales}</td>
                        <td className="p-1 border border-tan">{result.otherSales}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

