import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

interface Props {
    src: string;
    poster?: string;
    videoIndex?: number;
    totalVideos?: number;
}

export default function VideoPlayer({ src, poster, videoIndex = 0, totalVideos = 1 }: Props) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const playerRef = useRef<ReturnType<typeof videojs> | null>(null);

    // Función para generar descripción basada en el nombre del archivo
    const generateVideoDescription = (filename: string): string => {
        const baseName = filename.replace('.mp4', '').replace(/[-_]/g, ' ');
        return `Video de ${baseName} - Trabajo audiovisual profesional`;
    };

    const videoDescription = generateVideoDescription(src);
    const videoTitle = `Video ${videoIndex + 1} de ${totalVideos}: ${src.replace('.mp4', '').replace(/[-_]/g, ' ')}`;

    useEffect(() => {
        if (videoRef.current && !playerRef.current) {
            playerRef.current = videojs(videoRef.current, {
                controls: true,
                fluid: true,
                preload: "auto",
                poster: poster ? `/thumbnails/${poster}` : undefined,
                sources: [{ src: `/videos/${src}`, type: "video/mp4" }],
                // Configuraciones de accesibilidad
                playbackRates: [0.5, 1, 1.25, 1.5, 2],
                responsive: true,
                breakpoints: {
                    tiny: 300,
                    xsmall: 400,
                    small: 500,
                    medium: 600,
                    large: 700,
                    xlarge: 800,
                    huge: 900
                }
            });

            // Agregar atributos de accesibilidad después de la inicialización
            if (playerRef.current) {
                const videoElement = playerRef.current.el();
                if (videoElement) {
                    videoElement.setAttribute('aria-label', videoDescription);
                    videoElement.setAttribute('role', 'application');
                    videoElement.setAttribute('tabindex', '0');
                    
                    // Agregar título al video
                    const titleElement = document.createElement('span');
                    titleElement.className = 'sr-only';
                    titleElement.textContent = videoTitle;
                    videoElement.appendChild(titleElement);
                }
            }
        }

        return () => {
            playerRef.current?.dispose();
        };
    }, [src, poster, videoDescription, videoTitle]);

    return (
        <div 
            className="video-container"
            role="region"
            aria-labelledby={`video-title-${videoIndex}`}
            aria-describedby={`video-desc-${videoIndex}`}
        >
            <h3 
                id={`video-title-${videoIndex}`}
                className="sr-only"
            >
                {videoTitle}
            </h3>
            <p 
                id={`video-desc-${videoIndex}`}
                className="sr-only"
            >
                {videoDescription}
            </p>
            <video 
                ref={videoRef} 
                className="video-js vjs-big-play-centered"
                aria-label={videoDescription}
                role="application"
                tabIndex={0}
                preload="metadata"
                crossOrigin="anonymous"
            />
        </div>
    );
}
