import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SocialIcon } from 'react-social-icons/component'
import { FaArrowRight } from "react-icons/fa";

const LinkBox = ({ link, title }) => {
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
        </Box>
    );
    return (
        <a href={link} target="_blank">
        <Box style={{
            maxWidth: '900px',
            marginBottom: '20px',
            border: "2px solid white",
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
            display: 'flex', 
            alignItems: 'flex-start',
            flexDirection: 'row',
            background: '#fff',
        }}>

            <Box
                style={{
                display: 'flex', 
                alignItems: 'center',
                marginLeft: '20px',
                marginTop: '5px',
                marginBottom: '5px',
                

            }}>
                <SocialIcon target="_blank" url={link}/>
                <div style={{
                        marginLeft: '15px',
                        marginTop: '2px',
                        marginBottom: '2px',
                        width: '200px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start'
                }}>
  
                    <Typography variant="h6" component="div">{title}</Typography>
                </div>
                <div >
                    <button class="button-30" role="button">
                        <FaArrowRight />
                    </button>
                </div>
                


            </Box>


        </Box>
        </a>
    );
};

export default LinkBox;
