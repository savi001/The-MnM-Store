import { createContext, useContext ,useReducer} from "react";

import CartReducer from "../reducer/CartReducer";
const CartContext=createContext();
const initialState={
    cart:[],
    total_item:"",
    total_amount:"",
    shipping_fee:5000

}
const CartProvider=({children})=>{
const [state, dispatch] = useReducer(CartReducer,initialState);
const addtoCart=(id,activeColor,amount,product)=>{
    console.log(product);
    dispatch({type:"ADD_TO_CART", payload:{id,activeColor,amount,product}})
}
    return <CartContext.Provider value={{...state,addtoCart}}>{children}</CartContext.Provider>
    
};

const useCartContext=()=>useContext(CartContext)

export {CartProvider,CartContext,useCartContext}