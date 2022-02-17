import { AiOutlineClose } from "react-icons/ai"
import { FaBars } from "react-icons/fa"
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Link from "next/link"
import React, { useContext, useState } from 'react'

import { Context } from '../pages/_app'



function NavBar() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => {
    setSidebar(!sidebar)
  }
  
  const { device } = useContext(Context)
  
  return (<>
  <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          
            <FaIcons.FaBars className='menu-bars' onClick={showSidebar} />
          
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              
                <AiIcons.AiOutlineClose className='menu-bars'/>
              
            </li>
            {device.types.map((item, index) => {
              return (
                <li key={index} className="nav-text">
                  
                    
                    <span className="nav-texta">{item.name}</span>
                  
                </li>
              );
            })}
            
          </ul>
        </nav>
      </IconContext.Provider>
{/* ================================================= */}
   
  </>)
}

export default NavBar