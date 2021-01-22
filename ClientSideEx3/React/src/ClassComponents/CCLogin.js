import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core';

const apiUrl = "https://localhost:44342/api/Student/";

export default class CCLogin extends Component {
    state = {
        user: "",
        name: "",
        id: ""
    }


    getStudent = () => {
        if (this.state.id === "") {
            this.setState({
                user: ""
            }, () => this.props.sendUser(this.state.user))
        }
        else {
            fetch(apiUrl + this.state.id,
                {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/json; charset=UTF-8',
                        'Accept': 'application/json; charset=UTF-8',
                    })
                })
                .then(res => {
                    console.log('res=', res);
                    console.log('res.status', res.status);
                    console.log('res.ok', res.ok);
                    return res.json()
                })
                .then(
                    (result) => {
                        this.setState({
                            user: result
                        }, () => this.props.sendUser(this.state.user))
                    },
                    (error) => {
                        console.log("err post=", error);
                    });
        }
    }

    chgName = (e) => {
        this.setState({ name: e.target.value });
    }

    chgId = (e) => {
        this.setState({ id: e.target.value });
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <TextField label="Enter Name" onChange={this.chgName} /> <br /> <br />
                <TextField label="Enter ID" type="number" onChange={this.chgId} /> <br /> <br />
                <Button
                    variant="outlined"
                    size="small"
                    color="primary" onClick={this.getStudent}>Login</Button> <br /> <br />
            </div>
        )
    }
}
