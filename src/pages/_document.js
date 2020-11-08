import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class CustomDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta charSet='UTF-8' />
                    <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />

                    <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap' rel='stylesheet' />
                    <link href='https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@400;700&display=swap' rel='stylesheet' />
                    <link href='https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap' rel='stylesheet' />

                    <link rel='manifest' href='/manifest.json' />

                    <meta name='HandheldFriendly' content='True' />
                    <meta name='MobileOptimized' content='320' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='robots' content='noimageindex' />
                    <meta name='robots' content='follow' />
                    <meta name='robots' content='noodp' />

                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-touch-fullscreen' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='#ffffff' />

                    <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
                    <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
                    <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
                    <link rel='manifest' href='/favicons/site.webmanifest' />
                    <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#AB9363' />
                    <meta name='msapplication-TileColor' content='#ffffff' />
                    <meta name='theme-color' content='#AB9363' />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

CustomDocument.getInitialProps = async ctx => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: App => props => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};
