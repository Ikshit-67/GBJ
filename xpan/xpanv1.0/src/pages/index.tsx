import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header/Header'
import Hero from "../components/hero/Hero"
import Carousel from '@/components/carousel/Carousel'
import Testimonials from '@/components/testimonials/Testimonials'
import Contact from '@/components/contact/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Carousel/>
      <Testimonials/>
      <Contact/>
    </>
  )
}
