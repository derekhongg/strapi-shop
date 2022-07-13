import React from "react";
import Link from "next/link";



const Products = (props) => {
    return (
        <div className="container mx-auto px-4">
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-20">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Products</h1>
                            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Checkout our selection of amazing food items</p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        {props.products.data.map((item) => {
                            return (
                                <div class="xl:w-1/4 md:w-1/2 p-4">
                                    <div class="bg-gray-100 p-6 rounded-lg">
                                        <img class="h-96 rounded w-full mb-6" src={item.attributes.image.data.attributes.formats} alt="image content" />
                                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.title}</h3>
                                        <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{props.name}</h2>
                                        <div className="hidden bg-red-800 bg-purple-800 bg-green-800"></div>
                                        <button class={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none" + `bg-${item.attributes.color}-800}`}></button>
                                        <p class="leading-relaxed text-base">{item.attributes.description}</p>
                                        <Link href={`/product/${item.attributes.slug}`}>
                                            <button class="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-md:px-4 focus:outline-none hover: bg-indigo-600 rounded text-sm">
                                                Buy Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export async function getServerSideProps(context) {
    let product_res = await fetch('http://localhost:1337/api/products?[populate]=deep')
    let products = await product_res.json()
    console.log(products.data)
    return {
        props: { products: products },
    }
}

export default Products;