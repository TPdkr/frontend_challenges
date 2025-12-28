import styles from "./faqaccordion.module.css"

import backgroundDesktop from "./assets/images/background-pattern-desktop.svg";
import star from './assets/images/icon-star.svg';
import minus from './assets/images/icon-minus.svg';
import plus from './assets/images/icon-plus.svg';
import { useState } from "react";

function FaqAccordion(){
    const faqs=[
        {   
            label:"What is frontend mentor and how will it help me?",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si aliquod aeternum et infinitum impendere malum nobis opinemur. Quod idem licet transferre in."
        },
        {   
            label:"Is frontend mentor free?",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si aliquod aeternum et infinitum impendere malum nobis opinemur. Quod idem licet transferre in."
        },
        {   
            label:"Can I use frontend mentor prokects in my portfolio?",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si aliquod aeternum et infinitum impendere malum nobis opinemur. Quod idem licet transferre in."
        },
        {   
            label:"How can I get help if I am stuck on a challenge?",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque doleamus animo, cum corpore dolemus, fieri tamen permagna accessio potest, si aliquod aeternum et infinitum impendere malum nobis opinemur. Quod idem licet transferre in."
        }
    ];

    const length = faqs.length;

    const items = faqs.map((item, index)=>
        <div>
            <AccordionItem label={item.label}>{item.content}</AccordionItem>
            {(index < length -1) ? (<Sep/>) : (<></>)}
        </div>
            
    );
    //<!--<img src={backgroundDesktop} className={styles.backdrop}/>-->

    return (
        <div className={styles.faqaccordion}>
            
            <div className={styles.window}>
                <div className={styles.header}>
                    <img src={star}/>
                    <h1>FAQs</h1>
                </div>
                {items}
            </div>
        </div>
    )
}

function AccordionItem({label, children}){
    const [isOpen, setState] = useState(false)

    const itemContent = {
        maxHeight: (!isOpen) ? "0px" : "10000rem",
        marginTop: (!isOpen) ? "0" : "0.5rem",
        overflow: "hidden",
        transition: "all 1s"
    }

    return (
        <div className={styles.item} key={label}>
            <div className={styles.itemLabel} onClick={()=> setState(!isOpen)}>
                <b>{label}</b>
                {
                    (isOpen) ? <img src={minus}/> : <img src={plus}/>
                }
            </div>
            <div style={itemContent} className={styles.itemContent}>
                <p>
                    {children}
                </p>
            </div>
        </div>
    )
}

function Sep(){
    return (
        <div className={styles.sep}></div>
    )
}

export default FaqAccordion