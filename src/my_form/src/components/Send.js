import React, { Component } from 'react';

class Send extends Component {
    state = {
        address: '',
        amount: '',
        otp: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        const { address, amount, otp } = this.state;

        e.preventDefault();
        if (this.props.isSignedIn === false) {
            this.props.setAlert('You need to be logged in first!', 'danger');
        } else {
            if (parseFloat(amount) > 0  && !isNaN(parseInt(otp)) && otp.length === 6) {
                this.props.setAlert(`Successfully sent ${amount} BTC to ${address}!`, 'success');
            } else {
                this.props.setAlert('Something went wrong! Please try again.', 'danger');
            }
        }

        this.setState({ address: '', amount: '', otp: '' });
    }

    render() {
        return (
            <div className="container">
                <h1 className="mt-3">Send</h1>
                <form onSubmit={this.onSubmit} className="m-1">
                    <label htmlFor="address">Bitcoin Address</label>
                    <input type="text" id="address" name="address" onChange={this.onChange} value={this.state.address} placeholder="16q4PinynazaMYfv24juNLkbjkDQxJo2dc" required/>

                    <label htmlFor="amount">Amount to send</label>
                    <input type="text" id="amount" name="amount" onChange={this.onChange} value={this.state.amount} placeholder="0.0000" required/>

                    <label htmlFor="otp">OTP Authentication</label>
                    <input type="text" id="otp" name="otp" onChange={this.onChange} value={this.state.otp} placeholder="SMS OTP" required/>

                    <button type="submit" className="btn btn-success mt-b">SEND BTC</button>
                </form>
            </div>
        );
    }
}

export default Send