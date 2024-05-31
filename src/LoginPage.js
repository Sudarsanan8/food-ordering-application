import React from 'react'

const LoginPage = () => {
    return (
        <>
            <div className='logincontainer'>
                <div className="wrapper" style={{ marginTop: "40px" }}>
                    <h2>Registration</h2>
                    <form >
                        <div className="input-box">
                            <input type="text" placeholder="Enter your name" required />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Enter your email" required />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Create password" required />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Confirm password" required />
                        </div>
                        <div className="policy">
                            <input type="checkbox" />
                            <h3>I accept all terms & condition</h3>
                        </div>
                        <div className="input-box button">
                            <input type="Submit" value="Register Now" />
                        </div>
                        <div className="text">
                            <h3>Already have an account? </h3>
                        </div>
                    </form>
                </div>
            </div>


        </>


    )
}

export default LoginPage