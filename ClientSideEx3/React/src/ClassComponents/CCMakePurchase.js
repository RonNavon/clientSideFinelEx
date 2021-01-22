import { Button } from '@material-ui/core';
import React, { Component } from 'react'
import FCProducts from '../FunctionalCompnents/FCProducts';
import { Form } from 'react-bootstrap';
import FCCart from '../FunctionalCompnents/FCCart';

const apiUrl = "https://localhost:44342/api/Product/";

export default class CCMakePurchase extends Component {

    state = {
        products: [],
        purchase: [],
        open: false
    }

    componentDidMount() {
        fetch(apiUrl,
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
                        products: result
                    }, () => console.log(this.state.products))
                },
                (error) => {
                    console.log("err post=", error);
                });
    }

    getAmount = (e, id) => {
        let product = {};
        product.quantity = e;
        product.proudId = id;
        let newPurchase = [...this.state.purchase, product];

        if (this.state.purchase.length > 0) {
            for (let index = 0; index < newPurchase.length - 1; index++) {
                if (newPurchase[newPurchase.length-1].proudId === newPurchase[index].proudId)
                    newPurchase.splice(index, 1);
            }
        }
        this.setState({
            purchase: newPurchase
        });
    }

    setPurchase = () => {
        localStorage.setItem('purchases', JSON.stringify(this.state.purchase));
    }

    openAlert = () => {
        this.setState({ open: true });
    }

    modalStatus = () => {
        this.setState({
            open: false
        });
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.setPurchase}>
                    <FCProducts openAlert={this.openAlert} products={this.state.products} getAmount={this.getAmount} />
                    <Button type='submit'>ok</Button>
                </Form>
                <FCCart open={this.state.open} purchase={this.state.purchase} quantity={this.state.quantity} />
            </div>
        )
    }
}