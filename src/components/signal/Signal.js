import * as React from 'react';
import "./Signal.css";
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import Navbar from "../../components/header/Navbar";


export default function Signal() {
    return (
        <>
        <Navbar />
        <Stack direction="row" spacing={0}>
            <Box className="card">
                <Box className="squarebox">

                    <Typography className="animation">
                        Animation / Vector
                    </Typography>


                </Box>


            </Box>
            <Box className="cards">
                <Typography className="connect">
                    Please follow the steps to connect Signal
                </Typography>
                <Typography className="step">
                    Step 1 :
                </Typography>
                <Typography className="steps">
                    Please invite our bot “@Tenshi [CLUP.life Bot]”
                    as a user to your exisiting Signal group.
                </Typography>
                <Typography className="steptwo">
                    Step 2 :
                </Typography>
                <Typography className="stepstwo">
                    Please make our bot “@Tenshi [CLUP.life Bot]”
                    an administrator in your Signal group.
                </Typography>
                <Typography className="stepthree">
                    Step 3 :
                </Typography>
                <Typography className="stepsthree">
                Please enable “Group Link” in the settings of your group.
                </Typography>
            </Box>
            <button className="button">
                        Next
                    </button>
        </Stack>
        </>
    );
}
