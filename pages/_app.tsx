import { AppProps } from 'next/app'
import '../styles/index.scss'
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout deliveryAreas={pageProps.deliveryAreas}>
      <Component {...pageProps} />
    </Layout>
  )
}
