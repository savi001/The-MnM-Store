const CartReducer = (state,action) => {
    if(action.type==="ADD_TO_CART"){
        let {id,activeColor,amount,product}=action.payload;
    

             // tackle the existing product

    let existingProduct = state.cart.find(
        (curItem) => curItem.id == id + activeColor
      );
  
      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id == id + activeColor) {
            let newAmount = curElem.amount + amount;
  
            if (newAmount >= curElem.max) {
              newAmount = curElem.max;
            }
            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return curElem;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
    }
        else
        {
        const CartProduct={
            id:(id+activeColor),
            activeColor,
            name:product.name,
            image:product.image[0].url,
            price:product.price,
            max:product.stock,
            amount
  
        }
    
       
       
        return {
            ...state,
            cart:[...state.cart,CartProduct]
        }}
    }

    if(action.type==="REMOVE_CART_ITEM"){
        let updatecart=state.cart.filter((currentElement)=>{
            return currentElement.id !== action.payload
        })
        return{
            ...state,
            cart:updatecart,
        }
    }
    if(action.type==="CLEAR_CART"){
        return {
            ...state,
            cart:[]
        }
    }
    if(action.type==="INCREASE_CART"){
   
        let updatedProduct = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
              let incAmount = curElem.amount + 1;
      
              if (incAmount >= curElem.max) {
                incAmount = curElem.max;
              }
      
              return {
                ...curElem,
                amount: incAmount,
              };
            } else {
              return curElem;
            }
          });
          return { ...state, cart: updatedProduct };
    }
    if(action.type==="DECREASE_CART"){
        let updatedProduct = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
              let decAmount = curElem.amount - 1;
      
              if (decAmount <= 1) {
                decAmount = 1;
              }
      
              return {
                ...curElem,
                amount: decAmount,
              };
            } else {
              return curElem;
            }
          });
          return { ...state, cart: updatedProduct };
    }
   
  return (
   state
  )
}

export default CartReducer