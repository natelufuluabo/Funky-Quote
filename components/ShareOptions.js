import styles from "./shareOptions.module.scss";
import { copyToClipboard } from "@/utils-functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export const ShareOptions = ({ pathName, textCopy, setShareOptionsShowing }) => {
    return (
        <div className={styles.shareOptionsContainer}>
            <ul className={styles.shareOptionsList}>
            <button className={styles.closeButton} onClick={() => setShareOptionsShowing(false)}>
                <FontAwesomeIcon icon={faX} />
            </button>
                <li onClick={() => copyToClipboard(pathName, setShareOptionsShowing)}>Copy Link</li>
                <li onClick={() => copyToClipboard(textCopy, setShareOptionsShowing)}>Copy Text</li>
            </ul>
        </div>
    )
}