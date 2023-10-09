/** @format */

import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1440px] mx-auto flex justify-between sm:px-16 px-6 py-4'>
                <Link
                    href='/'
                    className='flex justify-center items-center'>
                    <Image
                        src='/logo.svg'
                        alt='car hub Logo'
                        width={118}
                        height={18}
                        className='objext-contain'
                    />
                </Link>
                <Cu
            </nav>
        </header>
    );
};

export default Navbar;
