import styles from "./inputform.module.css";

function InputForm(){
    return (
        <div className={styles.inputForm}>
            <div className={styles.header}>
                <h1>Learn to code by watching others</h1>
                <p>
                    See how experienced developers solve problems in real-time.
                     Watching scripted tutorials is great,but understanding how developers think is invaluable.
                </p>
            </div>
            <div>Form contents</div>
        </div>
    );
}

export default InputForm