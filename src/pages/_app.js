import ContextProvider from "@/context/ContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.min.css";
import "tiny-slider/dist/tiny-slider.css";
import "@/vendors/animate/animate.min.css";
import "@/vendors/animate/custom-animate.css";
import "@/vendors/fontawesome/css/all.min.css";
import "@/vendors/mibooz-icons/style.css";
import "@/vendors/reey-font/stylesheet.css";
import "@/vendors/the-sayinistic-font/stylesheet.css";
import "react-modal-video/css/modal-video.min.css";

// extra css
import "@/styles/globals.css";
import "@/styles/mibooz.css";
import "@/styles/mibooz-responsive.css";

import Script from 'next/script';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      {/* Google Tag Manager */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MH5M3TR8');
          `,
        }}
      />
      {/* End Google Tag Manager */}
      <Component {...pageProps} />
    </ContextProvider>
  );
};

export default MyApp;
