import { useState } from 'react';
import Layout from '../components/Layout.component';


const dynamicFormJS = {
    name: '',
    email: '',
    password: '',
    error: '',
    success: '',
    buttonText: 'Register'
};

const controlsNameArr = []

Object.keys(dynamicFormJS).forEach(function(key,index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object 
    controlsNameArr.push(key);
});

const Register = () => {
    const [state, setState] = useState({
        dynamicFormJS
    });

    // const { ...controlsNameArr } = state; //refs

    const handleChange = name => e => {
        setState({ ...state, [name]: e.target.value, error: '', success: '', buttonText: 'Register' });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.table({ ...state });
    };

    const registerForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    value={state.name}
                    onChange={handleChange('name')}
                    type="text"
                    className="form-control"
                    placeholder="Type your name"
                />
            </div>
            <div className="form-group">
                <input
                    value={state.email}
                    onChange={handleChange('email')}
                    type="email"
                    className="form-control"
                    placeholder="Type your email"
                />
            </div>
            <div className="form-group">
                <input
                    value={state.password}
                    onChange={handleChange('password')}
                    type="password"
                    className="form-control"
                    placeholder="Type your password"
                />
            </div>
            <div className="form-group">
                <button className="btn btn-outline-warning">{state.buttonText}</button>
            </div>
        </form>
    );

    return (
        <Layout>
            <div className="col-md-6 offset-md-3">
                <h1>Register</h1>
                <br />
                {registerForm()}
                <hr />
                {JSON.stringify(state)}
            </div>
        </Layout>
    );
};

export default Register;
