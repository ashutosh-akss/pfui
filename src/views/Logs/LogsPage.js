import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import Logs from "../../utils/logs";
const useStyles = makeStyles(styles);

export default function LogsPage() {
  const classes = useStyles();

  function renderLogs() {
    return Logs.get().map((data, index) => {
      return [++index, data.type, data.data];
    });
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>Realtime Device Logs</h4>
            <p className={classes.cardCategoryWhite}>
              All scan logs of device
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="warning"
              tableHead={["ID", "Log Type", "Log Data"]}
              tableData={renderLogs()}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
