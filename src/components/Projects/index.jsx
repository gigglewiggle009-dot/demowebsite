"use client"
import React, { useState, useRef, useEffect } from 'react';
import VideoBg from "@/assets/svg/videoBackground.svg";

const videosData = [
    { id: 1, title: "Video Tittle 1", videoSource: "video.mp4", poster:"https://img.youtube.com/vi/qJ3fWRs8HMA/maxresdefault.jpg" },
    { id: 2, title: "Video Tittle 2", videoSource: "video.mp4",poster:"https://img.youtube.com/vi/qJ3fWRs8HMA/maxresdefault.jpg" },
    { id: 3, title: "Video Tittle 3", videoSource: "video.mp4",poster:"https://img.youtube.com/vi/qJ3fWRs8HMA/maxresdefault.jpg" },
    { id: 4, title: "Video Tittle 4", videoSource: "video.mp4",poster:"https://img.youtube.com/vi/qJ3fWRs8HMA/maxresdefault.jpg" }
];

export const Project = () => {
    const [playingVideo, setPlayingVideo] = useState(null);
    const videoRefs = useRef([]);
    const videoElements = useRef([]);

    useEffect(() => {
        videoRefs.current = Array(videosData.length).fill(null);
        videoElements.current = Array(videosData.length).fill(null);
    }, []);

    const handleVideoHover = (videoId) => {
        videoRefs.current.forEach((ref, index) => {
            if (ref && index!== videoId - 1) {
                ref.pause();
            }
        });
        if (videoRefs.current[videoId - 1]) {
            videoRefs.current[videoId - 1].play();
        }
        setPlayingVideo(videoId);
    };

    const handleVideoLeave = () => {
        if (videoRefs.current[playingVideo - 1]) {
            videoRefs.current[playingVideo - 1].pause();
        }
        setPlayingVideo(null);
    };

    const handleVideoEnd = () => {
        if (videoRefs.current[playingVideo - 1]) {
            videoRefs.current[playingVideo - 1].pause();
        }
        setPlayingVideo(null);
    };

    return (
        <div className='text-white bg-primaryBlack overflow-hidden'>
            <div className='w-11/12 mx-auto'>
                <h1 className=' font-extrabold text-6xl text-center text-primaryBlue mt-5'>Youtube Promotion</h1>
                <div>
                    <div className='grid grid-cols-2 bg-primaryBlack gap-10 mt-16'>
                        {videosData?.map((video, index) => (
                            <div
                                key={video.id}
                                className='bg-primaryBlack relative '
                                onMouseEnter={() => handleVideoHover(video.id)}
                                onMouseLeave={handleVideoLeave}
                            >
                                <VideoBg className="absolute top-0 left-0 w-fit h-[120%] z-2" />
                                <h1 className='text-center text-5xl mb-3'>{video.title}</h1>
                                <video
                                    className='object-cover w-fit h-fit rounded-[32px] border z-10 relative border-[#5D4D6D]'
                                    id={`video-tag-${video.id}`}
                                    poster={video.poster}
                                    // muted
                                    playsInline
                                    preload="auto"
                                    width={"100%"}
                                    ref={(el) => {
                                        videoRefs.current[index] = el;
                                        videoElements.current[index] = el;
                                    }}
                                    onEnded={handleVideoEnd}
                                >
                                    <source src={video.videoSource} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};