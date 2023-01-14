import Image from 'next/image';
import React from 'react';
import Styles from "./Card.module.scss";

interface Props{
    img:string,
    title:string
    desc:string
}

const Card = ({img, title,desc}:Props) => {
  return (
    <div className={Styles.card}>
        <div className={Styles.card_front}>
            <div className={Styles.image}>
                <Image src={img} width={300} height={300} alt={""} />
            </div>
            <h3>{title}</h3>
        </div>
        <div className={Styles.card_back}>
            <h3>{title}</h3>
            <br />
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Card