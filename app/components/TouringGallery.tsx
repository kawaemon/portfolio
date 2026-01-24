"use client";

import React, { FC, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import {
    isImageFitCover,
    isImageSlide,
    useLightboxProps,
    useLightboxState,
    type RenderSlideProps,
    type Slide,
} from "yet-another-react-lightbox";

import image1 from "../../public/touring/1.webp";
import image2 from "../../public/touring/2.webp";
import image3 from "../../public/touring/3.webp";
import image4 from "../../public/touring/4.webp";

export const TouringGallery: FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="underline cursor-pointer"
            >
                ツーリング
            </button>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[image1, image2, image3, image4]}
                plugins={[Slideshow]}
                slideshow={{ autoplay: true, delay: 10000 }}
                animation={{ swipe: 1000, fade: 250 }}
                render={{ slide: NextJsImageSlideRenderer }}
            />
        </>
    );
};

function isNextJsImage(
    slide: Slide,
): slide is Slide & { width: number; height: number } {
    return (
        isImageSlide(slide) &&
        typeof slide.width === "number" &&
        typeof slide.height === "number"
    );
}

function NextJsImageSlideRenderer({ slide, offset, rect }: RenderSlideProps) {
    const {
        on: { click },
        carousel: { imageFit },
    } = useLightboxProps();

    const { currentIndex } = useLightboxState();

    const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

    if (!isNextJsImage(slide)) return undefined;

    const width = !cover
        ? Math.round(
              Math.min(rect.width, (rect.height / slide.height) * slide.width),
          )
        : rect.width;

    const height = !cover
        ? Math.round(
              Math.min(rect.height, (rect.width / slide.width) * slide.height),
          )
        : rect.height;

    return (
        <div style={{ position: "relative", width, height }}>
            <Image
                fill
                alt=""
                src={slide.src}
                loading="eager"
                draggable={false}
                style={{
                    objectFit: cover ? "cover" : "contain",
                    cursor: click ? "pointer" : undefined,
                }}
                sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
                onClick={
                    offset === 0
                        ? () => click?.({ index: currentIndex })
                        : undefined
                }
            />
        </div>
    );
}
