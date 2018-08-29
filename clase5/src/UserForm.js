import React from 'react';

class UserForm extends React.Component{

    constructor(){
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    usernameChange = (event) => {
        //console.log(event.target.value);
        this.setState({username: event.target.value});
    };

    emailChange = (event) => {
        //console.log(event.target.value);
        this.setState({email: event.target.value});
    };

    passwordChange = (event) => {
        //console.log(event.target.value);
        this.setState({password: event.target.value});
    };

    confirmPasswordChange = (event) => {
        //console.log(event.target.value);
        this.setState({confirmPassword: event.target.value});
    };

    onCreate = (event) => {
        //console.log('A crear!!!!');
        alert(JSON.stringify(this.state, null, 4));
    };

    formValid = () => {
        if (this.state.username.length < 4) return false;
        if (this.state.username.length > 12) return false;
        if (this.state.password.length < 6) return false;
        if (this.state.password !== this.state.confirmPassword) return false;
        return true // false
    };

    render(){
        console.log('RENDER!!!!');
        return(
            <div>
                <h2>Formulario de usuario</h2>
                <label> Nombre de usuario: </label>
                <input onChange={this.usernameChange} />
                <br/>
                {this.state.username.length} / 12
                <br/>
                <label style={{color: 'red'}}>{this.state.username.length < 4 ? 'Tiene que tener mas de cuatro caracteres' : ''}
                { this.state.username.length > 12 ? 'No puede tener mas de 12 caracteres' : ''}</label>
                <br/>
                <label> Email: </label>
                <input onChange={this.emailChange}/>
                <br/>
                <label> Ingrese password: </label>
                <input onChange={this.passwordChange}/>
                <label style={{color: 'red'}}>{this.state.password.length < 6 ? 'Tiene que tener mas de 6 caracteres' : ''}</label>
                <br/>
                <label> Confirme password: </label>
                <input onChange={this.confirmPasswordChange}/>
                {this.state.password !== this.state.confirmPassword ? 'Los passwords deben ser iguales' : ''}
                <br/>
                <button onClick={this.onCreate} disabled={!this.formValid()}>Registrame!</button><br/>
                <br/>
            </div>
        )
    }


}

export default UserForm;