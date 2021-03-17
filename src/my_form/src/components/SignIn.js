import React, { Component } from 'react';

class SignIn extends Component {
    state = {
        key: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.signIn();
        this.props.setAlert(`Successfully logged in!`, 'success');
        this.setState({ key: '' })
    }

    render() {
        return (
            <div className="container">
                <h1 className="mt-3">Sign In</h1>
                <form onSubmit={this.onSubmit} className="m-1">
                    <label htmlFor="key">Private Key</label>
                    <input type="password" id="key" name="key" onChange={this.onChange} value={this.state.key} placeholder="Enter key here" required/>

                    <button type="submit" className="btn btn-success mt-b">Access</button>
                </form>
            </div>
        );
    }
}

export default SignIn