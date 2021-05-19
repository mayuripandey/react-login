import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const FormSignup = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = 
    useForm(submitForm,validate);


    return (
       <div className="form-content-left">
        <form className="form" onSubmit={handleSubmit}>
            <div className='form-content-imagess'>
              <img className='' src='img/logo-sw.PNG' width="250" height="100"  alt='logo-loading' />
            </div>
            {/* <h1>Get started</h1> */}
            <div className="form-inputs">
                <label htmlFor="username" 
                className="form-label">
                Username
                </label>
                <input 
                    id="username"
                    type="text" 
                    name="username" 
                    className="form-input"
                    placeholder="Enter your username"
                    value={values.userName}
                    onChange={handleChange}/>
                    {errors.username && <p>{errors.username}</p>}
            </div>
            
            <div className="form-inputs">
                <label htmlFor="email" 
                className="form-label">
                   Email
                </label>
                <input 
                    id="email"
                    type="email" 
                    name="email" 
                    className="form-input"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor="password" 
                className="form-label">
                  Password
                </label>
                <input 
                    id="password"
                    type="password" 
                    name="password" 
                    className="form-input"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor="password2" 
                className="form-label">
                  Confirm Password
                </label>
                <input 
                    id="password2"
                    type="password" 
                    name="password2" 
                    className="form-input"
                    placeholder="Enter your password"
                    value={values.password2}
                    onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <div>
            <button className="form-input-btn buy-btn" type="submit">
                <div className="form-input-btn-content">Sign-Up</div>
            </button>
            </div>
           
            <span className='form-input-login'>
                Already have an account? <a href='#'>Click here</a>
            </span>
        </form>
       </div>
    )
}

export default FormSignup;
