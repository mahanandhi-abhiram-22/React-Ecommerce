import React,{useState} from 'react'
import Banner from '../components/Banner'
import Collection from '../components/Collection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {Gents, Ladies} from '../data'
import WomenCollections from '../components/WomenCollections'
const Mainpage = () => {

const [gentsFashion,setGentsFashion] = useState(Gents)
const [ladiesFashion,setladiesFashion] = useState(Ladies)

    console.log(Gents)
  return (
    <div>
      <Header/>
      <Banner/>
      <Collection gentsFashion= {gentsFashion}/>
      <Footer/>
      <WomenCollections ladiesFashion= {ladiesFashion}/>
    </div>
  )
}

export default Mainpage
