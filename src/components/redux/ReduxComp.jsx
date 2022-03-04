import * as selectedItemsActions from "../../redux/actions/selectedItemsActions"

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";

import AddIcon from "@mui/icons-material/Add";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

const ReduxComp = (props) => {

  const handleCheckboxChange = (event, value, id) => {
    props.actions.toggleSelectedItems(event.target.checked, value,id);
  };

  const checkboxItems = [1, 2, 3, 4, 5, 6];

  const checkboxes = (items) => {
    return items.map((item) => (
      <Fragment key={item.id}>
        <Grid item xs={3}>
          <Typography variant="subtitle1">checkbox item #{item}</Typography>
        </Grid>
        <Grid item xs={3}>
          <FormGroup>
            <FormControlLabel
              labelPlacement="start"
              sx={{ flexGrow: 1 }}
              control={
                <Checkbox
                  id={`${item}`}
                  defaultChecked={item.selected}
                  onChange={(e) => handleCheckboxChange(e, item, item)}
                />
              }
              label={item}
            />
          </FormGroup>
        </Grid>
      </Fragment>
    ));
  };

  return (
    <Box bgcolor="orange" px={2} py={2}>
      <Typography variant="h4" component="div" gutterBottom>
        Redux Component
      </Typography>
      <Box>
        <Button
          onClick={() =>
            props.actions.Add()
          }
          color="primary"
          variant="text"
          startIcon={<AddIcon />}
        >
          1
        </Button>
      </Box>
      {/* <Typography variant="h6" component="div">
        Redux count is {props.state.count}
      </Typography> */}

      <Grid container>{checkboxes(checkboxItems)}</Grid>
      <Typography variant="h6" component="div">
        Checkbox array is {JSON.stringify(props.selectedItems)}
      </Typography>
    </Box>
  );
};

ReduxComp.propTypes = {
  title: PropTypes.string,
	selectedItems: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	return {
		selectedItems: state.selectedItems,
	};
}

const mapDispatchToProps = {
  toggleSelectedItems: selectedItemsActions.toggleSelectedItems
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComp);
