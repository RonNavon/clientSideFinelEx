import React from 'react'
import FCProduct from './FCProduct'
import FCTableHead from './FCTableHead'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBTable, MDBTableBody } from 'mdbreact';

export default function FCProducts(props) {
    let list = props.products.map(
        (x, index) => <FCProduct key={index} openAlert={props.openAlert} name={x.Name} id={x.SerialNumber} price={x.Price} inventory={x.Inventory} getAmount={props.getAmount}/>)

    return (
        <div className="table">
            <MDBTable>
            <FCTableHead/>
            <MDBTableBody>
            {list}
            </MDBTableBody>
            </MDBTable>
        </div>
    )
}
