'use client';

export default function ResultTable(){


    return (
        <div>
            <h2>Query Results</h2>
            <table>
                <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Platform</th>
                    <th>Year</th>
                    <th>Genre</th>
                    <th>Publisher</th>
                    <th>NA Sales</th>
                    <th>EU Sales</th>
                    <th>JP Sales</th>
                    <th>Other Sales</th>
                </tr>
                </thead>
                <tbody>
                {queryResults.map((result, index) => (
                    <tr key={index}>
                        <td>{result.rank}</td>
                        <td>{result.name}</td>
                        <td>{result.platform}</td>
                        <td>{result.year}</td>
                        <td>{result.genre}</td>
                        <td>{result.publisher}</td>
                        <td>{result.na_sales}</td>
                        <td>{result.eu_sales}</td>
                        <td>{result.jp_sales}</td>
                        <td>{result.other_sales}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}