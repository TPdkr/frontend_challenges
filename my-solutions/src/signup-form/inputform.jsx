import styles from "./inputform.module.css";
import { useState } from "react";

function InputForm(){
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputs(values => ({...values, [name]:value}));
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
                        <form>
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
                            ></InputField>

                            <InputField 
                            name="password" 
                            value={inputs.password}
                            handleChange={handleChange}
                            placeholder="Password"
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

function InputField({name, value, handleChange, placeholder, pattern="/^[a-zA-Z]+$/"}){
    return (
        <input 
            type="text" 
            name={name}
            value={value} 
            onChange={handleChange}
            className={styles.inputField}
            placeholder={placeholder}
            required
            pattern={pattern}
        />
    );
}

export default InputForm