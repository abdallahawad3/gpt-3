import React from 'react'
import { useState } from 'react'
import { RiMenu3Line,RiCloseLine } from 'react-icons/ri'
import "./Navbar.css"
import logo from "../../assets/logo.svg";

const Menu = () =>{ 
  return  <>
              <li><a href='#home'>Home</a></li>
              <li><a href='#wgp3'>What is GPT-3</a></li>
              <li><a href='#Possibility'>Open Ai</a></li>
              <li><a href='#feature'>Case study</a></li>
              <li><a href='#blog'>Library</a></li>
            
          </>
}

const Navbar = () => {

  const [toggleMenu,setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div>
            <ul className='gpt3__navbar-links_container'>
              <Menu/>
            </ul>
        </div>
        <div className='gpt3__navbar-sign'>
          <p>sign in</p>
          <button className='main-btn ' type='button'>sign up</button>
        </div>
        <div className='gpt3__navbar-menu'>
          {toggleMenu ? 
          <RiCloseLine  cursor={"pointer"} color='#FFF' size={27} onClick={()=>{setToggleMenu(false)}} /> 
          :
          <RiMenu3Line cursor={"pointer"} color='#FFF' size={27} onClick={()=>{setToggleMenu(true)}} /> 
          }
          {toggleMenu && (
            <div className='gpt3__navbar-menu_container scale-up-center'>
              <ul className='gpt3__navbar-menu_container-links'>
                <Menu />
                <div className='gpt3__navbar-menu_container-links-sign'>
                  <p>sign in</p>
                  <button className='main-btn ' type='button'>sign up</button>
                </div>
              </ul>
              
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar;