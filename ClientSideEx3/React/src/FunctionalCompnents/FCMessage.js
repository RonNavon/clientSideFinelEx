import React from 'react';
import Modal from 'react-awesome-modal';
import { Button } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Link } from 'react-router-dom';

export default function FCMessage(props) {

    return (
        <div>
            <Modal visible={props.open}>
                <div>
                        {props.user !== "" ?
                            <Link to="/MakePurchase">
                                <Button>
                                    ENTER
                                </Button>
                            </Link> :
                            <Alert severity="warning">
                                <AlertTitle>Warning</AlertTitle>
                                You did not enter a valid username or password
                                 <strong>check it out!</strong>
                            </Alert>
                        }
                    <Button variant="outlined" onClick={props.modalStatus}> EXIT </Button>
                </div>
            </Modal>
        </div>
    )
}
