
const SignUp = () => {
    return (

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-6 border-2 mx-auto">
            <h1 className="text-3xl font-bold text-center mt-3">SignUp now!</h1>
            <div className="card-body">
                <form>
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
            </div>
        </div>

    );
};

export default SignUp;