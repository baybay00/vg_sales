'use client';
import Navbar from "@/app/components/Navbar";
import ResultTable from "@/app/components/Results";
import Head from "next/head";
export default function results(){

    const queryResults = []


    return(
        <div>
            <Head>
                <link rel='icon' href='/favicon.ico'/>
            </Head>

            <Navbar />

            <ResultTable />
        </div>

    )
}