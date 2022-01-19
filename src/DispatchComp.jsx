import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";

import AddIcon from "@mui/icons-material/Add";
import { PropTypes } from "prop-types";
import { Store } from "./Context";

const DispatchComp = (props) => {
  const { state, dispatch } = useContext(Store);

  return (
    <Box bgcolor="orange" px={2}>
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
    </Box>
  );
};

DispatchComp.propTypes = {
  title: PropTypes.string,
};

export default DispatchComp;
