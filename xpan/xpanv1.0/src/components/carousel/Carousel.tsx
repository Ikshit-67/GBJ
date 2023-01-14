import React from 'react';
import Card from './card/Card';
import Styles from "./Carousel.module.scss";

const Carousel = () => {
    const cardData = [
        {
            img:'/Images/logo_final.png',
            title:"Marketing",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates sapiente alias incidunt sequi? Quam veritatis officia maiores voluptate harum."
        },
        {
            img:'/Images/logo_final.png',
            title:"Marketing2",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates sapiente alias incidunt sequi? Quam veritatis officia maiores voluptate harum."
        },
        {
            img:'/Images/logo_final.png',
            title:"Marketing3",
             desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates sapiente alias incidunt sequi? Quam veritatis officia maiores voluptate harum."
        },
        {
            img:'/Images/logo_final.png',
            title:"Marketing4",
             desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates sapiente alias incidunt sequi? Quam veritatis officia maiores voluptate harum."
        }
    ]
  return (
    <section className={Styles.carousel}>
        <h1>Carousel</h1>
        <br />
        <div className={Styles.slider}>
            {cardData.map((ele,index)=>{
                return <Card key={index} desc={ele.desc} img={ele.img} title={ele.title} />
            })}
        </div>
    </section>
  )
}

export default Carousel