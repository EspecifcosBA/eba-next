import { AppProps } from 'next/app'
import Head from 'next/head';

import Navbar from 'components/navbar';
import Footer from 'components/footer';

import { useEffect } from 'react';
import { useRouter } from 'next/router';


import 'styles.css';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      console.log('hey')
      window.scrollTo(0,0);
    })
  })
  return (
    <div className="eba-site">
      <Head>
        <title>ESPECIFICOS Buenos Aires</title>
        <link href="/material.min.css" rel="stylesheet"></link>
        <link rel="icon" type="image/png" href="/favicon.png"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className="mdl-layout__container">
        <div className="mdl-layout mdl-layout--fixed-header has-drawer is-upgraded">
          <Navbar/>
          <div className="mdl-layout__content">
            <Component {...pageProps}/>
            <Footer />
          </div>
        </div>
      </div>
      <style jsx>{`
        .eba-site .mdl-layout__content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        @font-face {
          font-family: 'Playfair Display';
          font-style: normal;
          font-weight: 400;
          src: url(/fonts/PlayfairDisplay-Medium.ttf) format('truetype');
        }

        @font-face {
          font-family: 'Playfair Display';
          font-style: bold;
          font-weight: 700;
          src: url(/fonts/PlayfairDisplay-Bold.ttf) format('truetype');
        }

        @font-face {
          font-family: 'Material Icons';
          font-style: normal;
          font-weight: 400;
          src: url(/fonts/MaterialIcons-Regular.eot);
          src: url(/fonts/MaterialIcons-Regular.woff2) format('woff2');
          src: url(/fonts/MaterialIcons-Regular.woff) format('woff');
          src: url(/fonts/MaterialIcons-Regular.ttf) format('truetype');
        }
        
        .material-icons {
          font-family: 'Material Icons';
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          text-rendering: optimizeLegibility;
          -moz-osx-font-smoothing: grayscale;
          font-feature-settings: 'liga';
          -webkit-font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
          -webkit-font-smoothing: antialiased;
        }

      `}</style>
    </div>
  )
}

export default App;