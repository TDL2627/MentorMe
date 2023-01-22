import '../styles/globals.css'
import Navigation from '../components/Navbar'
import Footer from '../components/Footer'
export default function App({ Component, pageProps }) {

  return (<>
  <Navigation/>
   <Component {...pageProps} />
   <Footer/>
   </>)
}
