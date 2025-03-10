import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.init";
import { useState } from "react";

const SignUp = () => {

    const [errorMessage,setErrorMessage]=useState('');


    const handleSignUp=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;

        console.log(email, password);

        createUserWithEmailAndPassword(auth,email,password)
        .then((result)=>{
            console.log(result)
            setErrorMessage('')
        })
        .catch(error=>{
            console.log('Error',error.message);
            setErrorMessage(error.message)
        })

    }

    return (

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-6 border-2 mx-auto">
            <h1 className="text-3xl font-bold text-center mt-3">SignUp now!</h1>
            <div className="card-body">
                <form onSubmit={handleSignUp}>
                    <fieldset className="fieldset">

                        <label className="fieldset-label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" required/>

                        <label className="fieldset-label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
                {
                    errorMessage && <p className="text-red-600">{errorMessage}</p>
                }
            </div>
        </div>

    );
};

export default SignUp;