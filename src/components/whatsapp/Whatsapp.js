import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";
import "./Whatsapp.css"
import WhatsappImage from "../../assets/image/whatsapplogo.png"
import Navbar from "../../components/header/Navbar";

export default function Whatsapp () {
    return (
    <>
    <Navbar/>
        <Stack direction="row" spacing={0}>
            <Box className="wcard">
               
            <img src={WhatsappImage} className="wlogo" />

            </Box>
            <Box className="wcards">
            <Typography className="wtitle">
            Please follow the steps to connect Whatsapp
            </Typography>
            <Typography className="wtitlename">
            Whatsapp does currently not allow linking existing groups.  We will create a new group for you automatically and link it to the other messengers.
            </Typography>
    </Box>
    <Link
                        to={`/telegram`}
                      >
    <button className="buttons">
                        Connect
                    </button>
           </Link>
        </Stack>
        </>
    );
}
