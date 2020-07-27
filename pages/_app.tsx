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
        <script type="text/javascript" src="/material.min.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
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
      <style jsx>{`
        @font-face {
          font-family: 'Material Icons';
          font-style: normal;
          font-weight: 400;
          src: url(flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format('woff2');
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
          -webkit-font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
        }
      `}</style>
    </div>
  )
}

export default App;