import { useState, useEffect, useContext } from "react";
import { FiltersContext } from "../context/filter";


export function useFilters () {
    const {filters, setFilters} = useContext(FiltersContext)
  
    const [product, setProduct] = useState([])
    
    useEffect(()=>{
      fetch("https://dummyjson.com/products")
    .then(res=>res.json())
    .then(response=>setProduct(response.products))
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  
    }, [])
  
  
    const filterProducts = (products) => {
      return products.filter(product=>{
          return (product.price >= filters.minPrice && (
              filters.category === 'all' ||
              product.category === filters.category
          )
          )
      })
    }
    return {product, setFilters, filterProducts, filters}
  
  }