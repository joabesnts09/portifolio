"use client";
// import { useMenuMobile } from "@/hooks/useMenuMobile";
import { useScroll } from "../../hooks/useScroll";
import { HeaderStyled } from "./styles";
import { Play } from 'next/font/google'

const play = Play({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
})


export const Header = () => {
  useScroll()
  
  const useMenuMobile = () => {
    const mobileMenu = document.querySelector('.mobileMenu') !
    const navList = document.querySelector('.navigation') !

    mobileMenu.classList.toggle('active_btn')
    navList.classList.toggle('active')

  }

  return (
    <>
      <HeaderStyled className={play.className}>
        <div id="header" className="container">
          <div className="box_logo">
            <span className="logo">&#60; <span>Joabe Santos</span> &#47; &#62;</span>
          </div>

          <button onClick={useMenuMobile} className="mobileMenu"></button>

          <nav>
            <ul className="navigation">
              <li className="nav_item">
                <a onClick={useMenuMobile} href="#aboutme">Sobre mim</a>
              </li>
              <li className="nav_item">
                <a onClick={useMenuMobile} href="#">Tecnologias</a>
              </li>
              <li className="nav_item">
                <a onClick={useMenuMobile} href="#">Projetos</a>
              </li>
              <li className="nav_item">
                <a onClick={useMenuMobile} href="#">Contatos</a>
              </li>
            </ul>
          </nav>
        </div>
      </HeaderStyled>
    </>
  );
};
