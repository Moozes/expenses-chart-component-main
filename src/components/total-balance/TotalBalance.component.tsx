import styles from 'components/total-balance/TotalBalance.module.scss';
import logo from 'images/logo.svg'

export default function TotalBalance() {
    return (
        <div className={styles.paper}>
            <div className={styles.balance}>
                <p>My balance</p>
                <h3>$921.48</h3>
            </div>
            <img src={logo} alt="Logo" className={styles.logo} />
        </div>
    )
}