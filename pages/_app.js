import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />

            <Component {...pageProps} />

            {/* <Footer /> */}
        </>
    )
}

export default MyApp
