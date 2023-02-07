import { createContext, useEffect, useReducer,useContext } from "react";
import axios from "axios";
import { reducer } from "../reducer/reducer";


const AppContext=createContext();
const API="https://api.pujakaitem.com/api/products";
const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featuredProducts:[],
    isSingleProductLoading:false,
    singleProductDetails:{},

}



function AppProvider ({children}){
    const [state,dispatch]=useReducer(reducer,initialState);
    const getProducts=async (url)=>{
        dispatch({type:"SET_LOADING"})
        try {
            const res=await axios.get(url);
            
            const products= await res.data;
        dispatch({type:"MY SERVER DATA",payload:products});
       
        } catch (err) {
            dispatch({type:"ERROR PRODUCT API"});
            
        }
        console.log({...state});

    }
    const getSingleProduct=async (url)=>{
        dispatch({type:"SET_SINGLE_PRODUCT_LOADING"});
        try {
            const res= await axios.get(url);
            const singleProduct=await res.data;
            dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProduct});
        } catch (error) {
            dispatch({type:"SET_SINGLE_PRODUCT_ERR"})
            
        }

    }
    useEffect(()=>{
        getProducts(API);
    },[]);

return <AppContext.Provider value={{...state, getSingleProduct}}> {children}</AppContext.Provider>

}
const useProductContext = () => {
    return useContext(AppContext);
  };
export {AppProvider,AppContext,useProductContext};