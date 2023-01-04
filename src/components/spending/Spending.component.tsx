import styles from 'components/spending/Spending.module.scss';
import { DATA } from 'data/data';

export default function Spending() {
    return (
        <div className={styles.paper}>
            <h1 className={styles.title}>Spending - Last 7 days</h1>
            <div className={styles.chart}>
                {DATA.map(elm => (
                    <div className={styles.bar} key={elm.day}>
                        <div style={{
                            height: (elm.amount*2.5)+"px",
                            ...elm.amount > 50 && {background: "hsl(186, 34%, 60%)"}
                        }} ></div>
                        <p> {elm.day} </p>
                    </div>
                ))}
            </div>
            <hr />
            <p className={styles['small-text']}>Total this month</p>
            <div className={styles.footer}>
                <h2>$478.33</h2>
                <div>
                    <p>+2.4%</p>
                    <p className={styles['small-text']}>from last month</p>
                </div>
            </div>
        </div>
    )
}