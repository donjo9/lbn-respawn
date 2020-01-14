import App from 'next/app'
import Head from 'next/head'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>LbN - LamersByNight</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp