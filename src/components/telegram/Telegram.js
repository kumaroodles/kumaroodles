import * as React from 'react';
import "./Telegram.css";
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import { Link } from "react-router-dom";
import { Typography,Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Navbar from "../../components/header/Navbar";

// function MyFormHelperText() {
//     const { focused } = useFormControl() || {};
  
//     const helperText = React.useMemo(() => {
//       if (focused) {
//         return 'This field is being focused';
//       }
  
//       return 'Helper text';
//     }, [focused]);
  
//     return <FormHelperText>{helperText}</FormHelperText>;
//   }
 {/* <Box className="tform"
      component="form"
    
      autoComplete="off"
    >
        <Typography className="email"> Email
            </Typography>
      <TextField id="outlined-basic" variant="outlined" placeholder="Enter Email" className="inputtext"/>
    
     <Button className="submitbtn">
Login
     </Button>
    </Box> */}
export default function Telegram () {
    return (
        <>
         <Navbar />
        <Stack direction="row" spacing={0}>
            <Box className="tcard">
                <Box className="tsquarebox">

                    <Typography className="tanimation">
                        Animation / Vector
                    </Typography>


                </Box>


            </Box>
            <Box className="tcards">
                <Typography className="tconnect">
                Please follow the steps to connect Telegram
                </Typography>
                <Typography className="tstep">
                    Step 1 :
                </Typography>
                <Typography className="tsteps">
                Please invite our bot “@TenshiCLbot” as a user to your
exisiting Telegram group.
                </Typography>
                <Typography className="tsteptwo">
                    Step 2 :
                </Typography>
                <Typography className="tstepstwo">
                Please invite our bot “@Tenshi [CLUP.life Bot]”
as a user to your existing Telegram Group.
                </Typography>
                <Typography className="tstepthree">
                    Step 3 :
                </Typography>
                <Typography className="tstepsthree">
                Please type in your Telegram group chat the command  “/id” and
paste the number here
                </Typography>
            </Box>
            <Box className="submitform"
                      

                        autoComplete="off"
                    >
                        <Typography className="email"> ID
                        </Typography>
                        <TextField id="outlined-basic" variant="outlined" placeholder="Enter Telegram ID" className="inputtext" />
                        <Link
                            to={`/login`}

                        >
                            <Button className="submitbtn">
                               Connect
                            </Button>
                        </Link>
                    </Box>
        </Stack>
        </>
    );
}
