import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

interface Props {
    src: string;
    poster?: string;
}

export default function VideoPlayer({ src, poster }: Props) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const playerRef = useRef<ReturnType<typeof videojs> | null>(null);

    useEffect(() => {
        if (videoRef.current && !playerRef.current) {
            playerRef.current = videojs(videoRef.current, {
                controls: true,
                fluid: true,
                preload: "auto",
                poster: poster ? `/thumbnails/${poster}` : undefined,
                sources: [{ src: `/videos/${src}`, type: "video/mp4" }],
            });
        }

        return () => {
            playerRef.current?.dispose();
        };
    }, [src, poster]);

    return (
        <video ref={videoRef} className="video-js vjs-big-play-centered" />
    );
}
