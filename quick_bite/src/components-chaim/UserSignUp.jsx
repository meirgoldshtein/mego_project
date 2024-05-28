import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useCallback, useState } from 'react'
import { Auth } from "./firebase-config";







// import ReactDOM from "react-dom/client";

// export default function UserSignUp() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//       <input 
//         type="text" 
//         name="username" 
//         value={inputs.username || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Enter your age:
//         <input 
//           type="number" 
//           name="age" 
//           value={inputs.age || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <input type="submit" />
//     </form>
//   )
// }






// יצירת משתמש חדש
export default function UserSignUp() {

    const [email,setEmail] = useState('')
    const   emailInput = (e) => {
        setEmail(e.target.value)
        console.log(email);
    }
    const [password,setPassword] = useState('')
    const passwordInput = (e) => {
        setPassword(e.target.value)
        console.log(password);
    }
    const signUP  = async function () {
        // const [count, setCount] = useState(0)
        await createUserWithEmailAndPassword(Auth, email, password)
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
            <div id='creditCard'>
                <input onInput = {emailInput} id='inputname' type="text" placeholder='Username' />
                <input onInput = {passwordInput} id='inputpassword' type="text" placeholder='Password' />
            </div>
            <button onDoubleClick = {signUP} > click</button>
        </div>
    )
}