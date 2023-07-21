import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.scss'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="og:title" content="Funky-Quote" />
                <title>Funky-Quote</title>
                <link rel='icon' href='/android-chrome-512x512.png'/>
            </Head>
            <header className={styles.headerContainer}>
                <nav className={styles.navContainer}>
                    <Image 
                        priority
                        src='/android-chrome-512x512.png'
                        height={50}
                        width={50}
                        alt='logo-image'
                    />
                </nav>
            </header>
            <main className={styles.mainContainer}>
                <article>{children}</article>
            </main>
        </>
    )
};

export default Layout;