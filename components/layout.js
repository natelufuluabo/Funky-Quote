import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.scss';
import { backgroundImageUrlAtom } from '@/recoilStore';
import { useRecoilValue } from 'recoil';

const Layout = ({ children }) => {
    const imageUrl = useRecoilValue(backgroundImageUrlAtom);
    const style = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
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
            <main style={style} className={styles.mainContainer}>
                <article>{children}</article>
            </main>
        </>
    )
};

export default Layout;