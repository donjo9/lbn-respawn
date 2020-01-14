import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => {

    const OFFSET = 16;
    const MAX_SIZE = 1.5;
    const MIN_SIZE = 0.5;
    let stars = [];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            stars.push(<img src="star.svg" key={i + j} style={{ position: "absolute", zIndex: -1, height: Math.floor(Math.random() * MAX_SIZE) + MIN_SIZE + "vh", left: (10 + (OFFSET * i)) + Math.floor(Math.random() * OFFSET) + "vw", top: (10 + (OFFSET * j)) + Math.floor(Math.random() * OFFSET) + "vh" }} className="star" />)
        }
    }
    return (
        <div id="container"> <img id="logo" src="LbN_logo_guld.svg" alt="LbN guld logo" />
            {stars}
            <style jsx global>
                {`
                html,
                body,
                #__next {
                    margin: 0px;
                    padding: 0px;
                    position: relative;
                }`}
            </style>
        <style jsx>{`
            #color1 {
                fill: green;
            }

            #container {
                position: relative;
                background: radial-gradient(ellipse closest-side, #1d49ab, #08081c);
                width: 100vw;
                height: 100vh;
                z-index: 1;
            }

            #logo {
                position: relative;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                height: 50vh;
            }
            `}</style>
        </div>
    )
}

export default Home
