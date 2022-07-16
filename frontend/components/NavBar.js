import React from 'react';
import Link from 'next/link';

const NavBar = ({cart}) => {
    return (
        <div>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/"><a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="./assets/fatpigbanner.jpg" style={{ width: '100px' }}/>
                        <span class="ml-3 text-xl">My Shop</span>
                    </a></Link>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/"><a class="mr-5 hover:text-gray-900">Home</a></Link>
                        <Link href="/about"><a class="mr-5 hover:text-gray-900">About</a></Link>
                        <Link href="/products"><a class="mr-5 hover:text-gray-900">Products</a></Link>
                        <Link href="/contact"><a class="mr-5 hover:text-gray-900">Contact</a></Link>
                        <Link href="/checkout"><a class="mr-5 hover:text-gray-900">Cart({cart.length})</a></Link>
                    </nav>
                    <button className="my-2 text-white bg-indigo-500 border-0 md:py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Login
                    </button>
                </div>
            </header>
        </div>
    )
}

export default NavBar