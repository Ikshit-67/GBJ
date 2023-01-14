import React from 'react'
import Styles from "./Header.module.scss"
import Image from 'next/image'

const Header = () => {
  return (
    
        <header className={Styles.header}>

            <div className={Styles.logo}>
                <Image alt="logo-main" src={"/Images/logo_final.png"} height={50} width={50}/>
                <p><span>Xpan</span>buzz</p>
            </div>



            <div className={Styles.ham}>
                <Image alt="logo-main" src={"/Images/ham_open.png"} height={50} width={50}/>
            </div>
        </header>



  )
}

export default Header