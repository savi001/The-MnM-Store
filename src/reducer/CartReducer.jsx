const CartReducer = (state,action) => {
    if(action.type==="ADD_TO_CART"){
        let {id,activeColor,amount,product}=action.payload;
        console.log(product);
        console.log("this is "+activeColor);
        console.log(amount);
        const CartProduct={
            id:id+activeColor,
            name:product.name,
            activeColor:activeColor,
            image:product.image[0].url,
            price:product.price,
            max:product.stock,
            amount:amount
  
        }
        return {
            ...state,
            cart:[...state.cart,CartProduct]
        }
    }
   
  return (
   state
  )
}

export default CartReducer