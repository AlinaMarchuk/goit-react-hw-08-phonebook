import React from 'react';
import { useDispatch } from 'react-redux';
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
import { logInOperation } from 'redux/auth/operations';

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  // ==========================================

  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    const userInfo = { email, password };
    console.log(userInfo);
    dispatch(logInOperation(userInfo));
  };

  return (
    <Box
      onSubmit={onFormSubmit}
      component="form"
      sx={{
        //'& .MuiFormControl-root': { m: 1, width: '25ch' },
        width: 400,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack sx={{ width: 400 }} direction={'column'} spacing={2}>
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="Email"
          name="email"
        />
        <FormControl
          fullWidth
          required
          // sx={{ m: 1, width: '25ch' }}
          variant="outlined"
        >
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
          Log In
        </Button>
      </Stack>
    </Box>
  );
};

export default LoginForm;
