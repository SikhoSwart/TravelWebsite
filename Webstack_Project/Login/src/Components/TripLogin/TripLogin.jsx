import React from "react";
import './TripLogin.css';

const TripLogin = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>
                    TripTastic
                </h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                </div>

                <div className="remember-forget">
                    <label>
                        <input type="checkbox" />
                        Remember me
                    </label>   
                    <a href="#">Forgot password?</a> 
                </div>
                
                <button type="submit"> Log In</button>

                <div className="register">
                    <p>Don't have an account?
                        <a href="https://triptastichome.vercel.app/"> Register</a>
                    </p>
                </div>

            </form>
        </div>   
    );
};

export default TripLogin;