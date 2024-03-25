import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#dde4e7",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#dde4e7",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#dde4e7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

const Contact = () => {
  const handleClickCopy = () => {
    navigator.clipboard.writeText("icuellartapia@gmail.com");
  };

  return (
    <Fragment>
      <Box maxWidth={800} margin="auto" paddingY={3}>
        <Typography variant="h5" gutterBottom>
          <b>Contacto</b>
        </Typography>
        <Box margin="auto" maxWidth={400} marginBottom={1}>
          <CssTextField
            id="custom-css-outlined-input"
            fullWidth
            value="icuellartapia@gmail.com"
            InputProps={{
              readOnly: true,
              sx: { backgroundColor: "#495e69", color: "#dde4e7" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickCopy}>
                    <ContentCopyIcon sx={{ color: "#dde4e7" }} />
                    {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>

      <Box margin="auto" maxWidth={800}>
        <Divider sx={{ borderColor: "#293340" }}></Divider>
      </Box>
    </Fragment>
  );
};

export default Contact;
