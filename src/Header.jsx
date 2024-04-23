import React, { useState } from 'react';
import Typewriter from "typewriter-effect";
import './Header.css'
import Avatar from '@mui/material/Avatar';

const Header = () => {        
    return (
      <div className="w-screen h-screen text-white" style={{
        width:"100vw",
        height:"100vh",
        background: "red",
        flex: "0 0 auto",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(90deg, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)'
}}>
        
      
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        
          <div class="text-center lg:w-5/12 w-full">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
            <Avatar style= {{marginBottom: '5px'}}alt="" src="https://yt3.googleusercontent.com/ytc/AIdro_nUKuIpI1txRBNo_ZAo3Zd2UuMRABLY9j077yG90CoxVic=s900-c-k-c0x00ffffff-no-rj" />
        </div>
            <div className = 'typewriter'>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome!")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("My name is Yozu.")
                        .start();
                }}
            />
            </div>


            <p className="text-2xl mb-8">
            Content Creator | Partnered with League of Legends, Twitch and Discord
            </p>

          </div>
        </div>
      </div >

    )
}

export default Header;