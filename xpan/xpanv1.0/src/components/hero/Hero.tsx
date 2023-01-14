import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Styles from "./Hero.module.scss"

const Hero = () => {
  return (

    <section className={Styles.hero}>


        <h1>
            Grow Your 
            <br/>
            <span>Business</span> At 
            <br/>
            Junction.
        </h1>

        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veniam deserunt reprehenderit distinctio, repellat beatae iure temporibus praesentium laudantium. Debitis?
        </p>

        <div className={Styles.button}>
            <Button className={Styles.in}>
                <span>Inquire Now</span>
            </Button>
            <Button className={Styles.wwa}>
                <span>Who we are?</span>
                <Image src={"/images/vbtn.png"} height={45} width={45} alt="" />
            </Button>
        </div>

    </section>
  )
}

export default Hero