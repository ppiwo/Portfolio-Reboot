import Document, { Head, Html, Main, NextScript } from 'next/document';
import { GTAG_ID } from '/lib/gtag';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Set up style-components for server sided rendering
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();

    // Google Analytics - Check if production
    const isProduction = process.env.NODE_ENV === 'production';

    return { ...page, styleTags, isProduction };
  }

  render() {
    const { isProduction } = this.props;

    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Raleway:wght@500&family=Roboto:wght@400;500;700;900&display=swap'
            rel='stylesheet' property='stylesheet'
          />
          <link
            rel='preload'
            href='/fonts/wotfard-regular.woff2'
            as='font'
            crossOrigin=''
          />
          {this.props.styleTags}
          {/* Initialize Google Analytics */}
          {isProduction && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GTAG_ID}', {
                      page_path: window.location.pathname,
                    });
                  `
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
