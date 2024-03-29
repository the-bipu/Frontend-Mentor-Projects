import React from "react";
import Footer from "./Footer";

export default function Main () {

    // const [email, setEmail] = React.useState("");
    // const [isValidEmail, setIsValidEmail] = React.useState(true);

    // const [fname, setFname] = React.useState("");
    // const [isValidFname, setIsValidFname] = React.useState(true);

    // const [lname, setLname] = React.useState("");
    // const [isValidLname, setIsValidLname] = React.useState(true);

    // const [password, setPassword] = React.useState("");
    // const [isValidPassword, setIsValidPassword] = React.useState(true);

    // const mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

    // const handleEmailChange = (event) => {
    //     const newEmail = event.target.value;
    //     setEmail(newEmail);

    //     if (newEmail.match(mailRegex)) {
    //     setIsValidEmail(true);
    //     } else {
    //     setIsValidEmail(false);
    //     }
    // };

    // const fnameChange = (event) => {
    //     const newFname = event.target.value;
    //     setFname(newFname);

    //     if (newFname == ""){
    //         setIsValidFname(false)
    //     } else {
    //         setIsValidFname(true)
    //     }
    // }

    // const lnameChange = (event) => {
    //     const newLname = event.target.value;
    //     setLname(newLname);

    //     if (newLname == ""){
    //         setIsValidLname(false)
    //     } else {
    //         setIsValidLname(true)
    //     }
    // }

    // const handlePasswordChange = (event) => {
    //     const newPassword = event.target.value;
    //     setPassword(newPassword);

    //     if (newPassword == ""){
    //         setIsValidPassword(false)
    //     } else {
    //         setIsValidPassword(true)
    //     }
    // }

    function useFormInput(initialValue, validationFn) {
    const [value, setValue] = React.useState(initialValue);
    const [isValid, setIsValid] = React.useState(true);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        setIsValid(validationFn(newValue));
    };

    return {
            value,
            isValid,
            onChange: handleChange,
        };
    }

    const mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

    const fnameInput = useFormInput("", (value) => value.trim() !== "");
    const lnameInput = useFormInput("", (value) => value.trim() !== "");
    const emailInput = useFormInput("", (value) => value.match(mailRegex));
    const passwordInput = useFormInput("", (value) => value.trim() !== "");


    function handleSubmission(){
        if (fnameInput.value=="" || lnameInput.value=="" || emailInput.value=="" || passwordInput.value=="") {
            window.location.reload();
            window.alert("You must fill the form first! 🥲");
            console.log("Consoled!");
        }

        if (fnameInput.value!="" && lnameInput.value!="" && emailInput.value!="" && passwordInput.value!="") {
            window.location.reload();
            window.alert("You're now logged in! 🤖");
        }
    }

    return (
        <div className="container">
            <div className="con1-div1">

                <p className="heading">Learn to code by watching others</p>
                <p className="about">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>

                <Footer />
            </div>
            <div className="con1-div2">

                <div className="con1-div2-1">
                    <p className="plans">Try it free 7 days <span>then $20/mo. thereafter</span></p>
                </div>
                <div className="con1-div2-2">

                    {/* <div className="con1-div2-2-1 con1-iDiv-1">
                        <input type="text" name="fname" placeholder="First Name" value={fname} 
                        onChange={fnameChange} 
                        className={`con2-Input border-style ${isValidFname ? "" : "wrongInput warningBorder"}`} />

                        <div className={`warningDiv w-4 ${isValidFname ? "" : "wrongInput w-1-change"}`}>First Name cannot be empty</div>
                    </div>

                    <div className="con1-div2-2-1 con1-iDiv-2">
                        <input type="text" name="lname" placeholder="Last Name" value={lname} 
                        onChange={lnameChange} 
                        className={`con2-Input border-style ${isValidLname ? "" : "wrongInput warningBorder"}`} />

                        <div className={`warningDiv w-4 ${isValidLname ? "" : "wrongInput w-2-change"}`}>Last Name cannot be empty</div>
                    </div>

                    <div className="con1-div2-2-1 con1-iDiv-3">
                        <input type="email" name="email" placeholder="Email Address" value={email} 
                        onChange={handleEmailChange} 
                        className={`con2-Input border-style ${isValidEmail ? "" : "wrongInput warningBorder"}`} />
                        
                        <div className={`warningDiv w-4 ${isValidEmail ? "" : "wrongInput w-3-change"}`}>Looks like this is not an email</div>
                    </div>

                    <div className="con1-div2-2-1 con1-iDiv-4">
                        <input type="password" name="password" placeholder="Password" value={password} 
                        onChange={handlePasswordChange} 
                        className={`con2-Input border-style ${isValidPassword ? "" : "wrongInput warningBorder"}`} />

                        <div className={`warningDiv w-4 ${isValidPassword ? "" : "wrongInput w-3-change"}`}>Password cannot be empty</div>
                    </div>

                    <button type="submit" onClick={handleSubmission}>Claim your free trial</button>
                    <p className="terms">By clicking the button, you are agreeing to our <span>Terms and Services</span></p> */}

                    <div className="con1-div2-2-1 con1-iDiv-1">
                        <input type="text" name="fname" placeholder="First Name" value={fnameInput.value} 
                        onChange={fnameInput.onChange} 
                        className={`con2-Input border-style ${fnameInput.isValid ? "" : "wrongInput warningBorder"}`} />

                        <div className={`warningDiv w-4 ${fnameInput.isValid ? "" : "wrongInput w-1-change"}`}>First Name cannot be empty</div>
                    </div>

                    <div className="con1-div2-2-1 con1-iDiv-2">
                        <input type="text" name="lname" placeholder="Last Name" value={lnameInput.value} 
                        onChange={lnameInput.onChange} 
                        className={`con2-Input border-style ${lnameInput.isValid ? "" : "wrongInput warningBorder"}`} />

                        <div className={`warningDiv w-4 ${lnameInput.isValid ? "" : "wrongInput w-2-change"}`}>Last Name cannot be empty</div>
                    </div>

                    <div className="con1-div2-2-1 con1-iDiv-3">
                        <input type="email" name="email" placeholder="Email Address" value={emailInput.value} 
                        onChange={emailInput.onChange} 
                        className={`con2-Input border-style ${emailInput.isValid ? "" : "wrongInput warningBorder"}`} />
                        
                        <div className={`warningDiv w-4 ${emailInput.isValid ? "" : "wrongInput w-3-change"}`}>Looks like this is not an email</div>
                    </div>

                    <div className="con1-div2-2-1 con1-iDiv-4">
                        <input type="password" name="password" placeholder="Password" value={passwordInput.value} 
                        onChange={passwordInput.onChange} 
                        className={`con2-Input border-style ${passwordInput.isValid ? "" : "wrongInput warningBorder"}`} />

                        <div className={`warningDiv w-4 ${passwordInput.isValid ? "" : "wrongInput w-3-change"}`}>Password cannot be empty</div>
                    </div>

                    <button onClick={handleSubmission} type="submit">Claim your free trial</button>
                    <p className="terms">By clicking the button, you are agreeing to our <span>Terms and Services</span></p>

                </div>

            </div>
        </div>
    )
}