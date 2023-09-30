import React, { useState } from 'react'
import LoginCSS from "../../Components/Login/LoginCSS.module.css"
import { login } from '../../features/slices/authSlice';
import { useDispatch } from 'react-redux';

const Login = () => {

    const initialState = {
        name: "",
        password: "",
        image: "",
    };

    const [values, setValues] = useState(initialState);

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const dispatch = useDispatch();
    return (
        <div className={LoginCSS.grid}>
            <div className={LoginCSS.login}>
                <div className={LoginCSS.cardheader}>
                    <h2>Sign In</h2>
                </div>
                <div className={LoginCSS.cardbody}>
                    <label>
                        Name:
                    </label>
                    <input className={LoginCSS.input} type="email" name="name"
                        value={values.name} onChange={onChange}
                    />

                    <label>
                        Password:
                    </label>
                    <input className={LoginCSS.input} type="password" name="password"
                        value={values.password} onChange={onChange}
                    />

                    <label>
                        Image URL address:
                    </label>
                    <input className={LoginCSS.input} type="text" name="image"
                        value={values.image} onChange={onChange}
                    />
                    <div className={LoginCSS.carddiv}></div>
                </div>
                <div className={LoginCSS.cardfooter}>
                    <button className={LoginCSS.Signin} onClick={() => dispatch(login(values))}>
                        Sign In
                    </button>
                    <p className={LoginCSS.account}>Image is Optional</p>
                    {/* <p className={LoginCSS.account}>Don't have an account?<a href='#signup'>Sign up</a></p> */}
                </div>
            </div>
        </div>

    )
}

export default Login