import React from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'

import Carousel from '../components/Carousel'
import Nav from '../components/Nav'
import Trending from '../components/Trending'

const Home = () => {
    return (
        <>
            <Nav/>
            <Carousel/>
            <Card/>
            <Trending/>
            <Footer/>
        </>
    )
}

export default Home
