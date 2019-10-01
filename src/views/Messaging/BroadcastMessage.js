import React from "react";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import MQTTClient from "../../utils/mqtt";

const useStyles = makeStyles(styles);

export default function Messaging() {

  const classes = useStyles();

  const [values, setValues] = React.useState({
    message: '',
  });

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Enter Broadcase Message"
          type="text"
          value={values.message}
          onChange={(e) => setValues({ message: e.target.value })}
          fullWidth
        />
        <div style={{ padding: '20px' }}>

        </div>
        <Button onClick={() => {
          MQTTClient.publish("5585", values.message)
          setValues({ message: "" });
        }}
          variant="contained" color="secondary" className={classes.button}>
          Broadcast Message
          </Button>
      </GridItem>
    </GridContainer >
  )
}