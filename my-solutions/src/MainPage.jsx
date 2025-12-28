import styles from './mainpage.module.css'
import { Link } from 'react-router-dom'

function Mainpage() {
    return (
        <div className={styles.mainPage}>
            <div className={styles.title}>
                <h1>Hello! Fancy seeing some solutions?</h1>
                <h3>
                    My solutions to front-end mentor challenges grouped into a single repo.
                    This uses react and GitHub pages for creating the websites and for hosting it on the web.
                </h3>
            </div>
            <div className={styles.links}>
                <div className={styles.problem}>
                    <h3>FAQ accordion problem</h3>
                    <p>
                        In this challenge, you'll build an FAQ accordion. This is an extremely common front-end pattern, 
                        so it's an excellent opportunity to get some practice in!
                    </p>
                    
                    <Link to="/frontend_challenges/faq-accordion/">FAQ accordion page</Link>
                    <div></div>
                    <a href="https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz">Problem source task</a>
                </div>
                
            </div>
        </div>
    )
}

export default Mainpage