// Layout geral da pagina, monta o header, conteudo, footer etc
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export const siteTitle = 'Turbo Keywords'
export const name = 'Demian Andrade'
export const siteDescription = 'Localize interesses ocultos no Facebook Ads'

const ogImage = '../images/imagem.png'

export default function Layout({ children }) {
    return (
    <div>
        <Head>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription}/>
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:type" content="article" />
            {/* <meta property="og:url" content="https://..." /> */}
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:image" content={ogImage}/>
            <meta property="og:image:width" content="306" />
	        <meta property="og:image:height" content="408" />
            <meta property="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        
        <Header />

        <div className='container-fluid'>{children}</div>

        <Footer />
    </div>
    )
}

