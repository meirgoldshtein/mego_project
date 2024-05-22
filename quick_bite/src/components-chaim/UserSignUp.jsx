import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react'
import { Auth } from "./firebase-config";


// יצירת משתמש חדש

export default function UserSignUp() {
    async function signUP(email, password) {
        // const [count, setCount] = useState(0)
        await createUserWithEmailAndPassword(Auth,email,password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ..
            });
    }
    return (
        <div>
            <button onClick={signUP('ch11m@gmail.com',"12987654")} > click</button>
        </div>
    )
}
