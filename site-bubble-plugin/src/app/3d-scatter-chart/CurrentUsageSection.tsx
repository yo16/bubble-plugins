/*
CurrentUsageSection (3D-Scatter Chart)
*/

import { UsageSection } from "@/components/UsageSection";

export const CurrentUsageSection = () => {
    const subSections = [
        {
            title: "0. Prepare Data: Create 3D dataset",
            description: (
                <>
                    To display a 3D scatter chart, you need to define a data type and create actual data entries.
                </>
            ),
            stepDescriptions: [
                (<>
                    <strong>Define the data type:</strong><br />
                    Create a data type (e.g. <strong>XyzData</strong>) that contains 3D coordinate values.<br />
                    <strong>Fields(example):</strong><br />
                    <ul>
                        <li><strong>X:</strong> X-axis value (number)</li>
                        <li><strong>Y:</strong> Y-axis value (number)</li>
                        <li><strong>Z:</strong> Z-axis value (number)</li>
                    </ul>
                </>),
                (<>
                    <strong>Create data entries:</strong><br />
                    Add some data to your app database using App Data tab or workflows. Make sure the values are numeric and within a reasonable range to visualize effectively.
                </>)
            ],
            image: {
                path: "/images/3d-scatter-chart/screen0-1.png",
                alt: "Configuration",
                width: 363,
                height: 466,
            },
        },
        {
            title: "1. Configuration: Add the Plugin",
            stepDescriptions: [
                "Install the plugin. This plugin requires no special setup during installation—just install and start using it.",
            ],
            image: {
                path: "/images/3d-scatter-chart/screen1-1.png",
                alt: "Configuration",
                width: 786,
                height: 500,
            },
        },
        {
            title: "2. Usage: Configure in Design tab",
            stepDescriptions: [
                (<>From the <strong>Visual Elements</strong> section, find <strong>&quot;3DScatterChart&quot;</strong> and drag it onto the page.</>),
                (<>Set position and size (e.g. <strong>Width</strong>, <strong>Height</strong> as needed.</>),
                (<>
                    Configure the chart properties as follows:<br />
                    <div
                        style={{
                            fontSize: "0.85em",
                            marginLeft: "5px",
                        }}
                    >
                        <strong>Chart properties:</strong>
                        <table className="usage-table">
                            <thead>
                                <tr><th>Property</th><th>Description</th><th>Example</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Type of data</td>
                                    <td>The data type that contains the coordinate values.</td>
                                    <td><code>{`XyzData`}</code>, <code>{`3DPoints`}</code></td>
                                </tr>
                                <tr>
                                    <td>Data source</td>
                                    <td>The list of things to be plotted. Must match the selected type.</td>
                                    <td><code>{`Search for XyzData`}</code></td>
                                </tr>
                                <tr>
                                    <td>Value X</td>
                                    <td>Field in the type that represents the X-axis (number)</td>
                                    <td><code>{`x`}</code>, <code>{`p0`}</code></td>
                                </tr>
                                <tr>
                                    <td>Value Y</td>
                                    <td>Field in the type that represents the Y-axis (number)</td>
                                    <td><code>{`y`}</code>, <code>{`p1`}</code></td>
                                </tr>
                                <tr>
                                    <td>Value Z</td>
                                    <td>Field in the type that represents the Z-axis (number)</td>
                                    <td><code>{`z`}</code>, <code>{`p2`}</code></td>
                                </tr>
                                <tr>
                                    <td>Marker color</td>
                                    <td>Color used for the scatter points.</td>
                                    <td><code>{`#2C7EB8`}</code></td>
                                </tr>
                                <tr>
                                    <td>Marker size</td>
                                    <td>Size of the scatter points in pixels.</td>
                                    <td><code>{`4`}</code>, <code>{`0.7`}</code></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>),
            ],
            image: {
                path: "/images/3d-scatter-chart/screen2-1.png",
                alt: "Configuration",
                width: 348,
                height: 590,
            },
        },
    ];
    return (
        <UsageSection
            subSections={subSections}
        />
    );
}