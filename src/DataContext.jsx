import React, { createContext, useEffect, useState } from "react"; 
import { pizzas } from "./pizzas";
const DataContext = createContext({});

export const DataProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0)

    useEffect(() => {
      const product = pizzas; 
      if (product) {
        setProducts(product);
      }else {
        setProducts([]);
      };
      
    }, []);

    const addCart = (id) => {
        let total = 0;
        const check = cart.every(item =>{
            return item.id !== id;
        })
        if (check){
            const data = products.filter(product =>{
                return product.id === id
            });
            setCart([...cart, ...data]);
        }else {
            alert("La pizza ya se encuentra")
        }
        for (const p of cart){
            total += p.price;
            setTotal(total)
        }
    };


    
    const value = {
        product: products,
        addCart: addCart,
        cart: [cart, setCart],
        total: [total, setTotal],
    };

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContext