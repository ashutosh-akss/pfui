import React, { useEffect } from "react";
import axios from 'axios';
import clsx from 'clsx';

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import avatar from "assets/img/faces/marc.jpg";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';

const storeId = '5585';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  updateButton: {
    color: "red",
  }
};

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const useStyles = makeStyles(styles);

function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

export default function StoreInfo() {
  const classes = useStyles();

  const [openSnackbar, setSnackbar] = React.useState(false);
  const [storeDetails, updateStoreDetails] = React.useState({
    id: '',
    name: '',
    address: '',
    city: '',
    country: '',
    zip: '',
    geo_location: '',
    about: ''
  });

  useEffect(() => {
    axios.get(`/stores/${storeId}`)
      .then((response) => {
        updateStoreDetails(response.data);
        console.log('Store Details : ', response.data)
      });
  }, []);

  const update = () => {
    console.log('about to update : ', storeDetails)
    axios.put(`/stores/${storeId}`, storeDetails)
      .then((response) => {
        console.log('Update Response: ', response);
        handleOpen(true)
      });
  }

  const handleClose = () => {
    setSnackbar(false);
  }

  const handleOpen = () => {
    setSnackbar(true);
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant="success"
          message="Store details updated successfully!"
        />
      </Snackbar>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Store Info</h4>
              <p className={classes.cardCategoryWhite}>Complete your Store Info</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Site ID"
                    id="siteId-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      defaultValue: storeDetails.id,
                      value: storeDetails.id,
                      disabled: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Name"
                    id="name"
                    inputProps={{
                      value: storeDetails.name,
                      onChange: (e) => { updateStoreDetails({ name: e.target.value }) },
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Address"
                    id="address"
                    inputProps={{
                      value: storeDetails.address,
                      onChange: (e) => { updateStoreDetails({ address: e.target.value }) },
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    inputProps={{
                      value: storeDetails.city,
                      onChange: (e) => { updateStoreDetails({ city: e.target.value }) },
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    inputProps={{
                      value: storeDetails.country,
                      onChange: (e) => { updateStoreDetails({ country: e.target.value }) },
                    }}
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal code"
                    id="postal-code"
                    inputProps={{
                      value: storeDetails.zip,
                      onChange: (e) => { updateStoreDetails({ zip: e.target.value }) },
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Location"
                    id="location"
                    inputProps={{
                      value: storeDetails.geo_location,
                      onChange: (e) => { updateStoreDetails({ geo_location: e.target.value }) },
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About Store</InputLabel>
                  <CustomInput
                    labelText="Add any additional info about store like recent promotional offers"
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      value: storeDetails.about,
                      onChange: (e) => { updateStoreDetails({ about: e.target.value }) },
                      rows: 5
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={update}>Update Store Info</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}