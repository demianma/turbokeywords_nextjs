// Layout geral da pagina, monta o header, conteudo, footer etc

import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import styles from './layout.module.css'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
    return (
    <div>
        <Head>
            <title>Turbo Keywords (Next)</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Header />

        {/* <div className={styles.container}>{children}</div> */}
        <div class='row shadow m-3'>{children}</div>

        <Footer />
    </div>
    )
}