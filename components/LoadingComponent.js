import styles from "./loadingComponent.module.scss";

export const LoadingComponent = () => {
    return (
        <div className={styles.waiting_page}>
            <div className={styles.lds_spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <h3 className={styles.waiting_text}>Please wait...</h3>
        </div>
    )
};