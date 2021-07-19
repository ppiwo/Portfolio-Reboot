import Document, { Head, Html, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
       <Html>
       <Head>
           <link rel="preconnect" href="https://fonts.googleapis.com" />
           <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
           <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;700&family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />
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