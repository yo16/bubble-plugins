"use client";

/*
UsageSection

DescriptionSectionだとシンプルすぎて表現できないので、専用のUsageSectionを作成する。
ほんとは、継承するような感じで作りたかったけど、まぁいいや。
*/

import Image from "next/image";
import Link from "next/link";

import "./UsageSection.css";

const imageBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

// Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.
const ExternalLinkIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{
                width: "12px",
                height: "12px",
                marginLeft: "2px",
                marginRight: "2px",
            }}
        >
            <path
                fill="#66c"
                d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"
            />
        </svg>
    );
}


interface UsageSectionProps {
    title: string;
}
export const UsageSection = (
    { title }: UsageSectionProps
) => {
    const imageWidth = 500;
    const subSections = [
        {
            title: "1. Configuration: Add the Plugin",
            stepDescriptions: [
                "Install the plugin.",
                (<>Enter your Supabase project ID into <span className='strong'>{`"supabase_project_id"`}</span>.</>),
                (<>
                    Enter your Supabase anon key into <span className='strong'>{`"supabase_anon_key"`}</span>.
                    <br />
                    For more about the anon key, see <Link href='https://supabase.com/docs/guides/api/api-keys' target='_blank'>here<ExternalLinkIcon /></Link>.
                </>),
            ],
            image: {
                path: "/images/supabase-inserter/screen1-1.png",
                alt: "Configuration",
                width: 750,
                height: 478,
            },
        },
        {
            title: "2. Usage: Call from Workflows",
            stepDescriptions: [
                (<>Add an action (<strong>Data(Things) &gt; Insert Row</strong>).</>),
                (<>Enter the table name into <strong>table_name</strong>. Dynamic value is also supported, same as other fields.</>),
                (<>
                    Enter the record(s) to insert into the <strong>""record_json"</strong> field in JSON format.<br />
                    <div
                        style={{
                            fontSize: "0.85em",
                            marginLeft: "5px",
                        }}
                    >
                        <strong>Input format (JSON array):</strong><br />
                        <pre>
{`[
  {
    "columnA": valueA,
    "columnB": valueB
  }
]`}
                        </pre>
                        <strong>Fields:</strong>
                        <table className="usage-table">
                            <thead>
                                <tr><th>Field</th><th>Description</th><th>Example</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>any key</td><td>Column name in your Supabase table(string)</td><td><code>{`"name"`}</code>, <code>{`"age"`}</code></td></tr>
                                <tr><td>value</td><td>Value to insert into the specified column</td><td><code>{`"Alice"`}</code>, <code>{`30`}</code></td></tr>
                            </tbody>
                        </table>
                        <div
                            className="note-list"
                        >
                            Note:
                            <ul>
                                <li>You can specify any number of columns.</li>
                                <li>Each object represents one row.</li>
                                <li>Multiple rows can be inserted as an array of objects.</li>
                            </ul>
                        </div>
                        <strong>Example:</strong>
                        <pre>
{`[
  { "name": "Alice", "age": 30 },
  { "name": "Bob", "age": 25 }
]`}
                        </pre>
                    </div>
                </>),
                (<>Choose whether to escape double quotes (<code>\{'"'}</code>) in the returned value.</>),
                (<>
                    The plugin returns a list of strings. Each string is a JSON object (1 record from Supabase).<br />
                    <div
                        style={{
                            fontSize: "0.85em",
                            marginLeft: "5px",
                        }}
                    >
                        <strong>Format (List of strings):</strong><br />
                        <pre>
{`[
    "{\\"columnA\\": valueA, \\"columnB\\": valueB, ... }"
]`}
                        </pre>
                        <strong>Example:</strong><br />
                        <pre>
{`[
    "{\\"name\\":\\"Alice\\", \\"age\\": 30}",
    "{\\"name\\":\\"Bob\\", \\"age\\": 25}"
]`}
                        </pre>
                    </div>
                </>),
            ],
            image: {
                path: "/images/supabase-inserter/screen2-1.png",
                alt: "Workflows",
                width: 700,
                height: 289,
            },
        }
    ];

    return (
        <div
            className="description-section"
        >
            <h2>{title}</h2>
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

