import { Button } from 'bootstrap';
import React from 'react'
import "./Styles.css";

function SignupModal({open, onClose}) {
    if(!open) return null
  return (
    <div>
        <div className="modalContainer">
            <div className="modalRight">
                <p onClick={onClose} className="closeBtn">X</p>
                <div className="content">
                    <div className="form">
                        <form>
                            <h1 className="title">Sign up</h1>
                            <p className="new-customer">Registered customer? <a href="">Login here</a></p>
                        <div className="input-container">
                            <label>Username </label>
                            <input type="text" name="uname" placeholder='Username' required />
                            {/* {renderErrorMessage("uname")} */}
                        </div>
                        <div className="input-container">
                            <label>Password </label>
                            <input type="password" name="pass" placeholder='password' required />
                            {/* {renderErrorMessage("pass")} */}
                        </div>

                        <div className="input-container">
                            <label>Confirm Password </label>
                            <input type="password" name="pass" placeholder='password' required />
                            {/* {renderErrorMessage("pass")} */}
                        </div>
                        <div className="button-container">
                            <button className='signBtn '>Sign up</button>
                        </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SignupModal