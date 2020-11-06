import React, { useState } from 'react';

const Login = (props) => {
    const [data, setData] = useState({
        id:'',
        password:''
    });

    const onChange = e => {
        const {value, name} = e.target;
        setData({
            ...data, 
            [name]:value
        });
    };

    const loginConfirm = () => {
        if( data.id === 'demo' && data.password === '1234') {
            props.onLogin();
        }
    }

    const hintAlert = () => {
        alert("id:demo / password:1234")
    }

    return (
        <div>
            <h1 className="logo">로고자리</h1> 
            <div className="login-container">
                <h3>Login</h3>
                <div className="lang">English</div>
                <div className="input-body">
                    <form>
                        <input type="text" name="id" placeholder="ID" onChange={onChange} />
                        <input type="password" name="password" placeholder="password" onChange={onChange} />
                    </form>
                </div>
                <div className="input-buttons">
                    <button onClick={()=> hintAlert()}> forgot password? </button>
                    <input type="checkbox" name="rememberID"/><p>Remember me?</p>
                    <button type="submit" onClick={() => loginConfirm()}>LOGIN</button>
                </div>
            </div>
        </div>
    )
}

export default Login;