import styles from "./shareOptions.module.scss";
import { copyToClipboard } from "@/utils-functions";

export const ShareOptions = ({ pathName, textCopy, setShareOptionsShowing }) => {
    return (
        <div className={styles.shareOptionsContainer}>
            <ul className={styles.shareOptionsList}>
                <li onClick={() => copyToClipboard(pathName, setShareOptionsShowing)}>Copy Link</li>
                <li onClick={() => copyToClipboard(textCopy, setShareOptionsShowing)}>Copy Text</li>
            </ul>
        </div>
    )
}