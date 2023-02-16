import { AppProps } from 'next/app'
import localFont from '@next/font/local'

import '@/styles/index.css'

const sfPro = localFont({ src: [
  {path: './../fonts/SFPro/SF-Pro-Display-Black.ttf', weight: '900',},
  {path: './../fonts/SFPro/SF-Pro-Display-Heavy.ttf', weight: '800',},
  {path: './../fonts/SFPro/SF-Pro-Display-Bold.ttf', weight: '700',},
  {path: './../fonts/SFPro/SF-Pro-Display-Semibold.ttf', weight: '600',},
  {path: './../fonts/SFPro/SF-Pro-Display-Medium.ttf', weight: '500',},
  {path: './../fonts/SFPro/SF-Pro-Display-Regular.ttf', weight: '400',},
  {path: './../fonts/SFPro/SF-Pro-Display-Light.ttf', weight: '300',},
  {path: './../fonts/SFPro/SF-Pro-Display-Ultralight.ttf', weight: '200',},
  {path: './../fonts/SFPro/SF-Pro-Display-Thin.ttf', weight: '100',},
], variable: '--font-sfPro' })

const sfMono = localFont({ src: [
  {path: './../fonts/SFMono/SF-Mono-Heavy.ttf', weight: '800',},
  {path: './../fonts/SFMono/SF-Mono-Bold.ttf', weight: '700',},
  {path: './../fonts/SFMono/SF-Mono-Semibold.ttf', weight: '600',},
  {path: './../fonts/SFMono/SF-Mono-Medium.ttf', weight: '500',},
  {path: './../fonts/SFMono/SF-Mono-Regular.ttf', weight: '400',},
  {path: './../fonts/SFMono/SF-Mono-Light.ttf', weight: '300',},
], variable: '--font-sfMono' })  

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${sfPro.variable} ${sfMono.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
