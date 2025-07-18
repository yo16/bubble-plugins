"use client";

/*
CurrentUsageSection

UsageSectionに渡すパラメータを定義し、UsageSectionを呼び出す。
*/

import Link from "next/link";

import { ExternalLinkIcon } from "@/components/ExternalLinkIcon";
import { UsageSection } from "@/components/UsageSection";


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
                path: "/images/supabase-selector/screen1-2.png",
                alt: "Configuration",
                width: 750,
                height: 478,
            },
        },
        {
            title: "2. Usage: Call from Workflows",
            stepDescriptions: [
                (<>Add an action (<strong>Data(Things) &gt; Select Row</strong>).</>),
                (<>Enter the table name into <strong>table_name</strong>. Dynamic value is also supported, same as other fields.</>),
                (<>Enter column names into <strong>columns</strong>. Multiple columns can be set, separated by commas.</>),
                (<>
                    Enter extraction conditions into <strong>filters_json</strong>.<br />
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
        "key": "column_name",
        "op": "eq | gt | lt",
        "value": value
    }
]`}
                        </pre>
                        <strong>Fields:</strong>
                        <table className="usage-table">
                            <thead>
                                <tr><th>Field</th><th>Description</th><th>Example</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><code>key</code></td><td>Column name (string)</td><td><code>{`"age"`}</code></td></tr>
                                <tr><td><code>op</code></td><td>Operator</td><td><code>{`"eq"`}</code>, <code>{`"gt"`}</code>, <code>{`"lt"`}</code></td></tr>
                                <tr><td><code>value</code></td><td>Value to compare</td><td><code>{`"Alice"`}</code>, <code>{`30`}</code></td></tr>
                            </tbody>
                        </table>
                        <strong>Example:</strong>
                        <pre>
{`[
    { "key": "age", "op": "gt", "value": 30 },
    { "key": "name", "op": "eq", "value": "Alice" }
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
    "{ \\"field1\\": value1, \\"field2\\": value2, ... }",
    "{ \\"field1\\": value1, \\"field2\\": value2, ... }"
]`}
                        </pre>
                        <strong>Example:</strong><br />
                        <pre>
{`[
    "{\\"id\\":5,\\"column1\\":\\"test column1's text-105\\", \\"column2\\": 105}",
    "{\\"id\\":6,\\"column1\\":\\"test column1's text-106\\", \\"column2\\": 106}"
]`}
                        </pre>
                    </div>
                </>),
            ],
            image: {
                path: "/images/supabase-selector/screen2-1.png",
                alt: "Workflows",
                width: 704,
                height: 408,
            },
        }
    ];

    return (
        <UsageSection
            subSections={subSections}
        />
    );
}

