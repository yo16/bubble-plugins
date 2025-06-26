"use client";

import Link from "next/link";
import Image from "next/image";

import "./PageHeaderTitle.css";

interface PageHeaderTitleProps {
    title: string;
    image?: {
        path: string;
        alt: string;
        width: number;
        height: number;
    };
    description: {
        text: string;
        link?: string;
    };
}

export default function PageHeaderTitle({ title, image, description }: PageHeaderTitleProps) {
    return (
        <div className="top-header-section">
            <h1>
                {image && (
                <Image
                    src={image.path}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="plugin-icon"
                />)}
                {title}
            </h1>
            <div>
            {description.link && (
                <Link href={description.link}>{description.text}</Link>
            )}
            {!description.link && (
                <div className="header-text">{description.text}</div>
            )}
            </div>
        </div>
    );
}