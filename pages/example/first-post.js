import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost (){
    return (
        // JFX tem que sempre ter um parent. por isso, um div.
        <Layout>
            <div>
                <Head>
                    <title>Título da página</title>
                </Head>
                Hello
            </div>
        </Layout>
    )
}