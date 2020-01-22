import React from "react"
import Layout from "../layouts/Layout"
import Cover from "../components/Cover"
import History from "../components/History"
import Offers from "../components/Offers"
import Menu from "../components/Menu"
import Gallery from "../components/Gallery"
import Aboutus from "../components/Aboutus"
import Slider from "../components/Slider"
import Press from "../components/Press"
import Chef from "../components/Chef"
import Reserve from "../components/Reserve"
import Footer from "../components/Footer"
import "../styles/main.scss"



const Index = props => {
  return (
    <Layout>
      <Cover />
      <History />
      <Offers />
      <Menu />
      <Slider />
      <Gallery />
      <Aboutus />
      <Press />
      <Chef />
      <Reserve />
    </Layout>
  )
}

export default Index
