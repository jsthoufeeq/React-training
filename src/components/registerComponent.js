import React from 'react';

class RegisterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {}
        }
    }

    handleChange = (e) => {
        let formFields = this.state.fields;
        formFields[e.target.name] = e.target.value
        this.setState({
            fields: formFields
        })
    }

    registerForm = (e) => {
        e.preventDefault();
        if(this.validateForm(this.state.fields)) {
            this.props.history.push('/products');
            //make an API call here - send data to the server with axios.post();
            // {
            //     validUSer: true,
            //     auth_token: 'sfsdfsf2797498274923742948kjhkfjhskfh9ew8r7w987r89werwerbjhajdbkandasduiyriquyrimnxcmnzxbceryewr'
            // }
        } else alert('form is invalid');
    }

    validateForm = (fields) => {
        let isValid = true,
        formErrors = {}

        if(!fields['firstName']) {
            isValid = false;
            formErrors['firstName'] = 'please enter your first name'
        }

        if(!fields['userName']) {
            isValid = false;
            formErrors['userName'] = 'please enter your user name'
            //check for regex
        }

        if(!fields['email']) {
            isValid = false;
            formErrors['email'] = 'please enter your email'
            //check for regex
        }

        if(!fields['phoneNumber']) {
            isValid = false;
            formErrors['phoneNumber'] = 'please enter your phone number'
            //check for regex
        }

        this.setState({
            errors: formErrors
        })

        return isValid;
    }

    render() {
        return (
            <div className="col-12">
                <form className="col-6 offset-col-md-6" onSubmit={this.registerForm}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" className="form-control" onChange={this.handleChange} name="firstName" value={this.state.fields.firstName || ''}/>
                        <span className="error">{this.state.errors.firstName}</span>
                    </div>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control" onChange={this.handleChange} name="userName" value={this.state.fields.userName || ''}/>
                        <span className="error">{this.state.errors.userName}</span>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" onChange={this.handleChange} name="email" value={this.state.fields.email || ''}/>
                        <span className="error">{this.state.errors.email}</span>
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="number" className="form-control" onChange={this.handleChange} name="phoneNumber" value={this.state.fields.phoneNumber || ''}/>
                        <span className="error">{this.state.errors.phoneNumber}</span>
                    </div>
                    <div>
                        <button className="btn btn-success">Register</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default RegisterComponent;