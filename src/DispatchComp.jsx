import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import React, { Fragment, useContext } from "react";

import AddIcon from "@mui/icons-material/Add";
import { PropTypes } from "prop-types";
import { Store } from "./Context";

const DispatchComp = (props) => {
  const { state, dispatch } = useContext(Store);

  const handleCheckboxChange = (event, value, id) => {
    dispatch(
        {
            type: 'toggleCheckbox',
            checked: event.target.checked,
            itemValue: value,
            itemId: id,
        }
    );
  };

  const checkboxItems = [1, 2, 3, 4, 5, 6];

  const checkboxes = (items) => {
    return (
      items.map(item =>
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
                                  onChange={(e) => handleCheckboxChange(e, item, item)} />
                          }
                          label={item}
                      />
                  </FormGroup>
              </Grid>
          </Fragment>
      ))
  }

  return (
    <Box bgcolor="orange" px={2} py={2}>
      <Typography variant="h4" component="div" gutterBottom>
        Dispatch Component
      </Typography>
      <Box>
        <Button
          onClick={() =>
            dispatch({
              type: "add",
            })
          }
          color="primary"
          variant="text"
          startIcon={<AddIcon />}
        >
          1
        </Button>
      </Box>
      <Typography variant="h6" component="div">
        Dispatch count is {state.count}
      </Typography>

      <Grid container>
        {checkboxes(checkboxItems)}
      </Grid>
      <Typography variant="h6" component="div">
        Checkbox array is {JSON.stringify(state.selectedItems)}
      </Typography>
    </Box>
  );
};

DispatchComp.propTypes = {
  title: PropTypes.string,
};

export default DispatchComp;
