import React from 'react'
import { Alert } from '@material-ui/lab';
import { TextField } from '@material-ui/core';


export default function FCProduct(props) {
    const setAmount = (e) => {
        if (e.target.value > props.inventory) {
            <Alert variant="outlined" severity="error">
                It is not possible to purchase a larger quantity than is in stock
          </Alert>
        }
        else {
            props.getAmount(e.target.value, props.id)
        }
    }

    return (
        <tr>
            <td>
            <TextField label="כמות לרכישה" type="number" onChange={setAmount} />
            </td>
            <td> {props.inventory} </td>
            <td> {props.price} </td>
            <td> {props.name}</td>
            <td> {props.id}</td>
        </tr>
    )
}
