import { Cormorant_Unicase, Lato } from 'next/font/google'

const cormorantUnicase = Cormorant_Unicase({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-cormorant',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lato',
})

/* ======================================================================== */
/* IMPORTAÇÃO DE COMPONENTES */
import SkipLink from '@/components/acessibility/SkipLink'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

/* ======================================================================== */
/* IMPORTAÇÃO DE CSS */
import './base.css'
import MotionProvider from '@/components/providers/MotionProvider'

/* ======================================================================== */
/* METADADOS */
const description = 'Pousada aconchegante e rústica no coração de Palmas de Monte Alto – BA. Café da manhã incluso, Wi-Fi e Netflix disponíveis para todos os hóspedes. Descubra o charme autêntico do interior baiano.'

export const metadata = {
  title: 'Pousada Canto da Serra | Palmas de Monte Alto – BA',
  applicationName: 'Pousada Canto da Serra',
  description,
  keywords: [
    'Pousada Canto da Serra',
    'Pousada Palmas de Monte Alto',
    'Hospedagem Palmas de Monte Alto',
    'Pousada Bahia',
    'Pousada interior baiano',
    'Pousada rústica Bahia',
    'Hospedagem com café da manhã Bahia',
    'Turismo Palmas de Monte Alto',
    'Pousada aconchegante Bahia',
    'Onde ficar em Palmas de Monte Alto',
  ],
  metadataBase: new URL('https://www.cantodaserra.com'),
  alternates: { canonical: '/' },
  authors: [{ name: 'Gustavo Costa', url: '' }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    images: '/openGraph-banner.jpg',
    title: 'Pousada Canto da Serra | Palmas de Monte Alto – BA',
    description,
    type: 'website',
    siteName: 'Pousada Canto da Serra',
    locale: 'pt_BR',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pousada Canto da Serra | Palmas de Monte Alto – BA',
    description,
    images: ['/openGraph-banner.jpg'],
  },
  robots: { index: true, follow: true },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="pt-br" className={`${lato.variable} ${cormorantUnicase.variable}`}>
      <body className='flex flex-col min-h-screen bg-ds-neutral-50 overflow-x-hidden max-w-dvw'>
        <MotionProvider>
          <SkipLink/>
          <Header/>
          <main id='main' className='main grow'>{children}</main>
          <Footer/>
        </MotionProvider>
      </body>
    </html>
  )
}
