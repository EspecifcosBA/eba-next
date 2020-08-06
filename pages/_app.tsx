import { AppProps } from 'next/app'
import Head from 'next/head';

import Navbar from 'components/navbar';

import 'styles.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="eba-site">
      <Head>
        <title>ESPECIFICOS Buenos Aires</title>
        <link href="/material.min.css" rel="stylesheet"></link>
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className="mdl-layout__container">
        <div className="mdl-layout mdl-layout--fixed-header has-drawer is-upgraded">
          <Navbar/>
          <div className="mdl-layout__content">
            <Component {...pageProps} />
            <footer className="mdl-mini-footer">
              <div className="mdl-mini-footer__left-section">
                <div className="mdl-logo">Title</div>
                <ul className="mdl-mini-footer__link-list">
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Privacy & Terms</a></li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </div>
      <style jsx>{`
        @font-face {
          font-family: 'Material Icons';
          font-style: normal;
          font-weight: 400;
          src: url(/MaterialIcons-Regular.eot);
          src: url(/MaterialIcons-Regular.woff2) format('woff2');
          src: url(/MaterialIcons-Regular.woff) format('woff');
          src: url(/MaterialIcons-Regular.ttf) format('truetype');
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