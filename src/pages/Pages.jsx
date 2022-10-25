import { Route, Routes } from "react-router-dom"
import { Cart } from "./Cart"
import { Home } from "./Home"
import { Product } from "./Product"

export const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "/Product/:productitem" element={<Product/>} />
        <Route path= "/Cart" element={<Cart/>} />
    </Routes>
  )
}
