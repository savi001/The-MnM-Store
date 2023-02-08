import { createContext, useContext, useEffect, useReducer } from "react";
import { AppContext } from "./productcontext";
import reducer from "../reducer/FilterReducer";

const FilterContext = createContext();
const initialState = {
  isLoading: false,
  filter_products: [],
  all_products: [],
  isGridView: false,
  sorting_value: "lowest",
  filters: {
    text: "",
    category:"All",
    company:"All",
    color:"All",
    price:0,
    minPrice:0,
    maxPrice:0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(products);
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };
  const getSortingValue = (event) => {
    const value=event.target.value;
     dispatch({ type: "GET_SORTING_VALUE", sortValue: value });
  };
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(name);
    console.log(value);

     dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };
  const getMaxValue=(value)=>{
    console.log(value);
  //  dispatch({type:"SET_MAX_PRICE_FILTER", payload:value}) 
  }
  const getMinValue=(value)=>{
    console.log("this "+value);
    //  dispatch({type:"SET_MIN_PRICE_FILTER", payload:value})
  }
//   const FilterCategory=(event)=>{
//     const value=event.target.value;
//     return dispatch ({type:"CATEGORY_FILTER",payload:{value, products}})
//   }
const ClearFilters=()=>{
  console.log("CLEAR FILTERS FUNCTIOn");
   dispatch({type:"CLEAR_FILTERS"});
}
useEffect(()=>{
 

    dispatch({ type: "FILTER_PRODUCTS" });
}, [products, state.filters]);
  useEffect(() => {

    dispatch({ type: "SORT_PRODUCTS", payload: products });

  }, [products,state.sorting_value,]);
 
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
    
  }, [products]);


  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        getSortingValue,
        updateFilterValue,
        getMaxValue,
        getMinValue,
        ClearFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
