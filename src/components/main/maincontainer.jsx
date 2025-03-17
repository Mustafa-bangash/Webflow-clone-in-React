
import React, { useEffect,useState } from "react";
import MainLeft from "../leftside/mainLeft";
import MainRight from "../rightSide/mainRight";
import "./maincontainer.css"; 
import { X } from "lucide-react";
import { Equal } from "lucide-react";
import logo from './../../images/logo-dark.png'
import '../../responsive.css';

function Maincontainer() {
 const [menuOpen, setMenuOpen] = useState(false);

 useEffect(()=>{
  const leftSide = document.querySelector(".left-side");
  const rightSide = document.querySelector(".right-side");
  console.log(`${leftSide}, ${rightSide}`);
  
   const handleScroll = ()=>{
    if(!menuOpen){
      const val = window.scrollY;
      if(leftSide && rightSide ){
        leftSide.style.transform = `translateY(-${val * 0.5}px)`;
        rightSide.style.transform = `translateY(${val * 0.5}px)`;
      }
    }
   };
   window.addEventListener('scroll', handleScroll);
   return ()=>window.removeEventListener('scroll',handleScroll);
 })
  
 const menBtnOff =()=>{
   const btn = document.querySelector('.menu-button')
   btn.style.display ='none'
 }
 const menBtnOn =()=>{
   const btn = document.querySelector('.menu-button')
   btn.style.display ='block'
 }
  return (
    <>
    <div className={`main-container ${menuOpen ? "menu-open" : ""}`}>
      <div className="split-left">
      <div className="left-side">
        <MainLeft />
      </div>
      </div>
      <div className="split-right">
      <div className="right-side ">
        <MainRight />
      </div>
      </div>
    </div>

    <div className={`menu-overlay ${menuOpen ? "show" : ""}`}>
    <div className="menu-content ">
      <div className="logoSide flex-col justify-between">
        <img src={logo} className=" w-[70px] h-[70px] 
  "/>
        <div className="logoCont">
          <h3>Design Directiono2</h3>
          <h3>Design Street</h3>
          <h3>London</h3>
          <p>hello@designdirection.com</p>
        </div>
      </div>
      <div className="rightContent">
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Shop</h1>
        <h1>Blog</h1>
        <h1>Contact</h1>
      </div>
      <button className="cancel-btn" onClick={()=>{setMenuOpen(false); menBtnOn()}}><X size={40}/></button>
    </div>
    </div>
    <button className="menu-button" onClick={()=>{setMenuOpen(true); menBtnOff()}}>
    <Equal size={39} strokeWidth={1.5} />
    </button>
    </>
  );
}

export default Maincontainer;
