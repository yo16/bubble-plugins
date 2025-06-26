/*
DescriptionSection

*/

import ReactMarkdown from "react-markdown";

import "./DescriptionSection.css";

interface DescriptionSectionProps {
    title: string;
    titleId?: string;
    headerText?: string;
    descriptions?: string[];
    footerText?: string;
}

export const DescriptionSection = (
    { title, titleId, headerText, descriptions, footerText }: DescriptionSectionProps
) => {
    return (
        <div
            className="description-section"
        >
            <h2 id={titleId}>{title}</h2>
            {headerText && <div className="header-text"><ReactMarkdown>{headerText}</ReactMarkdown></div>}
            {descriptions &&
                <ul>
                    {descriptions.map((description, index) => (
                    <li key={index}>
                        <ReactMarkdown>{description}</ReactMarkdown>
                    </li>
                    ))}
                </ul>
            }
            {footerText && <div className="footer-text"><ReactMarkdown>{footerText}</ReactMarkdown></div>}
        </div>
    );
}
