import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className="text-slate-700 flex flex-col gap-6">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Layout>
  )
}

export default MyApp
