import { useState } from "react"
import DataContext from "./DataContext"
import { Init } from "./pages/Init"
import { pizzas }  from "./pizzas"

const App = () => {

  const [selectedPizza, setSelectedPizza] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <DataContext.Provider 
    value={{
      pizzas, 
      selectedPizza, 
      setSelectedPizza,
      totalPrice,
      setTotalPrice,
      }}>
      <Init/>
   </DataContext.Provider>
  )
}

export default App
