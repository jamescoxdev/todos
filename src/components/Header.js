import styles from './Header.module.scss';

const Header = (props) => {
    const { add, showDone, setShowDone } = props;
    return(
        <div className={styles.Header}>
            <h1>To Dos</h1>
            {showDone && <button className={styles.button} onClick={() => setShowDone(false)}>Hide Done</button>}
            {!showDone && <button className={styles.button} onClick={() => setShowDone(true)}>Show Done</button>}
            <button className={styles.button} onClick={() => add()}>+ Add</button>
        </div>
    )
}

export default Header;