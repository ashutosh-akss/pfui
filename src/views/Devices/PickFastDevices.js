import React, { useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
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
export default function Devices() {

    const [state, setState] = React.useState({
        columns: [
            { title: "Mac Address", field: "mac" },
            { title: "Name", field: "name" },
            { title: "Device Type", field: "type" },
            { title: "Added On", field: "added_on", type: "date" },
            { title: "Active", field: "active", type: "boolean" },
        ],
        data: [],
    });

    useEffect(() => {
        axios.get('/devices/')
            .then((response) => {
                setState({ ...state, data: response.data });
            });
    }, []);

    const updateDetails = (data) => {
        return axios.put(`/devices/${data.mac}`, data)
    }

    const deleteDetails = (data) => {
        return axios.delete(`/devices/${data.mac}`)
    }

    const createDetails = (data) => {
        console.log('creating following user : ', data);
        return axios.post(`/devices/`, data);
    }

    const refresh = () => {

    }

    return (
        <div>
            <MaterialTable
                title="List of store Devices"
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