import React from 'react';
import {
  Box,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch } from 'react-redux';
import { registerOperation } from 'redux/auth/operations';

// export default function InputAdornments() {
//     const [showPassword, setShowPassword] = React.useState(false);

//     const handleClickShowPassword = () => setShowPassword((show) => !show);

//     const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//       event.preventDefault();
//     };}

const RegisterForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  //=======================================

  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.username.value;
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    const userInfo = { name, email, password };
    console.log(userInfo);
    dispatch(registerOperation(userInfo));
  };

  return (
    <Box
      onSubmit={onFormSubmit}
      component="form"
      sx={{
        // '& .MuiFormControl-root': { m: 1, width: '25ch' },
        width: 400,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction={'column'} spacing={2}>
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Username"
          name="username"
        />
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Email"
          name="email"
        />
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Stack>
    </Box>
  );
};

export default RegisterForm;
