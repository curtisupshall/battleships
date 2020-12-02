import React from 'react'

import NextDocument, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'

class Document extends NextDocument {
    static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
        const sheets = new ServerStyleSheets()
        const originalRenderPage = context.renderPage

        context.renderPage = () => {
            return originalRenderPage({
                enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
            })
        }

        const initialProps = await NextDocument.getInitialProps(context)
        return {
            ...initialProps,
            styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
        }
    }

    render() {
        return (
            <Html lang='en'>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document
