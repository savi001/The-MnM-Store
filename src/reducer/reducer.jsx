const reducer=(state,action)=>{
   switch (action.type) {
    case "SET_LOADING":
        return{
            ...state,
            isLoading:true
        };
    case "MY SERVER DATA":
        const featureData=action.payload.filter((currentElement)=>{
            return currentElement.featured===true;

        });
    return{
        ...state,
        isLoading:false,
        products:action.payload,
        featuredProducts:featureData
    }
    case "ERROR PRODUCT API":
        return{
            ...state,
            isLoading:false,
            isError:true
        }
    case "SET_SINGLE_PRODUCT_LOADING":
        return{
            ...state,
            isSingleProductLoading:true,
        }
    case "SET_SINGLE_PRODUCT":
        return{
            ...state,
            isSingleProductLoading:false,
            singleProductDetails:action.payload,
        }
    case "SET_SINGLE_PRODUCT_ERR":
        return{
            ...state,
            isSingleProductLoading:false,
            isError:true
        }
   
    default:
        return state;
   }

};
export {reducer}