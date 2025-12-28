import styles from './mainpage.module.css'
import './mainpage.css'
import { Link } from 'react-router-dom'

function Mainpage() {
    return (
        <>
            <div className={styles.title}>
                <h1>Hello! Fancy seeing some solutions?</h1>
                <h3>
                    My solutions to front-end mentor challenges grouped into a single repo.
                    This uses react and GitHub pages for creating the websites and for hosting it on the web.
                </h3>
            </div>
            <Link to="/frontend_challenges/faq-accordion/">FAQ accordion</Link>
            <p>TODO Here I can put links to the resources and this page can be further styled</p>
        </>
    )
}

export default Mainpage