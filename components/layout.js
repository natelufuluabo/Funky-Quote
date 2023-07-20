import Head from 'next/head';

const Layout = ({ children, home }) => {
    return (
        <>
            <Head>
                <meta name="og:title" content="Funky-Quote" />
                <title>Funky-Quote</title>
                <link rel='icon' href='/android-chrome-512x512.png'/>
            </Head>
            {/* <header></header> */}
            <main>
                <article>{children}</article>
            </main>
        </>
    )
};

export default Layout;