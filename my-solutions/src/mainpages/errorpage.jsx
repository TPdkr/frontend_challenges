import styles from './mainpage.module.css'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div className={styles.mainPage}>
            <div className={styles.title}>
                <h1>I think you lost me there gurl. Page not found :3</h1>
                <h3>
                    Return back to safety?
                </h3>
                <Link to="/frontend_challenges/">Main page is just a click away</Link>
            </div>
        </div>
    )
}

export default ErrorPage