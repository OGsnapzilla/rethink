import mystyle from "./Animation.module.css";
import myVideo from "../assets/Computer-animation_1.mp4";
import React from 'react';


export default function Animation () {

    return (
        <div className={mystyle.animation}>
            <video
                className={mystyle.video}
                src={myVideo}
                autoPlay
                loop
                muted
                playsInline
            />

        </div>
    );
}