"use client"

import React, {ImgHTMLAttributes} from "react";

interface ImageComponentProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    placeholder?: string;
    alt?: string | undefined;
    classes?: string;
}

export default function ImageComponent({ src, alt, classes, placeholder = '/assets/images/site-logo.svg', ...props }: ImageComponentProps) {
    const [imgSrc, setImgSrc] = React.useState(src);

    const handleError = () => {
        setImgSrc(placeholder);
    };

    return (
        <img src={imgSrc} onError={handleError} {...props}  alt={alt} className={classes}/>
    );
}