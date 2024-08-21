/* eslint-disable @typescript-eslint/no-explicit-any */
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect } from 'react'
import disableDevtool from 'disable-devtool'

// Configuração para o disable-devtool
const config = {
  interval: 500,
  disableMenu: true,
  disableSelect: true,
  disableCopy: true,
  disableCut: true,
  disablePaste: false,
  clearLog: true,
  clearIntervalWhenDevOpenTrigger: true,
  detectors: [
    0, // RegToString
    4, // FuncToString
    6, // DebugLib
  ],
  ondevtoolopen: (type: number, next: () => void) => {
    alert('Atenção: Ferramentas de desenvolvedor detectadas!')
    next()
  },
  rewriteHTML: '<html><body><h1>Conteúdo Protegido</h1></body></html>',
  disableIframeParents: true,
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    disableDevtool(config)
  }, [])

  return <Component {...pageProps} />
}
