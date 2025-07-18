/*
UsageSection is a component that displays a usage section with a title and a list of sub-sections.
Each sub-section contains a title, a list of step descriptions, and an image.
*/

import Link from "next/link";
import Image from "next/image";

import "./UsageSection.css";

type SubSection = {
    title: string;
    description?: React.ReactNode;
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

    return (
        <div
            className="description-section"
        >
            <h2>{titleStr}</h2>
            <div
                className="description-sub-section"
            >
                {subSections.map((subSection, index) => (
                    <SubSection
                        key={index}
                        subSection={subSection}
                    />
                ))}
            </div>
        </div>
    );
}

/*
SubSection１つの表示
*/
const SubSection = (
    { subSection }: { subSection: SubSection }
) => {
    const imageBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

    // SubSectionごとに画像のサイズが異なるため、都度計算する
    const imageMaxWidth = 500;
    const imageWidth = Math.min(imageMaxWidth, subSection.image.width);
    const imageHeight = imageWidth * subSection.image.height / subSection.image.width;

    return (
        <div>
            <h3>{subSection.title}</h3>
            {subSection.description && (
                <div
                    className="description-sub-section-description"
                >
                    {subSection.description}
                </div>
            )}
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
                        height: imageHeight,
                    }}
                >
                    <Link
                        href={subSection.image.path}
                    >
                        <Image
                            src={`${imageBasePath}${subSection.image.path}`}
                            alt={subSection.image.alt}
                            width={imageWidth}
                            height={imageHeight}
                            style={{
                                border: "1px solid #eee",
                            }}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}