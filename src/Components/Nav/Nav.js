import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div>
                <div alt="logo"/>
                <Link to="/dashboard">Home</Link>
                <Link to="/post/:postid">New Post</Link>
                <Link to="/">Logout</Link>
            </div>
        );
    }
}

export default Nav;