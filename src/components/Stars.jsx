import React from 'react'
import {ImStarFull,ImStarEmpty,ImStarHalf} from "react-icons/im"
import styled from 'styled-components';
const Stars = ({reviews,star}) => {
    console.log(star);
    let rounded_stars=Math.floor(star);
    let balance=5-rounded_stars;
    let decimal=star-rounded_stars;
    let halfstar=0;
    if(decimal>0){
        halfstar++;
        balance=balance-1;
    }
    var rows = [];
    var k=0;
for (let i = 0; i < rounded_stars; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<ImStarFull key={k++} className='icon'/>);
}
if(halfstar>0){
    rows.push(<ImStarHalf key={k++} className='icon'/>)
}
for (let i = 0; i < balance; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<ImStarEmpty key={k++} className='icon'/>);
}
console.log(rows);
  return (
    <Wrapper>
       <div className='icon-style'><span>{rows}</span>
       <p>({reviews} customer reviews)</p>
       </div>
      
    </Wrapper>
  )
}
let Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
    .icon {
      font-size: 2rem;
      color: orange;
    }
    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Stars;

