'use client';
import Link from "next/link";

export default function navbar() {


    return (
            <nav className=" flex flex-col justify-center h-12 bg-beige">
                <Link href="/">
                    <button className="p-2 text-navy">Home</button>
                </Link>
            </nav>
    )
}