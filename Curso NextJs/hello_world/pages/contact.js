import Link from 'next/link'
import Head from 'next/head'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Página de Contato</title>
            </Head>
            <h1>Contato</h1>
            <Link href="/">
                <a>Voltar</a>
            </Link>
        </>
    )
}