import React from 'react';
import Card from './testimonialCard/Card';
import Styles from "./Testimonials.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonialData = [
    {
      img:"/Images/logo_final.png",
      name:"Ikshit Chaudhari",
      company:"Adrak Lassan",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates sapiente alias incidunt sequi? Quam veritatis officia maiores voluptate harum."
    },
    {
      img:"/Images/logo_final.png",
      name:"Ikshit Chaudhari",
      company:"Adrak Lassan",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates sapiente alias incidunt sequi? Quam veritatis officia maiores voluptate harum."
    },
    {
      img:"/Images/logo_final.png",
      name:"Ikshit Chaudhari",
      company:"Adrak Lassan",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates sapiente alias incidunt sequi? Quam veritatis officia maiores voluptate harum."
    },
    {
      img:"/Images/logo_final.png",
      name:"Ikshit Chaudhari",
      company:"Adrak Lassan",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates sapiente alias incidunt sequi? Quam veritatis officia maiores voluptate harum."
    }
    ,{
      img:"/Images/logo_final.png",
      name:"Ikshit Chaudhari",
      company:"Adrak Lassan",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates sapiente alias incidunt sequi? Quam veritatis officia maiores voluptate harum."
    }
  ]

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={Styles.testimonials}>
      <h1>Testimonials</h1>
      <div className={Styles.slider}>
      <Slider
            
            {...settings}
          >
            {testimonialData.map((ele, index)=>{
        return <Card key={index} img={ele.img} company={ele.company} name={ele.name} content={ele.content} />
      })}
          </Slider>
      
      </div>
    </section>
  )
}

export default Testimonials