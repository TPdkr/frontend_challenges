import styles from "./inputform.module.css";
import { useState } from "react";

function InputForm(){
    const [inputs, setInputs] = useState({});

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setInputs(values => ({...values, [name]:value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Hello dear ${inputs.firstname} ${inputs.lastname}`);
    }



    return (
        <div className={styles.inputForm}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1>Learn to code by watching others</h1>
                    <p>
                        See how experienced developers solve problems in real-time.
                        Watching scripted tutorials is great,but understanding how developers think is invaluable.
                    </p>
                </div>
                <div className={styles.form}>
                    <div className={styles.island}>
                        <p>
                            <b>Try it free 7 days</b> then $20/mo. thereafter
                        </p>

                    </div>
                    <div className={styles.window}> 
                        <form onSubmit={handleSubmit}>
                            <InputField 
                            name="firstname" 
                            value={inputs.firstname}
                            handleChange={handleChange}
                            placeholder="First name"
                            ></InputField>

                            <InputField 
                            name="lastname" 
                            value={inputs.lastname}
                            handleChange={handleChange}
                            placeholder="Last name"
                            ></InputField>

                            <InputField 
                            name="email" 
                            value={inputs.email}
                            handleChange={handleChange}
                            placeholder="Email Address"
                            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                            ></InputField>

                            <InputField 
                            name="password" 
                            value={inputs.password}
                            handleChange={handleChange}
                            placeholder="Password"
                            type="password"
                            pattern="^[a-zA-Z0-9]{5,}$"
                            ></InputField>

                            <input className={styles.inputField} type="submit" value="CLAIM YOUR FREE TRIAL"/>

                            <p className={styles.disclaimer}>
                                By clicking the button you are agreing to our <b>Terms and Services</b>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InputField({name, value, handleChange, placeholder, pattern="^[a-zA-Z]+$", type="text"}){
    const pattern_adj = new RegExp(pattern);

    const [message, setMessage]= useState("");

    return (
        <div>
            <input 
                type={type} 
                name={name}
                value={value} 
                onChange={(e)=>{
                    if (!e.target.value){
                        setMessage(`${placeholder} cannot be empty`);
                    } else if (!pattern_adj.test(e.target.value)) {
                        setMessage(`Looks like this is not ${placeholder}`);
                    } else {
                        setMessage("");
                    }
                    
                    handleChange(e);
                }}
                className={`${styles.inputField} ${(message)? styles.error : ""}`}
                placeholder={placeholder}
                required
                pattern={pattern}
            />
            <div className={styles.errorMessage}>
                {message}
            </div>
        </div>
    );
}

export default InputForm