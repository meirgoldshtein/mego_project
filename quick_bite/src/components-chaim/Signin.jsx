import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";




const auth = getAuth();
export default function Signin() {

    const [email ,setEmail] = useState('')
    const emailInput = (e) => {
        setEmail(e.target.value)
        console.log(email);
    }

    const [password , setPassword] = useState('')
    const passwordInput = (e) => {
        setPassword(e.target.value)
        console.log(password);
    }


    const UserSignIn = async function () {

        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                console.log("The user is loged in");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);
            });
    }

    return (
        <div>
            <h2>sign in</h2>
            <div id='creditCard'>
                <input onInput={emailInput} id='inputname' type="text" placeholder='Username' />
                <input onInput={passwordInput} id='inputpassword' type="text" placeholder='Password' />
            </div>
            <button onDoubleClick={UserSignIn} > click</button>
        </div>
    )
}
