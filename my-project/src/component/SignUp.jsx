import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.init";
import { useState } from "react";
import { FaEye } from "react-icons/fa";

const SignUp = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPasswrod] = useState(false);


    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setErrorMessage('');
        setSuccess(false);

        console.log(email, password);

        // password validation
        if (password.length < 6) {
            setErrorMessage('Password must be 6 characters or longer')
            return;
        }

        // strong password validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage('At least one uppercase, one lowercase,one number and one special character also length min 6!')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result)
                setSuccess(true);
            })
            .catch(error => {
                console.log('Error', error.message);
                setErrorMessage(error.message);
                setSuccess(false)

            })

    }

    return (

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-6 border-2 mx-auto">
            <h1 className="text-3xl font-bold text-center mt-3">SignUp now!</h1>
            <div className="card-body relative">
                <form onSubmit={handleSignUp}>
                    <fieldset className="fieldset">

                        <label className="fieldset-label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" required />

                        <label className="fieldset-label">Password</label>
                        <input type={showPassword ? 'text' : 'password'} name="password" className="input" placeholder="Password" />

                        <button onClick={() => setShowPasswrod(!showPassword)} className="text-2xl absolute right-10 top-32"><FaEye /></button>

                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
                {
                    errorMessage && <p className="text-red-600">{errorMessage}</p>
                }
                {
                    success && <p className="text-green-700 font-bold text-xl">{'Create successfully'}</p>
                }
            </div>
        </div>

    );
};

export default SignUp;