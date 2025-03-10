import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.init";
import { useState } from "react";


const Login = () => {

    const [success, setSuccess]=useState(false);
    const [loginError, setLoginError]=useState('');

    const handleLoginForm=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;

        // reset value
        setSuccess(false);
        setLoginError('')

        console.log(email, password);

        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user);

            
            // Email Varification
            if(!result.user.emailVerified){
                alert('Please Varify your email')
            }
            else{
                setSuccess(true);
            }

        })
        .catch(error=>{
            console.log('Error', error.message);
            setLoginError(error.message);
        })


    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLoginForm} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                    {
                        success && <p className="text-green-600 text-xl m-3">Login Successfully</p>
                    }
                    {
                        loginError && <>
                        <p className="text-red-500 text-xl m-2">Email & Password does not match</p>
                        
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;