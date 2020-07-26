import { AppProps } from 'next/app'
import Head from 'next/head';

import Navbar from 'components/navbar';

import 'milligram/dist/milligram.css';
import 'styles.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="eba-site">
      <Head>
        <title>ESPECIFICOS Buenos Aires</title>
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  )
}

export default App;