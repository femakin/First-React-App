import React from 'react';
import Navigation from './Navigation';
function Header(){
    return(
        <header  className="border-b p-5  flex justify-between items-center">
      <span className="font-bold ">  Welcome   </span>      

            <Navigation/>
        </header>
    )
}

export default Header;