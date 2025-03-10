import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.init";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

    const emailRef=useRef();

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

    /// Password reset 

    const handleForgetPassword=()=>{
        console.log('forget password is comming', emailRef.current.value);
        const email=emailRef.current.value;
        if(!email){
            alert('please provide a varified email');
        }
        else{
            sendPasswordResetEmail(auth,email)
            .then(()=>{
                alert('password reset mail send, please check your email')
            })
        }
        
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
                            <input type="email" name="email" ref={emailRef} className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />

                            <div><a onClick={handleForgetPassword} className="link link-hover">Forgot password?</a></div>

                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                        <p>If you do not have account? please <Link className="underline text-green-400" to={'/signUp'}>Sign Up</Link> </p>
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