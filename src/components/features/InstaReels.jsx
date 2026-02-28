import React from 'react'
import { useEffect } from "react";

const InstaReels = ({ url }) => {
    useEffect(() => {
        // Load script only once
        if (!window.instgrm) {
            const script = document.createElement("script");
            script.src = "https://www.instagram.com/embed.js";
            script.async = true;
            script.onload = () => {
                window.instgrm?.Embeds.process();
            };
            document.body.appendChild(script);
        } else {
            window.instgrm.Embeds.process();
        }
    }, []);
    return (
        <blockquote
            className="instagram-media"
            data-instgrm-permalink={url}
            // data-instgrm-version="14"
            style={{
                background: "#fff",
                border: 0,
                margin: "0 auto",
                width: "100%",                
            }}
        />
    )
}

export default InstaReels