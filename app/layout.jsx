import '../styles/globals.css'
import Script from "next/script"
import { Footer } from '../components/footer'
import { Header } from '../components/header'

export const metadata = {
  title: {
    template: '%s | VitalFlow',
    default: 'VitalFlow'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

     {/* TIKTOK PIXEL */}
<Script id="tiktok-pixel" strategy="afterInteractive">
{`
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;
  var ttq=w[t]=w[t]||[];
  ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
  ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
  for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
  ttq.load('D5CN6NRC77U3FL790S20');
}(window, document, 'ttq');
`}
</Script>
{/* END PIXEL */}

      </head>
      <body className="antialiased text-white bg-blue-900">
        <div className="flex flex-col min-h-screen px-6 bg-noise sm:px-12">
          <div className="flex flex-col w-full max-w-5xl mx-auto grow">
            <Header />
            <main className="grow">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
