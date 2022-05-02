import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import { Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import "./Login.css"
import LoginImage from "../../assets/image/loginlogo.png"
import Navbar from "../../components/header/Navbar";

export default function Login() {
    return (
        <>
            <Navbar />
            <Stack direction="row" spacing={0}>
                <Box className="lcard">

                    <img src={LoginImage} className="llogo" />

                </Box>
                <Box className="lcards">
                    <Typography className="laccount">Login to your account</Typography>
                    <Typography className="register">Please register or log in to receive the invitation links via email</Typography>
                    <Box className="lform"
                        component="form"

                        autoComplete="off"
                    >
                        <Typography className="email"> Email
                        </Typography>
                        <TextField id="outlined-basic" variant="outlined" placeholder="Enter Email" className="inputtext" />
                        <Typography className="password"> Password
                        </Typography>
                        <TextField id="outlined-basic" variant="outlined" type="password" placeholder="Enter Password" className="inputtext" />
                        <Link
                            to={`/logout`}

                        >
                            <Button className="submitbtn">
                                Login
                            </Button>
                        </Link>
                    </Box>
                </Box>


            </Stack>
        </>
    );
}
