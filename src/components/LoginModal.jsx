import React, {useState} from 'react'
import "./Styles.css";

function LoginModal({open, onClose}) {
   

   
    const [values, setValues] = useState({
        name: '',
        password: ''
    })
  
    const [errors, setErrors] = useState({})

    const addPosts = async (values) => {
        await fetch('https://localhost:3000/user'+ values, {
           method: 'POST',
           body: JSON.stringify({
           values: values,
              userId: Math.random().toString(36).slice(2),
           }),
           headers: {
              'Content-type': 'application/json; charset=UTF-8',
           },
        })
           .then((response) => response.json())
           .then((data) => {
            //   setPosts((posts) => [data, ...posts]);
            setValues('');
           
           })
           .catch((err) => {
              console.log(err.message);
           });
     };

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
        addPosts(values);
    }

    const Validation = () => {
        let errors = {}

        if(!values.name){
            errors.name="Name required";

        }
        else if(values.name.length < 5){
            errors.name="Name more than 5 char";
        }

        if(!values.password){
            errors.password="Password required";

        }
        else if(values.password.length < 9){
            errors.password="Password min than 8 characters";
        }

        return errors;
    }
    if(!open) return null
  return (
    <div>
        <div className="modalContainer">
            <div className="modalRight">
                <p onClick={onClose} className="closeBtn">X</p>
                <div className="content">
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <h1 className="title">Login</h1>
                            <p className="new-customer">New customer? <a href="#">Register here</a></p>
                        <div className="input-container">
                            <label>Username </label>
                            <input value={values.name} onChange={handleChange} type="text" name="name" placeholder='Username' required />
                            {errors.name && <p style={{color: 'red', fontSize:  "13px"}}>{errors.name}</p>}
                        </div>
                        <div className="input-container">
                            <label>Password </label>
                            <input  value={values.password} onChange={handleChange} type="password" name="password" placeholder='password' required />
                            {errors.password && <p style={{color: 'red', fontSize:  "13px"}}>{errors.password}</p>}
                        </div>
                        <div className="button-container">
                            <button className="loginBtn">Login</button>
                        </div>
                        <p className="forgot-user"><a href=""> Forgot Username/Password</a></p>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginModal