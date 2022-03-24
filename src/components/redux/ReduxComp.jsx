import * as countActions from "../../redux/actions/countActions"
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
import RemoveIcon from "@mui/icons-material/Remove";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const ReduxComp = (props) => {

  const handleCheckboxChange = (event, value, id) => {
    props.toggleActions.toggleSelectedItems(event.target.checked, value,id);
  };

  const checkboxItems = [1, 2, 3, 4, 5, 6];

  const checkboxes = (items) => {
    return items.map((item) => (
      <Fragment key={item}>
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
                  defaultChecked={false}
                  onChange={(e) => handleCheckboxChange(e, item, item)}
                  value={props.selectedItems.includes(item)}
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
    <Box bgcolor="purple" px={2} py={2}>
      <Typography variant="h4" component="div" gutterBottom>
        Redux Component
      </Typography>
      <Box>
        <Button
          onClick={() =>
            props.countUp()
          }
          color="primary"
          variant="text"
          startIcon={<AddIcon />}
        >
          1
        </Button>
        <Button
          onClick={() =>
            props.countDown()
          }
          color="primary"
          variant="text"
          startIcon={<RemoveIcon />}
        >
          1
        </Button>
      </Box>
      <Typography variant="h6" component="div">
        Redux count is {props.count}
      </Typography>

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
  toggleActions: PropTypes.object.isRequired,
  count: PropTypes.number
};

function mapStateToProps(state) {
	return {
		selectedItems: state.selectedItems,
    count: state.count
	};
}

function mapDispatchToProps(dispatch) {
	return {
		toggleActions: bindActionCreators(selectedItemsActions, dispatch),
		countDown: bindActionCreators(countActions.countDown, dispatch),
		countUp: bindActionCreators(countActions.countUp, dispatch),
	};
}

// const mapDispatchToProps = {
//   toggleSelectedItems: selectedItemsActions.toggleSelectedItems
// }

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComp);
