import styles from "./quoteContainer.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

export const QuoteContainer = ({ quoteContent, setShareOptionsShowing, shareOptionsShowing, nextQuoteUrl }) => {
    return (
        <div className={styles.quoteContainer}>
            <h3 className={styles.quoteText}>{quoteContent.quote}</h3>
            <button onClick={() => setShareOptionsShowing(!shareOptionsShowing)} className={styles.shareButton}> <span>Share</span> <FontAwesomeIcon icon={faArrowUpFromBracket} /></button>
            <Link className={styles.nextQuoteLink} href={nextQuoteUrl}>Next Quote</Link>
        </div>
    )
}