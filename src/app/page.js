'use client';

import {useState} from "react";
import Query from "@/app/components/Query";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import {useRouter} from "next/navigation";

export default function Home() {

    const router = useRouter()

    const [, setEnteredQuery] = useState('')

    const queryChangeHandler = (e) => {
        setEnteredQuery(e.target.value)
    }
    const submitQuery = (query) => {
        console.log("Submitted Query:", query);
        router.push('/results');
    }

return (
    <div>
        <Head>
            <link rel='icon' href='/favicon.ico'/>
        </Head>

        <Navbar />

        <Query onQuery={submitQuery} queryHandler={queryChangeHandler} />

    </div>
    )
}
