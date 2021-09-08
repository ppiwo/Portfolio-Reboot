import Document, { Head, Html, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Set up style-components for server sided rendering
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name='description'
            key='description'
            content='Patrick Piwowarczyk - 
          Software Engineer with an interest in all thing web - 
          Chicago, IL - 
          Lead Front End Developer @ Bluedge USA'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Raleway:wght@500&family=Roboto:wght@400;500;700;900&display=swap'
            rel='stylesheet'
          />
          <link
            rel='preload'
            href='/fonts/wotfard-regular.woff2'
            as='font'
            crossOrigin=''
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
