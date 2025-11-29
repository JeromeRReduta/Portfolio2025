import styles from "../design/Error.module.css";

export default function ErrorPage() {
    return (
        <section className={styles["error"]}>
            <img
                className={styles["error__reaction"]}
                src="/src/assets/confused-bob.png"
                alt="oh now the image isn't working too"
            />
            <div className={styles["error__blurb"]}>
                There's nothing here. Are you sure you didn't enter an invalid
                url?
            </div>
        </section>
    );
}
