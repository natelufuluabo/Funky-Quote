import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="og:title" content="Funky-Quote" />
                <title>Funky-Quote</title>
                <link rel='icon' href='/android-chrome-512x512.png'/>
                <script src="https://kit.fontawesome.com/06745a3a6c.js" crossorigin="anonymous" defer></script>
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
                    <Link href='/settings' className={styles.link}>Change Background Image</Link>
                </nav>
            </header>
            <main className={styles.mainContainer}>
                <article className={styles.articleContainer}>{children}</article>
            </main>
        </>
    )
};

export default Layout;