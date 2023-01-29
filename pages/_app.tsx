import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <GoogleAnalytics trackPageViews /> */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-K4L33V9R1X"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'NEXT_PUBLIC_GA_MEASUREMENT_ID');
        `}
      </Script>
      <Layout>
        <div className="text-slate-700 flex flex-col gap-6">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Layout>
    </>
  );
}

export default MyApp;
