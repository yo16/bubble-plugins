/*
UsageSection is a component that displays a usage section with a title and a list of sub-sections.
Each sub-section contains a title, a list of step descriptions, and an image.
*/

import Link from "next/link";
import Image from "next/image";


type SubSection = {
    title: string;
    stepDescriptions: React.ReactNode[];
    image: {
        path: string;
        alt: string;
        width: number;
        height: number;
    };
}

interface UsageSectionProps {
    title?: string;
    subSections: SubSection[];
}

export const UsageSection = (
    { title, subSections }: UsageSectionProps
) => {
    const titleStr = title || "Plugin Configuration and Usage";
    const imageBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
    const imageWidth = 500;

    return (
        <div
            className="description-section"
        >
            <h2>{titleStr}</h2>
            <div
                className="description-sub-section"
            >
                {subSections.map((subSection, index) => (
                <div
                    key={index}
                >
                    <h3>{subSection.title}</h3>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "30px",
                        }}
                    >
                        <div>
                            <ol>
                                {subSection.stepDescriptions.map((description, index) => (
                                    <li key={index}>{description}</li>
                                ))}
                            </ol>
                        </div>
                        <div
                            style={{
                                width: imageWidth,
                                height: imageWidth * subSection.image.height / subSection.image.width,
                            }}
                        >
                            <Link
                                href={subSection.image.path}
                            >
                                <Image
                                    src={`${imageBasePath}${subSection.image.path}`}
                                    alt={subSection.image.alt}
                                    width={imageWidth}
                                    height={imageWidth * subSection.image.height / subSection.image.width}
                                    style={{
                                        border: "1px solid #eee",
                                    }}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

