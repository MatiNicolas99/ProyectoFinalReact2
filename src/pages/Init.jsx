import { Announcement } from "../components/Announcement"
import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"
import { BrowserRouter } from "react-router-dom"
import { Pages } from "./Pages"





export const Init = () => {
  return (
    <BrowserRouter>
    <div>
      <Announcement />
      <NavBar />
      <Pages />
      <Footer />
    </div>
   </BrowserRouter>
  )
}
