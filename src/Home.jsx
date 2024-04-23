import React from 'react';

import './Home.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SocialIcon } from 'react-social-icons/component'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';

import CardMedia from '@mui/material/CardMedia';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Avatar from '@mui/material/Avatar';

import 'react-social-icons/youtube'
import 'react-social-icons/twitch'
import 'react-social-icons/discord'
import 'react-social-icons/twitter'
import 'react-social-icons/tiktok'
import LinkBox from './LinkBox';

import { CiLocationOn } from "react-icons/ci";

// Define a functional component



const card = (
    <React.Fragment>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px', }}>
            <Avatar alt="" src="https://yt3.googleusercontent.com/WwywHh8zQOXgJaSIvGSS0FLLcAvz5fRb8xqYaFIxtTpdcdPmYy7qv733dPlWM-FCrJuvBApDtw=s900-c-k-c0x00ffffff-no-rj" />
        </div>

        <CardActions style={{ justifyContent: 'center' }}>

            <SocialIcon target="_blank" url="https://www.twitch.tv/yozu" />
            <SocialIcon target="_blank" url="https://www.youtube.com/@Yozu/videos" />
            <SocialIcon target="_blank" url="https://discord.com/invite/yozu" />
            <SocialIcon target="_blank" url="https://twitter.com/yozulol" />
            <SocialIcon target="_blank" url="https://www.tiktok.com/@yozulol" />
        </CardActions>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CiLocationOn />
                <div style={{ marginLeft: '5px' }}>
                    <Typography variant="h6" component="div">
                        yozuwastaken@gmail.com
                    </Typography>
                </div>

            </div>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">

            </Typography>
            <Typography variant="body2">


                Yozu's official accounts. Rank 1 Lux Challenger. Future Vtuber.
                <br />

            </Typography>
        </CardContent>

    </React.Fragment>
);

const Home = () => {
    return (
        <div className='home-container'>

            <Box sx={{
                maxWidth: 900, marginTop: '50px',
                marginBottom: '20px',
                borderRadius: '10px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)'
            }}>

                <CardMedia
                    component="img"

                    height="200"
                    image='https://yt3.googleusercontent.com/-WOFwm2Bu56um9S8to8EsmCfS2tjpNeXzoCSoat-SK5lDuxl7HPMu7pO9BLKFGUHmQtfhUQ6BRk=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj'
                />
                <div className='topBar'>
                    <a href="mailto:Yozuwastaken@gmail.com">
                        <button class="button-30" role="button">Mail</button>

                    </a>
                    <a href="https://www.paypal.com/paypalme/YozuLoL" target="_blank">
                        <button class="button-30" role="button">Donate</button>
                    </a>



                </div>
                <Card variant="outlined">{card}</Card>
            </Box>
            <LinkBox link="https://www.youtube.com/@Yozu/videos" title="Main Channel" />
            <LinkBox link="https://www.youtube.com/@YozuLux" title="Yozu Lux" />
            <LinkBox link="https://discord.com/channels/345170363434663947/846442427400454144" title= "Stream Schedule"/>

            
 
        </div>

    );
};

// Export the component as the default export
export default Home;