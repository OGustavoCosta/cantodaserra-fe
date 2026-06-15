/* MOTION */
import * as motion from "motion/react-client"
import { motionContainer, fadeLeftItem, fadeDownItem, fadeUpItem, fadeRightItem } from "@/lib/animation"

/* COMPONENTES */
import HeaderDrawer from './HeaderDrawer';

function Header(){
  return(
    <header className={`header background-section py-4 flex flex-col items-center w-full font-ds-cormorant font-bold text-ds-green-200 absolute`}>
      {/* HEADER PRINCIPAL */}
      <div className="header__main max-w-[1440px] w-full flex justify-between items-center">
        {/* MENU MOBILE */}
        <HeaderDrawer/>

        <motion.span 
          className="header__title poppins-medium text-xl block cursor-pointer active:scale-99 hover:scale-101 transition-transform"
          variants={fadeDownItem}
          initial="hidden"
          animate="visible"
        >
          Canto da Serra
        </motion.span>

        {/* NAVEGAÇÃO */}
        <nav className="header__nav md:flex justify-between items-center hidden text-base/[120%]" aria-label="Menu principal">
          <motion.ul 
            className="header__list gap-5 flex items-center"
            variants={motionContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.li className="header__item" variants={fadeDownItem}><a href="#" className="header__link link-underline">Início</a></motion.li>
            <motion.li className="header__item" variants={fadeDownItem}><a href="#" className="header__link link-underline">Quartos</a></motion.li>
            <motion.li className="header__item" variants={fadeDownItem}><a href="#" className="header__link link-underline">Localização</a></motion.li>
            <motion.li className="header__item" variants={fadeDownItem}><a href="#" className="header__link link-underline">Turismo</a></motion.li>
          </motion.ul>
        </nav>
      </div>
    </header>
  )
}

export default Header