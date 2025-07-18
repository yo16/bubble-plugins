"use client";

import Link from "next/link";
import Image from "next/image";

import "./PageHeaderTitle.css";

interface PageHeaderTitleProps {
    title: string;
    image?: {
        path: string;
        alt: string;
    };
    descriptions?: {
        icon?: string;
        text: string;
        link?: string;
    }[];
}

export function PageHeaderTitle({ title, image, descriptions }: PageHeaderTitleProps) {
    const imageWidth = 52;
    const imageHeight = 52;

    return (
        <div className="top-header-section">
            <h1>
                {image && (
                <Image
                    src={image.path}
                    alt={image.alt}
                    width={imageWidth}
                    height={imageHeight}
                    className="plugin-icon"
                />)}
                {title}
            </h1>
            {descriptions && descriptions.map((description, index) => (
                <div className="header-text" key={index}>
                    {description.icon && <span className="icon">{description.icon}</span>}
                    {description.link ? (
                        <Link href={description.link} target="_blank">{description.text}</Link>
                    ) : (
                        <>{description.text}</>
                    )}
                </div>
            ))}
        </div>
    );
}