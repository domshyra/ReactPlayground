import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { PropTypes } from "prop-types";

const MathComp = (props) => {
  const [count, setCount] = useState(0);


    const handleChange = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

  return (
    <Box bgcolor="black" px={2}>
      <Typography variant="h4" component="div" gutterBottom>
        Math Component
      </Typography>
      <Box>
        <Button
          onClick={() => handleChange()}
          color="primary"
          variant="text"
          startIcon={<AddIcon />}
        >
          1
        </Button>
      </Box>
      <Typography variant="h6" component="div">
        Count is {count}
      </Typography>
    </Box>
  );
};
MathComp.propTypes = {
  title: PropTypes.string,
};

export default MathComp;
