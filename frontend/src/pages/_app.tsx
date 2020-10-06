import '../styles/main.scss'

import TopBar from '../components/TopBar'

import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

export const makeDocTitle = (title?: string): string => {
    return title ? `${title} – Battleships` : 'Battleships'
}

const CustomApp = (props: AppProps) => {
    const { Component, pageProps } = props
    return (
        <>
            <Head>
                <meta name='description' content='A Battleships implementation for SENG 350.' />
                <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap'></link>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>{makeDocTitle()}</title>
            </Head>
            <div className='app'>
                <TopBar />
                <Component {...pageProps} />
            </div>
        </>
    )
}

export default CustomApp
