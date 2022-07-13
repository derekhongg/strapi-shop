import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("I am useEffect from app.js")
  }, [])

  const [cart, setCart] = useState([])
  const [reloadKey, setReloadKey] = useState(1)

  const addToCart = (item, qty, price) => {
    let newCart = cart
    for (let i = 0; i < qty; i++) {
      newCart.push([item, price])
    }
    console.log("Add to cart", newCart)
    setCart(newCart)
    setReloadKey(Math.random())
  }

  const removeFromCart = (item, qty) => {
    let newCart = cart
    let index = newCart.indexOf(item)
    newCart.splice(index)
    setCart(newCart)
  }

  const clearCart = (item) => {
    setCart([])
  }

  return <><NavBar key={reloadKey} cart={cart} /><Component cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} clearCart={clearCart} {...pageProps} /><Footer/></>
}

export default MyApp
