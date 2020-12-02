import '../styles/main.scss'

import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Provider } from 'react-redux'

import TopBar from '../components/TopBar'
import withReduxStore from '../hocs/withReduxStore'

export const makeDocTitle = (title?: string): string => {
    return title ? `${title} – Battleships` : 'Battleships'
}

const CustomApp = (props: AppProps) => {
    const { Component, pageProps, store } = props

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <>
            <Head>
                <meta name='description' content='A Battleships implementation for SENG 350.' />
                <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap' />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>{makeDocTitle()}</title>
            </Head>
            <Provider store={store}>
                <div className='app'>
                    <TopBar />
                    <Component {...pageProps} />
                </div>
            </Provider>
        </>
    )
}

export default withReduxStore(CustomApp)
