'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

const Query = (props) => {

    const router = useRouter()
    const [enteredQuery, setEnteredQuery] = useState('')

    const queryHandler = (e) => {
        setEnteredQuery(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const query = {
            query: enteredQuery
        }
        props.onQuery(query)
        router.push('/query')
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-navy text-white">
            <p className="p-2">Please enter a query.</p>
            <form className="flex flex-col items-center" onSubmit={submitHandler}>
                <input
                    type="text"
                    value={enteredQuery}
                    onChange={queryHandler}
                    className="m-2 p-2 rounded-lg border border-white h-48 w-96"
                />
                <button type="submit" className="m-2 p-2 bg-white text-navy rounded-lg bg-b">Submit</button>
            </form>
        </div>
    )
}

export default Query;
