import { Footer } from "./components/Footer"
import { Products } from "./components/Products"
import { Header } from "./components/Header"
import { useFilters } from "./hooks/useFilters"
import { Cart } from "./components/Cart"
import { CartProvider } from "./context/cart"



function App() {
  const {product, filterProducts} = useFilters()
  const filteredProducts = filterProducts(product)

  return (
    <CartProvider>
      <Header  />
      <Cart />
      <Products filteredProducts={filteredProducts}/>
      <Footer /> 
    </CartProvider>
  )
}

export default App
