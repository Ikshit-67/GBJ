import Image from 'next/image';
import React from 'react';
import Styles from "./Card.module.scss";

interface Props{
  key:number;
  img:string;
  name:string;
  content:string;
  company:string;
}

const Card = (data:Props) => {
  return (
    <div className={Styles.card}>
     <div className={Styles.head}>
      <div className={Styles.image}>
          <Image src={data.img} width={50} height={50} alt={""} />
        </div>
        <div className={Styles.name}>
          <h3>{data.name}</h3>
          <strong>{data.company}</strong>
        </div>
     </div>
     <p>{data.content}</p>
    </div>
  )
}

export default Card