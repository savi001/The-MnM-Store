const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCT":
      let priceArr=action.payload.map((currentEle)=>currentEle.price)
      let maxprice= Math.max(...priceArr)
      return {
        ...state,
        isLoading: false,
        filter_products: [...action.payload],
        all_products: [
          ...action.payload,
        ] /* get the copy of products so that we cannot hamper our original data */,
        filters:{...state.filters,maxPrice:maxprice,price:maxprice}
      };
    case "SET_GRID_VIEW":
      return {
        ...state,
        isGridView: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        isGridView: false,
      };
    case "GET_SORTING_VALUE":
      return {
        ...state,
        sorting_value: action.sortValue,
      };
    case "UPDATE_FILTER_VALUE":
      const {name,value}=action.payload;

      return {
        ...state,
        filters:{
          ...state.filters,
          [name]:value
        }
      }
    // case "CATEGORY_FILTER":
      // const {value:newvalue, products}=action.payload
      //  let tempFilterProducts=[...products]
      //  if(newvalue!=="All"){
      //  tempFilterProducts=tempFilterProducts.filter((currentElement)=>{
      //   return currentElement.category.toLowerCase().includes(newvalue);})}

      // return{
      //   ...state,
      //   filter_products:tempFilterProducts
      // }
    case "SET_MIN_PRICE_FILTER" :
       return{
        ...state,
        filters:{...state.filters,minPrice:action.payload}
       }
    case "SET_MAX_PRICE_FILTER" :
        return{
         ...state,
         filters:{...state.filters,maxPrice:action.payload}
        }
      
    case "FILTER_PRODUCTS":
       let {all_products}=state
       let tempFilterProduct=[...all_products]
       const {text,category,company,color,price,maxPrice,minPrice} =state.filters
       console.log("filter "+maxPrice);
       console.log(text);
       if(text){
        tempFilterProduct=tempFilterProduct.filter((currentElement)=>{
          return currentElement.name.toLowerCase().includes(text);
        });
       }

       if(category!=="All"){
        tempFilterProduct=tempFilterProduct.filter((currentElement)=>{
          return currentElement.category===category;
        });
       }
       if(company!=="All"){
        tempFilterProduct=tempFilterProduct.filter((currentElement)=>{
          return currentElement.company===company;
        });
       }

       if(maxPrice || minPrice){
        tempFilterProduct=tempFilterProduct.filter((currentElement)=>{
         
              return currentElement.price<= maxPrice*100 && currentElement.price>=minPrice*100
        });
       }


       if(color!=="All"){
        tempFilterProduct=tempFilterProduct.filter((currentElement)=>{
          return currentElement.colors.includes(color);
        });
       }
       if(price)
       
       console.log(tempFilterProduct);
        return{
          ...state,
          filter_products:tempFilterProduct
        }  ;

    case "SORT_PRODUCTS":
      let newSortData;
      let tempSortProduct = [...action.payload];
      const sortingProducts = (a, b) => {
        switch (state.sorting_value) {
          case "a-z":
            return a.name.localeCompare(b.name);
          case "highest":
            return b.price - a.price;
          case "z-a":
            return b.name.localeCompare(a.name);
          default:
            return a.price - b.price;
        }
      };
      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

    default:
      return state;
  }
};

export default reducer;
