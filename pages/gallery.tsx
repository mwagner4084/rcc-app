// pages/gallery.tsx
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "../styles/Gallery.module.css";

const slideImages = [
    {
        url: "/img/new-tile.png",
        alt: "new tile",
        caption: "New Tile Installation"
    },
    {
        url: "/img/range-hood.png",
        alt: "range hood",
        caption: "Range Hood Installation"
    },
    {
        url: "/img/shower-before.png",
        alt: "shower before",
        caption: "Shower Remodel - Before"
    },
    {
        url: "/img/shower-after.png",
        alt: "shower after",
        caption: "Shower Remodel - After"
    },
    {
        url: "/img/patio.png",
        alt: "patio",
        caption: "Custom Gazebo Build"
    },
    {
        url: "/img/steps.png",
        alt: "steps",
        caption: "Outdoor Steps Build"
    },
    {
        url: "/img/kitchen-before.png",
        alt: "kitchen before",
        caption: "Kitchen Remodel - Before"

    },
    {
        url: "/img/kitchen-after.png",
        alt: "kitchen after",
        caption: "Kitchen Remodel - After"
    }
];


const Gallery = () => {
    return (
        <div className={styles.body}>
            <div className={styles.slideContainer}>
                <Slide>
                    {slideImages.map((slide, index) => (
                        <div className={styles.eachSlide} key={index}>
                            <div>
                                <img src={slide.url} alt={slide.alt} />
                                <p className={styles.imageDescription}>{slide.caption}</p>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    );
}

export default Gallery;