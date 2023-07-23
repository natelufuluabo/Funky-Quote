import Layout from "../../../components/layout";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { getQuoteId, getQuoteContent, urlGenerator } from "@/utils-functions";
import { useRecoilValue } from 'recoil';
import { backgroundImageUrlAtom } from "@/recoilStore";

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
    const imageUrl = useRecoilValue(backgroundImageUrlAtom);
    const style = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        width: '100%'
    }
    const [nextQuoteUrl, setNextQuoteUrl] = useState('');
    const router = useRouter();
    useEffect(() => {
        const urlSetter = async () => {
            const url = await urlGenerator();
            setNextQuoteUrl(url);
        };
        urlSetter();
        // Attach the event handler for route change
        router.events.on('routeChangeStart', urlSetter);

        // Cleanup the event handler when the component is unmounted
        return () => {
            router.events.off('routeChangeStart', urlSetter);
        };
    }, [router.events]);
    return (
        <Layout>
            <div style={style}>
                {quoteContent.quote}
                <Link href={nextQuoteUrl}>Next Quote</Link>
            </div>
        </Layout>
    );
};

export default Quote;