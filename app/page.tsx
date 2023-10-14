/** @format */

import { Hero, CustomFilter, SearchBar } from "@/Components";
import Image from "next/image";

export default function Home() {
    return (
        <main className='overflow-hidden'>
            <Hero />
            <div
                className='mt-12 padding-x padding-y max-width '
                id='discover'>
                <div className='home__text-container'>
                    <h1 className='text-4xl font-extrabold'>Car Cataloge</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eos, asperiores!
                    </p>
                </div>
                <div className='home__filters'>
                    <SearchBar />
                    <div className='home__filter-container'>
                        <CustomFilter title='fule' />
                        <CustomFilter title='year' />
                    </div>
                </div>
            </div>
        </main>
    );
}
