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
    descriptions?: {
        icon?: string;
        text: string;
        link?: string;
    }[];
}

export function PageHeaderTitle({ title, image, descriptions }: PageHeaderTitleProps) {
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