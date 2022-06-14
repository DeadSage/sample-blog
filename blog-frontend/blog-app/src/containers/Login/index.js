import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from 'react-bootstrap/Button';
import { loginRequest } from './actions'
import { makeSelectErrors, makeSelectLoading } from './selectors'
import './style.scss'


class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }
    changeInput(value, inputName) {
        this.setState({[inputName]: value})
    }
    canLogin() {
        const {email, password} = this.state
        return !!email && !!password
    }
    login = () => {
        const {email, password} = this.state
        const from = this.props.location.state?.from?.pathname || '/';
        const data = {
            email: email,
            password: password
        }
        return new Promise(resolve => {
            const handleSuccess = () => {
                resolve();
                this.props.navigate(from, { replace: true })
            };
            this.props.loginRequest({data: data, handleSuccess})
        });
    }
    render() {
        const {email, password} = this.state
        const { errors } = this.props
        return (
            <div className="row align-items-center">
                <div className="col-md-12">
                    <h3 className="text-center user-label">Login</h3>
                    <input
                        type="text"
                        className="form-control form-input"
                        placeholder="Username"
                        value={email}
                        onChange={e => this.changeInput(e.target.value, 'email')}
                    />
                    <input
                        type="password"
                        className="form-control form-input"
                        placeholder="Password"
                        value={password}
                        onChange={e => this.changeInput(e.target.value, 'password')}
                    />
                    {errors && <p className="text-danger"> {errors} </p>}
                    <Button
                        className="get-user-button text-center"
                        onClick={this.login}
                        disabled={!this.canLogin()}
                    >
                        Login
                    </Button>
                </div>
            </div>
        )
    }
}


LogIn.propTypes = {
    navigate: PropTypes.any,
    location: PropTypes.any,
    loginRequest: PropTypes.func,
};


const mapDispatchToProps = {
    loginRequest,
};


const mapStateToProps = createStructuredSelector({
    loading: makeSelectLoading(),
    errors: makeSelectErrors(),
});


const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);


export default compose(
    withConnect,
)(LogIn);
