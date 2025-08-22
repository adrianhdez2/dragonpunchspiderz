import InstagramIcon from "@/icons/InstagramIcon.astro";
import TiktokIcon from "@/icons/TiktokIcon.astro";
import YoutubeIcon from "@/icons/YoutubeIcon.astro";
import FacebookIcon from "@/icons/FacebookIcon.astro";
import EmailIcon from "@/icons/EmailIcon.astro";
import WhatsappIcon from "@/icons/WhatsappIcon.astro";

export const redes = [
    {
        icon: YoutubeIcon,
        text: "@dragonpunchz",
        url: "https://www.youtube.com/@dragonpunchz",
    },
    {
        icon: TiktokIcon,
        text: "@dragonpunchspiderz",
        url: "https://www.tiktok.com/@dragonpunchspiderz",
    },
    {
        icon: InstagramIcon,
        text: "@seven_741",
        url: "https://www.instagram.com/seven_741",
    },
    {
        icon: FacebookIcon,
        text: "@TheSeven741",
        url: "https://www.facebook.com/TheSeven741",
    },
    {
        icon: EmailIcon,
        text: "E-mail",
        url: "mailto:coquie_741@hotmail.com"
    },
    {
        icon: WhatsappIcon,
        text: "WhatsApp",
        url: "https://api.whatsapp.com/send?phone=9371651880&text=Hola%20Jorge,%20me%20interesa%20tu%20trabajo"
    }
];


export const LINK_NAV = [
    {
        title: "Inicio",
        url: "/",
        color: "#10BF10"
    },
    {
        title: "Sobre mí",
        url: "#about",
        color: "#E57529"
    },
    {
        title: "Servicios",
        url: "#servicios",
        color: "#E545AC"
    },
]

export const VIDEOS = [
    {
        src: "render_xdevlab.mp4",
        poster: "render_xdevlab.webp",
    },
    {
        src: "edicion_emojis.mp4",
        poster: "edicion_emojis.webp",
    },
    {
        src: "estatuas.mp4",
        poster: "estatuas.webp",
    },
]