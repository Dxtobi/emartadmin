import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import Layout from '../components/layout'
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <SessionProvider session={pageProps.session}>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  
  )
}

export default MyApp
export function reportWebVitals(metric: any) {
  console.log('metrics::', metric);
}