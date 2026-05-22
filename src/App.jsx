// sezione import
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProductsPage from "./pages/ProductsPage"
import ProductPage from "./pages/productPage"
import ErrorPage from "./pages/ErrorPage"
import BudgetContext from "./contexts/BudgetContext"

function App() {

  const [budgetMode, setBudgetMode] = useState(false)


  return (
    <>
      <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetContext.Provider>

    </>
  )
}

export default App
