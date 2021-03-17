import React, { Component } from 'react';

class Register extends Component {
    state = {
        email: '',
        password: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.setAlert(`Registered successfully!`, 'success');
        this.setState({ email: '', password: '' })
    }

    render() {
        return (
            <div className="container">
                <h1 className="mt-3">Register</h1>
                <form onSubmit={this.onSubmit} className="m-1">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={this.onChange} value={this.state.email} placeholder="Enter email address here" required/>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={this.onChange} value={this.state.password} placeholder="Enter password here" required/>

                    <button type="submit" className="btn btn-success mt-b">Register</button>
                </form>
            </div>
        );
    }
}

export default Register