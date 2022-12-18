import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../component/layout'
import styled from '@emotion/styled'

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <StyleWrap>
      <Layout className={'layout'}>
        <Component {...pageProps} />
      </Layout>
    // </StyleWrap>
  )
}

// const StyleWrap = styled.div`
//   .layout {
//     display: flex;
//   }
// `