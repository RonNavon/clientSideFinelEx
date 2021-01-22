import React, { Component } from 'react'
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Form } from 'react-bootstrap';

export default class CCProduct extends Component {
    state = {
        tempAmount: 0,
        disabled: false
    }

    setTempAmount = (e) => {
        this.setState({
            tempAmount: e.target.value
        }, () => this.checkAmount());
    }

    checkAmount = () =>{
        if (this.state.tempAmount < this.props.inventory) {
            this.setState({
                disabled: false
            });
        }
        else {
            this.setState({ disabled: true })
        }
    }
    setAmount = () => {
        this.props.getAmount(this.state.tempAmount, this.props.id)
    }

    render() {
        return (
            <tr>
                <td>
                    <Form onSubmit={this.setAmount}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="component-outlined">כמות לרכישה</InputLabel>
                            <OutlinedInput id="component-outlined" label="כמות לרכישה" onChange={this.setTempAmount} />
                        </FormControl>
                        <Button type='submit' disabled={this.state.disabled} >ADD</Button>
                    </Form>
                </td>
                <td> {this.props.inventory} </td>
                <td> {this.props.price} </td>
                <td> {this.props.name}</td>
                <td> {this.props.id}</td>
            </tr>
        )
    }
}
