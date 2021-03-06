import App from "next/app";
import Head from "next/head";
import React from "react";
import Nav from "../components/nav";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --gold: -webkit-linear-gradient(#b69853,#f7f1a1,#d4a74e,#f7f1a5,#97762d);
}
html,body {
        background-color: #08081c;
        color: white;
        box-sizing: border-box;
        min-width: 100vw;
        min-height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
        font-family: sans-serif;
        margin: 0px;
        padding: 0px;
        position: relative;
    }
    *, :after, :before {
        box-sizing: border-box;
    }
    #__next {
        min-height: 100vh;
        display: grid;
        grid-template-rows: min-content 1fr;
    }`;
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>LbN - LamersByNight</title>
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#08081c" />
                <meta
                    name="msapplication-TileImage"
                    content="/ms-icon-144x144.png"
                />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black-translucent"
                />
                <meta name="theme-color" content="#08081c" />
            </Head>
            <GlobalStyle />
            <Nav />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
