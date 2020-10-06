import NextDocument, { DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class Document extends NextDocument {
    static getInitialProps = async (context) => {
        const initialProps: DocumentInitialProps = await Document.getInitialProps(context)

        return { ...initialProps }
    }

    render() {
        return (
            <Html lang='en'>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document
