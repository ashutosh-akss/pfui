import React, { useEffect } from 'react';
import axios from 'axios';

import CustomTable from './Table';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from './Dialog';
import MaterialTable from "material-table";

import { blackColor } from 'assets/jss/material-dashboard-react';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
    addUserContainer: {
        margin: 40,
    },
}));
export default function Users() {

    const [dialogOpen, updateDialog] = React.useState(false);
    const [state, setState] = React.useState({
        columns: [
            { title: "Id", field: "username" },
            { title: "Name", field: "name" },
            { title: "Email", field: "email", type: "email" },
            { title: "Mobile", field: "mobile" },
            { title: "Active", field: "active", type: "boolean" },
        ],
        data: [],
    });

    useEffect(() => {
        axios.get('/users/')
            .then((response) => {
                setState({ ...state, data: response.data });
            });
    }, []);

    const updateDetails = (data) => {
        return axios.put(`/users/${data.username}`, data)
    }

    const deleteDetails = (data) => {
        return axios.delete(`/users/${data.username}`)
    }

    const createDetails = (data) => {
        console.log('creating following user : ', data);
        return axios.post(`/users/`, data);
    }

    const openDialog = () => {
        updateDialog(true);
    }

    const closeDialog = () => {
        updateDialog(false);
    }

    const refresh = () => {

    }

    return (
        <div>
            {/* <div className={useStyles.addUserContainer}>
                <Button variant="contained" color="primary" className={useStyles.button} onClick={openDialog}>
                    Add User
                </Button>
            </div> */}
            {/* <Dialog open={dialogOpen} handleClose={closeDialog} title="Add User" /> */}
            <MaterialTable
                title="List of store users"
                columns={state.columns}
                data={state.data}
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            createDetails(newData)
                                .then((status) => {
                                    resolve();
                                })
                                .catch(reject);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            updateDetails(newData)
                                .then((status) => {
                                    resolve();
                                })
                                .catch(reject);
                        }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            deleteDetails(oldData)
                                .then((status) => {
                                    resolve();
                                })
                                .catch(reject);
                        }),
                }}
            />
        </div >
    )
}