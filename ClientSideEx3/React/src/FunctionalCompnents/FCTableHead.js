import React from 'react';
import { MDBTableHead } from 'mdbreact';

export default function FCTableHead() {
    return (
        <MDBTableHead>
            <tr>
                <th> </th>
                <th> מלאי </th>
                <th> מחיר </th>
                <th> שם </th>
                <th> מספר סידרי </th>
            </tr>
        </MDBTableHead>
    )
}
