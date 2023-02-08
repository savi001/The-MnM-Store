import { createContext, useContext ,useEffect,useReducer} from "react";

import CartReducer from "../reducer/CartReducer";
const getLocalcartData=()=>{
    let LocalcartData=localStorage.getItem("userCartData");
    if(LocalcartData===[]){
        return [];
    }
    else{
        return JSON.parse(LocalcartData);
    }
}
const CartContext=createContext();
const initialState={
    cart:getLocalcartData(),
    total_item:"",
    total_price:"",
    shipping_fee:8000

}
const CartProvider=({children})=>{
const [state, dispatch] = useReducer(CartReducer,initialState);
const addtoCart=(id,activeColor,amount,product)=>{
    console.log(product);
    dispatch({type:"ADD_TO_CART", payload:{id,activeColor,amount,product}})
}
// console.log(state.total_amount);

const RemoveCartItem=(id)=>{
    dispatch({type:"REMOVE_CART_ITEM",payload:id })
}
const clearCart=()=>{
    dispatch({type:"CLEAR_CART"})
}
function setIncrease(id){
    const newid=id
    console.log(id);
    dispatch({type:"INCREASE_CART",payload:newid})
   
};
function setDecrease(id){
    const newid=id
    console.log(id);
    dispatch({type:"DECREASE_CART",payload:newid})

    
};
function SubTotal(){
    dispatch({type:"SUBTOTAL_PRICE"});

}
function CartNo(){
    
    dispatch({type:"SET_NO_OF_PRODUCTS"})
}
useEffect(()=>{
    
    localStorage.setItem("userCartData",JSON.stringify(state.cart))
    CartNo()
    SubTotal();
},[state.cart])
    return <CartContext.Provider value={{...state,addtoCart,RemoveCartItem,clearCart,setIncrease,setDecrease,}}>{children}</CartContext.Provider>
    
};

const useCartContext=()=>useContext(CartContext)

export {CartProvider,CartContext,useCartContext}