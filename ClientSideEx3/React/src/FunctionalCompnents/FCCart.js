import React from 'react';
import Modal from 'react-awesome-modal';
import { Button } from '@material-ui/core';

export default function FCCart(props) {



    return (
        <div>
            <Modal visible={props.open}>
                <div>

                </div>
                <Button variant="outlined" onClick={props.modalStatus}> EXIT </Button>
            </Modal>
        </div>
    )
}
