import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./Pages/MainPage"
import BasketPage from "./Pages/BasketPage"
import Header from "./Components/Header"

function App() {


  return (

    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/basket" element={<BasketPage/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
