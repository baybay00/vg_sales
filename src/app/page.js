'use client';

import {useState} from "react";
import Query from "@/app/components/Query";
import Head from "next/head";

export default function Home() {

return (
    <div>
        <Head>
            <link rel='icon' href='/favicon.ico'/>
        </Head>

        <Query />

    </div>
    )
}