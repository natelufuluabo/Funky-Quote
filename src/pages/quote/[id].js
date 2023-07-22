import Layout from "../../../components/layout";
import { getQuoteId, getQuoteContent } from "@/utils-functions";
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
    return (
        <Layout>
            <div style={style}>
                {quoteContent.quote}
            </div>
        </Layout>
    );
};

export default Quote;