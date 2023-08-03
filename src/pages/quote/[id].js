import { useEffect, useState } from "react";
import styles from './[id].module.scss';
import Layout from "../../../components/layout";
import Link from "next/link";
import { useRouter } from 'next/router';
import { getQuoteId, getQuoteContent, urlGenerator } from "@/utils-functions";
import { useRecoilValue, useRecoilState } from 'recoil';
import { backgroundImageUrlAtom, currentPathNameAtom } from "@/recoilStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

export async function getStaticPaths() {
    const paths = await getQuoteId();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const quoteData = await getQuoteContent(params.id);
    const quoteContent = quoteData.data
    return {
        props: {
            quoteContent,
        },
    };
}

const Quote = ({ quoteContent }) => {
    const [nextQuoteUrl, setNextQuoteUrl] = useState('');
    const router = useRouter();
    const imageUrl = useRecoilValue(backgroundImageUrlAtom);
    const [currentPathName, setCurrentPathName] = useRecoilState(currentPathNameAtom);
    const style = {
        backgroundImage: `url(${imageUrl || "https://firebasestorage.googleapis.com/v0/b/funky-quote.appspot.com/o/Images%20Landscape%2F101.jpg?alt=media&token=0ba0a731-fcad-4df4-8f13-4dd1c920598e"})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw'
    }
    useEffect(() => {
        const urlSetter = async () => {
            const url = await urlGenerator();
            setNextQuoteUrl(url);
        };
        urlSetter();
        const updateCurrentPathName = () => {
            const { id } = router.query;
            setCurrentPathName(`/quote/${id}`);
        };
        updateCurrentPathName();
        // Attach the event handler for route change
        router.events.on('routeChangeStart', updateCurrentPathName);
        router.events.on('routeChangeStart', urlSetter);
        
        // Cleanup the event handler when the component is unmounted
        return () => {
            router.events.off('routeChangeStart', updateCurrentPathName);
            router.events.off('routeChangeStart', urlSetter);
        };
    }, [router.events, setCurrentPathName, router.query]);
    return (
        <Layout>
            <div style={style} className={styles.quotepageContainer}>
                <div className={styles.quoteContainer}>
                    <h3 className={styles.quoteText}>{quoteContent.quote}</h3>
                    <Link className={styles.nextQuoteLink} href={nextQuoteUrl}>Next Quote</Link>
                </div>
            </div>
        </Layout>
    );
};

export default Quote;