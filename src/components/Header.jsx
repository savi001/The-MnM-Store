import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Nav from './Nav';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <table>
          <tbody>
          <tr>
            <td>
            <img className='logo' src='../images/logo.png' alt='logo'/>
            </td>
            <td><img className='logoname' src='../images/logoname.png' alt='logo'/></td>
          </tr>
          </tbody>
        </table>
        
      </NavLink>
      <Nav/>
      </MainHeader>
  )
}
const MainHeader=styled.header`
padding:0 4.8rem;
height:10rem;
background-color:${({theme})=>theme.colors.bg
};
display:flex;
justify-content:space-between;
align-items:center;
position:relative;

.logoname{
  display:inline-block;
  height:4rem;

  

}
.logo{
  margin-top:2rem
  display:inline-block;
  height:5rem;
  

}
`;
export default Header