import { getAllDocuments } from "./firebase/config";

export const getQuoteId = async () => {
    const quotes = await getAllDocuments();

    return quotes.map((quote) => {
        return {
            params: {
              id: quote.id,
            },
        };
    });
};

export const getQuoteContent = async (id) => {
    const quotes = await getAllDocuments();

    const quoteContent = quotes.filter((quote) => quote.id === id)

    return {
        ...quoteContent['0']
    }
};