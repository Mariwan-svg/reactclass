import React from 'react'
import './test.css';
import Nav from './components/Nav'
const Test = () => {
    return (
        <>
        <Nav/>
        <div className="container">
            <div className="content-item">
            <img src="./images/laptop2.jpg" alt=""/>
            </div>
            <div className="content-item">
            <img src="./images/laptop3.jpg" alt=""/>
            </div>
        </div>
        </>
    )
}

export default Test
