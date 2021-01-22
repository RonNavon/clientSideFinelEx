import React, { Component } from 'react'
import FCMessage from '../FunctionalCompnents/FCMessage';
import CCLogin from './CCLogin';


export default class CCMain extends Component {
    state = {
        User: "",
        open: false
    }

    getUser = (user) => {
        this.setState({
            User: user,
            open: true
        });
        localStorage.setItem( "user" , user.StudentId);
    }

    modalStatus = () =>{
        this.setState({
            open: false
        });
    }

    render() {
        return (
            <div>
                <CCLogin sendUser={this.getUser} />
                <FCMessage user={this.state.User} open={this.state.open} modalStatus={this.modalStatus}/>
            </div>
        )
    }
}
