"use client";

/*
CurrentUsageSection
*/

import Link from "next/link";

import { UsageSection } from "@/components/UsageSection";
import { ExternalLinkIcon } from "@/components/ExternalLinkIcon";

import "./CurrentUsageSection.css";



export const CurrentUsageSection = () => {
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
                    Enter the record(s) to insert into the <strong>record_json</strong> field in JSON format.<br />
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
        <UsageSection
            subSections={subSections}
        />
    );
}

