import React, { useRef, useState } from "react";
import "./Video.css";

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <div className='video'>
            <video
                className='video__player'
                ref={videoRef}
                onClick={onVideoPress}
                src='
                https://v16-webapp.tiktok.com/bd7aaa671ce325bd28b5385aec5cab3f/62cae3b3/video/tos/useast2a/tos-useast2a-pve-0037-aiso/60842034b05a45818e6738dcdefa3dbe/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1556&bt=778&btag=80000&cs=0&ds=6&ft=eXd.6HjzMyq8ZzLkewe2NbMzel7Gb&mime_type=video_mp4&qs=0&rc=aWZnODg5PDk7ZTpmPGg5OEBpanc0Zjg6Zjx2ZTMzZjgzM0BfX14tLTQtXzUxXl82LzViYSNocW1kcjQwNi5gLS1kL2Nzcw%3D%3D&l=202207100832200102450250320248612F'
                loop></video>
            {/* <Video Footer */}
            {/* <Video Sidebar */}
        </div>
    );
}

export default Video;
