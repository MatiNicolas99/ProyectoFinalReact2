import { useState } from "react"
import DataContext, { DataProvider } from "./DataContext"
import { Init } from "./pages/Init"
import { pizzas }  from "./pizzas"

const App = () => {


  return (
    <DataProvider>
      <Init/>
   </DataProvider>
  )
}

export default App
