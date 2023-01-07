import '../styles/globals.css'
import { bebas } from '../libs/fonts'

export default function App({ Component, pageProps }) {
  return <main className={bebas.className}>
    <Component {...pageProps} />
  </main>
}
