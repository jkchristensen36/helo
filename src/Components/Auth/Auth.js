import React, { Component } from 'react';
import { logDOM } from '@testing-library/react';
import axios from 'axios';
import { connect } from 'react-redux';

class Auth extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            newUser: false
        }
    }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {
        const {email, password} = this.state;
        axios.post('/auth/login', {email, password}).then( res => {
            this.props.loginUser(res.data);
            this.props.history.push('/dashboard')
        }).catch( err => {
            console.log(err);
            alert('Login failed')
        })
    }

    register = () => {
        const {email, password} = this.state;
        axios.post('/auth/register', {email, password}).then(res => {
            this.props.loginUser(res.data);
            this.props.history.push('/dashboard');
        }).catch(err => {
            console.log(err);
            alert('Register Failed')
        })
    }

    render() {
        const { username, password } = this.state;
        return (
            <div>
                <div alt="logo"></div>
                <h1>Helo</h1>
                <div className="authInputBox">
                    <p>Username:</p>
                    <input 
                        onChange={e => this.changeHandler(e)}
                        name="username"
                        type="text"
                        value={username}/>
                </div>
                <div className="authInputBox">
                    <p>Password:</p>
                    <input 
                        onChange={e => this.changeHandler(e)}
                        name="password"
                        type="password"
                        value={password}/>
                </div>
                <div>
                    <button onClick={this.login} >Login</button>
                    <button onClick={this.register} >Register</button>
                </div>
            </div>
        );
    }
}


export default Auth;