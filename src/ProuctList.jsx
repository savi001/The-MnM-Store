import React, { useContext } from 'react'
import { useFilterContext } from './context/filter_context';
import GridView from './components/GridView';
import ListView from './components/LIstView';

const ProuctList = () => {
  const {filter_products,setGridView,isGridView}=useFilterContext();

  
    
  if(isGridView===true){
    return <GridView filter_products={filter_products}/>
  }
  if(isGridView===false){
    return <ListView filter_products={filter_products}/>
  }
  

}




export default ProuctList