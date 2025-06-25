/*
DescriptionSection

*/

import ReactMarkdown from "react-markdown";

interface DescriptionSectionProps {
    title: string;
    descriptions: string[];
}

export const DescriptionSection = (
    { title, descriptions }: DescriptionSectionProps
) => {
    return (
        <div
            className="description-section"
        >
            <h2>{title}</h2>
            <ul>
                {descriptions.map((description, index) => (
                    <li key={index}>
                        <ReactMarkdown>{description}</ReactMarkdown>
                    </li>
                ))}
            </ul>
        </div>
    );
}
