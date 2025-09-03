import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/header';
import Footer from '@/components/footer';
 
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <div class="flex flex-col h-screen justify-between">
          <Header />
          <main class="flex-grow">
            <Main />
          </main>
          <NextScript />
          <Footer />
        </div>
      </body>
    </Html>
  )
}