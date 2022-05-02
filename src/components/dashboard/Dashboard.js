import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {Box} from '@mui/material';
import { Typography, Button } from '@mui/material';
import "./Dashboard.css";
import Phones from "../../assets/image/phones.png";
import Wht from "../../assets/image/wht.png";
import Signal from "../../assets/image/signal.png";
import Telegram from "../../assets/image/telegram.png";
import Love from "../../assets/image/ic_love.png";
import Whatsapps from "../../assets/image/Whatsapp.png";
import Telegrams from "../../assets/image/Telegram.png";
import Navbar from "../../components/header/Navbar";
import { Link } from "react-router-dom";
// import Navbar from '../header/Navbar';


const Item = styled(Paper)(({ theme }) => ({
    //   backgroundColor: theme.palette.mode === '#000000' ? '#ffffff' : '#fff',
    //   ...theme.typography.body2,
    // padding: theme.spacing(2),
    // textAlign: 'center',
    //   color: theme.palette.text.secondary,
}));

export default function Dashboard() {
    return (
        <>
        <Navbar />
        <div>
            {/* <Navbar /> */}
            <Stack direction="row" spacing={0}>
                <Box className="card">
                    <Typography className="title">
                        A platform to bring different messengers under one roof
                    </Typography>
                    <Box>

                        <img src={Phones} className="phscrns" />


                    </Box>


                </Box>
                <Box className="cards">
                    <Typography className="titles">
                        Select the messengers you want to connect
                    </Typography>
                    <Box>
                        <Box className="whats">
                            <img src={Wht} className="whatsapp" />
                            <Typography className="logoname">
                                Whatsapp
                            </Typography>
                        </Box>

                        <Box className="tele">
                            <img src={Telegram} className="telegram" />
                            <Typography className="logotele">
                                Telegram
                            </Typography>
                        </Box>
                        <Box className="sig">
                            <img src={Signal} className="signal" />
                            <Typography className="logosig">
                                Signal
                            </Typography>
                        </Box>

                        <img src={Love} className="ic_love" />
                        <img src={Whatsapps} className="whatsapps" />
                        <img src={Telegrams} className="Telegrams" />
                    </Box>
                    <Link
                        to={`/whatsapp`}
                      >
                    <button className="button">
                        Next
                    </button>
                    </Link>
                </Box>
            </Stack>
        </div>
        </>
    );
}
