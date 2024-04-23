import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SocialIcon } from 'react-social-icons/component'

const LinkBox = ({ link, title }) => {
    return (
        <a href={link} target="_blank">
        <Box style={{
            width: 900,
            marginBottom: '20px',
            border: "2px solid white",
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
            display: 'flex', // Enable Flexbox
            alignItems: 'center',
            flexDirection: 'row',
            background: '#fff',
        }}>


            <div
                style={{
                display: 'flex', // Enable Flexbox
                alignItems: 'center',
                marginLeft: '20px',
                marginTop: '2px',
                marginBottom: '2px'

            }}>
                <SocialIcon target="_blank" url={link}/>
                <div style={{
                    marginLeft: '20px',
                    marginTop: '2px',
                    marginBottom: '2px'
                }}>
                    <Typography variant="p" component="div">{title}</Typography>
                </div>


            </div>


        </Box>
        </a>
    );
};

export default LinkBox;
