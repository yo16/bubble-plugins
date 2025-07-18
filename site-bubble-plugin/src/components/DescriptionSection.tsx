/*
DescriptionSection

*/

import ReactMarkdown from "react-markdown";
import Image from "next/image";

import "./DescriptionSection.css";

interface DescriptionSectionProps {
    title: string;
    titleId?: string;
    headerText?: string;
    descriptions?: string[];
    image?: {
        path: string;
        alt: string;
        width: number;
        height: number;
    };
    footerText?: string;
}

export const DescriptionSection = (
    { title, titleId, headerText, descriptions, image, footerText }: DescriptionSectionProps
) => {
    return (
        <div
            className="description-section"
        >
            <h2 id={titleId}>{title}</h2>
            {headerText && <div className="header-text"><ReactMarkdown>{headerText}</ReactMarkdown></div>}
            
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "30px",
                }}
            >
                {descriptions &&
                    <div>
                        <ul>
                            {descriptions.map((description, index) => (
                            <li key={index}>
                                <ReactMarkdown>{description}</ReactMarkdown>
                            </li>
                            ))}
                        </ul>
                    </div>
                }
                {image && (
                    <div>
                        <Image
                            src={image.path}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                        />
                    </div>
                )}
            </div>
            {footerText && <div className="footer-text"><ReactMarkdown>{footerText}</ReactMarkdown></div>}
        </div>
    );
}
