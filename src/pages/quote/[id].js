import Layout from "../../../components/layout";
import { getQuoteId, getQuoteContent } from "@/utils-functions";

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
    return <Layout>
        {quoteContent.quote}
    </Layout>;
};

export default Quote;