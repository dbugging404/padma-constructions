import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-tailwind/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Header />
      <main className='min-h-screen bg-minsk-50'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
